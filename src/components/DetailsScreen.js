import React from "react";
import MovieDetailes from "./MovieDetailes";
import Header from "./Header";
import MoviesList from "./MoviesList";
import { Container, Divider } from "semantic-ui-react";

function DetailsScreen() {
  return (
    <div>
      <Header />
      <Divider horizontal />
      <Container>
        <MovieDetailes />
      </Container>
      <Divider horizontal />
      <Container>
        <h3>More movies like this:</h3>
        <MoviesList />
      </Container>
    </div>
  );
}

export default DetailsScreen;
