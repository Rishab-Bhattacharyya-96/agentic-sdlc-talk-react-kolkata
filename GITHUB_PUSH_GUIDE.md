# GitHub Push & Deployment Guide

## ✅ Completed: Local Setup

Your repository is initialized and committed locally:
```
Location: /Users/jayanta/react-kolkata
Branch: master
Commit: 4dff783 (Initial commit)
Files: 13 tracked files, ready to push
```

---

## 🚀 Step 1: Create Repository on GitHub

### Option A: Using GitHub CLI (if installed)
```bash
cd /Users/jayanta/react-kolkata
gh repo create agentic-sdlc-talk-react-kolkata --public --source=. --remote=origin --push
```

### Option B: Manual Setup via GitHub Web UI

1. Go to: https://github.com/new
2. **Repository name:** `agentic-sdlc-talk-react-kolkata`
3. **Description:** "Agentic Workflows for Enhanced SDLC - React Kolkata Presentation"
4. **Visibility:** Public (for GitHub Pages)
5. **Initialize with:** Nothing (we already have commits)
6. Click **Create repository**

---

## 🔐 Step 2: Add Remote and Push (Using Personal Access Token)

### Create a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Set the following:
   - **Token name:** `react-kolkata-push`
   - **Expiration:** 90 days (or as needed)
   - **Scopes:** Select `repo` (Full control of private repositories)
4. Click **Generate token**
5. **Copy the token** (you won't see it again!)

### Add Remote and Push with Token

Run these commands in your terminal:

```bash
cd /Users/jayanta/react-kolkata

# Add the remote (replace GITHUB_USERNAME with your username)
git remote add origin https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata.git

# Set the default branch to main (GitHub's standard)
git branch -M main

# Push to GitHub
git push -u origin main
```

When prompted for a password, **paste your Personal Access Token** (not your GitHub password).

---

## 📄 Step 3: Enable GitHub Pages

### Automatic (with Workflow)
The `.github/workflows/pages.yml` file I created will automatically:
1. Detect pushes to `main` branch
2. Upload your entire repository as a static site
3. Deploy to GitHub Pages

**To activate:**
1. Go to your repository: `https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata`
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**

The workflow will run automatically. Check:
- **Actions** tab to see deployment progress
- **Pages** tab for your live URL

### Manual Setup (if workflow doesn't work)
1. Settings → Pages
2. Source: `main` branch, `/root` directory
3. Save

---

## 🌐 Step 4: Access Your Presentation

Once deployed, your presentation will be live at:

```
https://Rishab-Bhattacharyya-96.github.io/agentic-sdlc-talk-react-kolkata/
```

**Direct links to resources:**
- **Presentation:** https://Rishab-Bhattacharyya-96.github.io/agentic-sdlc-talk-react-kolkata/agentic-sdlc-presentation.html
- **README:** https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata
- **Demo setup:** https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata/tree/main/demo

---

## 📝 Complete Step-by-Step Command Sequence

**Copy and paste this into your terminal:**

```bash
# Navigate to project
cd /Users/jayanta/react-kolkata

# Add remote (IMPORTANT: replace with your GitHub username if different)
git remote add origin https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata.git

# Set to main branch
git branch -M main

# Push to GitHub (will ask for token)
git push -u origin main

# Verify it worked
git remote -v
```

When `git push` asks for password, paste your Personal Access Token.

---

## ✅ Verification Checklist

After pushing, verify everything:

- [ ] Repository appears on GitHub: https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata
- [ ] All files are visible (13 files including .github/workflows/)
- [ ] GitHub Actions workflow ran (check Actions tab)
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] Presentation is live at the URL above
- [ ] You can see the slides by opening: `/agentic-sdlc-presentation.html`

---

## 🔄 Future Updates

To update the presentation after changes:

```bash
cd /Users/jayanta/react-kolkata
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

The GitHub Pages workflow will automatically redeploy.

---

## 🆘 Troubleshooting

### "Repository not found" error
- Verify repository was created on GitHub
- Check your username in the URL is correct
- Verify the token has `repo` scope

### "Authentication failed"
- Check you're using the Personal Access Token (not password)
- Verify token hasn't expired
- Create a new token if needed

### GitHub Pages not showing
- Wait 2-3 minutes after push (first deploy is slower)
- Check Actions tab for workflow status
- Verify Settings → Pages shows correct source branch
- Clear browser cache and try incognito window

### Presentation shows blank
- Check console for errors (F12 → Console tab)
- Verify `agentic-sdlc-presentation.html` is in root directory
- Check reveal.js CDN is accessible

---

## 📚 Share Your Presentation

Once live, share these links:

**For the presentation:**
```
https://Rishab-Bhattacharyya-96.github.io/agentic-sdlc-talk-react-kolkata/agentic-sdlc-presentation.html
```

**For the repository (with all materials):**
```
https://github.com/Rishab-Bhattacharyya-96/agentic-sdlc-talk-react-kolkata
```

---

## Next Steps

1. **Create the GitHub repository** (Manual or CLI)
2. **Get your Personal Access Token** from GitHub settings
3. **Run the push commands** (paste token when prompted)
4. **Wait 2-3 minutes** for GitHub Pages deployment
5. **Open your live presentation URL**
6. **Share with React Kolkata!** 🎉

---

**Need help?** Let me know if you hit any issues during the push!
