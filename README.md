
    # SoftSell - Sell Your Unused Software Licenses

    SoftSell is a modern, responsive single-page web application designed for a fictional company that helps users sell their surplus software licenses. It's built with React, Vite, TailwindCSS, shadcn/ui, and Framer Motion.

    ## Features

    *   **Hero Section:** Captivating headline, subheading, and a clear call-to-action button.
    *   **How It Works:** A simple three-step process explaining how users can sell their licenses, visualized with icons.
    *   **Why Choose Us:** Highlights key benefits of using SoftSell, presented in an engaging tile format with icons.
    *   **Customer Testimonials:** Displays dummy reviews to build trust and credibility.
    *   **Contact/Lead Form:** Allows users to get in touch or request a quote. Includes fields for Name, Email, Company, License Type (dropdown), and Message, with frontend validation.
    *   **Modern UI/UX:** Visually appealing design with a coherent color palette, custom fonts, and smooth animations.
    *   **Responsive Design:** Ensures a seamless experience across all devices (desktop, tablet, mobile).
    *   **Interactive Elements:** Subtle hover effects and transitions using Framer Motion.
    *   **Toast Notifications:** Provides user feedback for form submissions.

    ## Tech Stack

    *   **Build Tool:** Vite
    *   **Framework/Library:** React 18.2.0
    *   **Styling:** TailwindCSS 3.3.2
    *   **UI Components:** shadcn/ui (built with Radix UI primitives)
    *   **Icons:** Lucide React 0.292.0
    *   **Animations:** Framer Motion 10.16.4
    *   **Language:** JavaScript (JSX)

    ## Project Structure

    ```
    softsell-app/
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── components/
    │   │   ├── sections/       # Page sections (Hero, Contact, etc.)
    │   │   │   ├── Header.jsx
    │   │   │   ├── HeroSection.jsx
    │   │   │   ├── HowItWorksSection.jsx
    │   │   │   ├── WhyChooseUsSection.jsx
    │   │   │   ├── TestimonialsSection.jsx
    │   │   │   ├── ContactFormSection.jsx
    │   │   │   └── Footer.jsx
    │   │   └── ui/             # Reusable UI elements from shadcn/ui
    │   │       ├── button.jsx
    │   │       ├── card.jsx
    │   │       ├── input.jsx
    │   │       ├── select.jsx
    │   │       ├── textarea.jsx
    │   │       ├── toast.jsx
    │   │       ├── toaster.jsx
    │   │       └── use-toast.js
    │   ├── lib/
    │   │   └── utils.js        # Utility functions (e.g., cn for classnames)
    │   ├── App.jsx             # Main application component
    │   ├── index.css           # Global styles and Tailwind directives
    │   └── main.jsx            # Entry point of the application
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    └── tailwind.config.js
    └── vite.config.js
    ```

    ## Getting Started

    ### Prerequisites

    *   Node.js (version 20 or higher recommended)
    *   npm (comes with Node.js)

    ### Installation

    1.  Clone the repository (or download the source code).
    2.  Navigate to the project directory:
        ```bash
        cd softsell-app
        ```
    3.  Install dependencies:
        ```bash
        npm install
        ```

    ### Running the Development Server

    1.  Start the Vite development server:
        ```bash
        npm run dev
        ```
    2.  Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

    ### Building for Production

    1.  Create a production build:
        ```bash
        npm run build
        ```
    2.  The optimized static files will be generated in the `dist` folder. You can preview the production build locally using:
        ```bash
        npm run preview
        ```

    ## Customization

    *   **Styling:** Modify TailwindCSS classes in the JSX components or update `src/index.css` for global styles and theme variables.
    *   **Content:** Update text, images, and data directly within the respective JSX components in `src/components/sections/`.
    *   **Images:** Replace placeholder images from Unsplash with your own assets. For new images, use the `<img-replace>` tag as per Horizons guidelines.
    *   **shadcn/ui Components:** If new shadcn/ui components are needed, they must be created manually in the `src/components/ui/` directory.

    ## Deployment

    This project is configured for easy deployment. You can deploy it to various hosting platforms that support static sites or Node.js environments. If using Hostinger, you can typically use the "Publish" feature within the Hostinger Horizons environment.

    ## Contributing

    This project is managed by Hostinger Horizons AI. For changes or new features, please provide instructions to the AI.
  