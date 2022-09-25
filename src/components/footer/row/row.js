import React, { useState, useEffect } from "react";
import "./row.css";
import YouTube  from "react-youtube";
import axios from "../../../axios";
import movieTrailer from "movie-trailer";
import Loading from "../../loading/loading";
const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargRow }) {
  const [movies, setMovies] = useState([]);
  const [trial, setTrial] = useState("");
  const [loading, setLoading] = useState(false);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
        setLoading(true)
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const showTrial = (movie) => {
    if (trial) {
      setTrial("");
    } else {
        movieTrailer(movie)
        .then((url)=>{
          const urlParams=new URLSearchParams(new URL(url).search);
          setTrial(urlParams.get("v"));
        })
        .catch((error)=> console.log(error));
    }
  };
  return (
    <>
      {loading?<Loading/>:null}
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
    </>
  );
}

export default Row;
