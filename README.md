# HNS Editorial Portfolio

Portfolio website for HNS Editorial showcasing photography, videography, and creative services.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Adding Images & Videos

### Folder Structure
Place your media files in the following folders:

- **Gallery images**: `public/images/gallery/`
  - Add your photo archive images here
  - Update `constants.ts` → `GALLERY_IMAGES` array with paths like: `'/images/gallery/photo1.jpg'`

- **Project images**: `public/images/projects/`
  - Add project thumbnail images here
  - Update `constants.ts` → `PROJECTS` array with paths like: `'/images/projects/project1.jpg'`

- **Project videos**: `public/videos/`
  - Add project video files here
  - Update `constants.ts` → `PROJECTS` array with paths like: `'/videos/project1.mp4'`

### Image Optimization Tips
- Optimize images before uploading (use tools like TinyPNG, ImageOptim, or Squoosh)
- Recommended formats: WebP or JPG
- Keep file sizes reasonable for fast loading

## Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://app.netlify.com/)**
   - Sign up/login
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder (created after `npm run build`)

### Option 2: Deploy via Git (Continuous Deployment)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** (Netlify auto-detects, or set to 18+)

4. **Deploy!**
   - Netlify will automatically build and deploy on every push

### Netlify Benefits
- ✅ Automatic image optimization via CDN
- ✅ Fast global content delivery
- ✅ Free SSL certificates
- ✅ Automatic deployments on Git push
- ✅ Preview deployments for pull requests

## Environment Variables

If you need environment variables (like API keys), add them in Netlify:
- Site settings → Environment variables
- Add your variables there (they'll be available in production)
