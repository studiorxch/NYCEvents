// index.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = '1e42cf81cbcb802aa703f5a1506f1a78';

app.get('/', (_req, res) => {
    res.send('NYC Events API is live. POST /api/add-event to create.');
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
            cost,
            eventType,
            platformLink,
            source,
            perks,
            weatherSuitable,
            crowdLevel,
            description,
            notes,
            tag,
            aiSummary,
            studioNotes,
            status
        } = req.body;

        // Defaults
        const statusValue = status || 'Not started';
        const soundOptions = (soundVibe || '').split(',').map(v => ({ name: v.trim() }));
        const costOptions = (cost || '').split(',').map(c => ({ name: c.trim() }));
        const tagText = tag || '';

        const properties = {
            'Event Name': { title: [{ text: { content: title } }] },
            'Date': { date: { start: date } },
            'Time': { rich_text: [{ text: { content: time } }] },
            'Event Type': { select: { name: eventType } },
            'Borough': { select: { name: borough } },
            'Location': { rich_text: [{ text: { content: location } }] },
            'Google Maps': { url: mapsLink },
            'Sound Vibe': { multi_select: soundOptions },
            'Cost': { multi_select: costOptions },
            'Platform Link': { url: platformLink },
            'Source': { url: source },
            'Perks': { rich_text: [{ text: { content: perks } }] },
            'Weather Suitable': { select: { name: weatherSuitable } },
            'Expected Crowd Level': { select: { name: crowdLevel } },
            'Description': { rich_text: [{ text: { content: description } }] },
            'Notes': { rich_text: [{ text: { content: notes } }] },
            'Tag': { rich_text: [{ text: { content: tagText } }] },
            'AI summary': { rich_text: [{ text: { content: aiSummary } }] },
            'studioNotes': { rich_text: [{ text: { content: studioNotes } }] },
            'Status': { status: { name: statusValue } },
        };

        const response = await axios.post(
            'https://api.notion.com/v1/pages',
            { parent: { database_id: DATABASE_ID }, properties },
            {
                headers: {
                    'Authorization': `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).json({ message: 'Event added!', data: response.data });
    } catch (err) {
        console.error('Notion error:', err.response?.data || err.message);
        res.status(err.response?.status || 500).json({
            error: err.response?.data || err.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
