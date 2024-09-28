const axios = require('axios');

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
    } catch (error) {
        console.error('Error creating assessment:', error.response ? error.response.data : error.message);
    }
}


createAssessment('USER_RESPONSE_TOKEN'); 
