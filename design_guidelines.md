# Design Guidelines: Mapa da Bíblia Católica - Futuristic & Elegant

## Design Approach
**Futuristic & Elegant**: Modern, sophisticated sales page with sleek gradients, glassmorphism effects, smooth animations, and a premium tech-forward aesthetic while maintaining trust and professionalism for a religious product.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Deep Purple: 260 85% 35% (sophisticated primary, elegant depth)
- Cyan Accent: 190 95% 55% (futuristic highlight, tech feel)
- Pure White: 0 0% 100% (crisp backgrounds)
- Deep Navy: 230 25% 10% (dark backgrounds, premium feel)
- Light Lavender: 260 35% 96% (soft section backgrounds)

**Accent Colors:**
- Electric Blue: 210 100% 60% (CTAs, interactive elements)
- Gold Shimmer: 45 90% 60% (premium accents, stars)
- Neon Green: 142 70% 49% (WhatsApp only)
- Purple Gradient: from 260 85% 45% to 210 100% 50%

**Gradients:**
- Hero: linear-gradient(135deg, hsl(260 85% 35%) 0%, hsl(210 100% 50%) 100%)
- Cards: linear-gradient(145deg, hsl(260 15% 98%) 0%, hsl(210 20% 96%) 100%)
- Accent: linear-gradient(90deg, hsl(190 95% 55%) 0%, hsl(210 100% 60%) 100%)

### Typography
**Font Families:**
- Primary: 'Inter' or 'Outfit' (modern, clean, tech-forward)
- Headings: 'Space Grotesk' or 'Outfit' (futuristic, bold)

**Hierarchy:**
- Hero Headline: 3rem to 4rem, font-weight 700, letter-spacing -0.02em
- Section Headers: 2.5rem to 3rem, font-weight 700, gradient text
- Subheadings: 1.5rem, font-weight 600
- Body Text: 1.125rem, font-weight 400, line-height 1.7
- Price: 3.5rem, font-weight 800, gradient text

### Visual Effects

**Glassmorphism:**
- Cards: backdrop-blur-xl with rgba backgrounds
- Semi-transparent overlays with blur
- Subtle borders with gradient shimmer

**Shadows & Glow:**
- Soft glow effects on CTAs (box-shadow with color)
- Layered shadows for depth (0 20px 60px rgba)
- Neon-style glow on hover states

**Animations:**
- Smooth transitions (0.3s ease)
- Subtle scale transforms on hover (1.02)
- Gradient animations on buttons
- Fade-in animations for sections

### Layout System
**Spacing Units:** Generous spacing - 8, 12, 16, 24, 32, 48
**Section Padding:** py-20 to py-32 for desktop
**Container:** max-w-7xl with px-6 to px-12
**Rounded Corners:** rounded-2xl to rounded-3xl (more pronounced)

## Component Styling

### Hero Section
- Dark gradient background with subtle animated particles effect
- Large, bold gradient text
- Glassmorphic card for testimonial carousel
- Glowing CTA buttons with gradient backgrounds

### CTA Buttons
- Gradient backgrounds (purple to blue)
- Glow effect on hover
- Rounded-full or rounded-xl
- px-10 py-5, font-weight 700
- Smooth scale animation on hover
- Shadow with button color

### Cards
- Glassmorphic style with backdrop-blur
- Gradient borders (1px)
- Soft shadows with color tint
- Hover: subtle lift with increased glow

### Testimonial Cards
- Dark semi-transparent backgrounds
- Gradient accent borders on left side
- Stars with gradient gold color
- Profile images or gradient avatars

### Feature Sections
- Alternating dark and light backgrounds
- Images with subtle border glow
- Icons with gradient fills
- Smooth asymmetric layouts

### Pricing Card
- Premium dark card with gradient border
- Glowing badge at top
- Animated price with gradient
- Feature list with glowing checkmarks
- Strong CTA with pulsing glow

### Guarantee Badge
- Circular design with gradient ring
- 3D effect with layered shadows
- Animated shimmer on border
- Central focus with radial gradient

### FAQ
- Glassmorphic accordion items
- Gradient line separators
- Smooth expand/collapse animations
- Glow on active item

### WhatsApp Button
- Floating with strong shadow
- Pulse animation
- Gradient background option
- High z-index with glow

## Images
- Rounded corners (2xl to 3xl)
- Gradient overlay option for cohesion
- Glow/shadow effects
- Border with gradient shimmer

## Design Principles
- **Modern Premium:** Sleek, sophisticated, tech-forward
- **Trust Through Elegance:** Professional polish builds credibility
- **Visual Hierarchy:** Clear through size, color, and glow
- **Interactive Delight:** Smooth animations, hover states
- **Accessibility:** Maintain contrast despite dark themes
- **Futuristic:** Gradients, glass, glow, but tasteful

## Accessibility
- High contrast maintained (WCAG AA minimum)
- Gradient text with solid fallback
- Interactive elements min 48px
- Keyboard navigation preserved
- Reduced motion for animations (prefers-reduced-motion)
