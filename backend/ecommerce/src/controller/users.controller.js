// const Users = require('../model/users.model');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const craeteToken = async (id) => {
//     try {
//         const user = await Users.findOne(id)

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "user not fond"
//             })
//         }

//         console.log(user);

//         const accessToken = await jwt.sign({
//             _id: user._id,
//             role: user.role,
//             expiresIn: '1 hours'
//         },
//             'fshjkjhjkas4578ghks',
//             { expiresIn: '1 hours' }
//         )

//         const refreshToken = await jwt.sign({
//             _id: id,
//         },
//             'dhaval',
//             { expiresIn: '2 days' }
//         )

//         user.refreshToken = refreshToken;

//         await user.save({ validateBeforeSave: false })

//         return { accessToken, refreshToken }

//     } catch (error) {
//         console.log(error.message);
//     }
// }


// const ragister = async (req, res) => {
//     try {

//         const { email, password } = req.body

//         const user = await Users.findOne({
//             $or: [{ email }]
//         })

//         if (user) {
//             return res.status(409).json({
//                 success: false,
//                 message: "user alredy exist"
//             })
//         }
//         const hashPassword = await bcrypt.hash(password, 10)

//         const userData = await Users.create({ ...req.body, password: hashPassword })

//         if (!userData) {
//             return res.status(500).json({
//                 success: false,
//                 message: "create hash password error"
//             })
//         }

//         const userDataF = await Users.findById({ _id: userData._id }).select("-password")

//         if (!userDataF) {
//             return res.status(500).json({
//                 success: false,
//                 message: "internal server error" + error.message
//             })
//         }

//         // const { accessToken, refreshToken } = await craeteToken(userData._id);

//         res.status(201).json({
//             success: true,
//             message: "ragister succesfully",
//             data: userDataF,
//             // tokens: { accessToken, refreshToken }
//         })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "internal server error" + error.message
//         })
//     }
// }

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await Users.findOne({
//             $or: [{ email }]
//         })

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "user are not exist."
//             })
//         }

//         const variPassword = await bcrypt.compare(password, user.password)

//         if (!variPassword) {
//             return res.status(400).json({
//                 success: false,
//                 message: "invalid Credistional"
//             })
//         }

//         const { accessToken, refreshToken } = await craeteToken(user._id)

//         console.log({ accessToken, refreshToken });

//         // res.status(200).json({
//         //     success: true,
//         //     message: "login successful",
//         //     tokens: { accessToken, refreshToken }
//         // });


//         const userDataF = await Users.findById({ _id: user._id }).select("-password -refreshToken")

//         const option = {
//             httpOnly: true,
//             secure: true
//         }

//         res.status(200)
//             .cookie("accessToken", accessToken, option)
//             .cookie("refreshToken", refreshToken, option)
//             .json({
//                 success: true,
//                 message: "Login Sucessfully",
//                 data: {
//                     ...userDataF.toObject(),
//                     accessToken
//                 }
//             })


//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "internal server error" + error.message
//         })
//     }
// }

// const generateNewTokens = async (req, res) => {
//     try {
//         console.log(req.cookies.refreshToken);
        
//         const VerifyToken = await jwt.verify(req.cookies.refreshToken,  'dhaval');
//         console.log(VerifyToken);

//         if (!VerifyToken) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid Token"
//             })
//         }

//         const user = await Users.findById(VerifyToken._id);
//         console.log(user);

//         if (!user) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User Not Define"
//             })
//         }

//         if (req.cookies.refreshToken != user.toObject().refreshToken) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid Token"
//             })
//         }

//         const { accessToken, refreshToken } = await craeteToken(user._id)

//         console.log({ accessToken, refreshToken });

//         const option = {
//             httpOnly: true,
//             secure: true
//         }

//         res.status(200)
//             .cookie("accessToken", accessToken, option)
//             .cookie("refreshToken", refreshToken, option)
//             .json({
//                 success: true,
//                 message: "Refresh Token Sucessfully",
//                 data: {
//                     accessToken
//                 }
//             })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "internal server error" + error.message
//         })
//     }
// }

// module.exports = {
//     ragister,
//     login,
//     generateNewTokens
// }



const Users = require("../model/users.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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


        const accrestoken = jwt.sign({
            _id: user._id,
            role: user.role
        }, "abc123",
            { expiresIn: 60 * 60 });

        console.log("accrestoken::::::::", accrestoken);

        const refretoken = await jwt.sign({
            _id: id
        },
            "123abc",
            { expiresIn: "2d" });

        console.log("refretokenrefretoken", refretoken);

        user.refretoken = refretoken

        await user.save({ validateBeforeSave: false });

        return { accrestoken, refretoken }
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

        const { accrestoken, refretoken } = await generateAuthToken(user._id);
        console.log("accrestoken!!!!!!!!!!!1", accrestoken);
        console.log("refretoken!!!!!!!!!!!!", refretoken);

        const newdataf = await Users.findById({ _id: user._id }).select("-password -refretoken");

        const option = {
            httpOnly: true,
            secure: true,
        }


        res.status(200)
            .cookie("accrestoken", accrestoken, option)
            .cookie("refretoken", refretoken, option)
            .json({
                success: true,
                message: "login successfully",
                data: { ...newdataf.toObject(), accrestoken }
            })



    } catch (error) {
        console.log(error);
    }
}

const getnewtoken = async (req, res) => {
    try {
        
        const cheackToken = await jwt.verify(req.cookies.refretoken, "123abc")

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

        const { accrestoken, refretoken } = await generateAuthToken(user._id);

        console.log({ "accessToken, refreshtoken": accrestoken, refretoken });


        const option = {
            httpOnly: true,
            secure: true,
        }


        res.status(200)
            .cookie("accrestoken", accrestoken, option)
            .cookie("refretoken", refretoken, option)
            .json({
                success: true,
                message: "ganret new token",
                data: { accrestoken }
            })

    } catch (error) {
        console.log(error);
    }
}

module.exports = { userpost, login, getnewtoken }
