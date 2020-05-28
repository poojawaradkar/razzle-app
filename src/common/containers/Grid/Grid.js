import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStoreState } from 'easy-peasy';
// import { useStoreActions, useStoreState } from 'easy-peasy';
// import { usePrevious } from '../../../utills';
import './grid.css';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const Grid = props => {
  // const [loading, setLoading] = useState(true);
  // const [errorText, setErrorText] = useState(false);
  // const fetchPopularRepos = useStoreActions(actions => actions.articles.fetchPopularRepos);
  const articles = useStoreState(state => state.articles.articles);
  const {
    match: {
      params: { id: param },
    },
  } = props;
  // const prevId = usePrevious(param);

  useEffect(() => {
    // let mounted = true;
    // if (!articles.length) {
    //   fetchPopularRepos(param)
    //     .catch(() => {
    //       setErrorText(true);
    //     })
    //     .finally(() => {
    //       if (mounted) {
    //         setLoading(false);
    //       }
    //     });
    // }
    // return () => {
    //   mounted = false;
    // };
  }, []);

  useEffect(() => {
    // let mounted = true;
    // if (prevId && prevId !== param) {
    //   setLoading(true);
    //   fetchPopularRepos(param)
    //     .catch(() => {
    //       setErrorText(true);
    //     })
    //     .finally(() => {
    //       if (mounted) {
    //         setLoading(false);
    //       }
    //     });
    // }
    // return () => {
    //   mounted = false;
    // };
  }, [param]);

  if (false) {
    return <p>LOADING</p>;
  }
  if (false) {
    return <p>Oops! Something went wrong :(</p>;
  }
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

Grid.propTypes = propTypes;
export default Grid;
