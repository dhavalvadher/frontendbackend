// const { Salespeople } = require("../model");

// const Listsalespeople = async (req, res) => {
//     try {
//         const salespeople = await Salespeople.getsalespeople();

//         res.status(200).json({
//             success: true,
//             data: salespeople,
//             message: "Salespeople data fetched"
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//             data: []
//         });
//     }
// }
// const addsalespeople = async (req, res) => {
//     try {
//         const { city, sname, comm } = req.body

//         const salespeople = await Salespeople.postsalespeople(city, sname, comm);
//         console.log(salespeople);

//         res.status(201).json({
//             success: true,
//             data: salespeople,
//             message: "Salespeople Added successfully"


//         })
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//             data: []

//         })
//     }



// }

// const deleteSales = async (req, res) => {
//     try {
//         const { snum } = req.params;
//         const salespeople = await Salespeople.deleteSalespeople(snum);
//         res.status(200).json({
//             success: true,
//             data: salespeople,
//             message: "salespeople data is deleted successfully."
//         });
//     } catch (error) {
//         console.error("Error deleting salesperson:", error);
//         res.status(500).json({
//             success: false,
//             data: [],
//             message: "Internal server error."
//         })
//     }
// }

// const updateSales = async (req, res) => {
//     try {
//         const { snum } = req.params;
//         const { city, sname, comm } = req.body;
//         const salespeople = await Salespeople.updateSalespeople(snum, city, sname, comm)
//         res.status(200).json({
//             success: true,
//             data: salespeople,
//             message: "salespeople data is updated successfully."
//         })
//     } catch (error) {
//         console.error("Error updating salesperson:", error);
//         res.status(500).json({
//             success: false,
//             data: [],
//             message: "Internal server error."
//         })
//     }

// }
// module.exports = {
//     Listsalespeople,
//     addsalespeople,
//     deleteSales,
//     updateSales
// }

const { Salespeople } = require("../model");

const Listsalespeople = async (req, res) => {
    try {
        const salespeople = await Salespeople.getsalespeople();
        res.status(200).json({
            success: true,
            data: salespeople,
            message: "Salespeople data fetched"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: []
        });
    }
};

const addsalespeople = async (req, res) => {
    try {
        const { city, sname, comm } = req.body;
        const salespeople = await Salespeople.postsalespeople(city, sname, comm);
        console.log(salespeople);
        res.status(201).json({
            success: true,
            data: salespeople,
            message: "Salesperson added successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: []
        });
    }
};

const deleteSales = async (req, res) => {
    try {
        const { snum } = req.params;
        const salespeople = await Salespeople.deleteSalespeople(snum);
        res.status(200).json({
            success: true,
            data: salespeople,
            message: "Salesperson data deleted successfully."
        });
    } catch (error) {
        console.error("Error deleting salesperson:", error);
        res.status(500).json({
            success: false,
            data: [],
            message: "Internal server error."
        });
    }
};

const updateSales = async (req, res) => {
    try {
        const { snum } = req.params;
        const { city, sname, comm } = req.body;
        const salespeople = await Salespeople.updateSalespeople(snum, city, sname, comm);
        res.status(200).json({
            success: true,
            data: salespeople,
            message: "Salesperson data updated successfully."
        });
    } catch (error) {
        console.error("Error updating salesperson:", error);
        res.status(500).json({
            success: false,
            data: [],
            message: "Internal server error."
        });
    }
};

module.exports = {
    Listsalespeople,
    addsalespeople,
    deleteSales,
    updateSales
};
