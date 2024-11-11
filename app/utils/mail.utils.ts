import nodemailer,  { TransportOptions, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
} as TransportOptions );

type SendEmailDto = {
     sender : Mail.Address | any,
     receipients : Mail.Address | Mail.Address[] | any,
     subject : string;
     message : string ;
}
export const sendEmail = async (dto : SendEmailDto )=> {
    const { sender , receipients , subject , message } = dto ;

    try {
      const result = await transporter.sendMail({
        from: sender,
        to: receipients,
        subject,
        html: message,
        text: message.replace(/<[^>]*>/g, ''), // Strip HTML for text version
      });
      
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
}    
