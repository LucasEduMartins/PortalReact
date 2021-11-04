import { Menu } from "../../components/Menu";
import "./../../styles/global.scss";


export function Usuarios(){
    return(
        <div id="page-usuarios" className="page">
            <Menu menuActived="Usuarios" />
            <h1>Usuários</h1>
        </div>
    )
}