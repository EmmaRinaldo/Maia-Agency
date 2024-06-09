import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPost({ article }) {
  const navigate = useNavigate();

  return (
    <div
      className="grid grid-cols-1 cursor-pointer md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8"
      onClick={() => article && navigate(`/blog-detail/${article._id}`)}
    >
      {article ? (
        <>
          <img
            src={article.coverImage}
            alt={article.title}
            className="rounded-2xl object-cover w-full h-full"
          />
          <div>
            <h4 className="text-red-500">{article.category}</h4>
            <h2 className="text-[23px] font-bold mt-5">{article.title}</h2>
            <h4 className="line-clamp-6 text-gray-400 mt-5">{article.excerpt}</h4>
            <div className="flex items-center mt-5">
              <div className="ml-2">
                <h3 className="font-bold">{article.author}</h3>
                <h3 className="text-gray-500">{new Date(article.createdAt).toLocaleDateString()}</h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default IntroPost;
