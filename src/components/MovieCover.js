import React from "react";
import { Card, Image } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setMovieDetail, setDetails } from "../actions";

function MovieCover({ cover, title, item }) {
  const showDetailScreen = useSelector((state) => state.showDetailScreen);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setMovieDetail(item));
    if (showDetailScreen === false) {
      dispatch(setDetails());
    }
  };

  return (
    <Card
      onClick={onSubmit}
      fluid
      centered
      color="blue"
      style={{ marginTop: 30 }}
    >
      <Image src={cover} fluid />
      <Card.Header textAlign="center">{title}</Card.Header>
    </Card>
  );
}

export default MovieCover;
