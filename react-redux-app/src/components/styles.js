import styled from 'styled-components';

export const CardsContainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

export const EpisodeCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  border: solid 1.5px #16191f;
  border-radius: 3px;
  width: 45%;
  ${'' /* padding: 1rem; */}
  margin-bottom: .5rem;
  position: relative;
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 1rem;
`;
