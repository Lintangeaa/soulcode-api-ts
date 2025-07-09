import nodemailer from 'nodemailer';
import logger from '../../../libs/helpers/logger.js';
import { TEndpointHandler } from '../../../types/express.js';

const sendMail: TEndpointHandler = async (req) => {
  const { email, password, to, subject, text } = req.body;

  if (!email || !password || !to || !subject || !text) {
    return {
      statusCode: 400,
      message: 'All fields are required',
    };
  }

  logger.info('Attempting to send email from', email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions = {
    from: email,
    to,
    subject,
    text,
  };

  const info = await transporter.sendMail(mailOptions);

  logger.info('Email sent:', info.response);

  return {
    message: 'Email sent successfully',
    data: info.response,
  };
};

export default {
  sendMail,
};
