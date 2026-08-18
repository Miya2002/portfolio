import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Portfolio server is running!",
    });
});

// Contact form route
app.post("/api/contact", async(req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields.",
            });
        }

        console.log("New contact form submission:");
        console.log({
            name,
            email,
            subject,
            message,
        });

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["tasmiyaansari2002@gmail.com"],
            subject: `Portfolio Contact: ${subject}`,

            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <h3>Message</h3>

          <p>${message}</p>

          <hr />

          <p>
            You can reply directly to:
            <strong>${email}</strong>
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(500).json({
                success: false,
                message: "Unable to send your message.",
            });
        }

        console.log("Email sent successfully!");
        console.log("Resend ID:", data && data.id);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully! I'll get back to you within 24 hours.",
        });
    } catch (error) {
        console.error("Server error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
});