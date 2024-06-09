import axios from 'axios';

const API_URL = 'https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api';

export const getArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw error;
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    throw error;
  }
};

export const getLatestArticle = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    const articles = response.data;
    return articles.length > 0 ? articles[articles.length - 1] : null; // Retourne le dernier article
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw error;
  }
};

export const createArticle = async (article) => {
  try {
    const response = await axios.post(`${API_URL}/articles`, article);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles/categories`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    throw error;
  }
};


export const getComments = async (articleId) => {
  try {
    const response = await axios.get(`${API_URL}/articles/${articleId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    throw error;
  }
};

export const addComment = async (articleId, comment) => {
  try {
    const response = await axios.post(`${API_URL}/articles/${articleId}/comments`, comment);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du commentaire:', error);
    throw error;
  }
};

export const getRelatedArticles = async (currentArticleId, category) => {
  try {
    const response = await axios.get(`${API_URL}/articles/related`, {
      params: { currentArticleId, category }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles connexes:', error);
    throw error;
  }
};
