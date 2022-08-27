import { PrismaClient } from "@prisma/client";
import { SendContactEmail } from './mailClient';

const prisma = new PrismaClient();

export const storeMail = async ({
  name,
  email,
  subject,
  message,
  ipAddress,
}: SendContactEmail) =>
  prisma.received_post.create({
    data: {
      sender_name: name,
      sender_email: email,
      time_sent: new Date(),
      subject: subject,
      message_body: message,
      ip_address: ipAddress,
    },
  });

const fetchSimilarRecentlySentEmails = async ({
  ipAddress,
  email,
  subject,
  message,
}: SendContactEmail) =>
  prisma.received_post.findMany({
    where: {
      // TODO: AND tid er i dag
      OR: [
        { subject: { equals: subject }, message_body: { equals: message }, sender_email: { equals: email } },
        { ip_address: { equals: ipAddress}}
      ]
    },
    orderBy: {
      time_sent: 'desc',
    },
    take: 30,
  });

export const hasRecentlySentEmail = async (sendEmailReq: SendContactEmail) => {
  const similarSentRecently = await fetchSimilarRecentlySentEmails(sendEmailReq);

  const countIpSentRecently = similarSentRecently.map(({ ip_address }) => ip_address)
    .filter((ip, index, selfArray) => index !== selfArray.indexOf(ip)).length;

  const countSameMsgSentRecently = similarSentRecently.map(({ subject, message_body, sender_email }) => `${subject}${message_body}${sender_email}`)
    .filter((id, index, selfArray) => index !== selfArray.indexOf(id)).length;

  return (countIpSentRecently > 5 || countSameMsgSentRecently >= 1);
}
