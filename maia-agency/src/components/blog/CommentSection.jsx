import React, { useState, useEffect } from 'react';
import { getComments, addComment } from '../../services/apiService';

function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  const fetchComments = async () => {
    try {
      const fetchedComments = await getComments(articleId);
      setComments(fetchedComments);
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires:', error);
    }
  };

  const handleAddComment = async () => {
    try {
      await addComment(articleId, { text: commentText });
      setCommentText('');
      fetchComments();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">Commentaires</h3>
      <div className="mb-4">
        {comments.map(comment => (
          <div key={comment._id} className="mb-2 p-4 bg-gray-100 text-black rounded-lg">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <textarea
        className="w-full p-2 border rounded-lg mb-2"
        rows="4"
        placeholder="Ajouter un commentaire..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleAddComment} className="bg-blue-500 text-white py-2 px-4 rounded">Ajouter</button>
    </div>
  );
}

export default CommentSection;
