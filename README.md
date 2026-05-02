# 📋 Task & Habit Tracker

> A modern, minimalist web application for managing daily tasks and tracking habit streaks. Build consistency, achieve your goals, and stay focused — all in one distraction-free interface.

🔗 **Live Demo:** [tasktrackr-kgfdriwv.manus.space](https://tasktrackr-kgfdriwv.manus.space)

---

## ✨ Features

### ✅ Task Management
- **Quick Task Entry** — Add tasks instantly with the input field, then press Enter or click **+**
- **Task Completion** — Check off tasks with satisfying visual feedback (strikethrough text)
- **Task Deletion** — Remove tasks you no longer need with one click
- **Real-time Progress** — See your daily task completion percentage at a glance

### 🔥 Habit Tracking
- **Daily Habits** — Create habits you want to build and maintain consistently
- **Streak Counter** — Automatic streak tracking that increments on consecutive days
- **Visual Feedback** — Completed habits are highlighted with calming sage green accents
- **Top Streaks Display** — See your longest-running habits in the progress sidebar

### 📊 Progress Dashboard
- **Task Completion Metrics** — Animated progress bar showing how many tasks you've completed today
- **Habit Completion Metrics** — Track how many of your daily habits are done
- **Persistent Stats** — All progress data is saved automatically to your browser

### 💾 Data Persistence
- **Local Storage** — Tasks and habits are saved automatically — no account required
- **Privacy First** — Your data stays on your device and never leaves it
- **Cross-Session** — Data persists even after closing and reopening the browser

---

## 🎨 Design Philosophy

Task & Habit Tracker follows a **Minimalist Zen** design approach that prioritizes clarity, calm, and focus:

- **Generous Whitespace** — Ample spacing reduces cognitive load and keeps the UI serene
- **Sage Green Accents** — A natural, soothing color palette associated with growth and balance
- **Asymmetric Layout** — Tasks occupy 70% of the screen (left), progress metrics occupy 30% (right)
- **Smooth Micro-interactions** — Subtle transitions and hover effects provide feedback without distraction
- **Elegant Typography** — *Playfair Display* for headers, *Inter* for body text

---

## 🚀 Getting Started

### Using the Live App

Visit the live demo at [tasktrackr-kgfdriwv.manus.space](https://tasktrackr-kgfdriwv.manus.space) — no installation required.

### Local Development

#### Prerequisites
- Node.js 18+
- pnpm

#### Installation

```bash
# 1. Navigate to the project directory
cd task-habit-tracker

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Then open your browser at `http://localhost:3000`.

#### Production Build

```bash
pnpm build
```

Compiled output will be available in the `dist/` directory.

---

## 📖 How to Use

| Action | Steps |
|--------|-------|
| ➕ **Add a task** | Type in the "Add a new task..." field → press **Enter** or click **+** |
| ✅ **Complete a task** | Click the checkbox next to any task |
| 🗑️ **Delete a task** | Click the trash icon on the right side of a task |
| 🌱 **Add a habit** | Type in the "Add a new habit..." field → press **Enter** or click **+** |
| 🔥 **Complete a habit** | Click the checkbox next to a habit to mark it done for today |
| 📈 **View streaks** | Check the **Top Streaks** card in the right sidebar |

---

## 🏗️ Project Structure

```
task-habit-tracker/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main app page
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx              # Route configuration
│   │   ├── main.tsx             # React entry point
│   │   └── index.css            # Global styles & design tokens
│   └── index.html
├── server/
│   └── index.ts                 # Express server (static deployment)
├── shared/
│   └── const.ts
├── package.json
└── README.md
```

**Key files:**
- `client/src/pages/Home.tsx` — Main application logic for tasks and habits
- `client/src/index.css` — Global CSS with the Minimalist Zen color palette and typography
- `client/index.html` — HTML entry point with Google Fonts integration

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| ⚛️ Frontend Framework | React 19 | Component-based UI |
| 🎨 Styling | Tailwind CSS 4 | Utility-first CSS framework |
| 🧩 UI Components | shadcn/ui | Pre-built accessible components |
| 🔀 Routing | Wouter | Lightweight client-side routing |
| 🖼️ Icons | Lucide React | Clean, consistent icon library |
| 🧠 State Management | React Hooks | Built-in state management |
| 💾 Data Persistence | Browser LocalStorage | Client-side data storage |
| ⚡ Build Tool | Vite | Fast development and production builds |
| 🖥️ Server | Express | Static file serving in production |

---

## ⚙️ Feature Details

### 🔥 Streak Logic

| Day | Action | Result |
|-----|--------|--------|
| Day 1 | Complete habit | Streak = **1** |
| Day 2 | Complete habit | Streak = **2** |
| Day 3 | Skip habit | Streak = **0** |
| Day 4 | Complete habit | Streak = **1** |

Streaks increment only for consecutive days. The app checks if you completed a habit yesterday before updating the count.

### 📊 Progress Bars

Both task and habit progress bars animate smoothly as you complete items, filling proportionally based on completion percentage (0% → 50% → 100%).

---

## 🌐 Browser Compatibility

| Browser | Minimum Version |
|---------|----------------|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari / Chrome Mobile | Latest |

---

## 🔒 Data & Privacy

All data is stored locally in your browser via the **LocalStorage API**:

- 🔐 **Private** — Your data never leaves your device
- 📶 **Offline Access** — The app works without an internet connection
- ♻️ **Persistent** — Data survives browser restarts
- ⚠️ **Note** — Data is device/browser specific and will be cleared if you clear your browser cache

To manually export your data, open browser DevTools (`F12`) and run:
```javascript
localStorage.getItem('tasks')
localStorage.getItem('habits')
```

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: oklch(0.55 0.08 165);      /* Sage green */
  --background: oklch(0.98 0.001 65);   /* Warm off-white */
  --foreground: oklch(0.18 0.01 65);    /* Rich charcoal */
}
```

### Changing Fonts

Update the Google Fonts import in `client/index.html` and the `font-family` declarations in `client/src/index.css`.

---

## 🗺️ Roadmap

### 🔜 Short-term
- [ ] Date-based task filtering
- [ ] Categories & color-coded tags
- [ ] Edit task/habit names after creation

### 🔮 Medium-term
- [ ] Browser notifications for daily habit reminders
- [ ] Weekly and monthly analytics views
- [ ] CSV / JSON data export
- [ ] Dark mode

### 🚀 Long-term
- [ ] Backend sync with user accounts
- [ ] Native iOS & Android apps
- [ ] Accountability partner features
- [ ] Detailed productivity analytics dashboard

---

## ⚡ Performance

- **~50KB** gzipped (all dependencies included)
- **< 1s** typical load time on modern connections
- **60 FPS** animations and transitions
- Minimal dependency footprint

---

## ♿ Accessibility

- Full keyboard navigation support
- Visible focus indicators for keyboard users
- Semantic HTML with proper heading hierarchy and ARIA labels
- WCAG AA color contrast compliance
- Fully responsive across all screen sizes

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Data not saving after refresh | Check if your browser allows LocalStorage (disabled in some private/incognito modes) |
| App shows blank page | Clear browser cache and reload; try a different browser |
| Streaks not incrementing | Ensure you completed the habit on the previous day — streaks require consecutive days |

---

## 📄 License

This project is provided as-is for educational and demonstration purposes.

---

<div align="center">
  <strong>Built with ❤️ using React, Tailwind CSS, and a passion for minimalist design.</strong>
</div>
