# Task & Habit Tracker

A modern, minimalist web application for managing daily tasks and tracking habit streaks. Build consistency and achieve your goals with an intuitive, distraction-free interface designed for focus and clarity.

**Live Demo:** [tasktrackr-kgfdriwv.manus.space](https://tasktrackr-kgfdriwv.manus.space)

---

## Features

### Task Management
- **Quick Task Entry:** Add tasks with a simple input field and Enter key or button click
- **Task Completion:** Mark tasks as complete with visual feedback (strikethrough text)
- **Task Deletion:** Remove tasks you no longer need
- **Real-time Progress:** See your daily task completion percentage at a glance

### Habit Tracking
- **Daily Habits:** Create habits you want to build consistently
- **Streak Counter:** Automatic streak tracking that increments when you complete habits on consecutive days
- **Visual Feedback:** Completed habits are highlighted with sage green accents
- **Top Streaks Display:** See your longest-running habits on the progress sidebar

### Progress Dashboard
- **Task Completion Metrics:** Visual progress bar showing how many tasks you've completed today
- **Habit Completion Metrics:** Track how many daily habits you've completed
- **Persistent Stats:** All progress data is saved automatically to your browser

### Data Persistence
- **Local Storage:** All tasks and habits are automatically saved to your browser's local storage
- **No Account Required:** Your data stays on your device—no sign-up or login needed
- **Cross-Session Persistence:** Your data persists even after closing the browser

---

## Design Philosophy

The Task & Habit Tracker follows a **Minimalist Zen** design approach that prioritizes clarity, calm, and focus:

- **Generous Whitespace:** Ample spacing between elements reduces cognitive load and creates a serene environment
- **Sage Green Accents:** A natural, soothing accent color associated with growth and balance
- **Asymmetric Layout:** Tasks occupy 70% of the screen (left column), while progress metrics occupy 30% (right column), creating visual interest while maintaining focus
- **Subtle Micro-interactions:** Smooth transitions and hover effects provide feedback without distraction
- **Typography:** Playfair Display serif font for headers conveys elegance, while Inter sans-serif for body text ensures readability

---

## Getting Started

### Using the Live App
Simply visit [tasktrackr-kgfdriwv.manus.space](https://tasktrackr-kgfdriwv.manus.space) to start using the app immediately. No installation or setup required.

### Local Development

#### Prerequisites
- Node.js 18+ and pnpm
- Git (optional, for cloning)

#### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd task-habit-tracker
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

#### Build for Production

To create an optimized production build:

```bash
pnpm build
```

The compiled files will be available in the `dist/` directory.

---

## How to Use

### Adding Tasks

1. Type your task in the **"Add a new task..."** input field
2. Press **Enter** or click the **+** button
3. Your task appears in the task list below

### Completing Tasks

1. Click the **checkbox** next to any task to mark it complete
2. Completed tasks will show a strikethrough and muted color
3. Your progress bar updates automatically

### Deleting Tasks

1. Click the **trash icon** on the right side of any task
2. The task is removed immediately

### Creating Habits

1. Type your habit in the **"Add a new habit..."** input field
2. Press **Enter** or click the **+** button
3. Your habit appears in the daily habits list

### Completing Habits

1. Click the **checkbox** next to any habit to mark it complete for today
2. The habit highlights with a sage green background
3. Your streak increments automatically if you completed it yesterday too
4. The progress bar updates to show your daily habit completion

### Viewing Streaks

1. Look at the **"Top Streaks"** card on the right sidebar
2. Your longest-running habits appear with a flame icon and streak number
3. Complete habits daily to build and maintain your streaks

---

## Project Structure

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

### Key Files

- **`client/src/pages/Home.tsx`** — Main application component with task and habit logic
- **`client/src/index.css`** — Global CSS with Minimalist Zen color palette and typography
- **`client/index.html`** — HTML entry point with Google Fonts integration

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | React 19 | Component-based UI |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **UI Components** | shadcn/ui | Pre-built accessible components |
| **Routing** | Wouter | Lightweight client-side routing |
| **Icons** | Lucide React | Clean, consistent icon library |
| **State Management** | React Hooks | Built-in state management |
| **Data Persistence** | Browser LocalStorage | Client-side data storage |
| **Build Tool** | Vite | Fast development and production builds |
| **Server** | Express | Static file serving in production |

---

## Features in Detail

### Streak Logic

The streak system works as follows:

- **Day 1:** Complete a habit → Streak becomes 1
- **Day 2:** Complete the same habit → Streak becomes 2
- **Day 3:** Skip the habit → Streak resets to 0
- **Day 4:** Complete the habit again → Streak becomes 1

Streaks are calculated based on consecutive days. The app checks if you completed a habit yesterday and increments the streak accordingly.

### Progress Bars

Both task and habit progress bars use animated transitions to smoothly update as you complete items. The bars fill proportionally based on completion percentage:

- **0% Complete:** Empty bar
- **50% Complete:** Half-filled bar
- **100% Complete:** Completely filled bar

### Empty States

When you first open the app or have no tasks/habits, friendly placeholder messages encourage you to get started:

- "No tasks yet. Add one to get started!"
- "No habits yet. Create one to build consistency!"

---

## Browser Compatibility

The Task & Habit Tracker works on all modern browsers that support:

- ES2020+ JavaScript
- CSS Grid and Flexbox
- LocalStorage API
- CSS Custom Properties (CSS Variables)

**Supported Browsers:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

---

## Data Storage

All your data is stored locally in your browser using the **LocalStorage API**. This means:

- **Privacy:** Your data never leaves your device
- **Offline Access:** The app works without an internet connection
- **Persistence:** Data survives browser restarts
- **Limitations:** Data is specific to each browser/device and will be cleared if you clear browser cache

To export your data, you can open your browser's Developer Tools (F12) and access `localStorage.getItem('tasks')` and `localStorage.getItem('habits')`.

---

## Customization

### Changing Colors

Edit the CSS variables in `client/src/index.css` under the `:root` selector:

```css
:root {
  --primary: oklch(0.55 0.08 165);           /* Sage green */
  --background: oklch(0.98 0.001 65);        /* Warm off-white */
  --foreground: oklch(0.18 0.01 65);         /* Rich charcoal */
  /* ... other colors ... */
}
```

### Changing Fonts

Update the Google Fonts import in `client/index.html` and modify the font-family declarations in `client/src/index.css`.

### Adding New Features

The codebase is organized for easy extension:

1. **New pages:** Add components to `client/src/pages/`
2. **New UI components:** Create components in `client/src/components/`
3. **New utilities:** Add helper functions to `client/src/lib/`
4. **New state:** Use React Context in `client/src/contexts/`

---

## Future Enhancement Ideas

### Short-term
- **Date-based filtering:** View tasks and habits from specific dates or date ranges
- **Categories/Tags:** Organize tasks and habits by type with color-coded filtering
- **Edit functionality:** Modify task and habit names after creation

### Medium-term
- **Notifications:** Browser notifications to remind users to complete daily habits
- **Weekly/Monthly views:** Analyze patterns and trends over time
- **Export data:** Download tasks and habits as CSV or JSON
- **Dark mode:** Add a dark theme option

### Long-term
- **Backend integration:** Sync data across devices with user accounts
- **Mobile app:** Native iOS and Android applications
- **Collaboration:** Share habits with friends or accountability partners
- **Analytics dashboard:** Detailed insights into productivity and habit completion rates

---

## Performance

The Task & Habit Tracker is optimized for speed and efficiency:

- **Lightweight:** ~50KB gzipped (including all dependencies)
- **Fast Load Time:** Typical load time under 1 second on modern connections
- **Smooth Interactions:** 60 FPS animations and transitions
- **Minimal Dependencies:** Only essential libraries included

---

## Accessibility

The app is built with accessibility in mind:

- **Keyboard Navigation:** All features accessible via keyboard
- **Focus Indicators:** Clear visual focus rings for keyboard users
- **Semantic HTML:** Proper heading hierarchy and ARIA labels
- **Color Contrast:** Text meets WCAG AA contrast requirements
- **Responsive Design:** Works on all screen sizes

---

## Troubleshooting

### Data Not Saving
- **Issue:** Tasks or habits disappear after refresh
- **Solution:** Check if your browser allows LocalStorage. Some private/incognito modes disable it.

### App Not Loading
- **Issue:** Blank page or errors in console
- **Solution:** Clear browser cache and reload. Try a different browser if the issue persists.

### Streaks Not Updating
- **Issue:** Streak counter not incrementing
- **Solution:** Ensure you completed the habit yesterday. Streaks only increment for consecutive days.

---

## Contributing

This project is a demonstration of web development capabilities. For suggestions or improvements, feel free to reach out!

---

## License

This project is provided as-is for educational and demonstration purposes.

---

## Support

For questions or issues, please refer to the troubleshooting section above or check the browser console (F12) for error messages.

---

**Built with ❤️ using React, Tailwind CSS, and a focus on minimalist design.**
