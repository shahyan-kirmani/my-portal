const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Event = db.event;

// main work




// 1.create product
const addevent = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
            date: req.body.date,
        }

        const event = await Event.create(info)
        return res.status(200).json({
            status: 'ok',
            data: event,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getevent = async (req, res) => {

    try {


        let event = await Event.findAll({})
        res.status(200).json({
            status: 'ok',
            data: event,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const geteventById = async (req, res) => {


    try {
        let id = req.params.id

        let event = await Event.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: event
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateevent = async (req, res) => {

    try {
        let id = req.params.id


        let getevent = await Event.findOne({
            where: { id: id }
        })



        const event = await Event.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: event
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteevent = async (req, res) => {

    try {
        let id = req.params.id

        const event = await Event.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: event
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addevent,
    getevent,
    geteventById,
    updateevent,
    deleteevent,
}


