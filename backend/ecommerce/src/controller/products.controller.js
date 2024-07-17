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
        const products = await Products.findById(req.params.product_id);

        if (!products) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: products
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


        const products = await Products.create({
            ...req.body,
            product_image: {
                public_id: fileRes.public_id,
                url: fileRes.url
            },
        });

        if (!products) {
            return res.status(400).json({
                success: false,
                message: "Product not created"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}

const updateProducts = async (req, res) => {

    // console.log("abcd", req.params.product_id, req.body, req.file);



    if (req.file) {
        console.log("New Image");

        const fileRes = await uploadFile(req.file.path, "Products")

        const product = await Products.findByIdAndUpdate(req.params.product_id,
            {
                ...req.body,
                product_image: {
                    public_id: fileRes.public_id,
                    url: fileRes.url
                }
            }
        );

        console.log(req.params);
        if (!product) {
            res.status(400).json({
                success: false,
                message: "Product not Update"
            })
        }


        res.status(200).json({
            success: true,
            message: "Product Update sucessfully",
            data: product
        })


    } else {
        console.log("Old image");

        const product = await Products.findByIdAndUpdate(req.params.product_id, req.body, { new: true, runValidators: true });


        console.log(req.params);
        if (!product) {
            res.status(400).json({
                success: false,
                message: "Product not Update"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product Update sucessfully",
            data: product
        })
    }


    // try {

    //     const products = await Products.findByIdAndUpdate(req.params.product_id, req.body, { new: true }, { runValidators: true });
    //     console.log(products);

    //     if (!products) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Product not updated"
    //         });
    //     }

    //     res.status(200).json({
    //         success: true,
    //         message: "Product updated successfully",
    //         data: products
    //     });

    // } catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: "Internal server error: " + error.message
    //     });
    // }
}

const deleteProducts = async (req, res) => {
    try {
        const products = await Products.findByIdAndDelete(req.params.product_id);

        if (!products) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}



const productsByCategory = async (req, res) => {

    const products = await Products.aggregate([

        {
            $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $unwind: {
                path: "$category"
            }
        },
        {
            $project: {
                "name": 1,
                "product_img.url": 1,
                "category": 1
            }
        }

    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const productsBySubcategory = async (req, res) => {

    const products = await Products.aggregate([

        {
            $lookup: {
                from: "subcategories",
                localField: "subcategory_id",
                foreignField: "_id",
                as: "subcategory"
            }
        },
        {
            $unwind: {
                path: "$subcategory"
            }
        },
        {
            $project: {
                "name": 1,
                "product_img.url": 1,
                "subcategory": 1
            }
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const topRatating = async (req, res) => {

    const products = await Products.aggregate([
        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "product_id",
                as: "review"
            }
        },
        {
            $unwind: {
                path: "$review"
            }
        },
        {
            $group: {
                _id: "$_id",
                "product_name": { $first: "$name" },
                "Totalrating": {
                    $sum: "$review.rating"
                }
            }
        },
        {
            $sort: {
                "Totalrating": -1
            }
        },
        {
            $limit: 1
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const newArrivals = async (req, res) => {

    const products = await Products.aggregate([
        {
            $sort: {
                "createdAt": -1
            }
        },
        {
            $limit: 3
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const countCategories = async (req, res) => {

    const products = await Products.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $unwind: {
                path: "$category"
            }
        },
        {
            $group: {
                _id: "$category._id",
                "category_name": { $first: "$category.name" },
                "product_name": { $push: "$name" },
                "TotalProduct": {
                    $sum: 1
                }
            }
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

module.exports = {
    listProducts,
    addProducts,
    updateProducts,
    deleteProducts,
    getProduct,
    productsByCategory,
    productsBySubcategory,
    topRatating,
    newArrivals,
    countCategories

}