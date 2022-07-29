import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
    {/*navbar*/}
    <Nav />




    {/*banner*/}

    <Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row title="Trending Now!" fetchUrl = {requests.fetchTrending}  />
    <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
    <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}  />
    <Row title="Horror Movies" fetchUrl = {requests.fetchComedyMovies} />
    <Row title="Romance Movies" fetchUrl = {requests.fetchRomanticMovies}  />
    <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    

    </div>
  );
}

export default App;
