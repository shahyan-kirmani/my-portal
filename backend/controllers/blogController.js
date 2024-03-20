const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
const cloudinary = require("cloudinary");


// create main model
const Blog = db.blog;

// main work

// cloudinary.v2.config({
//     cloud_name: "ddu4sybue",
//     api_key: "658491673268817",
//     api_secret: "w35Ei6uCvbOcaN4moWBKL3BmW4Q",
// });

cloudinary.v2.config({
    cloud_name: "djbrodckb",
    api_key: "472559841429233",
    api_secret: "P_5Nm-XzMxKHHW8hSOeY4Cx0ddY",
});



// 1.create product

// const addblogimg = async (req, res) => {

//     var images = [];
//     var data=[]
//     if (req.files && req.files.avatars) {
//         if (!Array.isArray(req.files.avatars)) {
//             images.push(req.files.avatars);
//         } else {
//             images = req.files.avatars;
//         }
//     }
//     let response = [];
//     for (const image of images) {
//         try {
//             const result = await cloudinary.v2.uploader.upload(image.path);
//             const publidId = result.public_id;
//             const url = result.url;
//             let newdata = {
//                 publidId,
//                 url,
//             };
//             data.push(
//                 {
//                     publidId,
//                     url,
//             }
//                 )
//             //  console.log(data);
//             response.push(data);
            
//         } catch (error) {
//             console.log(error);
//             return res.status(500).json({ error: "Error uploading images" });
//         }
//     }

//     return res.json({'status':'ok', 'data':data});
// }

const addblogimg = async (req, res) => {
    var images = [];
    var data = [];

    if (req.files && req.files.avatars) {
        if (!Array.isArray(req.files.avatars)) {
            images.push(req.files.avatars);
        } else {
            images = req.files.avatars;
        }
    }

    let response = [];

    for (const image of images) {
        try {
            const result = await cloudinary.v2.uploader.upload(image.path);
            const publicId = result.public_id;
            const url = result.url;

            let newdata = {
                publicId,
                url,
            };

            data.push(newdata);

            response.push(newdata);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Error uploading images" });
        }
    }

    return res.json({ status: 'ok', data: response });
};





const addblog = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
        }

        const blog = await Blog.create(info)
        return res.status(200).json({
            status: 'ok',
            data: blog,
        })



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getblog = async (req, res) => {

    try {


        let blog = await Blog.findAll({})
        res.status(200).json({
            status: 'ok',
            data: blog,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getblogById = async (req, res) => {


    try {
        let id = req.params.id

        let blog = await Blog.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: blog
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 4.update product

const updateblog = async (req, res) => {

    try {
        let id = req.params.id


        let getblog = await Blog.findOne({
            where: { id: id }
        })



        const blog = await Blog.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: blog
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteblog = async (req, res) => {

    try {
        let id = req.params.id

        const blog = await Blog.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: blog
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addblog,
    addblogimg,
    getblog,
    getblogById,
    updateblog,
    deleteblog,
}


