import "Components/Login/Login.less";
import { useState } from "react";


export default function LoginPage(){

    const[ showRegister, setRegister ] = useState(false);

    const rederLoginForm = () => 


    return(
        <div className="login-page">
            <h1>Login</h1>
            <form id="login-form" onSubmit={ undefined }> 
                <input placeholder="Username"/>
                <input type="password" placeholder="Senha"/>
                <button className= "custom-buttom" type="submit">Login</button>
            </form>
            <span>Ainda não possui uma conta? <span>Cadastre-se</span></span>
        </div>
    )
}