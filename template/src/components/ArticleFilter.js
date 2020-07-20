

function ArticlesFilter(from, to, articles) {
    let filtered = articles;
    if (from !== 0 && to !== 0) {
      filtered = articles.filter(
        (i) => Date.parse(i.date) >= from && Date.parse(i.date) <= to
      );
    }
    filtered = filtered.sort((a, b) => (Date.parse(a.date) > Date.parse(b.date) ? -1 : 1));
    return filtered;
  }
  

export default ArticlesFilter;