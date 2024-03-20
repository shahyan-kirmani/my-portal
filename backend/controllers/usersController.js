const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const User = db.users;
const Property = db.property;

// main work




// 1.create product
const addUsers = async (req, res) => {

    try {


        const password = req.body.password
        const email = req.body.email

        const gmail = await User.findOne({
            where: {
                email: email
            }
        })


        if (!gmail) {

            if (password) {
                const salt = genSaltSync(10)

                console.log(req.files,'my files')

                let info = {
                    agencyLogo:req.body.agencyLogo,
                    fullName: req.body.fullName,
                    agencyName: req.body.agencyName,
                    serviceArea: req.body.serviceArea,
                    agencyDescription: req.body.agencyDescription,
                    email: req.body.email,
                    phone: req.body.phone,
                    city: req.body.city,
                    signAs: req.body.signAs,
                    password: req.body.password,
                    status: true,
                    featured:false,
                }


                const gmil = await User.findOne({
                    where: {
                        email: info.email
                    }
                }) 
                
                if (gmil) {
                    res.status(200).json({
                        status: 'fail',
                        message: 'Email already exists',
                    })
                }
                else {

                    const user = await User.create(info)
                    return res.status(200).json({
                        status: 'ok',
                        data: user,
                    })



                }
            } else {
                res.status(200).json({
                    status: 'fail',
                    message: 'Must enter password',
                })
            }
        }
        else {
            res.status(200).json({
                status: 'fail',
                message: 'Email already exists',
            })
        }

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getUsers = async (req, res) => {

    try {

        const ip = req.clientIp;

        let users = await User.findAll({
            include: [
                {
                    model: Property,
                    as: 'property'
                },
               
            ],
        })
        res.status(200).json({
            status: 'ok',
            data: users,
            ip: ip
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getUserById = async (req, res) => {


    try {
        let id = req.params.id

        let user = await User.findOne({
            include: [
                {
                    model: Property,
                    as: 'property'
                },
               
            ],
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


// 4.update product

const updateUser = async (req, res) => {

    try {
        let id = req.params.id


        


        const checkEmail = await User.findOne({
            where: { email: req.body.email, id: { [Op.not]: id } }
        })

        if (checkEmail) {
            return res.status(200).json({
                status: 'fail',
                message: 'Must add unique email',
            })
        }
        else {

            const user = await User.update({ ...req.body }, {
                where: { id: id }
            }
            )
            res.status(200).json({
                status: 'ok',
                data: user
            })

            


        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 4.update product

const updateUserPass = async (req, res) => {

    try {
        let id = req.params.id


    
            const user = await User.update({ ...req.body }, {
                where: { id: id }
            }
            )
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


// 5.delete product

const deleteUser = async (req, res) => {

    try {
        let id = req.params.id

        const user = await User.destroy({
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
    addUsers,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    updateUserPass
}


