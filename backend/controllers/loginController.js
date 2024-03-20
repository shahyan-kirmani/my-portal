const db = require('../models');
const { compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const dbConfig = require('../config/dbConfig.js')
const nodemailer = require('nodemailer');

const User = db.users;

const getUser = async (req, res) => {
    try {
        let info = {
            email: req.body.email,
            password: req.body.password,
        }


        const userData = await User.findOne({
            where: {
                email: info.email,
            }
        })

        if (userData) {
            // const result=compareSync(info.password, userData.password)
            if (info.password === userData.password) {
                // result.password=undefined

                const jsontoken = sign({ result: userData }, dbConfig.KEY_NAME);
                res.cookie('verifytoken', jsontoken)


                res.status(200).json({
                    status: 'ok',
                    state: "Successfully logged in",
                    data: userData,
                    token: jsontoken
                })
            } else {
                res.status(200).json({
                    status: 'fail',
                    message: 'Wrong Password',
                })
            }

        } else {
            res.status(200).json({
                status: 'fail',
                message: 'Email not found',
            })

        }



    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            // data:info,
        })
    }

}





const forgetPassword = async (req, res) => {

    try {

        let info = {
            email: req.body.email,
        }

        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);


        const guser = await User.findOne({
            where: {
                email: info.email
            }
        })

        if (guser) {


            const guser = await User.update({otp:val},{
                where: {
                    email: info.email
                }
            })



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
                   <h4>Hi ${req.body.email}</h4>
                   <p>Your otp for forget password on makkan registrartion is ${val}</p>
                    `
    
            }
    
            // Send the email using the transporter
            transporter.sendMail(mailOptions, async (error, infoss) => {
    
                try {
                    console.log('Email sent:', infoss.response);
                    return res.status(200).json({
                        status: 'ok',
                        message: 'Otp sent successfully',
                    })
    
    
                } catch (err) {
                    console.error('Error sending email:', error);
                    return res.status(200).json({
                        status: 'fail',
                        message: 'Enter a valid email address',
                    })
                }
    
            });
    
    

        }

        else{

            res.status(200).json({
                status: 'fail',
                message: 'First Register yourself!',
            })

        }







    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




const updatePassword = async (req, res) => {

    try {

        let info = {
            email: req.body.email,
            otp: req.body.otp,
        }



        const guser = await User.findOne({
            where: {
                email: info.email,otp: info.otp
            }
        })

        if (guser) {


            const guser = await User.update({password:req.body.password},{
                where: {
                    email: info.email
                }
            })

            return res.status(200).json({
                status: 'ok',
                message: 'Updated Successfully',
            })


        }

        else{

            res.status(200).json({
                status: 'fail',
                message: 'First Register yourself!',
            })

        }







    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






module.exports = {
    getUser,
    forgetPassword,
    updatePassword
}