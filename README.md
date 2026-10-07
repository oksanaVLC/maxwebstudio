# Max Web Studio

Multilingual website for **Max Web Studio**, a web design and development studio based in Valencia, Spain.

**Production:** https://maxwebstudio.es/

---

# Table of Contents

- [Max Web Studio](#max-web-studio)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Languages \& Internationalization](#languages--internationalization)
  - [Astro Configuration](#astro-configuration)
  - [Netlify](#netlify)
  - [Implemented SEO](#implemented-seo)
    - [Metadata](#metadata)
    - [Canonical URLs](#canonical-urls)
    - [Open Graph](#open-graph)

---

# Project Overview

Max Web Studio is a multilingual website focused on web design and development services.

The website is designed to provide:

- Professional presentation of the studio
- Multilingual content
- SEO-friendly architecture
- Search-engine accessibility
- AI/GEO-friendly business information
- Accessible navigation
- Fast page loading
- Contact functionality
- Privacy-conscious analytics
- Legal documentation

---

# Technology Stack

- **Astro**
- **TypeScript**
- **CSS**
- **Astro Content Collections**
- **Markdown**
- **MDX**
- **Fontsource**
- **Netlify**
- **Cloudflare Web Analytics**

---

# Languages & Internationalization

The website supports four languages:

| Language | URL    |
| -------- | ------ |
| Spanish  | `/es/` |
| English  | `/en/` |
| French   | `/fr/` |
| Russian  | `/ru/` |

The root `/` is redirected to `/es/` with a permanent `301` redirect handled by Netlify.

Spanish is the default language.

Astro i18n is configured with:

text
defaultLocale: es
locales: es, en, ru, fr
prefixDefaultLocale: true

## Astro Configuration

`astro.config.mjs` includes:

- Site URL: `https://maxwebstudio.es`
- Default locale: `es`
- Locales: `es`, `en`, `ru`, `fr`
- Locale-prefixed routing
- Sitemap generation
- MDX support

## Netlify

Root redirect configured in `netlify.toml`:

toml
[[redirects]]
from = "/"
to = "/es/"
status = 301

## Implemented SEO

The website has a complete technical SEO foundation.

### Metadata

- Dynamic `<title>` for every page
- Dynamic meta descriptions
- Language-specific metadata
- `robots` meta support
- `noindex, follow` support for pages that should not be indexed

### Canonical URLs

Every localized page generates its own canonical URL.

Examples:

https://maxwebstudio.es/es/
https://maxwebstudio.es/en/
https://maxwebstudio.es/fr/
https://maxwebstudio.es/ru/

SEO

Implemented:

Page titles
Meta descriptions
Canonical URLs
hreflang
x-default
XML sitemap
Open Graph metadata
Open Graph image (1200 × 630)
Favicons
Apple touch icon
noindex, follow support
Semantic HTML
Multilingual metadata
Structured Data

Added Schema.org JSON-LD using ProfessionalService.

The structured data contains:

Business name
Website
Email
Telephone
Address
Service area
Available languages
GEO / AI Search

The technical GEO foundation includes:

Clear business identity
Multilingual URLs
Canonical URLs
hreflang
Structured business data
Contact information
Physical location
Descriptive metadata
Semantic HTML
Accessible navigation
Public legal information

### Open Graph

Open Graph metadata is included globally through BaseLayout.astro.

The main Open Graph image is:
public/images/og-image.jpg
