import React from 'react';

function SocialShare({ url, title }) {
  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">Partager cet article</h3>
      <div className="flex gap-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white py-2 px-4 rounded"
        >
          Twitter
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white py-2 px-4 rounded"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default SocialShare;
