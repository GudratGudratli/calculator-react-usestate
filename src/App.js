import './App.css';
import CounterContextProvider from './context/MainContext';
import Home from './pages/Home';

export default function App() {
  return (
    <CounterContextProvider>
      <Home/>
    </CounterContextProvider>
  );
}