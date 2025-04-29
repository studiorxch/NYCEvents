**NYC Events GPTKnowledge Base: StudioRich NYC Events Assistant** Admin Only 
last updated April 28, 2025
---

### **1. Notion Schema Reference**

**Database ID:** `1e42cf81cbcb802aa703f5a1506f1a78`  
 **API Endpoint:** `https://nycevents-auanrxqjy-studiorich.vercel.app/api/add-event`

**Fields:**

* `Event Name` (title) — string
* `Date` — date (YYYY-MM-DD)
* `Time` — string (e.g., "5:30 PM – 8:30 PM" or "TBA")
* `Borough` — select (Brooklyn, Manhattan, Queens, Bronx, Staten Island)
* `Location` — string
* `Google Maps` — URL
* `Sound Vibe` — multi-select (e.g., Ambient noise, Live DJ, Kids, Drums)
* `Perks` — text (free food, giveaways, etc.)
* `Weather Suitable` — select (Good for outdoors, Indoor only, Neutral)
* `Expected Crowd Level` — select (Low, Medium, High)
* `Event Type` — select (Park Event, Music Event, Film, Workshop, Community Event, Museum, Garden Tour)
* `Event Format` — select (In-Person, Online, Hybrid)
* `Platform Link` — URL (if online)
* `Tags` — multi-select (e.g., Lo-fi Friendly, Cultural, Family-Friendly, Experimental)
* `AI Summary` — public-facing summary (rich text)
* `studioNotes` — internal sound-based notes (rich text)
* `Status` — select (Interested, else... )

---

### **2\. Trusted Event Sources**

When browsing or scraping, prioritize:

