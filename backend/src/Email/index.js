const nodemailer = require('nodemailer')
const { ContactUs, responseContact, appliedJob, replyForAppliedJobUser } = require('../utils/EmailContent');


exports.contact = async ({email, name, message}) => {
    function convertNewlineToBr(msg) {
        return msg.replace(/\n/g, "<br/>");
      }
    
      const formattedMessage = convertNewlineToBr(message);


    const transport = nodemailer.createTransport(
        {
          host: process.env.EMAIL_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASS
          },
        }
      );
    
    
      const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: 'info@credencetec.in',
        subject: `Contact`,
        html: await ContactUs({name, email, message: formattedMessage})
      });
      
      if (info) {
        return {
            success: true,
            message: "Email has successfully sended"
        }
      };
}

exports.responseUser = async ({email, name}) => {
    const transport = nodemailer.createTransport(
        {
          host: process.env.EMAIL_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASS
          },
        }
      );
    
    
      const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: `Reply for contact`,
        html: await responseContact({name})
      });
      
      if (info) {
        return {
            success: true,
            message: "Email has successfully sended"
        }
      };
}

exports. applyForJob = async ({email, name, jobname, phone, coverLetter, resume}) => {
    const transport = nodemailer.createTransport(
        {
          host: process.env.EMAIL_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASS
          },
        }
      );
    
      const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: 'info@credencetec.in',
        subject: `Application for ${jobname}`,
        html: await appliedJob({email, name, jobname, phone, coverLetter}),
        attachments: [
          {   // Image attachment (as link)
            filename:  `${name}.pdf`,
            path: resume
          }
        ]
      });
      
      if (info) {
        return {
            success: true,
            message: "Email has successfully sended"
        }
      };
}

exports.responseForJobApplied = async ({email, name}) => {
    const transport = nodemailer.createTransport(
        {
          host: process.env.EMAIL_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASS
          },
        }
      );
    
    
      const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: `Reply for job application`,
        html: await replyForAppliedJobUser({name})
      });

      if (info) {
        return {
            success: true,
            message: "Email has successfully sended"
        }
      };
}
