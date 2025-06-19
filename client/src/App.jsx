import NewAndTrending from "./components/NewAndTrending/NewAndTrending";
import TopSellers from "./components/TopSellers/TopSellers";
import Genres from "./components/Genres/Genres";
import Tags from "./components/Tags/Tags";

function App() {
  return (
    <>
      <h1>Steam Analytics App</h1>
      <TopSellers />
      <NewAndTrending />
      <Genres />
      <Tags />
    </>
  );
}

export default App;
