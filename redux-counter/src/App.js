import logo from './logo.svg';
import './App.css';
import CounterApp from './components/CounterApp';
import store from "./app/app";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <CounterApp />
    </Provider>
  );
}

export default App;
