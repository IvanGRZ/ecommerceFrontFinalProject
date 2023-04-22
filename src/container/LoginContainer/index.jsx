import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth/index";
import { setToken } from "../../utils/storage";
import LoginForm from "../../components/LoginForm";

const LoginContainer = () => {
    
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (username, password) => {
        try {
            const response = await login(username, password);
            setToken(response.accessToken);
            navigate("/");
        } catch (error) {
            setError("Usuario o contraseña incorrectos");
        }
    };
    
    return (
    <div>
        <LoginForm onSubmit={handleSubmit} />
        {error && <p>{error}</p>}
    </div>
  );
}

export default LoginContainer;