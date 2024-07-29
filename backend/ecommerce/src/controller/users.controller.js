const Users = require("../model/users.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userpost = async (req, res) => {
    try {
        console.log(req.body);

        const { email, password } = req.body;

        const user = await Users.findOne(
            { $or: [{ email }] }
        );

        console.log("user", user);

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashpassoword = await bcrypt.hash(password, 10);

        console.log("hashpassoword", hashpassoword);

        if (!hashpassoword) {
            return res.status(409).json({
                success: false,
                message: "password is valid while hasing error.",
            });
        }

        const newdata = await Users.create({ ...req.body, password: hashpassoword })

        console.log("newdata", newdata);

        if (!newdata) {
            return res.status(500).json({
                success: false,
                message: "internal server erorr.",
            });
        }

        const newdataf = await Users.findById({ _id: newdata._id }).select("-password");

        console.log("newdataf", newdataf);

        if (!newdataf) {
            return res.status(500).json({
                success: false,
                message: "internal server erorr.",
            });
        }
        res.status(201).json({
            success: true,
            message: "user created successfully.",
            data: newdataf
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

const generateAuthToken = async (id) => {
    console.log("generateAuthToken", id);
    try {

        const user = await Users.findById(id);


        const accessToken = jwt.sign({
            _id: user._id,
            role: user.role,
        }, "abc123",
            { expiresIn: "1 hours" });

        console.log("accessToken", accessToken);

        const refreshToken = await jwt.sign({
            _id: id
        },
            "123abc",
            { expiresIn: "2d" });

        console.log("refreshTokenrefreshToken", refreshToken);

        user.refreshToken = refreshToken

        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken }
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        const user = await Users.findOne({ $or: [{ email }] });

        console.log("userlogin", user);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        const ValidtUser = await bcrypt.compare(password, user.password);
        console.log("userValidtUser", ValidtUser);

        if (!ValidtUser) {
            return res.status(400).json({
                success: false,
                message: "password not match"
            })
        }

        const { accessToken, refreshToken } = await generateAuthToken(user._id);
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);

        const newdataf = await Users.findById({ _id: user._id }).select("-password -refreshToken");

        const option = {
            httpOnly: true,
            secure: true,
        }


        res.status(200)
            .cookie("accessToken", accessToken, option)
            .cookie("refreshToken", refreshToken, option)
            .json({
                success: true,
                message: "login successfully",
                data: { ...newdataf.toObject(), accessToken }
            })



    } catch (error) {
        console.log(error);
    }
}

const getnewtoken = async (req, res) => {
    try {

        const cheackToken = await jwt.verify(req.cookies.refreshToken, "123abc")

        console.log("cheackToken", cheackToken);

        if (!cheackToken) {
            return res.status(400).json({
                success: false,
                message: "Token Expired"
            })
        }

        const user = await Users.findById(cheackToken._id)

        console.log("userssssssssssssssss", user);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Token"
            })
        }

        const { accessToken, refreshToken } = await generateAuthToken(user._id);

        console.log({ "accessToken, refreshtoken": accessToken, refreshToken });


        const option = {
            httpOnly: true,
            secure: true,
        }


        res.status(200)
            .cookie("accessToken", accessToken, option)
            .cookie("refreshToken", refreshToken, option)
            .json({
                success: true,
                message: "ganret new token",
                data: { accessToken }
            })

    } catch (error) {
        console.log(error);
    }
}

const logout = async (req, res) => {
    try {
        console.log(req.body._id);
        const user = await Users.findByIdAndUpdate(
            req.body._id,
            {
                $unset:
                    { refreshToken: 1 }
            },
            {
                new: true
            }
        );

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not logged out"
            })
        }
        res.status(200).json({
            success: true,
            message: "user logged out"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error:" + error.message
        })
    }
}

module.exports = { userpost, login, getnewtoken, logout }