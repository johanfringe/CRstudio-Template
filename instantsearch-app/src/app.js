const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '4XUHDS32T2',
  'fd6d16f9f47c5901fba3d67abb412473'
);

const search = instantsearch({
  indexName: 'litindex',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <div>
            <h1>
              ${components.Highlight({ hit, attribute: 'frontmatter.title' })}
            </h1>
            <p>${components.Highlight({ hit, attribute: 'id' })}</p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
