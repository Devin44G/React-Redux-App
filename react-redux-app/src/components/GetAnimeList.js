import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';


const GetAnimeList = props => {
  const dataHandler = e => {
    e.preventDefault();
    props.getData();
  }

  return(
    <>
      <>
        {props.isFetchingData ? (
          <div>we are fetching data</div>
        ) : (
          <button onClick={dataHandler}>Get Data</button>
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