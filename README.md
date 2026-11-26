# Aditya Malkar’s portfolio

A Next.js portfolio for Aditya’s applied AI and machine learning work. The site includes project previews, upstream contributions, experience, education, a downloadable résumé, and contact options. [Live portfolio](https://www.adityamalkar.com/)

## Development

Use Node.js 22 and the checked-in npm lockfile.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the production site and `npm start` to serve it. The existing Vercel project follows the repository’s master branch.

## Content

Edit portfolio data in `utils/data/` and homepage sections in `app/components/homepage/`. Replace `public/Aditya_Resume.pdf` to update the résumé at its permanent URL. The contact form uses the public EmailJS settings listed in `.env.example`. When those settings are absent, the contact section offers a direct email link.

## Design and assets

The featured project layout draws on the project hierarchy in Brittany Chiang’s portfolio and the responsive tiles in HTML5 UP’s Forty. The implementation and Gaussian mixture illustration were made for this site. [Brittany Chiang v4](https://github.com/bchiang7/v4) · [Forty](https://html5up.net/forty)

The featured images show Termnova’s obligation desk preview and Cadence’s sample CI audit for psf/requests. [Termnova preview source](https://github.com/adimalkar/termnova/blob/main/src/termnova/static/landing.html) · [Cadence audit source](https://github.com/adimalkar/cadence-ci/blob/main/docs/design/audit-report-live.html)

Space Grotesk and Fraunces are served locally. Their SIL Open Font Licenses are included in `app/fonts/`.
