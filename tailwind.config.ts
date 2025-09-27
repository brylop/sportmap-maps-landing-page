import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // SportMaps Advanced Tech Color System
        "sport-primary": "hsl(var(--sport-primary))",
        "sport-secondary": "hsl(var(--sport-secondary))",
        "sport-accent": "hsl(var(--sport-accent))",
        "sport-highlight": "hsl(var(--sport-highlight))",
        "sport-warning": "hsl(var(--sport-warning))",
        "sport-success": "hsl(var(--sport-success))",
        "sport-info": "hsl(var(--sport-info))",
        "sport-wellness": "hsl(var(--sport-wellness))",
        "sport-nutrition": "hsl(var(--sport-nutrition))",
        
        // Tech Background System
        "sport-background": "hsl(var(--sport-background))",
        "sport-surface": "hsl(var(--sport-surface))",
        "sport-card": "hsl(var(--sport-card))",
        "sport-glass": "hsl(var(--sport-glass))",
        
        // Text & Borders
        "sport-text": "hsl(var(--sport-text-primary))",
        "sport-text-primary": "hsl(var(--sport-text-primary))",
        "sport-text-secondary": "hsl(var(--sport-text-secondary))",
        "sport-text-muted": "hsl(var(--sport-text-muted))",
        "sport-border": "hsl(var(--sport-border))",
        "sport-divider": "hsl(var(--sport-divider))",
        
        // Default shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-tech-primary": "var(--gradient-tech-primary)",
        "gradient-tech-hero": "var(--gradient-tech-hero)",
        "gradient-tech-glow": "var(--gradient-tech-glow)",
        "gradient-tech-card": "var(--gradient-tech-card)",
        "gradient-tech-surface": "var(--gradient-tech-surface)",
      },
      boxShadow: {
        "elegant": "var(--shadow-elegant)",
        "hover": "var(--shadow-hover)",
        "glow": "var(--shadow-glow)",
        "tech-sm": "var(--shadow-tech-sm)",
        "tech-md": "var(--shadow-tech-md)",
        "tech-lg": "var(--shadow-tech-lg)",
        "tech-xl": "var(--shadow-tech-xl)",
        "glow-primary": "var(--shadow-glow-primary)",
        "glow-accent": "var(--shadow-glow-accent)",
        "inset": "var(--shadow-inset)",
      },
      transitionProperty: {
        "smooth": "var(--transition-smooth)",
        "fast": "var(--transition-fast)",
        "slow": "var(--transition-slow)",
        "bounce": "var(--transition-bounce)",
      },
      spacing: {
        "tech-xs": "var(--space-tech-xs)",
        "tech-sm": "var(--space-tech-sm)",
        "tech-md": "var(--space-tech-md)",
        "tech-lg": "var(--space-tech-lg)",
        "tech-xl": "var(--space-tech-xl)",
        "tech-2xl": "var(--space-tech-2xl)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" }
        },
        "tech-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" }
        },
        "tech-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--sport-primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--sport-primary) / 0.6)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "tech-pulse": "tech-pulse 2s ease-in-out infinite",
        "data-flow": "data-flow 8s linear infinite",
        "tech-glow": "tech-glow 4s ease-in-out infinite",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
