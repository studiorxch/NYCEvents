// index.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = '1de2cf81cbcb8080803fdb61116a3aa3';

app.get('/', (req, res) => {
    res.send('NYC Events API is live. Use POST /api/add-event to submit.');
});


app.post('/api/add-event', async (req, res) => {
    try {
        const {
            title, date, time, borough, location, mapsLink,
            soundVibe, perks, weatherSuitable, crowdLevel, notes, eventType
        } = req.body;

        const eventTypeValue = eventType || "Unknown"; // ✅ proper placement

        const response = await axios.post(
            'https://api.notion.com/v1/pages',
            {
                parent: { database_id: DATABASE_ID },
                properties: {
                    "Event Name": { title: [{ text: { content: title } }] },
                    "Date": { date: { start: date } },
                    "Time": { rich_text: [{ text: { content: time } }] },
                    "Event Type": { select: { name: eventTypeValue } },
                    "Borough": { select: { name: borough } },
                    "Location": { rich_text: [{ text: { content: location } }] },
                    "Google Maps": { url: mapsLink },
                    "Sound Vibe": { multi_select: soundVibe.split(',').map(v => ({ name: v.trim() })) },
                    "Perks": { rich_text: [{ text: { content: perks } }] },
                    "Weather Suitable": { select: { name: weatherSuitable } },
                    "Expected Crowd Level": { select: { name: crowdLevel } },
                    "Notes": { rich_text: [{ text: { content: notes } }] },
                },
            },
            {
                headers: {
                    'Authorization': `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).send({ message: 'Event added!', data: response.data });
    } catch (err) {
        console.error("Notion error:", {
            status: err.response?.status,
            data: err.response?.data,
            message: err.message,
        });
        res.status(err.response?.status || 500).send({
            error: err.response?.data || err.message,
        });
    }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
