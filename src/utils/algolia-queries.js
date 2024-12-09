const pageQuery = `{
  allMarkdownRemark {
    nodes {
      objectID: id
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      excerpt(pruneLength: 5000)
    }
  }
}`;

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes, // Pas dit aan op basis van je data
    indexName: `artindex`, // De naam van je Algolia-index
  },
];

module.exports = queries;
