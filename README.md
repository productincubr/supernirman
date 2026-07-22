# Supernirman Materials — Website

Full 7-page website: **Home, MRO, Government Supply, Construction Materials, About Us, Career, Contact Us**
Tech stack: **React + Vite + Tailwind CSS + React Router**

## 1. Prerequisites

- Node.js install karo (agar nahi hai): https://nodejs.org (LTS version lo)
- Check karo terminal me:
  ```
  node -v
  npm -v
  ```

## 2. Project setup

Is folder ko kahin extract/copy karo, phir terminal me:

```bash
cd supernirman-website
npm install
```

Ye command `package.json` me likhi saari dependencies install karega:
- react, react-dom
- react-router-dom (page navigation ke liye)
- vite, @vitejs/plugin-react (dev server + build tool)
- tailwindcss, postcss, autoprefixer (styling ke liye)

## 3. Run locally (development)

```bash
npm run dev
```

Terminal me ek local URL milega (usually `http://localhost:5173`) — browser me open karo.

## 4. Build for production

```bash
npm run build
```

Ye `dist/` folder banayega jisme final optimized HTML/CSS/JS hoga — isko kisi bhi hosting
(Vercel, Netlify, Hostinger, GoDaddy, etc.) par upload kar sakte ho.

Preview karne ke liye build ko locally:
```bash
npm run preview
```

## Folder structure

```
supernirman-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # entry point, router setup
    ├── App.jsx           # routes defined here
    ├── index.css         # tailwind imports
    ├── data/
    │   └── categories.js # MRO / Gov Supply / Construction product data + search
    ├── components/
    │   ├── Navbar.jsx    # top navigation (all pages) + search bar
    │   ├── Footer.jsx
    │   ├── Logo.jsx
    │   ├── CategoryGrid.jsx  # reusable card grid used by the 3 catalog pages
    │   └── UI.jsx        # Button, Card reusable components
    └── pages/
        ├── Home.jsx
        ├── MRO.jsx
        ├── GovernmentSupply.jsx
        ├── ConstructionMaterials.jsx
        ├── About.jsx
        ├── Career.jsx
        ├── Contact.jsx
        └── Search.jsx    # /search?q=... results page
```

## Product data edit karna ho to

Sabhi categories aur unke items `src/data/categories.js` me ek jagah hain.
Naya category ya item add/remove/rename karna ho to bas is file me object edit karo —
MRO, Government Supply, Construction Materials pages aur search bar, sab automatically
update ho jayenge.

## Naya page add karna ho to

1. `src/pages/NayaPage.jsx` banao
2. `src/App.jsx` me `<Route path="/naya-page" element={<NayaPage />} />` add karo
3. `src/components/Navbar.jsx` aur `Footer.jsx` ke `navItems`/`links` array me entry add karo

## Notes

- Navbar me ab saare 7 links hain: Home, MRO, Government Supply, Construction Materials,
  About Us, Career, Contact Us — plus ek working search bar jo `/search?q=...` par le jata hai.
- Search bar category titles aur product names dono me match dhundta hai
  (`src/data/categories.js` ke `searchCatalogs` function se).
- MRO page ke categories abhi placeholder hain (screenshot me MRO page nahi tha) —
  `src/data/categories.js` me `mroCategories` edit karke apne actual MRO products daal do.
- Brand color `#0D5E9C` ko `tailwind.config.js` me `brand` naam se define kar diya
  hai — isko `bg-brand`, `text-brand` jaise classes se use kar sakte ho.
