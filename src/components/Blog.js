function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const requestOptions = {
        method: 'GET',
      };
      const params = {
        api_token: process.env.NEWS_API_KEY,
        categories: 'business, tech',
        search: 'apple',
        limit: '10',
      };
      const esc = encodeURIComponent;
      const query = Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');
      try {
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?${query}`, requestOptions);
        const result = await response.json();
        if (result.data) {
          setArticles(result.data);
        } else {
          setError('No articles found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Error fetching articles');
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container news-widget mt-5">
      <h3 className="text-center">Latest Tech News</h3>
      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}
      {!loading && articles && articles.length > 0 ? (
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{article.title}</h4>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p>No articles found.</p>
      )}
    </div>
  );
}

export default Blog;
