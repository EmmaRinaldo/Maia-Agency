import React, { useState, useEffect } from 'react';
import Search from './Search';
import IntroPost from './IntroPost';
import Blogs from './Blogs';
import { getArticles } from '../../services/apiService';

function BlogContainer() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const articles = await getArticles();
      setArticles(articles);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const latestArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const otherArticles = filteredArticles.slice(1);

  return (
    <div>
      <Search selectedTag={setSelectedCategory} setSearchQuery={setSearchQuery} />
      {latestArticle && <IntroPost article={latestArticle} />}
      <Blogs posts={otherArticles} />
    </div>
  );
}

export default BlogContainer;
