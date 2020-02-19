import React from 'react';
import { connect } from 'react-redux';

const AnimeList = props => {
  console.log(props);

  return(
    <div>
      List
      {props.episodes.map( episode=> <h3>{ episode.title }</h3>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    error: state.error
  };
};

export default connect(mapStateToProps,{})(AnimeList);
