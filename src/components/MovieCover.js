import React from "react";
import { Card, Image } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setMovieDetail, setDetails } from "../actions";
import Missing from "./Missing.png";

function MovieCover({ title, item }) {
  const showDetailScreen = useSelector((state) => state.showDetailScreen);
  const dispatch = useDispatch();


  const onSubmit = () => {
    dispatch(setMovieDetail(item));
    if (showDetailScreen === false) {
      dispatch(setDetails());
    }
  };

  if (item.i === undefined) {
    return (
      <Card
        onClick={onSubmit}
        fluid
        centered
        color="blue"
        style={{ marginTop: 30 }}
      >
        <Image src={Missing} fluid />
        <Card.Header textAlign="center">{title}</Card.Header>
      </Card>
    );
  } else {
    return (
      <Card
        onClick={onSubmit}
        fluid
        centered
        color="blue"
        style={{ marginTop: 30 }}
      >
        <Image src={item.i.imageUrl} fluid />
        <Card.Header textAlign="center">{title}</Card.Header>
      </Card>
    );
  }
}

export default MovieCover;
