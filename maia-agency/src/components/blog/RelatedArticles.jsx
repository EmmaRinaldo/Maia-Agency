import React, { useState, useEffect } from 'react';
import { getRelatedArticles } from '../../services/apiService';
import { Link } from 'react-router-dom';

function RelatedArticles({ currentArticleId, category }) {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    fetchRelatedArticles();
  }, [currentArticleId, category]);

  const fetchRelatedArticles = async () => {
    try {
      const fetchedRelatedArticles = await getRelatedArticles(currentArticleId, category);
      setRelatedArticles(fetchedRelatedArticles);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles connexes:', error);
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">Articles connexes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedArticles.map(article => (
          <div key={article._id} className="bg-white p-4 rounded-lg shadow">
            <Link to={`/blog-detail/${article._id}`}>
              <img src={article.coverImage} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-lg font-bold">{article.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
