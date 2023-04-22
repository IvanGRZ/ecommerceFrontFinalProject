import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth/index";
import { setToken } from "../../utils/storage";
import SignUpForm from "../../components/SignUpForm";

const SignUpContainer = () => {
    
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (username, password, address, age, picture,name,phone) => {
        try {
            const response = await signup(username, password, address, age, picture,name,phone);
            setToken(response.accessToken);
            navigate("/home");
        } catch (error) {
            setError("Hubo un error al registarte. Intenta mas tarde");
        }
    };
    
    return (
    <div>
        <SignUpForm onSubmit={handleSubmit} />
        {error && <p>{error}</p>}
    </div>
  );
}

export default SignUpContainer;