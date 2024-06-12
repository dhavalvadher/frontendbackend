const Subcategories = require("../model/subcategories.model");


const listSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategories.find();

        if (!subcategories || subcategories.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Subcategories not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Subcategories fetched successfully",
            data: subcategories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};

const getSubcategory = async (req, res) => {
    try {
        console.log(req.params.subcategory_id);
        const subcategory = await Subcategories.findById(req.params.subcategory_id);

        if (!subcategory) {
            return res.status(404).json({
                success: false,
                message: "Subcategory not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Subcategory fetched successfully",
            data: subcategory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};

const addSubcategory = async (req, res) => {
    try {
        const { category_id, ...rest } = req.body;
        const subcategory = await Subcategories.create({ category_id, ...rest });

        if (!subcategory) {
            return res.status(400).json({
                success: false,
                message: "Subcategory not created"
            });
        }

        res.status(200).json({
            success: true,
            message: "Subcategory created successfully",
            data: subcategory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};

const updateSubcategory = async (req, res) => {
    try {

        const subcategory = await Subcategories.findByIdAndUpdate(req.params.subcategory_id, req.body, { new: true }, { runValidators: true });
        console.log(subcategory);

        if (!subcategory) {
            return res.status(400).json({
                success: false,
                message: "Subcategory not updated"
            });
        }

        res.status(200).json({
            success: true,
            message: "Subcategory updated successfully",
            data: subcategory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};

const deleteSubcategory = async (req, res) => {
    try {
        const subcategory = await Subcategories.findByIdAndDelete(req.params.subcategory_id);

        if (!subcategory) {
            return res.status(404).json({
                success: false,
                message: "Subcategory not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Subcategory deleted successfully",
            data: subcategory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};


const subcategoryBycategory = async (req, res) => {
    try {
        // const subcategories = await Subcategories.find(req.params.category_id);
        console.log(req.params.category_id);

        const subcategoryBycategory = await Subcategories.find({category_id:req.params.category_id});
        console.log(subcategoryBycategory);


        if (!subcategoryBycategory || subcategoryBycategory.length === 0) {
            return res.status(404).json({
                success: false,
                message: "subcategoryBycategory not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "subcategoryBycategory fetched successfully",
            data: subcategoryBycategory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
}

module.exports = {
    listSubcategories,
    getSubcategory,
    addSubcategory,
    updateSubcategory,
    deleteSubcategory,
    subcategoryBycategory
};
