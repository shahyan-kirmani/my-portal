const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Contact = db.contact;

// main work




// 1.create product
const addcontact = async (req, res) => {

    try {

        let info = {
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            yourMessage: req.body.yourMessage,
            subject: req.body.subject,
            status: true,
        }

        const contact = await Contact.create(info)
        return res.status(200).json({
            status: 'ok',
            data: contact,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getcontact = async (req, res) => {

    try {

        const ip = req.clientIp;

        let contact = await Contact.findAll({})
        res.status(200).json({
            status: 'ok',
            data: contact,
            ip: ip
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getcontactById = async (req, res) => {


    try {
        let id = req.params.id

        let contact = await Contact.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: contact
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updatecontact = async (req, res) => {

    try {
        let id = req.params.id


        let getcontact = await Contact.findOne({
            where: { id: id }
        })



        const contact = await contact.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: contact
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deletecontact = async (req, res) => {

    try {
        let id = req.params.id

        const contact = await Contact.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: contact
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addcontact,
    getcontact,
    getcontactById,
    updatecontact,
    deletecontact,
}


