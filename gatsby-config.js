require("dotenv").config({
  path: `content/config/.env`, // Aangepaste locatie voor de .env
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`, // Zorg dat dit correct is
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"), // Zorg dat dit bestand correct verwijst naar je queries
        chunkSize: 10000, // Optioneel: batchgrootte
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Genereert naam en icoontje in de browser
      options: {
        name: `Catalogue Raisonné`,
        short_name: `CR`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `content/images/icon.png`, // Zorg dat dit pad klopt
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `settings`,
        path: `${__dirname}/content/settings/`,
      },
    },    
    // Gecombineerde configuratie voor gatsby-source-filesystem
    ...[
      { name: "datart", path: `${__dirname}/content/datart` },
      { name: "datbio", path: `${__dirname}/content/datbio` },
      { name: "datcol", path: `${__dirname}/content/datcol` },
      { name: "datexh", path: `${__dirname}/content/datexh` },
      { name: "datlit", path: `${__dirname}/content/datlit` },
      { name: "images", path: `${__dirname}/content/images` },
      { name: "imaart", path: `${__dirname}/content/imaart` },
      { name: "imabio", path: `${__dirname}/content/imabio` },
      { name: "imacol", path: `${__dirname}/content/imacol` },
      { name: "imaexh", path: `${__dirname}/content/imaexh` },
      { name: "imalit", path: `${__dirname}/content/imalit` },
    ].map(({ name, path }) => ({
      resolve: `gatsby-source-filesystem`,
      options: { name, path },
    })),
  ],
};
