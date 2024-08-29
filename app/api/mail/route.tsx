import nodemailer from "nodemailer";

interface form {
  name: string;
  email: string;
  role: string;
  phone: string;
  query: string;
}

export async function POST(request: Request) {
  const { name, email, role, phone, query }: form = await request.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL as string,
      pass: process.env.PASS as string,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email as string,
      subject: "Welcome to Big Foundation",
      text: `
          Name: ${name}
          Email: ${email}
          Role: ${role}
          Phone: ${phone}
          Query: ${query}
        `,
      html: `
          <h1>Welcome to BIG</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Phone number::</strong> ${phone}</p>
          <p><strong>Query:</strong> ${query}</p>
        `,
    });
    console.log("Email sent");
    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}
