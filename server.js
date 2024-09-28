const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({
    origin: 'https://0240-195-142-92-109.ngrok-free.app',
    credentials: true
}));

const API_KEY = 'YOUR-KEY';  
const PROJECT_ID = 'cerez-uygulamasi-1722512841859';
const URL = `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}`;

async function createAssessment(token) {
    const data = {
        event: {
            token: token,
            siteKey: 'your-key',
            expectedAction: 'LOGIN'
        }
    };

    try {
        const response = await axios.post(URL, data);
        console.log('Assessment Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating assessment:', error.response ? error.response.data : error.message);
        throw error;
    }
}

app.post('/verify-recaptcha', async (req, res) => {
    const token = req.body.token;
    const secret = '6LfxKh0qAAAAAPkl6ItTC089DQ9ir5Em5_RYs5Mm';
    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
