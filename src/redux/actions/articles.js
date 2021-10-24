import { articleApi } from '../../services/api/articlesApi';

export const setArticles = (payload) => ({
  type: 'SET_ARTICLES',
  payload
});

export const fetchArticles = () => async (dispatch) => {
  try {
    const response = await articleApi.getArticles();
    dispatch(setArticles(response.data));
  } catch(err) {
    throw new Error(err)
  }
};
