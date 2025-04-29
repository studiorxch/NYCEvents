# NYCEvents Backend

**NYCEvents** is a Node.js + Express API that logs free public NYC events directly into your Notion database.  
It powers the RadarGPT/StudioRich event workflow by handling extended metadata like sound vibes, AI summaries, and field-recording notes.

---

## 🚀 Features

- **Add events** via a single POST endpoint (`/api/add-event`).
- Supports full Notion schema:
  - Event Name, Date, Time
  - Borough, Location, Google Maps link
  - Sound Vibe (multi-select), Perks
  - Weather Suitable, Expected Crowd Level
  - Event Type, Event Format
  - Platform Link, Tags
  - AI Summary (public), studioNotes (internal)
  - Status (multi-select): Interested (expandable later)

---

## 🛠️ Prerequisites

- **Node.js** v16 or higher
- A **Notion integration** and **API key**
- A Notion database with ID: `1e42cf81cbcb802aa703f5a1506f1a78`

---

## 🔧 Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/studiorxch/NYCEvents.git
   cd NYCEvents
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Environment variables**
   Create a `.env` file in the project root with:
   ```env
   NOTION_API_KEY=<your_notion_api_key>
   PORT=3000   # (optional)
   ```

---

## 🏃 Development

Start the local server:
```bash
npm run dev
```
Visit `http://localhost:3000` for a health check.

---

## 📚 API Endpoints

### GET `/`
- **Description:** Health check
- **Response:** `NYC Events API is live. Use POST /api/add-event to submit.`

### POST `/api/add-event`
- **Description:** Add a new NYC event into Notion
- **Content-Type:** `application/json`
- **Body schema:**
  ```json
  {
    "title": "Event Name",
    "date": "2025-05-01",
    "time": "5:00 PM – 8:00 PM",
    "borough": "Brooklyn",
    "location": "Prospect Park, Brooklyn",
    "mapsLink": "https://maps.google.com/...",
    "soundVibe": "Ambient noise, Live DJ",
    "perks": "Free drinks",
    "weatherSuitable": "Good for outdoors",
    "crowdLevel": "High",
    "eventType": "Music Event",
    "eventFormat": "In-Person",
    "platformLink": "https://twitch.tv/...",
    "tags": "Lo-fi Friendly, Cultural",
    "aiSummary": "Short public-facing blurb",
    "studioNotes": "Internal mic placement tips",
    "status": "Interested"
  }
  ```
- **Success:** HTTP 200 + JSON response with Notion API data
- **Errors:** HTTP 4XX/5XX with error details

---

## 🌐 Deployment

Push your changes and deploy to Vercel:
```bash
git add .
git commit -m "NYC Events"
git push
vercel --prod
```

Once deployed, your live API URL will be in the Vercel dashboard.

---

## 📖 License

Licensed under MIT. Feel free to adapt for your own events workflows!

---
