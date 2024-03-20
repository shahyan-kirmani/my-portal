const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Enquiry = db.enquiry;

// main work




// 1.create product
const addenquiry = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
        }




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
            to: req.body.propertymail,
            subject: "MAKKAN ENQUIRY",
            html: `
           <h1>PROPERTY ENQUIRY </h1>
           <h4>Property ID : ${req.body.propertyId}</h4>

           <h4>Details</h4>

           <p>${req.body.name}</p>
           <p>${req.body.email}</p>
           <p>${req.body.phone}</p>
           <p>${req.body.message}</p>
            `

        }

        // Send the email using the transporter
        transporter.sendMail(mailOptions, async (error, infoss) => {

            try {
                console.log('Email sent:', infoss.response);
                const enquiry = await Enquiry.create(info)
                return res.status(200).json({
                    status: 'ok',
                    data: enquiry,
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
const getenquiry = async (req, res) => {

    try {


        let enquiry = await Enquiry.findAll({})
        res.status(200).json({
            status: 'ok',
            data: enquiry,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getenquiryById = async (req, res) => {


    try {
        let id = req.params.id

        let enquiry = await Enquiry.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: enquiry
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateenquiry = async (req, res) => {

    try {
        let id = req.params.id


        let getenquiry = await Enquiry.findOne({
            where: { id: id }
        })



        const enquiry = await Enquiry.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: enquiry
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteenquiry = async (req, res) => {

    try {
        let id = req.params.id

        const enquiry = await Enquiry.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: enquiry
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addenquiry,
    getenquiry,
    getenquiryById,
    updateenquiry,
    deleteenquiry,
}