* [https://nycgovparks.org/events](https://nycgovparks.org/events)

* [https://timessquarenyc.org/whats-happening/tsq-live](https://timessquarenyc.org/whats-happening/tsq-live)

* [https://www.moma.org/calendar/events](https://www.moma.org/calendar/events)

* [https://centralpark.com/topics/free-events](https://centralpark.com/topics/free-events)

* [https://dice.fm](https://dice.fm/) (tagged as "free" or "outdoor")

* [https://timeout.com/newyork](https://timeout.com/newyork)

* [https://eventbrite.com](https://eventbrite.com/) (filter by Free \+ NYC \+ This Week)

* [https://nycgo.com/events](https://nycgo.com/events) — NYC & Company’s official tourism site — curated, high-quality event picks.

* [https://theskint.com](https://theskint.com/) — Daily email \+ site focused on free and cheap events across NYC — loved by locals.

* [https://brokelyn.com](https://brokelyn.com/) (archive; sometimes updated) — Events with a Brooklyn spin — good for alternative, quirky, and offbeat listings.

* [https://brooklynrail.org/events](https://brooklynrail.org/events) — Art-heavy events, gallery openings, talks — fits your style if you're seeking culture \+ edge.

* [https://newyorkled.com](https://newyorkled.com/) — Old-school site but still lists free cultural \+ outdoor events consistently.

* [https://secretnyc.co](https://secretnyc.co/) — Trendy experiences, hidden spots, pop-up art — a mix of paid and free.

* [https://creativeboom.com/inspiration/events/](https://creativeboom.com/inspiration/events/) — Not NYC-specific, but global creative event inspiration — worth checking monthly.

* NYC Reddit communities: /r/nyc and /r/AskNYC — Locals often drop lesser-known or underground event gems here.

**🎧 Lo-fi / Chill Music Culture**

* [https://ra.co](https://ra.co/) (Resident Advisor) — Great for chill, underground, and electronic events. Filter by genre/location — not always free but high quality.

* [https://lofigirl.com](https://lofigirl.com/) (Events section – occasionally) — Sometimes collab with physical events/pop-ups. Watch their Discord too.

* Twitch/Youtube/WithFriends:

  * [https://meetup.com](https://meetup.com/) → search for "beat battles" or "producer meetups"

  * [https://withfriends.co](https://withfriends.co/) → independent art \+ music series

**🎮 Video Game Events / Indie Game Dev / eSports**

* [https://indiegamejams.com](https://indiegamejams.com/) — Tracks global \+ local game jams, often collaborative and art-focused.

* [https://igda.org/nyc](https://igda.org/nyc) — International Game Developers Association – NYC Chapter

* [https://babycastles.com](https://babycastles.com/) — DIY arcade/artspace – blends gaming, art, and culture.

* [https://playcrafting.com/events/](https://playcrafting.com/events/) — Local game expos, hands-on showcases, educational sessions.

* [https://grayarea.org](https://grayarea.org/) — Global hybrid events for audio/visual/code

**🎨 Design, Art-Tech, and Creative Code**

* [https://eyeondesign.aiga.org/events/](https://eyeondesign.aiga.org/events/) — Design-focused talks and exhibitions

* [https://design.nyc](https://design.nyc/) — NYC design-related happenings, portfolio nights, and installations

* [https://creativecoding.nyc](https://creativecoding.nyc/) — For generative art, interactive visuals, and p5.js/TouchDesigner artists

* [https://nydesignweek.org](https://nydesignweek.org/) — Official NYC Design Week site

**🎬 Film Events & Indie Screenings**

* [https://rooftopfilms.com](https://rooftopfilms.com/) — Outdoor indie screenings across NYC — summer staple, often free.

* [https://bam.org](https://bam.org/) — Brooklyn Academy of Music: Strong film lineup with indie, world cinema, experimental — they host frequent Asian \+ avant-garde series.

* [https://metrograph.com](https://metrograph.com/) — Luxe indie theater in LES — arthouse, retrospectives, lots of Asian cinema.

* [https://asianamericanfilmfestival.org](https://asianamericanfilmfestival.org/) — Asian American International Film Festival (AAIFF). Long-running NYC fest. Also follow Asian CineVision for year-round events.

* [https://filmfreeway.com/festivals](https://filmfreeway.com/festivals) — Search “NYC” with filters. Great for niche or cultural film fests — good for screenings and submissions.

**🀄️ Asian-Interest Events**

* [https://asianculturalcouncil.org/events](https://asianculturalcouncil.org/events) — Under-the-radar but thoughtful events, performances, and panels.

* [https://flushingtownhall.org](https://flushingtownhall.org/) — Queens-based; tons of Asian arts, music, and culture events — often free or low-cost.

* [https://japansociety.org/events](https://japansociety.org/events) — Sleek film screenings, art exhibits, tech showcases, and cultural talks.

* [https://koreasociety.org/arts-culture](https://koreasociety.org/arts-culture) — Film series, talks, and design workshops — tied to contemporary Korean culture.

* [https://chineseamerican.nyc](https://chineseamerican.nyc/) — Chinese American Arts Council: Community-rooted shows, film, gallery events — includes fusion/experimental work.

**🎛️ Electronic Music & AV Culture**

* [https://residentadvisor.net/events/us/newyork](https://residentadvisor.net/events/us/newyork) — Filter for genres like “ambient,” “dub techno,” “experimental.” Underground and global electronic.

* [https://boilerroom.tv/events](https://boilerroom.tv/events) — Check NYC and US filters. Not frequent but impactful. StudioRich should track these.

* [https://mutek.org](https://mutek.org/) — While based in Montreal, known for global electronic \+ art-tech hybrids — watch for NY collabs or streams.

* [https://meanredproductions.com](https://meanredproductions.com/) — NYC-based promoter of electronic-forward, art-party, and immersive nightlife events.

* [https://thelotradio.com](https://thelotradio.com/) — Brooklyn rooftop station — hosts live events and label collabs.

* [https://voidnyc.space](https://voidnyc.space/) — Underground AV space focused on modular/electronic performance.

### **3\. Sound-Vibe ↔ Tag Mapping**

| Sound Vibe | Tags |
| ----- | ----- |
| Ambient noise | Lo-fi Friendly, Urban |
| Kids | Family-Friendly, Playground |
| Drums | Cultural, Percussion |
| Live DJ | Music Event, Experimental |
| Street traffic | Urban, Field Texture |
| Brass Band | High Energy, Music Event |

**Crowd Level Heuristics:**

* "Festival" or "BBQ" → High  
* Museum/Film → Medium  
* Garden or solo performance → Low

---

### **4\. AI-Summary & studioNotes Style Guide**

**AI Summary (Public):**

* Tone: Informative, inviting, 1–2 sentences.  
* Include: What it is, where, when, why it’s worth attending.

**studioNotes (Internal):**

* Focus: Field recording strategies, mic placement, ambient challenges.  
* Examples:  
  * “Capture low-end from behind vendor stalls.”  
  * “Avoid stage-left; too close to feedback.”  
  * “Echo reflections off nearby buildings at dusk.”

---

### **5\. Borough Quick-Lookup**

| Borough | Includes |
| :---- | :---- |
| Brooklyn | Williamsburg, Bushwick, Park Slope, Coney Island, Bay Ridge, Sunset Park, Dumbo |
| Manhattan | Harlem, Lower East Side, Times Square, Inwood |
| Queens | Long Island City, Flushing, Astoria |
| Bronx | Fordham, Crotona, Riverdale |
| Staten Island | St. George, Tottenville |

---

### **6\. Weather Integration Notes**

**"Good for outdoors"** if:

* No rain forecast  
* Temps above 50°F  
* Wind under 15mph

Sources: weather.com, Apple Weather, or any API endpoint with 3-day forecast support.

---

### **7\. Status Workflow**

* `Going` → User is committed, may receive follow-up tasks  
* `Maybe` → Interesting, not confirmed  
* `Missed` → Event passed or skipped

GPT can update status if user says things like:

“I’ll probably go to that.” → Maybe  
“Mark me as going.” → Going  
“Eh, we missed it.” → Missed

