import React, { useState, useEffect } from "react";
import "./row.css";
import YouTube  from "react-youtube";
import axios from "../../../axios";
import movieTrailer from "movie-trailer";
const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargRow }) {
  const [movies, setMovies] = useState([]);
  const [trial, setTrial] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const showTrial = (movie) => {
    if (trial) {
      setTrial("");
    } else {
        movieTrailer(movie.id,null)
        .then((url)=>{
          console.log("url is "+url);
          const urlParams=new URLSearchParams(new URL(url).search);
          console.log("urlParamsn"+urlParams);
          setTrial(urlParams.get("v"));
        })
        .catch((error)=> console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => showTrial(movie)}
            className={`imgPoster ${isLargRow && "imgPosterLarg"}`}
            src={`${baseURL}${
              isLargRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trial && <YouTube  videoId={trial} opts={opts} />}
    </div>
  );
}

export default Row;
