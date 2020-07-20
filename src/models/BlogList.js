import ArticlesFilter from "../components/ArticleFilter";

// Data structure that represents all blog posts. 
// Encapsulates logic that apply to blog posts as a group. 
// E.g.: set of years posts were made, altering filtering based on min/max date
class BlogList
{    
    constructor (articles)
    {       
        this.uniqueYears = [];   
        this.articles = articles;
        this.setUniqueYears();
        this.setFilteredArticles();
    }

    setUniqueYears() {
        const dates = this.articles.map((i) => Date.parse(i.date));
        const years = dates.map((i) => new Date(i).getFullYear());
        const uYears = [...new Set(years)].sort((a,b) => (a < b) ? 1 : -1);
        this.uniqueYears = uYears ;
      }
    
    setFilteredArticles(year) {
        let min = 0;
        let max = 0;
    
        if (year && year !== "All") {
          min = Date.parse("January 01, " + year);
          max = Date.parse("December 31, " + year);
        }
        this.filteredArticles = ArticlesFilter(min, max, this.articles);
      }
    
    getUniqueYears() {
        return this.uniqueYears;
    }
    

    getFilteredArticles(){
        return this.filteredArticles;
    }
      
    articlesFilterHelper (from, to, articles) {
    let filtered = articles;
    if (from !== 0 && to !== 0) {
      filtered = articles.filter(
        (i) => Date.parse(i.date) >= from && Date.parse(i.date) <= to
      );
    }
    filtered = filtered.sort((a, b) => (Date.parse(a.date) > Date.parse(b.date) ? -1 : 1));
    return filtered;
  }
}
export default BlogList;