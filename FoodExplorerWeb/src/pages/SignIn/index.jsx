import { useAuth } from "../../hooks/auth";
import { Container, Form, Section } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { useState } from "react";
import Polygon from "../../assets/icons/Polygon.svg";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    };

    return (
        <Container>
            <Section>
                <img src={Polygon} alt="Poligono" />
                <p>food explorer</p>
            </Section>
            <Form>

                <h2>Faça login</h2>

                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    label="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn} />
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}