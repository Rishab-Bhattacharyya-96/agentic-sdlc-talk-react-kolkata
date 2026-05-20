# Agentic Workflows for Enhanced SDLC
## React Kolkata Presentation Kit

A complete 15-minute presentation on AI agents transforming software development, with speaker notes and a live demo.

**Event:** React Kolkata  
**Duration:** 15 minutes + Q&A  
**Topic:** How AI agents are revolutionizing the software development lifecycle

---

## 📂 What's Inside

```
react-kolkata/
├── README.md                              # This file
├── LICENSE                                # MIT License
├── .gitignore                             # Git ignore rules
│
├── agentic-sdlc-presentation.html         # Main presentation (20 slides)
├── SPEAKER_NOTES.md                       # Detailed talking points
├── PRESENTATION_GUIDE.md                  # Complete how-to guide
│
└── demo/                                  # Live demo project
    ├── README.md
    ├── package.json
    ├── .eslintrc.json
    ├── .opencode/
    │   ├── opencode.json
    │   └── agent/
    │       └── linter.md
    └── src/
        └── buggy-code.ts
```

---

## 🚀 Quick Start

### Option 1: View Slides Directly
```bash
# Open in your browser
open agentic-sdlc-presentation.html
```

### Option 2: Serve Locally
```bash
# Using Python
python3 -m http.server 8000

# Or using Node
npx serve .
```
Then visit `http://localhost:8000`

### Option 3: Run the Demo
```bash
cd demo/
npm install
opencode

# In OpenCode TUI:
@linter "Fix all ESLint errors in src/buggy-code.ts"
```

---

## 📖 Files Explained

### **agentic-sdlc-presentation.html** (Main Slides)
20-slide interactive presentation covering:
- The Problem: context-switching and tool fatigue
- What are agents and how they work
- Single-agent autonomous workflows
- Multi-agent orchestration and specialization
- Guardrails and safety mechanisms
- Plugins and custom tools
- Real-world implications for SDLC

**Controls:**
- `→` / `←` — next/previous slide
- `↓` / `↑` — within a section
- `S` — speaker notes (new window)
- `O` — overview/grid view
- `F` — fullscreen

### **SPEAKER_NOTES.md** (Talking Points)
Complete speaker notes with:
- What to say on each slide
- Timing guidance (how long per section)
- Q&A talking points and answers
- Demo script with full walkthrough
- Troubleshooting tips
- Engagement strategies

**Use alongside slides:** Press `S` in reveal.js while presenting

### **PRESENTATION_GUIDE.md** (How-To)
Comprehensive guide covering:
- Full presentation flow (15 minutes breakdown)
- Pre-presentation checklist
- Troubleshooting common issues
- Tips for engaging your audience
- Next steps after the presentation

### **demo/** (Live Demo)
A self-contained demo showing an agent autonomously fixing ESLint errors.

**What it demonstrates:**
1. Real TypeScript code with linting issues
2. Agent identifies violations using ESLint
3. Agent applies fixes
4. Agent verifies with ESLint
5. Result: clean code, zero manual work

See `demo/README.md` for detailed instructions.

---

## 📊 Presentation Structure (15 minutes)

| Section | Duration | Slides |
|---------|----------|--------|
| **Intro & Problem** | 2.5 min | 1-4 |
| **Understanding Agents** | 5 min | 5-12 |
| **Safety & Integration** | 2 min | 13-17 |
| **Recap & CTA** | 1.5 min | 18-19 |
| **Live Demo** | 5 min | 20 + demo/ |
| **Q&A** | 1-2 min | — |
| **TOTAL** | ~15 min | — |

---

## ✅ Pre-Presentation Checklist

- [ ] Verify OpenCode is installed: `which opencode`
- [ ] Test the demo locally:
  ```bash
  cd demo && npm install && opencode
  ```
- [ ] Practice slides once (read through SPEAKER_NOTES.md)
- [ ] Check internet connection (for reveal.js CDN)
- [ ] Optional: Download reveal.js locally as backup
- [ ] Have terminal ready for live demo

---

## 🎯 Key Talking Points

**What is this about?**
- AI agents that own entire workflows, not just code snippets
- Autonomous execution with full codebase context
- Multi-agent systems for specialized, parallelized work
- Safety mechanisms (guardrails, plugins, audit logs)

**Why should React Kolkata care?**
- Context-switching kills productivity (we all do it)
- Agents free developers from repetitive tasks
- More time for creative problem-solving
- SDLC is entering the agentic era—early adopters will ship faster

**The Demo:**
- Shows a real agent fixing real code issues
- Autonomous, no manual back-and-forth
- Verified with ESLint, truly working code
- This is what next-gen development looks like

---

## 🛠️ Technical Details

### Presentation Framework
- **reveal.js** (v4.5.0) via CDN
- Vanilla HTML/CSS (no build step required)
- Responsive design (works on any screen size)

### Demo Project
- **Node.js** with ESLint
- **OpenCode** agents (local configuration)
- Standalone, runnable in 30 seconds

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 14+ (for demo only)
- OpenCode CLI (`brew install anomalyco/tap/opencode`)

---

## 📚 Resources & Links

- **OpenCode Documentation:** https://opencode.ai/docs/agents
- **Building Effective Agents:** https://www.anthropic.com/engineering/building-effective-agents
- **Multi-Agent Research:** https://www.anthropic.com/engineering/multi-agent-research-system
- **ESLint:** https://eslint.org/docs

---

## 🤝 How to Use This Kit

### For Your React Kolkata Presentation
1. Read through SPEAKER_NOTES.md (5 min)
2. Read PRESENTATION_GUIDE.md (2 min)
3. Practice with demo locally (5 min)
4. Open slides and present (15 min)
5. Run demo live (5 min)

### To Customize
- Edit `agentic-sdlc-presentation.html` to add React Kolkata branding
- Replace demo code with your own codebase examples
- Add company/community-specific agents to demo

### To Share After
- Export slides to PDF (if needed)
- Share the entire `react-kolkata/` folder
- Include demo setup instructions for attendees
- Post video recording if captured

---

## 💡 Pro Tips

1. **Let the demo shine:** Don't rush it. The live execution is the most compelling part.

2. **Make it personal:** Reference your own experiences with context-switching and tool fatigue.

3. **Ask questions:** "Who here uses 5+ dev tools in a day?" Build rapport with the audience.

4. **Leave them wanting more:** End with CTA (slide 19) and actionable next steps.

5. **Handle interruptions:** Use `O` key for overview, jump to any slide with number keys.

---

## 📝 License

MIT License - You're free to remix, adapt, and use these materials for your own presentations.

---

## 🚦 Getting Started

### Step 1: View the Presentation
```bash
open agentic-sdlc-presentation.html
```

### Step 2: Read the Notes
```bash
cat SPEAKER_NOTES.md
```

### Step 3: Test the Demo
```bash
cd demo
npm install
opencode
# Type: @linter "Fix all ESLint errors in src/buggy-code.ts"
```

### Step 4: Present!
```bash
# Open slides and start presenting
open agentic-sdlc-presentation.html
# Press S to open speaker notes alongside
```

---

**Ready to show the future of SDLC to React Kolkata? Let's go! 🚀**

For questions or issues, refer to PRESENTATION_GUIDE.md or SPEAKER_NOTES.md.
