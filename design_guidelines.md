# Design Guidelines: Mapa da Bíblia Católica - Sales Page Clone

## Design Approach
**Reference-Based Approach**: Exact clone of provided screenshots for a Brazilian Catholic religious product sales page. This is a high-conversion sales/landing page with emotional appeal and trust-building elements.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Brand Blue: 220 100% 50% (vibrant primary blue for CTAs and accents)
- Pure White: 0 0% 100% (backgrounds, text on blue)
- Dark Text: 220 15% 20% (body text)
- Light Gray: 220 10% 95% (section backgrounds)

**Accent Colors:**
- WhatsApp Green: 142 70% 49% (floating button only)
- Gold/Yellow: 45 100% 51% (guarantee badge, stars in testimonials)
- Success Green: 142 70% 45% (checkmarks in lists)

### Typography
**Font Families:**
- Primary: 'Montserrat' or 'Poppins' (bold, modern, clean)
- Body: 'Open Sans' or system fonts for readability

**Hierarchy:**
- Hero Headline: 2.5rem to 3.5rem, font-weight 700-800, tight line-height
- Section Headers: 2rem to 2.5rem, font-weight 700, centered
- Subheadings: 1.5rem, font-weight 600
- Body Text: 1rem to 1.125rem, font-weight 400, line-height 1.6
- Testimonial Names: 1rem, font-weight 600
- Price (strikethrough): 1.5rem, font-weight 400, line-through
- Price (current): 2.5rem to 3rem, font-weight 800, brand blue

### Layout System
**Spacing Units:** Use Tailwind spacing: 4, 6, 8, 12, 16, 20, 24
**Section Padding:** py-12 to py-20 for desktop, py-8 to py-12 for mobile
**Container:** max-w-6xl centered with px-4 to px-8
**Component Gaps:** space-y-6 to space-y-8 between major elements

## Component Library

### Hero Section
- Full-width background (light gray or white)
- Centered layout with headline, subheadline, and product image
- Product image: Large, centered, showcasing the Bible map visual
- Primary CTA button immediately visible below fold

### CTA Buttons
- Style: Solid blue background (brand blue), white text, rounded corners (rounded-lg)
- Size: Large and prominent (px-12 py-4), font-weight 700
- Text: "QUERO O MEU!" in all caps
- Hover: Slightly darker blue, subtle scale transform
- Distribution: After hero, mid-page (2-3 times), before pricing, after FAQ

### Testimonial Carousel (Top of Page)
- Horizontal scrolling cards or dots navigation
- Each card: White background, rounded corners, padding
- Content: 5-star rating (gold stars), quote text, customer name, optional photo
- Navigation: Dot indicators below, subtle arrows (optional)

### Testimonial Cards (Multiple Sections)
- Grid layout: 1 column mobile, 2-3 columns desktop
- White cards with shadow, rounded corners
- Each card: Stars (top), testimonial text, name (bold), optional location
- Section title: "Aprovado por +1.000 fiéis católicos" or similar

### Feature/Benefit Sections
- Alternating layouts: Image left/text right, then reverse
- Images: Full-width on mobile, 50% width on desktop
- Feature lists: Blue checkmarks or checkbox icons, clear bullet points
- Backgrounds: Alternate white and light gray sections for visual rhythm

### Content Sections (Educational)
- Headers: "De Gênesis a Apocalipse", "Panorama da Bíblia", "Eventos Cronológicos"
- Layout: Text block + supporting image/graphic
- Typography: Larger body text (1.125rem), generous line-height
- Visual elements: Icons, small graphics to break up text

### Pricing Section
- Centered, high-contrast design
- Strikethrough original price (R$ 97,00) in gray
- Current price in large, bold blue (R$ 37,00)
- "De/Por" structure clearly visible
- Include list of what's included (checkmarks)
- Guarantee mention nearby

### Guarantee Badge Section
- Prominent circular or shield badge design
- "30 DIAS DE GARANTIA" in bold text
- Gold/yellow color accent
- 5-star rating display
- Centered with supporting copy about risk-free purchase

### FAQ Section (Dúvidas Frequentes)
- Accordion-style interface
- Questions in bold, answers initially hidden
- Blue arrow/chevron indicators
- White background with subtle borders
- Spacing between items

### Bonus Section
- Grid of 3 items: "Plano de Leitura", "Diário da Oração", "Versão Imprimível"
- Each bonus: Icon/image, title, brief description
- Visual hierarchy showing these are included bonuses

### Footer
- Simple, centered layout
- Logo at top
- Company/product information
- Links to policies (privacy, terms)
- Light gray background

### Floating WhatsApp Button
- Position: Fixed, bottom-right corner
- Color: WhatsApp green (#25D366)
- Icon: White WhatsApp logo
- Size: 60px circle
- Shadow for depth
- Slight pulse animation (subtle)
- z-index: 50 (always on top)

## Images

### Primary Hero Image
Large, high-quality image of the "Mapa da Bíblia" product showcasing all 73 books visual layout. Centered, taking 60-70% width on desktop.

### Section Images
- "De Gênesis a Apocalipse": Close-up of map sections showing biblical timeline
- "Panorama da Bíblia": Overview of the complete map layout
- "Eventos Cronológicos": Timeline visualization
- Product screenshots showing digital files and member area access
- Bonus items: Visual representations of planner, prayer diary, printable version

### Testimonial Photos
Optional circular profile photos for testimonial cards (can use placeholder or initials if not provided).

## Design Principles
- **Trust-Building:** Multiple testimonial sections, guarantee badge, social proof numbers
- **Scarcity/Urgency:** Price emphasis (was/now), limited-time feel
- **Clarity:** Clear value proposition, simple navigation flow
- **Conversion-Focused:** CTAs at strategic scroll points, removing friction
- **Emotional Connection:** Religious imagery, faith-based language, community testimonials
- **Professional:** Clean, modern design despite being a sales page - avoid looking spammy

## Accessibility
- High contrast text (dark on white, white on blue)
- Button sizes adequate for touch (min 44px height)
- Readable font sizes (minimum 16px body)
- Alt text for all images
- Keyboard navigation for accordion FAQ