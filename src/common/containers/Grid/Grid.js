import React from 'react';
import { useStoreState } from 'easy-peasy';
import './grid.scss';


const Grid = () => {
  const articles = useStoreState(state => state.articles.articles);
  return (
    <div className="article-container">
      {articles.map(({
        name, owner, stargazers_count: starCount, html_url: htmlUrl
      }) => (
        <div className="article-card" key={name}>
          <img alt="" className="owner-avatar" src={owner.avatar_url} />
          <div>
            <div className="redirect-url">
              <a href={htmlUrl}>{name}</a>
            </div>
            <div className="owner-name">
              @
              {owner.login}
            </div>
            <div className="star-count">
              {starCount}
              {' '}
              stars
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Grid.defaultProps = {
  match: {},
};

export default Grid;
