import { Container, Form, Section } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api"
import Polygon from "../../assets/icons/Polygon.svg";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso");
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar")
                }
            });
    }

    return (
        <Container>
            <Section>
                <img src={Polygon} alt="Poligono" />
                <p>food explorer</p>
            </Section>
            <Form>
                <h2>Crie sua Conta</h2>
                <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    label="Seu nome"
                    onChange={e => setName(e.target.value)}
                />
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
                <Button title="Cadastrar" onClick={handleSignUp} />
                <Link to="/" >Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}