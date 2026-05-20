# Quick Reference: Push to GitHub & Deploy

## TL;DR - Three Commands

```bash
# 1. Add remote
git -C /Users/jayanta/react-kolkata remote add origin https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata.git

# 2. Rename branch to main
git -C /Users/jayanta/react-kolkata branch -M main

# 3. Push (will ask for token - paste it!)
git -C /Users/jayanta/react-kolkata push -u origin main
```

## Before You Run These:

1. ✅ **Create repo on GitHub** (or use `gh repo create` command)
2. ✅ **Get Personal Access Token** from https://github.com/settings/tokens
3. ✅ **Have token ready** to paste when prompted

## After Push:

1. Go to: Settings → Pages
2. Select: `main` branch, `/root` folder
3. Save
4. Wait 2-3 minutes
5. Open: https://Rishab-Bhattacharyya-96.github.io/agentic-sdlc-talk-react-kolkata/agentic-sdlc-presentation.html

## Done! ✨

Your presentation is now live and shareable!
