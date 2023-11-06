import StarRating from "./components/StarRating";

function App() {
  return (
    <div>
      <h2>Rate this app:</h2>
      <StarRating defaultValue={3} />
    </div>
  );
}

export default App;
