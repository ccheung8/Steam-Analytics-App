import useSteamAnalytics from "./hooks/useSteamAnalytics";

function App() {
  const { featured, getFeatured } = useSteamAnalytics();

  getFeatured();

  return (
    <>
      <h1>Steam Analytics App</h1>
      <h2>New and Trending</h2>
    </>
  );
}

export default App;
