import { RiShutDownLine } from 'react-icons/ri';
import { Container, Logout, Logo, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import Polygon from "../../assets/icons/Polygon.svg";
import { Input } from "../../components/Input";
import { FiSearch } from 'react-icons/fi';
import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";

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
            <Button>
                <img src={Receipt} alt="Receita" />
                <p>Pedidos(0)</p>
            </Button>
            <Logout onClick={handleSignOut} >
                <img src={SignOut} alt="Sair" />
            </Logout>
        </Container>
    )
};