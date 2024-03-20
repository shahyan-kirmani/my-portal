const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Question = db.question;

// main work




// 1.create product
const addquestion = async (req, res) => {

    try {

        let info = {
            question: req.body.question,
            answer: req.body.answer,
        }

        const question = await Question.create(info)
        return res.status(200).json({
            status: 'ok',
            data: question,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getquestion = async (req, res) => {

    try {


        let question = await Question.findAll({})
        res.status(200).json({
            status: 'ok',
            data: question,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getquestionById = async (req, res) => {


    try {
        let id = req.params.id

        let question = await Question.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: question
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updatequestion = async (req, res) => {

    try {
        let id = req.params.id


        let getquestion = await Question.findOne({
            where: { id: id }
        })



        const question = await Question.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: question
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deletequestion = async (req, res) => {

    try {
        let id = req.params.id

        const question = await Question.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: question
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addquestion,
    getquestion,
    getquestionById,
    updatequestion,
    deletequestion,
}


