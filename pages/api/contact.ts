import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from "next/types";
require('dotenv').config()
import { PrismaClient } from '@prisma/client';

const PASSWORD = process.env.PASSWORD;
const prisma = new PrismaClient();


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
                to: "kontakt@forskerassistente.no",
                subject: `Innhold: ${req.body.subject}`,
                text: `${req.body.message}`,
                html:
                    `<div>
                <h1>${req.body.name}</h1>
                <p><strong>Kontakt: ${req.body.email}</strong></p>
                ${req.body.message}
                </div>`
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