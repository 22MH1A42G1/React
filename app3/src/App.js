// import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Parent from './Parent';
import Counter from './Counter';
import Event1 from './Event1';
function App() {
    return (
        <div className="App">
            <header className="App-header">
              <h3>React Appliction</h3>
            </header>
            <Comp1 />
            <Comp2 />
            <Comp3 /> 
            <Comp4 />
            <Parent />
            <Counter />
            <Event1 />
        </div>
    );
}
export default App;