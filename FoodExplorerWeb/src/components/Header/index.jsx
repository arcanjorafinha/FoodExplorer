import { RiShutDownLine } from 'react-icons/ri';
import { Container, Logout, Logo } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import Polygon from "../../assets/icons/Polygon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Header() {
    const { signOut } = useAuth();
    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    return (
        <Container>
            <Logo>
                <img src={Polygon} alt="Poligono" />
                <p>food explorer</p>
            </Logo>
            <Input
                type="text"
                placeholder="Busque por pratos ou igredientes"

            />
            <Button></Button>
            <Logout onClick={handleSignOut} >
                <RiShutDownLine />
            </Logout>
        </Container>
    )
};