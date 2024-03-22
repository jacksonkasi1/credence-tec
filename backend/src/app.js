const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require('express-fileupload')
const fileupload = require("aws-s3-file-upload");
const PORT = process.env.PORT || 5000
const app = express()
const { contact, responseUser, applyForJob, responseForJobApplied } = require('./Email')

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors())
app.use(upload({
    limits: { fileSize: 5 * 1024 * 1024 },
}));
app.get('/', (req, res) => {
    res.send('Hello world')
})


app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body

    if (!email || email.length === 0 || !message || message.length === 0) {
        return res.status(400).json({ success: false, message: "Please fill all the details" })
    } else {
        const Contact = await contact({ email, name, message })

        if (Contact.success) {
            await responseUser({ email, name })
            return res.status(200).json({ success: true, message: "Successfully sended" })

        }
    }
})

app.post('/apply-job', async (req, res) => {
    const { image } = req.files;
    const { name, email, jobname, phone, coverLetter } = req.body

    if (!name || name.length === 0 || !email || email.length === 0 || !jobname || jobname.length === 0 || !phone || phone.length === 0 || !coverLetter || coverLetter.length === 0) {
        return res.status(400).json({ success: false, message: "Please fill all the details" })
    } else {
        const getLink = await fileupload.awsS3FormDataUpload(
            process.env.AWS_ACCESSKEY,
            process.env.AWS_SECRETKEY,
            process.env.AWS_S3_PROFILE_BUCKET_NAME,
            image
        );

        const Job = await applyForJob({ email, name, jobname, phone, coverLetter, resume: getLink.data[0].Location })

        if (Job.success) {
            await responseForJobApplied({ email, name })
            return res.status(200).json({ success: true, message: "Successfully sended" })

        }
    }
})

app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
})