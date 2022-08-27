import { PrismaClient, received_post } from "@prisma/client";
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
        { ip_address: { equals: ipAddress } },
      ]
    },
    orderBy: {
      time_sent: 'desc',
    },
    take: 30,
  });

export const hasRecentlySentEmail = async (sendEmailReq: SendContactEmail) => {
  const similarSentRecently = await fetchSimilarRecentlySentEmails(sendEmailReq);

  const id = ({ subject, message_body, sender_email }: Partial<received_post>) => `${subject}${message_body}${sender_email}`;
  const idSelf = JSON.stringify(id({
    subject: sendEmailReq.subject,
    sender_email: sendEmailReq.email,
    message_body: sendEmailReq.message,
  }));
  const ip = sendEmailReq.ipAddress;

  const countIpSentRecently = similarSentRecently.filter(({ ip_address }) => ip_address === ip).length;
  const countSimilarEmailSentRecently = similarSentRecently.filter((sent) => JSON.stringify(id(sent)) === idSelf).length;

  return (countIpSentRecently > 5 || countSimilarEmailSentRecently >= 1);
}
