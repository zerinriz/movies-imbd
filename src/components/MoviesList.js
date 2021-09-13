import React from "react";
import { useSelector } from "react-redux";
import { Card, Container } from "semantic-ui-react";
import MovieCover from "./MovieCover";

function MoviesList() {
  const movieList = useSelector((state) => state.movieList);
  const show = useSelector((state) => state.showListScreen);
  const movies = movieList[0];
  
  if (show === true) {
    return (
      <Container>
        <Card.Group itemsPerRow="5" stackable>
          {movies.map((item) => (
            <MovieCover
              key={item.id}
              item={item}
              cover={item.i.imageUrl}
              title={item.l}
            />
          ))}
        </Card.Group>
      </Container>
    );
  } else return null;
}

export default MoviesList;
