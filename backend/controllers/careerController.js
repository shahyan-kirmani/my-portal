const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Career = db.career;

// main work




// 1.create product
const addcareer = async (req, res) => {

    try {

        let info = {
            fullName: req.body.fullName,
            resume: req.body.resume,
            phone: req.body.phone,
            gender: req.body.gender,
            address: req.body.address,
            city: req.body.city,
            status: 0,
        }

        const career = await Career.create(info)
        return res.status(200).json({
            status: 'ok',
            data: career,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getcareer = async (req, res) => {

    try {


        let career = await Career.findAll({})
        res.status(200).json({
            status: 'ok',
            data: career,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getcareerById = async (req, res) => {


    try {
        let id = req.params.id

        let career = await Career.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: career
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updatecareer = async (req, res) => {

    try {
        let id = req.params.id


        let getcareer = await Career.findOne({
            where: { id: id }
        })



        const career = await Career.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: career
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deletecareer = async (req, res) => {

    try {
        let id = req.params.id

        const career = await Career.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: career
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addcareer,
    getcareer,
    getcareerById,
    updatecareer,
    deletecareer,
}


