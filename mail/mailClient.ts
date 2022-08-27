import { NextApiRequest, NextApiResponse } from "next/types";
import nodemailer from "nodemailer";
import { checkOrThrowIllegalArgument } from "../utils/errorUtils";
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  port: 465,
  host: "skuld.domene.no",
  auth: {
    user: "noreply@forskerassistenten.no",
    pass: PASSWORD,
  },
  authMethod: "PLAIN",
  secure: true,
});

export interface SendContactEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
  ipAddress: string;
}

export const sendEmail = async ({ name, email, subject, message }: SendContactEmail) =>
  transporter.sendMail({
    from: "noreply@forskerassistenten.no",
    to: "kontakt@forskerassistenten.no",
    subject: `${subject}`,
    text: `${message}`,
    html: `<div>
                <h1>${name}</h1>
                <p><strong>Kontakt: ${email}</strong></p>
                ${message}
                </div>`,
  });

export const validateSendContactEmailRequest = (
  body: Pick<NextApiRequest, "body">["body"]
): body is SendContactEmail => {
  const { name = "", email = "", subject = "", message = "" } = body;
  checkOrThrowIllegalArgument(
    name.length,
    () => `Navn er påkrevd, men fikk ${name}`
  );
  checkOrThrowIllegalArgument(
    email.length,
    () => `E-post er ikke gyldig, fikk ${email}`
  );
  checkOrThrowIllegalArgument(
    subject.length,
    () => `Tittel er påkrevd, men fikk ${subject}`
  );
  checkOrThrowIllegalArgument(
    message.length,
    () => `Melding er påkrevd, men fikk ${message}`
  );
  return true;
};
