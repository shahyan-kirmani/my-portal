const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Package = db.package;
const User = db.users;

// main work




// 1.create product
const addpackage = async (req, res) => {

    try {

        let info = {
            title: req.body.title,
            description: req.body.description,
            duration: req.body.duration,
            price: req.body.price,
            addProperty: req.body.addProperty,
        }

        const package = await Package.create(info)
        return res.status(200).json({
            status: 'ok',
            data: package,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getpackage = async (req, res) => {

    try {


        let package = await Package.findAll({})
        res.status(200).json({
            status: 'ok',
            data: package,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getpackageById = async (req, res) => {


    try {
        let id = req.params.id

        let package = await Package.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: package
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updatepackage = async (req, res) => {

    try {
        let id = req.params.id


        let getpackage = await Package.findOne({
            where: { id: id }
        })



        const package = await Package.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: package
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deletepackage = async (req, res) => {

    try {
        let id = req.params.id

        const package = await Package.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: package
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}







const getPackage = async (req, res) => {


    try {
        let id = req.params.id

        const packageId = req.body.packageId
        const packageDate = new Date()
        const premium=true


        let mypackage = await Package.findOne({
            where: { id: packageId }
        })


        const addProperty = mypackage?.addProperty
        const duration = mypackage?.duration

        // let allearnings = await Earning.findAll({})

        // const price = parseInt(mypackage?.price) - parseInt((parseInt(mypackage?.price) * parseInt(mypackage?.discount)) / 100)



        // const earning = allearnings.reduce((total, currentValue) => total = parseInt(total) + parseInt(currentValue.earning), 0) + parseInt(price)

        // let earnings = await Earning.create({ earning: earning })

        let user = await User.update({ ...req.body, packageId, addProperty, duration, packageDate, premium}, {
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: user
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}







module.exports = {
    addpackage,
    getpackage,
    getpackageById,
    updatepackage,
    deletepackage,
    getPackage
}


