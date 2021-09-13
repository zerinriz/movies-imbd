const movieID = (state = null, action) => {
  switch (action.type) {
    case "MOVIE_ID":
      return action.payload;
    default:
      return state;
  }
};

export default movieID;
