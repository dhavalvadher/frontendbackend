==>salespeople.controller.js

const { Salespeople } = require("../model/salespeople.model");

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
}

const Post_salespeople = async (req, res) => {
    try {
        const { sname, city, comm } = req.body;
        const insert = await Salespeople.postsalespeople(sname, city, comm);

        console.log(insert);
        
        res.status(200).json({
            success: true,
            data: insert,
            message: "Salespeople data created"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: []
        });
    }
}

module.exports = {
    Listsalespeople,
    Post_salespeople
}

==>index.js
module.exports.Salespeople = require("./salespeople.model")

==>salespeople.model.js
const pool = require("../db/mysql");

const getsalespeople = async () => {
    try {
        const [rows, fields] = await pool.execute('SELECT * FROM salespeople');
        console.log(rows);
        return rows;
    } catch (error) {
        console.error('Error fetching salespeople:', error);
        throw new Error('Error fetching salespeople');
    }
};

const postsalespeople = async (sname, city, comm) => {
    try {
        const [result] = await pool.execute(
            "INSERT INTO salespeople (sname, city, comm) VALUES (?, ?, ?)",
            [sname, city, comm]
        );
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error adding salesperson:', error);
        throw new Error('Error adding salesperson');
    }
};

module.exports = { 
    getsalespeople,
    postsalespeople 
};

==>salespeople.routes.js
const express = require('express');
const { salespeopleController } = require('../../../controller');
const routes = express.Router();

routes.get(
    '/get-salespeople',
    salespeopleController.Listsalespeople
)

routes.post(
    '/post-salespeople',
    salespeopleController.Post_salespeople
)

module.exports = routes;

{
    "success": false,
    "message": "Cannot read properties of undefined (reading 'postsalespeople')",
    "data": []
}


this error solve and rewrite a code