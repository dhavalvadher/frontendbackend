const Products = require("../model/products.model");
const uploadFile = require("../utils/cloudinary");


const listProducts = async (req, res) => {
    try {
        const products = await Products.find();

        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Products not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}

const getProduct = async (req, res) => {
    try {
        console.log(req.params.product_id);
        const product = await Products.findById(req.params.product_id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};

const addProducts = async (req, res) => {



    try {
        console.log(req.body);
        console.log(req.file);

        const fileRes = await uploadFile(req.file.path, "Product");
        console.log(fileRes);


        // const { subcategory_id, ...productData } = req.body;


        const product = await Products.create({
            ...req.body,
            product_image: {
                public_id: fileRes.public_id,
                url: fileRes.url
            },
        });

        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not created"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}

const updateProducts = async (req, res) => {
    try {

        const product = await Products.findByIdAndUpdate(req.params.product_id, req.body, { new: true }, { runValidators: true });
        console.log(product);

        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not updated"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}

const deleteProducts = async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.product_id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}

module.exports = {
    listProducts,
    addProducts,
    updateProducts,
    deleteProducts,
    getProduct
}