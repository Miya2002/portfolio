import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


console.log(
    "RESEND KEY LOADED:",
    process.env.RESEND_API_KEY ? "YES" : "NO"
);


const resend = new Resend(process.env.RESEND_API_KEY);


// Test route
app.get("/", (req, res) => {

    res.json({
        message: "Portfolio server is running!"
    });

});


// Contact API
app.post("/api/contact", async(req, res) => {

    console.log("CONTACT REQUEST RECEIVED");

    try {

        const {
            name,
            email,
            subject,
            message
        } = req.body;


        console.log({
            name,
            email,
            subject,
            message
        });


        if (!name || !email || !subject || !message) {

            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });

        }


        const result = await resend.emails.send({

            from: "onboarding@resend.dev",

            to: [
                "tasmiyaansari2002@gmail.com"
            ],

            replyTo: email,

            subject: `Portfolio Contact: ${subject}`,

            html: `

      <h2>New Portfolio Message</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Subject:</b> ${subject}</p>

      <p><b>Message:</b></p>

      <p>${message}</p>

      `

        });


        console.log("RESEND RESULT:", result);


        return res.json({

            success: true,

            message: "Message sent successfully"

        });



    } catch (error) {


        console.error(
            "BACKEND ERROR:",
            error
        );


        return res.status(500).json({

            success: false,

            message: error.message

        });


    }


});


app.listen(PORT, () => {

    console.log(
        `Portfolio server running on http://localhost:${PORT}`
    );

});