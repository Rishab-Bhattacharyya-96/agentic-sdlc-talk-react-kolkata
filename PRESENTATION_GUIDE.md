# Presentation Guide: Agentic Workflows for Enhanced SDLC
## Complete How-To Guide for React Kolkata

This guide walks you through every aspect of delivering the 15-minute presentation.

---

## 📋 Files Overview

| File | Purpose | Size |
|------|---------|------|
| `README.md` | Quick start & overview | Main entry point |
| `agentic-sdlc-presentation.html` | 20-slide interactive presentation | Main presentation |
| `SPEAKER_NOTES.md` | Detailed talking points for each slide | Reference while presenting |
| `PRESENTATION_GUIDE.md` | This file - complete how-to guide | Planning & execution |
| `demo/` | Standalone demo project | Live demo during presentation |

---

## 🚀 Quick Setup (5 minutes)

### 1. Test Everything Locally

```bash
# Navigate to react-kolkata directory
cd /Users/jayanta/react-kolkata

# Open presentation
open agentic-sdlc-presentation.html

# Test the demo
cd demo
npm install
opencode
# In TUI: @linter "Fix all ESLint errors in src/buggy-code.ts"
```

### 2. Read the Speaker Notes

```bash
cat SPEAKER_NOTES.md
# Read through once (5 minutes)
```

### 3. Practice Once

- Go through the slides once
- Read the notes alongside
- Time yourself on the demo

---

## 📊 Full Presentation Flow (15 minutes)

### Part 1: Setup & Welcome (1 min)
**Time: 0:00 - 1:00**

1. Open slides in fullscreen: `agentic-sdlc-presentation.html`
2. Display slide 1 (Title)
3. Greet the audience: "Hi React Kolkata! Thanks for being here."
4. Move to slide 2 (Agenda)

**What to say:**
- Welcome and introduce the topic
- "We're going to cover how AI agents are revolutionizing how we build software"
- Show the agenda slide

---

### Part 2: The Problem (1.5 min)
**Time: 1:00 - 2:30**

**Slides 3-4:**
- Establish the pain point: context-switching
- Show real costs: 40% of time, context loss, mental overhead
- Build empathy: "This is what I experience too"

**Talk track:**
- Slide 3: "How many of you jump between 5+ tools in a day?"
- Show the typical workflow
- Mention the 40% statistic
- Slide 4: "Here's what we actually lose when we switch..."
- List the types of context lost
- **Key message:** "There's a better way"

---

### Part 3: What Are Agents? (2 min)
**Time: 2:30 - 4:30**

**Slides 5-6:**
- Define agents in plain English
- Show the agent loop (Think → Act → Observe → Repeat)
- Demystify the concept

**Talk track:**
- Slide 5: "An agent isn't magic. It's an AI system that can plan, act, and use tools."
- Break down the components: brain (LLM), tools, loop, memory
- Slide 6: "Here's how it works in practice"
- Walk through the diagram step-by-step
- **Key message:** "Agents maintain context throughout the entire process"

---

### Part 4: Single Agent Workflows (3 min)
**Time: 4:30 - 7:30**

**Slides 7-9:**
- Show a concrete example
- Build excitement about autonomous execution
- Connect to their daily work

**Talk track:**
- Slide 7: "Let's see this in practice with a real example: Fix all TypeScript type errors"
- "The agent reads all files, identifies issues, fixes them, runs tests, creates a PR"
- "All without you doing anything except hitting enter"
- Slide 8: "Here's the flow..."
- Walk through the diagram
- Slide 9: "Why does this matter?"
- Hit on each benefit: speed, context, iteration, reasoning
- **Key message:** "This is autonomous development, not just code generation"

---

### Part 5: Multi-Agent Orchestration (2.5 min)
**Time: 7:30 - 10:00**

**Slides 10-12:**
- Address the limitation of single agents
- Introduce specialization and parallelization
- Show how teams work together

**Talk track:**
- Slide 10: "But here's the thing: one agent can't be an expert in everything"
- "Imagine adding user authentication to your app"
- "That's frontend + backend + database + testing"
- Slide 11: "So we use multiple agents working together"
- "An orchestrator agent coordinates specialized agents"
- "And here's the key: they work in parallel"
- Slide 12: "Why is this powerful?"
- Hit on specialization, parallelization, accuracy, scalability
- **Key message:** "Agents that specialize are faster and more accurate"

