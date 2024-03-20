const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
const cloudinary = require("cloudinary");


// create main model
const Agency = db.Agency;

// main work

cloudinary.v2.config({
    cloud_name: "ddu4sybue",
    api_key: "658491673268817",
    api_secret: "w35Ei6uCvbOcaN4moWBKL3BmW4Q",
});




const addAgency = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
        }

        const Agencyadd = await Agency.create(req.body)
        return res.status(200).json({
            status: 'ok',
            data: Agencyadd,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getAgency = async (req, res) => {

    try {


        let Agency = await Agency.findAll({})
        res.status(200).json({
            status: 'ok',
            data: Agency,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getAgencyById = async (req, res) => {


    try {
        let id = req.params.id

        let AgencyData = await Agency.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: AgencyData
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateAgency = async (req, res) => {

    try {
        let id = req.params.id


        let getAgency = await Agency.findOne({
            where: { id: id }
        })



        const Agency = await Agency.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: Agency
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteAgency = async (req, res) => {

    try {
        let id = req.params.id

        const Agency = await Agency.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: Agency
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addAgency,
    getAgency,
    getAgencyById,
    updateAgency,
    deleteAgency,
}


