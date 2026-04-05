# 🚀 Deployment Guide for Mama Minds

## What is Automated Deployment?

**Automated Deployment** means your app automatically builds and publishes to GitHub Pages whenever you push code changes to your repository. You don't have to manually run build commands!

### How it works:
1. You push code to `main` branch
2. GitHub automatically runs build tests
3. If tests pass, it automatically publishes to GitHub Pages
4. Your site updates instantly ✨

---

## Manual Deployment Methods

### Method 1: Using npm scripts (Recommended)

**One-time setup:**
```bash
# Make scripts executable
chmod +x scripts/deploy.sh
```

**Deploy:**
```bash
# Build and publish in one command
npm run publish:build

# Or build first, then publish
npm run build
npm run publish
```

### Method 2: Using bash script

```bash
./scripts/deploy.sh
```

### Method 3: Step-by-step

```bash
# 1. Build the project
npm run build

# 2. Commit the dist folder
git add dist -f
git commit -m "build: Deploy to GitHub Pages"

# 3. Push dist to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

---

## Automatic Deployment (GitHub Actions)

The `.github/workflows/deploy.yml` file automatically deploys when you push to `main`:

```
Your Code → GitHub → Automatic Build → Automatic Deploy → Live Site
```

**No manual commands needed!**

---

## Verify Deployment

### Check GitHub Pages Settings
1. Go to: https://github.com/cindyleahphoto-ctrl/Mama-Minds-PPD/settings/pages
2. Look for: "Your site is published at: https://cindyleahphoto-ctrl.github.io/Mama-Minds-PPD/"

### View Deployment History
- GitHub Pages branch: `gh-pages`
- View deployments: Settings → Deployments

---

## Troubleshooting

**Issue: Site not showing up**
- Wait 2-5 minutes for GitHub Pages to build
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `gh-pages` branch exists in repository

**Issue: Old version showing**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear GitHub Pages cache: Settings → Pages → Delete and re-enable

**Issue: Build failed**
- Check npm dependencies: `npm install`
- Ensure Node.js 18+: `node --version`
- Run locally first: `npm run build`

---

## File Locations

```
📁 Mama-Minds-PPD/
├── scripts/
│   ├── build.js           # Build command
│   ├── publish.js         # Publish to GitHub Pages
│   └── deploy.sh          # One-click deploy
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated CI/CD
├── package.json           # npm scripts
├── vite.config.js         # Build configuration
└── dist/                  # Generated output (do not edit)
```

---

## Available Commands

```bash
npm run dev                 # Start development server
npm run build              # Build for production
npm run preview            # Preview production build
npm run publish            # Publish to GitHub Pages
npm run publish:build      # Build then publish
npm run deploy             # Deploy using shell script
```