# NYCEvents

🗽 **NYCEvents** is a lightweight Node.js + Express backend that logs curated NYC art and music events directly into your Notion database — ideal for field recording, lo-fi culture, and weekend soundscouting.

---

## 🚀 Features

- Adds events to your Notion calendar via a single `POST` endpoint
- Supports full metadata schema: date, borough, sound vibe, tags, summaries
- Built for StudioRich’s **Side B: NYC Weekends** and field recording curation

---

## 🛠️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/studiorxch/nycevents.git
cd nycevents
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file at the root:

```env
NOTION_API_KEY=your_notion_secret_key
PORT=3000
```

> Your Notion integration must have access to the target database.

---

## ▶️ Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to confirm it’s live.

---

## 📬 API Usage

### Add an event

`POST /api/add-event`

#### Example body:

```json
{
  "title": "TSQ LIVE: Adam Melchor in Times Square",
  "date": "2025-05-09",
  "time": "6:00 PM",
  "borough": "Manhattan",
  "location": "Times Square, Broadway & 46th St",
  "mapsLink": "https://maps.google.com/?q=Times+Square+Broadway+%2646th+St+NYC",
  "soundVibe": "Live DJ, Ambient noise",
  "cost": "Free",
  "eventType": "Music Event",
  "eventFormat": "In-Person",
  "tags": "Lo-fi Friendly, Cultural",
  "aiSummary": "Free concert in Times Square featuring Adam Melchor, ideal for ambient field capture.",
  "studioNotes": "Mic near bleachers for crowd blend. Avoid curb zone traffic bleed.",
  "status": "Not started"
}
```

---

## 🌐 Deploy to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial NYCEvents API"
git push origin main
```

### 2. Deploy on Vercel

```bash
vercel --prod
```

> Make sure to add your `NOTION_API_KEY` as an **Environment Variable** in your [Vercel Dashboard](https://vercel.com/dashboard).

---

## 📒 Notion Schema

**Database ID:** `1e42cf81cbcb802aa703f5a1506f1a78`  
**Fields supported:**

- Event Name (title)
- Date (date)
- Time (string)
- Borough (select)
- Location (string)
- Google Maps (url)
- Sound Vibe (multi-select)
- Cost (multi-select)
- Weather Suitable (select)
- Expected Crowd Level (select)
- Event Type (select)
- Event Format (select)
- Platform Link (url)
- Tags (multi-select)
- AI Summary (rich text)
- studioNotes (rich text)
- Status (select)

---

## 📖 License

MIT — Adapt freely for creative cultural use.



🔥 

curl -X POST http://localhost:3000/api/add-event \
  -H "Content-Type: application/json" \
  -d @event1.json

