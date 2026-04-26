/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Toutes les photos sont désormais locales dans public/images/
    // Ajouter ici d'éventuels domaines externes si nécessaire à l'avenir
    remotePatterns: [],
  },
};

module.exports = nextConfig;
