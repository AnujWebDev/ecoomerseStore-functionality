import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './NavbarPanel/Home';
import Cart from './NavbarPanel/Cart';
import DefaultNabar from './NavbarPanel/DefaultNabar';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import Store from './Store/Store';


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
        <DefaultNabar></DefaultNabar>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/cart' element={<Cart></Cart>} ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
