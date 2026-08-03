# Danak Website — Client Data & Images Needed

## Home Page (`/`)

### Client Data

| Item | Current Value |
|------|--------------|
| **Company description** (`companyData.description` in `AboutPreview`) | Generic — review |

### Images

| Section | Current | Action |
|---------|---------|--------|
| About Preview | Unsplash hotlink | Replace with owned image |
| Why Choose Us | No image | Add illustration/photo |

## About Page (`/about`)

### Client Data

| Item | Current Value |
|------|--------------|
| **Company description** (`companyData.description` in `CompanyStory`) | Same generic as Home |
| **Mission** (`companyData.mission`) | Generic — review |
| **Vision** (`companyData.vision`) | Generic — review |

### Images

| Section | Current | Action |
|---------|---------|--------|
| Banner | Shared default banner | Add page-specific banner |
| Company Story | Unsplash hotlink (same as Home) | Replace with owned image |
| Mission & Vision | No image | Add visual elements |
| Values | No image | Add visual elements |

## Services Page (`/services`)

### Client Data

| Item | Current Value |
|------|--------------|
| **Service titles & descriptions** (6 in `servicesData`) | Confirm accuracy |
| **Service features** per service (currently all empty) | Populate if needed |

### Images

| Section | Current | Action |
|---------|---------|--------|
| Banner | Shared default banner | Add page-specific banner |
| Service Grid (6 cards) | Icons only | Add service-specific photos |

## Contact Page (`/contact`)

### Client Data

| Item | Current Value |
|------|--------------|
| **Phone** (`companyData.phone`) | `"+234 (Add phone number)"` |
| **Address** (`companyData.address`) | `"(Add office address)"` |
| **Email** (`companyData.email`) | `"info@danak.com"` (confirm) |
| **FAQ Q&A** (`FAQ.tsx:9-26`) | Review 4 items |
| **Social media URLs** (LinkedIn, Twitter, Facebook, Instagram) | All `href="#"` |
| **Privacy Policy link** | `href="#"` |
| **Terms of Service link** | `href="#"` |
| **Google Map address/coordinates** | Generic Port Harcourt |
| **EmailJS env vars** (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) | Confirm set in production |

### Images

| Section | Current | Action |
|---------|---------|--------|
| Banner | Shared default banner | Add page-specific banner |
| Contact Info | No image | Add illustration/photo |

## Global (All Pages)

### Client Data

| Item | Current Value |
|------|--------------|
| **Logo** (Navbar + Footer + Favicon) | CSS-only "D" letter — replace with real logo (SVG/PNG) |

### Images

| Section | Current | Action |
|---------|---------|--------|
| Navbar + Footer + Favicon | CSS-only "D" letter | Replace with real logo (SVG/PNG) |

> **Note:** Raw images in `/Images/` at project root (Home/, About/, Services/, Contact/ folders) are not yet wired into any component — these may be the intended replacements.
