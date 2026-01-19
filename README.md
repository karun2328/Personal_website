# Personal Portfolio Website

A production-quality personal website for Purna Satya Karun Saride, positioning for ML Systems Engineer, LLM Inference Engineer, and Inference Serving/Deployment Engineer roles.

## Features

- **Modern Tech Stack**: Next.js 14+ (App Router) with TypeScript, Tailwind CSS, and Framer Motion
- **Smooth Animations**: Hero entrance animations, staggered section reveals, hover micro-interactions
- **Single-Page Layout**: Smooth scrolling with sticky navigation and active section highlighting
- **Premium Dark Theme**: Modern aesthetic with subtle gradients and animated background effects
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Lighthouse-friendly performance and accessibility

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your resume PDF:
   - Place your resume PDF file in the `public/` directory
   - Name it `KARUN_RESUME.pdf`
   - This enables the "Download Resume" button functionality

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click "New Project" and import your repository.

4. Vercel will automatically detect Next.js and configure the build settings.

5. Click "Deploy" and your site will be live in minutes.

### Important Notes for Deployment

- Ensure `KARUN_RESUME.pdf` is in the `public/` folder before deploying
- All environment variables (if any) should be configured in Vercel's dashboard
- The build command (`npm run build`) and output directory (`out/`) are automatically configured by Next.js

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── Navigation.tsx     # Sticky navigation
│   ├── Hero.tsx           # Hero section
│   ├── FocusAreas.tsx     # Focus areas cards
│   ├── Projects.tsx       # Featured projects
│   ├── Experience.tsx     # Experience timeline
│   ├── Skills.tsx         # Skills section
│   ├── Education.tsx      # Education section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── data/                  # Data files
│   └── resume.ts          # Resume content (source of truth)
├── public/                # Static assets
│   └── KARUN_RESUME.pdf   # Resume PDF (add this file)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Customization

All content is sourced from `/data/resume.ts`. Update this file to modify:
- Personal information
- Skills
- Experience
- Projects
- Education

The website will automatically reflect changes from this file.

## Performance

- Optimized for Lighthouse performance scores
- Accessible (WCAG compliant)
- SEO-friendly metadata
- Fast page loads with Next.js optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or issues, please reach out via the contact form on the website.