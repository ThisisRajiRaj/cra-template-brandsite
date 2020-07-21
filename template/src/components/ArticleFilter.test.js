import ArticlesFilter from "./ArticleFilter";

test('0 items valid dates', () => {
    const articleList = [];
    const today = new Date();

    const lastYear = new Date();
    lastYear.setFullYear(today.getFullYear - 1);
    
    const filtered = ArticlesFilter(lastYear, today, articleList);
    expect(filtered.length).toBe(0);
  
});

test('0 items 0 min and max', () => {
    const articleList = [];
    
    const filtered = ArticlesFilter(0, 0, articleList);
    expect(filtered.length).toBe(0);
  
});

test('3 items with non zero min and max', () => {
    const articles = [
        {
            "date": "September 6, 2018",
            "name": "post1",
            "title": "post1"
        },
        {
            "date": "September 11, 2019",
            "name": "post2",
            "title": "post2"
        },
        {
            "date": "February 18, 2020",
            "name": "post1",
            "title": "post3"
        }
    ];
    const from = new Date("January 01, 2018");
    const to = new Date("December 31, 2019");
    
    const filtered = ArticlesFilter(from, to, articles);
    expect(filtered.length).toBe(2);

});

test('all items in queried year', () => {
    const articles = [
        {
            "date": "September 6, 2018",
            "name": "post1",
            "title": "post1"
        },
        {
            "date": "September 6, 2018",
            "name": "post2",
            "title": "post2"
        }
    ];
    const from = new Date("January 01, 2018");
    const to = new Date("December 31, 2019");
    
    const filtered = ArticlesFilter(from, to, articles);
    expect(filtered.length).toBe(2);
});


test('no items in queried year', () => {
    const articles = [
        {
            "date": "September 6, 2018",
            "name": "post1",
            "title": "post1"
        },
        {
            "date": "September 6, 2018",
            "name": "post2",
            "title": "post2"
        }
    ];
    const from = new Date("January 01, 2020");
    const to = new Date("December 31, 2020");
    
    const filtered = ArticlesFilter(from, to, articles);
    expect(filtered.length).toBe(0);

});