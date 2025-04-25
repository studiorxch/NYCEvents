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
            title,
            date,
            time,
            borough,
            location,
            mapsLink,
            soundVibe,
            perks,
            weatherSuitable,
            crowdLevel,
            eventType,
            eventFormat,
            platformLink,
            tags,
            aiSummary,
            studioNotes,
            status
        } = req.body;

        // Fallback defaults
        const eventTypeValue = eventType || 'Unknown';
        const eventFormatValue = eventFormat || 'In-Person';
        const statusValue = status || 'Maybe';

        // Build the Notion properties payload
        const properties = {
            'Event Name': { title: [{ text: { content: title } }] },
            'Date': { date: { start: date } },
            'Time': { rich_text: [{ text: { content: time } }] },
            'Event Type': { select: { name: eventTypeValue } },
            'Event Format': { select: { name: eventFormatValue } },
            'Borough': { select: { name: borough } },
            'Location': { rich_text: [{ text: { content: location } }] },
            'Google Maps': { url: mapsLink },
            'Sound Vibe': {
                multi_select: (soundVibe || '')
                    .split(',')
                    .map(v => ({ name: v.trim() }))
            },
            'Perks': { rich_text: [{ text: { content: perks } }] },
            'Weather Suitable': { select: { name: weatherSuitable } },
            'Expected Crowd Level': { select: { name: crowdLevel } },
            'Platform Link': { url: platformLink },
            'Tags': {
                multi_select: (tags || '')
                    .split(',')
                    .map(t => ({ name: t.trim() }))
            },
            'AI Summary': { rich_text: [{ text: { content: aiSummary } }] },
            'studioNotes': { rich_text: [{ text: { content: studioNotes } }] },
            'Status': { select: { name: statusValue } },
        };

        const notionResponse = await axios.post(
            'https://api.notion.com/v1/pages',
            {
                parent: { database_id: DATABASE_ID },
                properties
            },
            {
                headers: {
                    'Authorization': `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).json({ message: 'Event added!', data: notionResponse.data });
    } catch (err) {
        console.error('Notion error:', {
            status: err.response?.status,
            data: err.response?.data,
            message: err.message,
        });
        res.status(err.response?.status || 500).json({
            error: err.response?.data || err.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
