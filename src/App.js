import './App.css';
import { Provider } from 'react-redux'
import store from './Components/Store';
import Component from './Components/Component';


function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ backgroundColor:"red",boxShadow: "0px 0px 10px black", width: "450px", height: "200px",padding:"20px", margin: "100px auto" }}>
        <h2 style={{ backgroundColor: "" }}>Counter App Using Redux</h2>
        <Component />
      </div>
    </Provider>
  );
}

export default App;