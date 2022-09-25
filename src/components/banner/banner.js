import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";
import Loading from "../loading/loading";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
        setLoading(true);
      const movie = await axios.get(requests.fetchNetflixOriginals)
     setMovie(
        movie.data.results[7]
      );
    //   setMovie(
    //     movie.data.results[
    //       Math.floor(Math.random() * movie.data.results.length - 1)
    //     ]
    //   );
      setLoading(false);
      return movie;
    }
    fetchData();
  }, []);
function truncate(str,n){

    return str?.length>n ?str.substring(0,n-1)+"...":str 
}
  return (
    <>
    { loading?<Loading/>:null}
      <header
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        <div className="banner_content">
          <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner_btn">
            <button>Play</button>
            <button>My List</button>
          </div>
        <h1 className="desc">{truncate(movie?.overview,150)}</h1>
        </div>
        <div className="empty"></div>
      </header>
    </>
  );
}

export default Banner;
