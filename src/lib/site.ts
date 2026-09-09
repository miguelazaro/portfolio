// Override at build time when moving the portfolio to a custom domain.
export const siteUrl = new URL(process.env.SITE_URL || 'https://miguelazaro-portfolio.vercel.app');
