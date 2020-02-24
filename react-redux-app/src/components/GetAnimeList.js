import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import { Button } from './styles.js';

const GetAnimeList = props => {
  const dataHandler = e => {
    e.preventDefault();
    props.getData();
  }

  return(
    <>
      <>
        {props.isFetchingData ? (
          <div>WE ARE FETCHING DATA . . .</div>
        ) : (
          <Button
            onClick={dataHandler}
          >Get Episodes Data</Button>
        )}
      </>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps,{ getData })(GetAnimeList);
