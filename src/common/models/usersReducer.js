import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export default {
  articles: [],
  // actions
  setArticles: action((state, articles) => {
    state.articles = articles;
  }),

  // thunks
  fetchPopularRepos: thunk(async (actions, language = 'all') => {
    const encodedURI = encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:
      ${language}&sort=stars&order=desc&type=Repositories`,
    );
    const res = await axios.get(encodedURI);
    (actions.setArticles(res.data.items));
  }),
};
