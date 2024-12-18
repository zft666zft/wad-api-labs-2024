export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b4bb00e95b13fb921a03ebee44c2aa56&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };