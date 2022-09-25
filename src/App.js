import "./App.css";
import Banner from "./components/banner/banner";
import Row from "./components/footer/row/row";
import Navbar from "./components/navbar/navbar";
import requests from "./requests";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
