const express = require('express');
const { subcategoriesController } = require('../../../controller');
const router = express.Router();


router.get(
    "/list-subcategories",
    subcategoriesController.listSubcategories
);

router.get(
    "/get-subcategory/:subcategory_id",
    subcategoriesController.getSubcategory
);

router.post(
    "/create-subcategory",
    subcategoriesController.addSubcategory
);

router.put(
    "/update-subcategory/:subcategory_id",
    subcategoriesController.updateSubcategory
);

router.delete(
    "/delete-subcategory/:subcategory_id",
    subcategoriesController.deleteSubcategory
);

router.get(
    "/subcategory-Bycategory/:category_id",
    subcategoriesController.subcategoryBycategory
)

module.exports = router;
