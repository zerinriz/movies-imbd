/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Missing from "./Missing.png";
import { useSelector } from "react-redux";
import {
  Header,
  Container,
  Grid,
  Segment,
  Card,
  Image,
} from "semantic-ui-react";

function MovieDetailes() {
  const item = useSelector((state) => state.movieDetail);
  if (item.i === undefined) {
    return (
      <Container>
        <Segment>
          <Grid columns="2">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Card>
                  <Image fluid src={Missing} />
                  <Header textAlign="center" as="h2">
                    {item.l}
                  </Header>
                </Card>
              </Grid.Column>
              <Grid.Column stretched>
                <Segment textAlign="center" as="h2">
                  <Header>Details</Header>
                </Segment>
                <Header>Release date: {item.y}</Header>
                <Header>Genres: {item.q}</Header>
                <Header>Main actors: {item.s} </Header>
                <Header>Rank: {item.rank}</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  } else {
    return (
      <Container>
        <Segment>
          <Grid columns="2">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Card>
                  <Image fluid src={item.i.imageUrl} />
                  <Header textAlign="center" as="h2">
                    {item.l}
                  </Header>
                </Card>
              </Grid.Column>
              <Grid.Column stretched>
                <Segment textAlign="center" as="h2">
                  <Header>Details</Header>
                </Segment>
                <Header>Release date: {item.y}</Header>
                <Header>Genres: {item.q}</Header>
                <Header>Main actors: {item.s} </Header>
                <Header>Rank: {item.rank}</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default MovieDetailes;
