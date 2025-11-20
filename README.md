# Innovista Design Studio

> **"We're not artists. We're architects of revenue."**

Innovista is a premium digital agency specializing in conversion-focused web design for professional services and B2B companies. This project represents the agency's marketing platform, engineered to demonstrate high-end "Fintech-style" aesthetics, rapid performance, and strategic clarity.

![Innovista Brand](https://via.placeholder.com/1200x600/064E3B/FFFFFF?text=Innovista+Design+Studio)

## 🎨 Brand Identity: "Executive Growth"

The design system is calibrated for authority, stability, and precision—tailored specifically to attract high-ticket clients in Law, Engineering, and Industrial sectors.

### Color Palette
*   **Deep Forest Green (`#064E3B`):** The primary accent. Used for high-value actions (CTAs) and key brand moments to signal growth, wealth, and stability.
*   **Cool Platinum (`#F3F4F6`):** The foundational background. Replaces standard white to create a "software-like" premium feel similar to modern fintech platforms.
*   **Jet Black (`#1A1A1A`):** Used for high-contrast typography and structural borders.

### Typography
*   **Headings:** `Outfit` — A geometric sans-serif that feels constructed and modern.
*   **Body:** `Plus Jakarta Sans` — Highly legible, tall x-height, optimized for reading.
*   **Editorial:** `Playfair Display` — Used sparingly in Hero sections for sophisticated emphasis.

## ⚡ Tech Stack

*   **Core:** React 18 + TypeScript
*   **Styling:** Tailwind CSS (Custom configuration)
*   **Animation:** Framer Motion (Parallax effects, layout transitions, micro-interactions)
*   **Icons:** Lucide React
*   **Routing:** Custom state-based routing for instant transitions

## 🚀 Key Features

*   **Architectural Layouts:** Utilizes "Bento Grid" structures to organize complex information into digestible, high-value tiles.
*   **Parallax Case Studies:** Custom scroll-linked animations (`useScroll`, `useTransform`) bring project imagery to life.
*   **Mega Menu:** A robust desktop navigation system with visual service previews and smooth entry animations.
*   **Lead Capture Funnel:** A dedicated "Free Website Audit" page with a multi-step intake form designed for high conversion.
*   **Editorial Insights:** A clean, blog-style resource hub for thought leadership.

## 📂 Project Structure

```
src/
├── components/
│   ├── services/        # Dedicated landing pages for specific service verticals
│   ├── legal/           # Compliance pages (Privacy, Terms, Cookies)
│   ├── Navbar.tsx       # Responsive navigation with Mega Menu logic
│   ├── Hero.tsx         # Main entry point with staggered reveal animations
│   ├── Audit.tsx        # High-conversion lead intake form
│   ├── Calculators.tsx  # "Bento Grid" differentiators section
│   └── ...
├── App.tsx              # Central routing and layout management
└── main.tsx             # Application entry point
```

## 🏁 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

---

*Designed & Engineered in Alberta.*
