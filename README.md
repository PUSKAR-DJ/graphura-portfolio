# Graphura - Digital Marketing Agency Portfolio

A modern, responsive portfolio website for Graphura, built with React and Vite.

## 🚀 Project Overview

Graphura is a digital marketing agency portfolio showcasing services, blog posts, and contact information. The project focuses on high performance, mobile responsiveness, and a premium aesthetic.

## 📁 Project Structure

```text
graphura-portfolio/
├── public/                # Static assets (favicons, etc.)
├── src/                   # Main source code
│   ├── assets/            # Images, logos, and media files
│   ├── components/        # Reusable React components
│   │   ├── Calendar/      # Calendar integration component
│   │   ├── Footer/        # Global Footer component
│   │   └── Navbar/        # Global Navigation Bar component
│   ├── data/              # Static data files (e.g., servicesData.js)
│   ├── pages/             # Page components
│   │   ├── About.jsx      # About Us page
│   │   ├── Blog.jsx       # Blog listing page
│   │   ├── Calendar.jsx   # Standalone Calendar page
│   │   ├── Contact.jsx    # Contact Us page
│   │   ├── Home.jsx       # Landing page (Hero, Services, FAQ)
│   │   ├── Privacy.jsx    # Privacy Policy page
│   │   ├── ServiceDetail.jsx # Individual service view
│   │   └── Services.jsx   # Services overview page
│   ├── styles/            # CSS stylesheets
│   │   ├── blog.css       # Blog-specific styles
│   │   ├── footer.css     # Footer-specific styles
│   │   ├── navbar.css     # Navbar-specific styles
│   │   └── style.css      # Main global and component styles
│   ├── App.jsx            # Root application component (routes)
│   ├── main.jsx           # Entry point
│   └── index.css          # Core CSS resets
├── .gitignore             # Git ignore configuration
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🛠️ Tech Stack

- **Framework**: React 19
- **Bundler**: Vite 7
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons, FontAwesome
- **Routing**: React Router Dom 7

## 🔒 Git Configuration

The project includes a `.gitignore` file to ensure that environment-specific files and dependencies are not tracked:
- `node_modules/`: Excluded to keep the repository lightweight (installed via `npm install`).
- `dist/`: Build output folder excluded from version control.
- `.vscode/`: Local editor settings excluded.
- `*.log`: Log files generated during development.

## 🏃 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Lint Code**:
   ```bash
   npm run lint
   ```
