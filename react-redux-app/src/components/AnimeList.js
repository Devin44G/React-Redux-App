import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { CardsContainer,
         EpisodeCard,
         TitleInfo } from './styles';

const AnimeList = props => {
  console.log(props);

  return(
    <CardsContainer>
      {props.episodes.map( episode => {
        let time = new Date(Date.parse(episode.aired));
        return(
          <EpisodeCard key={episode.episode_id}>
            <h2 style={{marginBottom:'0px'}}>Episode: {episode.episode_id}</h2>
            <p>Aired: {time.toDateString()}</p>
            <TitleInfo>
              <h3>English Title: <i>{episode.title}</i></h3>
              <h3>Japanese Title: {episode.title_japanese}</h3>
            </TitleInfo>
          </EpisodeCard>
        );
      })}
    </CardsContainer>
  );
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    error: state.error
  };
};

export default connect(mapStateToProps,{})(AnimeList);
