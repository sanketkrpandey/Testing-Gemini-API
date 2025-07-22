const express =require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT || 4000; 
const app = express();
app.use(cors());

app.use(express.json());



const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Choose your desired Gemini model

app.post('/generate-content', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required.' });
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ generatedText: text });
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Failed to generate content.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server listening at http://localhost:${PORT}`);
});