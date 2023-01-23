const {Router} = require('express')
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')
const router = Router()

const transport = nodemailer.createTransport(sendgrid({
    auth: { api_key: ""}  
}))


router.post('/sendmail', async (req, res) => {
    try {
        const {userEmail, userMessage} = req.body
        if(userEmail ==='' || userEmail === ' ' && userEmail !== '@' ,userMessage==='' || userMessage === ' ') {
            res.status(400).json({ message : 'Sending error, please check the data is correct' })
        } else {
            await transport.sendMail({
                to: "forgltest@gmail.com",
                from: "forgltest@gmail.com",
                subject: `EMAIL WHO SEND: ${userEmail}`,
                text: 'asdasd',
                html: `<h1>USER MESSAGE:</h1><br/> ${userMessage} `
            }).then(res=> console.log("RESPOSNE", res)).catch(e => console.log(e))
    
            res.status(201).json({ message : 'Mail send' })
        }
        
    } catch(e) {
        res.status(500).json({ message: 'Send Error' })
    }
})

module.exports = router