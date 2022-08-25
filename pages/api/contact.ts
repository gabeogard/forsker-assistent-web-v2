import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from "next/types";

require('dotenv').config()
const PASSWORD = process.env.PASSWORD;


const contact = (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;

    console.log("password", PASSWORD);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "skuld.domene.no",
        auth: {
            user: "noreply@forskerassistenten.no",
            pass: PASSWORD,
        },
        authMethod: 'PLAIN',
        secure: true,
    });

    try {
        if (
            "name" in body &&
            typeof body.name === "string" &&
            "email" in body &&
            typeof body.email === "string" &&
            "subject" in body &&
            typeof body.subject == "string" &&
            "message" in body &&
            typeof body.message == "string"
        ) {
            const mailData = {
                from: "noreply@forskerassistenten.no",
                to: "gabrielogard@hotmail.com",
                subject: `Innhold: ${req.body.subject} fra ${req.body.name}`,
                text: `${req.body.email} ${req.body.message}`,
                html:`<div>{req.body.message}</div>`
            }
            transporter.sendMail(mailData)
            console.info("Sent ", mailData);
            
            res.status(200)

        }
    } catch (err) {
        return res.status(403).json({ err: "Error!" });
    }
}

export default contact;