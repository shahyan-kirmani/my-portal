const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Team = db.team;

// main work




// 1.create product
const addteam = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            image: req.body.image,
            designation: req.body.designation,
            description: req.body.description,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            insta: req.body.insta,
        }

        const team = await Team.create(info)
        return res.status(200).json({
            status: 'ok',
            data: team,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getteam = async (req, res) => {

    try {


        let team = await Team.findAll({})
        res.status(200).json({
            status: 'ok',
            data: team,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getteamById = async (req, res) => {


    try {
        let id = req.params.id

        let team = await Team.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: team
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateteam = async (req, res) => {

    try {
        let id = req.params.id


        let getteam = await Team.findOne({
            where: { id: id }
        })



        const team = await Team.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: team
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteteam = async (req, res) => {

    try {
        let id = req.params.id

        const team = await Team.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: team
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addteam,
    getteam,
    getteamById,
    updateteam,
    deleteteam,
}


