import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../services/apiService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommentSection from '../components/blog/CommentSection';
import RelatedArticles from '../components/blog/RelatedArticles';
import SocialShare from '../components/blog/SocialShare';

function BlogDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const fetchedArticle = await getArticleById(id);
      setArticle(fetchedArticle);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'article:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        {article ? (
          <>
            <div className="mb-8">
              <img src={article.coverImage} alt={article.title} className="rounded-xl w-full object-cover mb-5" />
              <h1 className="text-4xl font-bold">{article.title}</h1>
              <p className="text-gray-500 mt-2">{new Date(article.createdAt).toLocaleDateString()}</p>
              <div className="mt-5" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <SocialShare url={window.location.href} title={article.title} />
            <CommentSection articleId={article._id} />
            <RelatedArticles currentArticleId={article._id} category={article.category} />
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
