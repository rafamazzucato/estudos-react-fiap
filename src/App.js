import './App.css';
import { Hello } from './components/Hello';
import { Hello2 } from './components/Hello2';

function App() {
  return (
    <div className="App" htmlFor="label">
      <header className="App-header">
        <Hello text="Ola"/>
        <Hello text="123"/>
        <Hello2 text="Segundo Componente" />
        <Hello text="dia"/>
        <Hello2 text="Terceiro Componente"/>
        <Hello text="React"/>
        <Hello text="Teste"/>
        <Hello2 text="Quarto Componente"/>
      </header>
    </div>
  );
}

export default App;
