import './App.css';
import BookList from './Components/BookList';

function App() {
  return (
    <div className="App">
      <BookList name={'Knowledge City'} numberOfBooks = {500}/>
    </div>
  );
}

export default App;
