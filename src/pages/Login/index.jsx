import { useState } from "react";
import { useHistory } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import { ButtonBlock } from "../../components/Buttons/index";

import "../../styles/global.scss";
import "./styles.scss";

export function Login(){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const history = useHistory('');

    function handleLogin(event) {
        event.preventDefault();
        if(email.trim() === '' && senha.trim() === ''){
            alert("campos inválidos!");
            return false;
        }
        history.push('/Sistema/Compras');
    }

    return (
        <div id="page-login">
            <aside id="info">
                <h1 className="title">Gerdau</h1>
                <div className="divider"></div>
                <h3 className="subtitle">Tão importante quanto o que colhemos são as sementes que deixamos para o amanhã.</h3>
            </aside> 
            <main>
                <div id="container-form">
                    <form action="" onSubmit={handleLogin}>
                        <p id="form-title">Acesso Administrativo</p>
                        <img id="form-title" src={logoImg} alt="" />
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Senha</label>
                            <input type="text" onChange={event => setSenha(event.target.value)}/>   
                        </div>
                        <span>Esqueceu sua senha?</span>
                        <ButtonBlock type="submit">Entrar</ButtonBlock>
                    </form>
                </div>
            </main>
        </div>
    )
}