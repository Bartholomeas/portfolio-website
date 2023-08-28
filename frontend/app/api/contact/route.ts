import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();

    const messageToSend: nodemailer.SendMailOptions = {
      from: email,
      replyTo: email,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL_ADDRESS,
      subject: `${email}: ${name}`,
      text: message,
      html: `<div>${message}</div>`,
    };
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_CONTACT_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_CONTACT_EMAIL_PASSWORD,
      },
    });

    transporter.sendMail(messageToSend, (error, info) => {
      console.log(`PreviewUrl:${nodemailer.getTestMessageUrl(info)}`);
      if (error) {
        return NextResponse.json({
          message: `Email sending failed: ${error.message}`,
          status: 504,
        });
      }
      return NextResponse.json({
        message: `Succesfully send email: ${info}`,
        status: 200,
      });
    });
  } catch (err: any) {
    return NextResponse.json({
      status: err.status || 407,
      message: `Error: ${err?.message}`,
    });
  }
}
