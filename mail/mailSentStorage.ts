import { PrismaClient } from "@prisma/client";
import { SendContactEmail } from './mailClient';

const prisma = new PrismaClient();

export const storeMail = async ({
  name,
  email,
  subject,
  message,
}: SendContactEmail) =>
  prisma.received_post.create({
    data: {
      sender_name: name,
      sender_email: email,
      time_sent: new Date(),
      subject: subject,
      message_body: message,
    },
  });
