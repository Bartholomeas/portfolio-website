import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, title, name, message } = await req.json();

    const messageToSend: nodemailer.SendMailOptions = {
      from: email,
      replyTo: email,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL_ADDRESS,
      subject: `${name}: ${title}`,
      text: message,
      html: `<div>Wiadomość od ${email}: ${message}</div>`,
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

    const res = await transporter.sendMail(messageToSend, (error, info) => {
      if (error) {
        return NextResponse.json({
          message: `Email sending failed: ${error.message}`,
        });
      }
      return NextResponse.json({
        message: `Succesfully send email: ${info}`,
        status: 200,
      });
    });
    return NextResponse.json({ res });
  } catch (err: any) {
    console.log({ err });
    return NextResponse.json({
      message: `Error: ${err?.message}`,
    });
  }
}
