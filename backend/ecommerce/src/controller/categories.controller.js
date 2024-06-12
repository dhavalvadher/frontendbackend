const Categories = require("../model/categories.model");

const listcategory = async (req, res) => {
    try {
        const categories = await Categories.find();

        console.log(categories);
        if (!categories || categories.length === 0) {
            res.status(404).json({
                success: false,
                message: "categories not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "categories feched successfully",
            data: categories
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error:" + error.message
        })
    }
}


const getcategories = async (req, res) => {
    try {

        console.log(req.params.category_id);

        const category = await Categories.findById(req.params.category_id);
        console.log(category);


        if (!category) {
            res.status(404).json({
                success: false,
                message: "Category not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Category fetched sucessfully",
            data: category
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error:" + error.message
        })
    }
}


const postcategories = async (req, res) => {
    try {
        console.log(req.body);

        const category = await Categories.create(req.body);
        console.log(category);

        if (!category) {
            res.status(400).json({
                success: false,
                message: "Category not creted"
            })
        }

        res.status(201).json({
            success: true,
            message: "Category careted sucessfully",
            data: category
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error:" + error.message
        })
    }
}

const deletecategories = async (req, res) => {
    try {

        console.log(req.params.category_id);

        const category = await Categories.findByIdAndDelete(req.params.category_id);
        console.log(category);


        if (!category) {
            res.status(404).json({
                success: false,
                message: "Category not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Category fetched sucessfully",
            data: category
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error:" + error.message
        })
    }
}

const updatecategories = async (req,res) => {
    // console.log("hdbdjwh",req.params.category_id, req.body);

    

    try {
        const category = await Categories.findByIdAndUpdate(req.params.category_id, req.body, {new:true},{runValidators:true});
        console.log(category);

        if (!category) {
            res.status(400).json({
                success: false,
                message: "Category not update."
            })
        }

        res.status(200).json({
            success: true,
            message: "Category update sucessfully",
            data: category
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error:" + error.message
        })
    }
}

module.exports = {
    listcategory,
    getcategories,
    postcategories,
    deletecategories,
    updatecategories
}