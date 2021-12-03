import {BrowserRouter, Route} from 'react-router-dom';
import { Login } from './pages/Login/index';
import { Compras } from './pages/Compras';
import { Usuarios } from './pages/Usuarios';
import { Estoque } from './pages/Estoque';
import "./styles/global.scss";
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Layout menuActived="Compras">
          <div>
            <Route path="/Compras" component={Compras}></Route>
            <Route path="/Usuarios" component={Usuarios}></Route>
            <Route path="/Estoque" component={Estoque}></Route>
          </div>
      </Layout>
    </BrowserRouter>
  );  
}

export default App;