---

### Part 6: Safety & Guardrails (2 min)
**Time: 10:00 - 12:00**

**Slides 13-15:**
- Address the elephant in the room: what could go wrong?
- Show that we've thought about safety
- Build confidence

**Talk track:**
- Slide 13: "This all sounds great, but there's a risk we need to talk about"
- "Agents can be confidently wrong (hallucinations)"
- "What could go wrong?"
- List the risks
- Slide 14: "So how do we fix this?"
- Walk through each guardrail: plugins, allowlists, audit logs, human-in-loop
- Slide 15: "Here's a concrete example"
- Walk through the code
- "Before the agent acts, it validates that the Jira ticket exists"
- "If not, it halts"
- **Key message:** "Safety is built-in, not bolted-on"

---

### Part 7: The Big Picture (1 min)
**Time: 12:00 - 13:00**

**Slides 16-17:**
- Show how plugins extend the system
- Connect all the pieces together
- Build the vision

**Talk track:**
- Slide 16: "You can extend agents with custom tools and plugins"
- "Imagine adding Jira integration, Slack notifications, database queries"
- Slide 17: "Here's how it all comes together"
- Walk through the diagram
- "Task comes in → orchestrator delegates → agents work → guardrails validate → coordinated delivery"
- **Key message:** "This is a complete system, not just a cool trick"

---

### Part 8: Recap & Call to Action (1.5 min)
**Time: 13:00 - 14:30**

**Slides 18-19:**
- Reinforce the key points
- Give them actionable next steps
- Make it easy to try

**Talk track:**
- Slide 18: "Let me recap the four key takeaways"
- Read through each one
- Emphasize that this is the future of SDLC
- Slide 19: "Here's how to get started"
- Show the install command
- "Try it on your next sprint"
- Make it personal: "This is real technology that's available now"
- **Key message:** "Agents are production-ready today"

---

### Part 9: Live Demo (5 min)
**Time: 14:30 - 19:30**

**Slide 20 + Demo Project:**
- This is the most compelling part
- Don't rush it
- Let the magic speak for itself

**Demo talk track:**

**Setup (30 sec):**
```
"Now, let me show you this in action. 
I have a TypeScript file with intentional linting issues.
Normally, you'd run ESLint, read the errors, 
fix each one manually, run ESLint again.
Takes 5-10 minutes.
Watch how an agent handles it."
```

**Run agent (2-3 min):**
```bash
cd demo
open src/buggy-code.ts
# Show the buggy code

npm run lint
# Show the lint errors

opencode
# In the TUI:
@linter "Fix all ESLint errors in src/buggy-code.ts"
```

**Talk through (silent observation):**
- "The agent is reading the file..."
- "Identifying the violations..."
- "Applying fixes..."
- "Verifying with ESLint..."

**Verify result (1 min):**
```bash
cat src/buggy-code.ts
# Show the fixed code

npm run lint
# Show "0 errors"

git log --oneline
# Show the agent created a commit
```

**Conclusion (30 sec):**
```
"In about 30 seconds, with zero manual intervention:
- The agent read the code
- Understood the lint rules  
- Fixed all issues
- Verified the fixes
- Created a commit

This is autonomous SDLC.
This is what the future looks like."
```

---

### Part 10: Q&A (1-2 min)
**Time: 19:30 - 20:30+**

- Open the floor for questions
- Use the Q&A talking points from SPEAKER_NOTES.md
- Be honest about limitations
- Share your vision for the future

---

## ✅ Pre-Presentation Checklist

**Before you present:**

- [ ] **Test locally** (15 min)
  - Open slides in browser
  - Run through once
  - Test demo setup
  
- [ ] **Read speaker notes** (5 min)
  - Full read-through
  - Highlight key points for you
  
- [ ] **Verify tools** (5 min)
  - OpenCode installed: `which opencode`
  - Node/npm available: `npm --version`
  - Terminal ready and positioned
  
- [ ] **Check environment**
  - Internet connection (for reveal.js CDN)
  - Display working properly
  - Screen mirroring/projector tested
  
- [ ] **Have backup plan**
  - Screenshots of demo output
  - Local copy of reveal.js (if internet fails)
  - Printed speaker notes
  
- [ ] **Timing** (very important)
  - Practice the whole thing once
  - Aim for 14 minutes of content
  - Leave 1-2 minutes for Q&A

