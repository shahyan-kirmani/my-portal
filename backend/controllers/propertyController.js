const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
const sharp = require('sharp');
const path = require('path')
const fs = require('fs');

// create main model
const Property = db.property;
const User = db.users;
const Package = db.package;
const Subscribe = db.subscribe;

// main work




// 1.create product
const addproperty = async (req, res) => {

    try {

        console.log(req.files)

        let info = {
            image: req.body.image,
            video: req.body.video,
            purpose: req.body.purpose,
            userId: req.body.userId,
            property: req.body.property,
            type: req.body.type,
            feature: req.body.feature,
            city: req.body.city,
            location: req.body.location,
            size: req.body.size,
            email: req.body.email,
            price: req.body.price,
            beds: req.body.beds,
            baths: req.body.baths,
            title: req.body.title,
            description: req.body.description,
            phone: req.body.phone,
            landline: req.body.landline,
            featured: false,
        }



        if (req.body.userId) {
            let allproperty = await Property.findAll({
                where: { userId: req.body.userId }
            })
            console.log('properties:::' , allproperty);
            let findUser = await Property.findOne({
                where: { id: req.body.userId }
            })
            if (allproperty.length > 0) {

                const nameUserFrom = await User.findOne({
                    where: {
                        id: info.userId
                    }
                })


                let mypackage = await Package.findOne({
                    where: { id: nameUserFrom?.packageId }
                })

                if (nameUserFrom?.packageId) {

                    var referenceDate = new Date();
                    var inputDate = new Date(nameUserFrom?.packageDate);
                    var timeDiff = referenceDate.getTime() - inputDate.getTime();
                    var days = Math.floor(timeDiff / (1000 * 3600 * 24));

                    if (days <= mypackage?.duration) {

                        if (parseInt(nameUserFrom?.addProperty) <= 0) {
                            return res.status(200).json({
                                status: 'fail',
                                message: 'You are not allowed to add more properties.'
                            })
                        }
                        else {

                            const addProperty = nameUserFrom?.addProperty - 1


                            let user = await User.update({ ...req.body, addProperty }, {
                                where: { id: info.userId }
                            })

                            const property = await Property.create(info)
                            return res.status(200).json({
                                status: 'ok',
                                data: property,
                            })
                        }

                    }

                    else {

                        const packageId = null
                        const packageDate = null
                        const premium = false

                        let user = await User.update({ ...req.body, packageId, premium, packageDate }, {
                            where: { id: id }
                        })

                        return res.status(200).json({
                            status: 'fail',
                            message: 'Your package has been expired.'
                        })
                    }

                }
                else {
                    return res.status(200).json({
                        status: 'fail',
                        message: 'You can not add property first buy package'
                    })
                }


            }
            else {

                const property = await Property.create(info)
                res.status(200).json({
                    status: 'ok',
                    data: property,
                })

                const SubscribeForm = await Subscribe.findAll({})

                SubscribeForm.map(i => {
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
                        to: i?.email,
                        subject: "MAKKAN",
                        html: `
               <h1>Add new Propert to makkan</h1>
               `
                    }

                    // Send the email using the transporter
                    transporter.sendMail(mailOptions, async (error, infoss) => {

                        try {
                            console.log('Email sent:', infoss.response);


                        } catch (err) {
                            console.error('Error sending email:', error);

                        }

                    });

                })



            }
        }

        else {
            const property = await Property.create(info)
            res.status(200).json({
                status: 'ok',
                data: property,
            })
        }



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 2.get all products
const getproperty = async (req, res) => {

    try {


        let property = await Property.findAll({})
        res.status(200).json({
            status: 'ok',
            data: property,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getpropertyById = async (req, res) => {


    try {
        let id = req.params.id

        let property = await Property.findOne({
            include: [
                {
                    model: User,
                    as: 'users'
                },

            ],
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: property
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 3.get product by id
const getpropertyByCity = async (req, res) => {


    try {
        let id = req.params.id

        let property = await Property.findAll({
            where: { city: id }
        })
        res.status(200).json({
            status: 'ok',
            data: property
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 3.get product by id
const filterpropertyById = async (req, res) => {
    try {
        const { city, title, type, minPrice, maxPrice, minArea, maxArea, beds } = req.body;

        // Build the filter conditions
        const where = {};

        if (city) {
            where.city = city;
        }

        if (title) {
            where.title = {
                [Op.like]: `%${title}%`,
            };
        }

        if (type && type !== 'Any Type') {
            where.type = type;
        }

        if (minPrice && maxPrice) {
            where.price = {
                [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
            };
        } else if (minPrice) {
            where.price = {
                [Op.gte]: parseInt(minPrice),
            };
        } else if (maxPrice) {
            where.price = {
                [Op.lte]: parseInt(maxPrice),
            };
        }

        if (minArea && maxArea) {
            where.size = {
                [Op.between]: [parseInt(minArea), parseInt(maxArea)],
            };
        } else if (minArea) {
            where.size = {
                [Op.gte]: parseInt(minArea),
            };
        } else if (maxArea) {
            where.size = {
                [Op.lte]: parseInt(maxArea),
            };
        }

        if (beds && beds !== 'All Beds') {
            where.beds = beds;
        }

        // Find the properties that match the filter conditions
        const properties = await Property.findAll({
            where,
        });

        res.status(200).json({
            status: 'ok',
            data: properties
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};



// 4.update product

const updateproperty = async (req, res) => {

    try {
        let id = req.params.id



        let getproperty = await Property.findOne({
            where: { id: id }
        })



        const property = await Property.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: property
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }



}


// 5.delete product

const deleteproperty = async (req, res) => {

    try {
        let id = req.params.id

        const property = await Property.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: property
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}




const generateUniqueFilename = () => {
    return `watermarked-${Date.now()}.jpg`;
};


const watermarkedImagesDirectory = path.join( 'Images');
fs.mkdirSync(watermarkedImagesDirectory, { recursive: true })




// 5.upload img

const addpropertyimg = async (req, res) => {

    try {

        // Check if image files were uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No image files uploaded.' });
        }

        const watermarkedImages = [];

        // Loop through the uploaded images
        for (const file of req.files) {
            // Load the uploaded image and the watermark image
            const sourceImage = sharp(file.path);
            const watermarkImage = sharp('./uploads/watermark.png'); // Replace with your watermark image path

            // Resize the watermark image if necessary
            watermarkImage.resize({
                width: 200, // Set the desired width
                height: 100, // Set the desired height
                fit: sharp.fit.inside,
            });

            // Overlay the watermark on the source image
            sourceImage.composite([{
                input: await watermarkImage.toBuffer(),
            }]);

            // Generate a unique filename for the saved image
            const outputFileName = generateUniqueFilename();



            // Save the watermarked image to a file on the server
            // await sourceImage.toFile(outputFileName);
            await sourceImage.toFile(path.join(watermarkedImagesDirectory, outputFileName));

            // Add the path to the saved watermarked image to the array
            const savedImagePath = ( dbConfig.mainUrl+outputFileName);
            watermarkedImages.push(savedImagePath);

        }

        // Send the array of paths to the saved watermarked images as a response
        res.json({
            status: 'ok',
            data: watermarkedImages
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the images.' });
    }


}







const addlike = async (req, res) => {

    try {

        let info = {
            userId: req.body.userId,
            id: req.params.id,
        }




        // const check = getlike.like

        const getUserFollow = await Property.findOne({
            where: { id: info.id }
        })



        if (getUserFollow.myLike.includes(info?.userId)) {
            const myFollow = getUserFollow?.myLike.filter(i => i !== (info?.userId))
            const newUserFollow = await Property.update({ myLike: myFollow }, {
                where: { id: info.id }
            })

            res.status(200).json({
                status: 'ok',
                data: newUserFollow,
                message: 'You unlike the property.'
            })
        }
        else {


            const newUserFollow = await Property.update({ myLike: [...getUserFollow?.myLike, info?.userId] }, {
                where: { id: info.id }
            })


            if (getUserFollow.myLike.includes(info?.userId)) {
                const myFollow = getUserFollow?.myLike.filter(i => i !== (info?.userId))
                const newUserFollow = await Property.update({ myLike: myFollow }, {
                    where: { id: info.id }
                })

            }

            res.status(200).json({
                status: 'ok',
                data: newUserFollow,
                message: 'You like the property.'
            })


        }




    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






module.exports = {
    addproperty,
    getproperty,
    getpropertyById,
    updateproperty,
    deleteproperty,
    filterpropertyById,
    getpropertyByCity,
    addlike,
    addpropertyimg
}


