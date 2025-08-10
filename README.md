# PRNTSCRN Homepage

A Swiss design-inspired homepage built with React + Tailwind CSS featuring a modular table layout with expandable drawer rows.

## Features

- 🧩 **Swiss Design Grid Table** - Clean table layout with expandable rows
- 🎯 **Interactive Drawer Rows** - Click table rows to expand content inline
- 🌙 **Minimal Dark Mode Toggle** - Swiss-style toggle switch
- 🎨 **Subtle Grid Background** - Minimal grid pattern overlay
- ⚡ **Smooth Animations** - Framer Motion for drawer transitions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎬 **Animated Questions** - Rotating questions in the hero section

## Design System

- **Fonts**: IBM Plex Sans (headings/body), IBM Plex Mono (UI/labels)
- **Colors**: Pure black and white with Tailwind's `black`/`white` classes
- **Layout**: Swiss design principles - clean grid, minimal borders
- **Background**: Subtle grid pattern in light grey
- **Typography**: Systematic hierarchy with precise spacing

## Content Strategy

**Service-first, platform-future**: "We build modular design systems that scale. Starting with your workflow, building toward platform tools."

### Content Modules

1. **Hero** - "What if we treated design like code?" with animated sub-questions
2. **What We Build** - From bespoke documents to scalable systems
3. **How We Work** - Strategic implementation, not just delivery
4. **Who We Serve** - Teams who publish under pressure
5. **Future Platform** - A new creative infrastructure is coming
6. **Contact** - Let's systematize your workflow

## Tech Stack

- **React 18** - Component framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling with Swiss design customizations
- **Framer Motion** - Animation library for smooth transitions
- **IBM Plex Fonts** - Typography via Google Fonts

## Key Features

### Swiss Design Table Layout
- Clean table-style layout with bordered rows
- Each "module" is a table row that expands to reveal content
- Minimal visual elements with focus on typography and spacing
- Subtle grid background pattern

### Animated Hero Questions
- Rotating questions that emphasize the "What if..." messaging
- Smooth transitions between different value propositions
- Builds engagement and communicates key concepts

### Content-First Approach
- Updated messaging focuses on service delivery with platform vision
- Clear value propositions for each target audience
- Strategic positioning as "where Canva ends"

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                     # Main application with table layout
├── main.jsx                   # React entry point
├── index.css                  # Global styles and Tailwind imports
└── components/
    ├── Header.jsx             # Minimal header with tagline
    ├── DrawerModule.jsx       # Table row with expandable content
    ├── AnimatedQuestions.jsx  # Hero section question rotation
    ├── DarkModeToggle.jsx     # Swiss-style toggle switch
    ├── BackgroundPattern.jsx  # Subtle grid background
    └── Footer.jsx             # Structured footer in bordered box
```

## Usage

- Click any table row to expand its content
- Only one row can be open at a time
- Use the toggle switch to change between light/dark modes
- Hero section cycles through "What if..." questions automatically

## Design Principles

- **Systematic thinking** - Every element serves the "design as code" narrative
- **Swiss design influence** - Clean grids, precise typography, minimal color
- **Content hierarchy** - Information architecture supports the business strategy
- **Future-proof structure** - Designed to evolve as platform develops
