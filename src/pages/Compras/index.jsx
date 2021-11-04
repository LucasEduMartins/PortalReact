import { Menu } from "../../components/Menu";
import "./../../styles/global.scss";
import "./styles.scss";

export function Compras(){
    return (
        <div id="page-compras" className="page">
            <Menu menuActived="Compras" />
            <h1>Compras</h1>
        </div>
    )
}