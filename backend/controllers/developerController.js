const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
const cloudinary = require("cloudinary");


// create main model
const Developer = db.developer;

// main work

cloudinary.v2.config({
    cloud_name: "ddu4sybue",
    api_key: "658491673268817",
    api_secret: "w35Ei6uCvbOcaN4moWBKL3BmW4Q",
});




const addDeveloper = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
        }

        const developeradd = await Developer.create(req.body)
        return res.status(200).json({
            status: 'ok',
            data: developeradd,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getDeveloper = async (req, res) => {

    try {


        let developer = await Developer.findAll({})
        res.status(200).json({
            status: 'ok',
            data: developer,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getDeveloperById = async (req, res) => {


    try {
        let id = req.params.id

        let developerData = await Developer.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: developerData
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateDeveloper = async (req, res) => {

    try {
        let id = req.params.id


        let getdeveloper = await Developer.findOne({
            where: { id: id }
        })



        const developer = await Developer.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: developer
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteDeveloper = async (req, res) => {

    try {
        let id = req.params.id

        const developer = await developer.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: developer
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}


module.exports = {
    addDeveloper,
    getDeveloper,
    getDeveloperById,
    updateDeveloper,
    deleteDeveloper,
}
