const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Subscribe = db.subscribe;

// main work




// 1.create product
const addsubscribe = async (req, res) => {

    try {

        let info = {
            email: req.body.email,
        }


            console.log(req.body.email)

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: dbConfig.EMAIL,
                    pass: dbConfig.PASS
                }
            });

            // Prepare the email options

            const mailOptions = {
                from: dbConfig.EMAIL,
                // to:'test.hmmmzadev@gmail.com',
                to: req.body.email,
                subject: "MAKKAN",
                html: `
               <h1>Subscribe to MAKKAN</h1>
                `

            }

            // Send the email using the transporter
            transporter.sendMail(mailOptions, async (error, infoss) => {

                try {
                    console.log('Email sent:', infoss.response);
                    const subscribe = await Subscribe.create(info)
                    return res.status(200).json({
                        status: 'ok',
                        data: subscribe,
                    })


                } catch (err) {
                    console.error('Error sending email:', error);
                    return res.status(200).json({
                        status: 'fail',
                        message: 'Enter a valid email address',
                    })
                }

            });

        





    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getsubscribe = async (req, res) => {

    try {


        let subscribe = await Subscribe.findAll({})
        res.status(200).json({
            status: 'ok',
            data: subscribe,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getsubscribeById = async (req, res) => {


    try {
        let id = req.params.id

        let subscribe = await Subscribe.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: subscribe
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updatesubscribe = async (req, res) => {

    try {
        let id = req.params.id


        let getsubscribe = await Subscribe.findOne({
            where: { id: id }
        })



        const subscribe = await Subscribe.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: subscribe
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deletesubscribe = async (req, res) => {

    try {
        let id = req.params.id

        const subscribe = await Subscribe.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: subscribe
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addsubscribe,
    getsubscribe,
    getsubscribeById,
    updatesubscribe,
    deletesubscribe,
}


