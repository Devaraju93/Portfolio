"use server"

import { Resend } from "resend"

type EmailData = {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY environment variable")
  }

  if (!process.env.TO_EMAIL) {
    throw new Error("Missing TO_EMAIL environment variable")
  }

  try {
    const { name, email, message } = data

  await resend.emails.send({
  from: "Portfolio Contact Form <onboarding@resend.dev>",
  to: process.env.TO_EMAIL,
  subject: `New contact form submission from ${name}`,
  replyTo: email, 
  text: `
Name: ${name}
Email: ${email}

Message:
${message}
  `,
  html: `
<div>
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <h3>Message:</h3>
  <p>${message.replace(/\n/g, "<br>")}</p>
</div>
  `,
})


    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
