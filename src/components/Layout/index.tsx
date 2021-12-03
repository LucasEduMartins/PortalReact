import {HTMLAttributes} from "react";
import { Menu } from "../Menu";

type LayoutProps = {
    menuActived: string;
    children: React.ReactElement;
}

export function Layout(props : LayoutProps)  {
    return(
        <div className="page">
            <Menu menuActived={props.menuActived} />
            {props.children}
        </div>
    );
}