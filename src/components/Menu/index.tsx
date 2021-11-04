
import { useState, EventHandler } from "react";
import {AddShoppingCart, AccountCircle, Storage, ArrowForward} from "@material-ui/icons";
import "./styles.scss";
import { MouseEventHandler } from "react";
import { useHistory } from "react-router-dom";

type MenuProps =  {
    menuActived: string;
}

export function Menu(props: MenuProps){
    const [menuActived, setMenuActived] = useState(props.menuActived ?? "Compras");
    const history = useHistory();

    function handleClickMenu(event: React.MouseEvent) {
        event.preventDefault();
        const value = event.currentTarget.getAttribute("value");
        history.push(`/${value}`);
    }

    return (
        <div id="page-menu">
            <div id="menu-header">
                <div>
                    <div id="perfil-img">
                        <p>LE</p>
                    </div>
                </div>
                <div>
                    <h2 id="perfil-nome">Lucas Eduardo</h2>
                    <h3 id="perfil-email">l.eduardo@email.com</h3>
                </div>
            </div>
            <p>Menu Principal</p>
            <div id="menu-container">
                <ul id="menu">
                    <li value="Compras" className={`menu-item ${menuActived === "Compras" && "Actived"}`} onClick={handleClickMenu}>
                        <AddShoppingCart/>
                        <div>
                            <span>Compras</span>  
                            <ArrowForward/>
                        </div>
                    </li>
                    <li value="Usuarios" className={`menu-item ${menuActived === "Usuarios" && "Actived"}`} onClick={handleClickMenu}>
                        <AccountCircle/>
                        <div>
                            <span>Usuarios</span>
                            <ArrowForward/>
                        </div>
                    </li>
                    <li value="Estoque" className={`menu-item ${menuActived === "Estoque" && "Actived"}`} onClick={handleClickMenu}>
                        <Storage/>
                        <div>
                            <span>Estoque</span>
                            <ArrowForward/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}