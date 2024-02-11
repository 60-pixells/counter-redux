import './App.css';
import CounterApp from './components/CounterApp';
import MainPage from './components/MainPage';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import store from "./app/app";
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Routes>
          <Route path='/' element={<About></About>}></Route>
          <Route path='/main/:id' element={<MainPage></MainPage>}></Route>
          <Route path="/counter" element={<CounterApp></CounterApp>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
