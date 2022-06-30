import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = "soyeong"
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>Hello React! {name}</h2>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
