import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from "next/types";

require('dotenv').config()
const PASSWORD = process.env.password


const contact = (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;

    console.log("password", PASSWORD);
    const transporter = nodemailer.createTransport({
        host: "skuld.domene.no",
        port: 465,
        auth: {
            user: "noreply@forskerassistenten.no",
            pass: PASSWORD,
            password: PASSWORD,
        },
        authMethod: 'PLAIN',
        pass: PASSWORD,
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
            console.log("help")
            transporter.sendMail(mailData, (err: Error, info: Error)=>{
                if(err)
                    console.log(err)
                else
                    console.log(info)
            })

            res.status(200)

        }
        throw new Error("Req body not correct");
    } catch (err) {
        return res.status(403).json({ err: "Error!" });
    }
}

export default contact;