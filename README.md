# Understanding Agentic AI

A modern, responsive, single-page educational website about Agentic AI built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with AI-themed gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Educational**: Comprehensive content covering Agentic AI concepts
- **Component-based**: Modular architecture for easy maintenance

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with CTA
2. **What is Agentic AI**: Clear explanation with capability breakdown
3. **Key Building Blocks**: Interactive grid of 10 core components
4. **Long-Term Success Factors**: Best practices and guidance
5. **Footer**: Professional footer with links and branding

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
.
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── HeroSection.tsx
│   ├── WhatIsAgenticAI.tsx
│   ├── BuildingBlocks.tsx
│   ├── SuccessFactors.tsx
│   └── Footer.tsx
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## 🎨 Design Features

- Custom AI-themed color palette (blues and purples)
- Smooth scroll behavior
- Hover interactions on cards
- Animated scroll indicators
- Gradient backgrounds and text
- Professional iconography

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Colors
Modify the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  'ai-blue': { ... },
  'ai-purple': { ... }
}
```

### Content
Update component content directly in each component file under `/components`

### Animations
Adjust Framer Motion animations by modifying the `motion` component properties

## 📄 License

© 2025 Accenture. All rights reserved.