---

## 🎯 Tips for a Great Presentation

### 1. Tell a Story
Don't just list features. Structure as a narrative:
- **Problem**: Context-switching kills productivity
- **Solution**: Agents maintain full context
- **Reality**: Multi-agent systems scale
- **Safety**: Guardrails make it trustworthy
- **Proof**: Live demo shows it works

### 2. Make It Personal
- "I spend 40% of my day jumping between tools too"
- "Here's what it costs us as a team"
- "This is how agents help"
- Reference their own experience

### 3. Let the Demo Shine
- Don't rush through it
- Let silence speak when the agent is working
- Let the audience see the magic
- Pause for effect when it's done
- "That's the future of SDLC"

### 4. Engage the Audience
- Ask questions: "Who uses Jira + GitHub + VS Code + Terminal?"
- Poll: "Who thinks this is science fiction?"
- Address concerns: "I get it, this sounds risky. Let me show you how we make it safe."
- Make eye contact

### 5. Handle Interruptions Gracefully
- Reveal.js keyboard shortcuts:
  - `O` = overview (jump to any slide)
  - Number + Enter = jump to slide
  - `→` / `←` = forward/backward
- Have answers ready for common questions
- Don't get defensive about limitations

---

## 🛠️ Troubleshooting

### Slides won't load
**Problem:** Browser shows blank page or errors  
**Solution:** 
- Check internet (reveal.js uses CDN)
- Open developer console (F12) for errors
- Try a different browser

### Demo fails
**Problem:** OpenCode not found or agent doesn't work  
**Solution:**
- Verify install: `which opencode`
- Check config: `cd demo && opencode config show`
- Show screenshots as backup

### Timing is off
**Problem:** Running over 15 minutes  
**Solution:**
- Cut slides 16-17 (combine into 1)
- Use slides 18 as full recap
- Focus demo on the essentials

### Audio/Video issues
**Problem:** Terminal not visible from back of room  
**Solution:**
- Use terminal zoom: `defaults write com.apple.Terminal "Default Window Settings" -string Pro` (Mac)
- Or: `ctrl + scroll up` to zoom in real-time
- Have large font ready: `cmd + +` repeatedly

### Projector not working
**Problem:** Can't mirror screen or external display  
**Solution:**
- Run through slides on your laptop
- Have screenshots of demo ready
- Describe what you would show
- Share slides after event

---

## 📈 What to Expect from Audience

**Initial reaction (Slides 3-4):**
- Nods of recognition (they experience context-switching)
- Engagement increases as pain point is established

**During agent explanation (Slides 5-6):**
- Some skepticism ("Is this really possible?")
- Curiosity ("How does this actually work?")
- Questions starting to form

**During single agent (Slides 7-9):**
- Growing interest
- More attention
- "I could use this for..."

**During demo (Slides 20 + Demo):**
- Most engaged moment
- Silence while watching
- Visible excitement when it works
- Energy shift—"This is real"

**Post-presentation:**
- Questions about getting started
- Interest in OpenCode documentation
- Some people may want to try it immediately

---

## 🎁 Give-Aways / Follow-Up

**During presentation:**
- Mention: "You can get all these materials at [link]"
- Show the repo structure
- Explain: "Everything is here: slides, notes, demo"

**After presentation:**
- Share your email for questions
- Provide link to OpenCode docs
- Post the slides online
- Share the demo project
- Offer to help someone get started

---

## 📺 Recording Tips (If Applicable)

If you record this:
- Position camera to capture both you and screen
- Use external mic for better audio
- Test recording before going live
- During demo, narrate what the agent is doing
- Edit out dead time or technical issues

---

## 🎯 Success Metrics

A great presentation if:
- ✅ Audience laughs at the context-switching problem (they relate)
- ✅ Energy increases noticeably during demo
- ✅ Multiple hands up for Q&A
- ✅ People approach you after to talk about trying it
- ✅ Positive feedback mentions "I didn't know this was possible"

---

## 📞 Need Help?

- **OpenCode docs:** https://opencode.ai/docs/agents
- **Anthropic's guide:** https://www.anthropic.com/engineering/building-effective-agents
- **Our resources:** Check README.md for additional links

---

**You've got this! The presentation is solid, the demo works, and the message is clear. Go show React Kolkata the future of SDLC! 🚀**
