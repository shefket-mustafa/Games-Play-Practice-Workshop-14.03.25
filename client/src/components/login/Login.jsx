import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/userContext";


export default function Login() {
    const navigate = useNavigate();
    const{ login } = useLogin();
    const {userLoginHandler} = useContext(UserContext)

    const loginHandler = async (_, formData) => {
        const formValues = Object.fromEntries(formData);

        const authData = await login(formValues.email, formValues.password)
        

        userLoginHandler(authData);

        // navigate('/games');

        return formValues
    }
    const [_, loginAction, isPending] = useActionState(loginHandler, {email:'', password:''})

    
    
  return (
      <>
      <section id="login-page" className="auth">
    <form action={loginAction} id="login">

        <div className="container">
            <div className="brand-logo"></div>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="qnchum@gmail.com"/>

            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password"/>
            <input type="submit" className="btn submit" value="Login" disabled={isPending}/>
            <p className="field">
                <span>If you don't have profile click <Link to="/register">here</Link></span>
            </p>
        </div>
    </form>
</section></>
    );
}