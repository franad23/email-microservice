import { Request, Response } from 'express';
import IEmailBody from '../interfaces/emailBody.interface';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const emailServiceController = async (req: Request, res: Response) => {
  const { html, email, subject, text }:IEmailBody = req.body;
  console.log({ html, email, subject, text });
  const msg = {
    to: email,
    from: process.env.EMAIL_SENDER as string,
    subject: subject,
    text: html,
    html: text,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Email Sent',
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Email not sent',
        error,
      });
    });
};

export default emailServiceController;
