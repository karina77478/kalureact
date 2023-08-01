import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03doblecontador from './components/C03doblecontador';
import C04variable from './components/C04variable';
import C05operadorTernario from './components/C05operadorTernario';
import C06matriz from './components/C06matriz1';

function App() {
  return (
    <div >
      <h3>Sexto componente</h3>
      <C01componente />
      <h3>Quinto componente</h3>
      <C02contador />
      <h3>cuarto componente</h3>
      <C03doblecontador />
      <h3>Tercer componente </h3>
      <C04variable xVariable="hola mundo...." />
      <h1>segundo componente</h1>
      <C05operadorTernario />
      <h1>primer componente</h1>
      <C06matriz />

     
    </div>
  );
}

export default App;