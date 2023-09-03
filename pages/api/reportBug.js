import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { bugTitle, bugDescription } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  // Mail options
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Bug Report: ${bugTitle}`,
    html: `
    <div style="font-family: 'Poppins', sans-serif; background-color: #f9f9f9; text-align: center; padding: 20px;">
    <h1 style="font-size: 24px; color: #333; display: inline;">Bug Report: </h1>
    <h2 style="font-size: 24px; color: #666; display: inline;">${bugTitle}</h2>
    <div style="font-size: 18px; color: #777; padding-top: 20px; max-width: 500px; margin: 0 auto;">
      ${bugDescription.split("\n").join("<br />")}
    </div>
  </div>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Internal Server Error");
  }
}
