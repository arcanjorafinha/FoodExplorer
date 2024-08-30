import { RiShutDownLine } from 'react-icons/ri';
import { Container, Logout, Logo, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import Polygon from "../../assets/icons/Polygon.svg";
import { NavInput } from "../../components/NavInput";
import { FiSearch } from 'react-icons/fi';
import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import { USER_ROLE } from "../../utils/roles";

export function Header() {
    const { signOut } = useAuth();
    const navigation = useNavigate();
    const { user } = useAuth();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    function handleHome() {
        navigation("/");
    }

    function handleNew() {
        navigation("/new");
    }

    return (
        <Container>
            <Logo onClick={handleHome} >
                <img src={Polygon} alt="Poligono" />
                <p>food explorer</p>
            </Logo>
            <NavInput
                icon={FiSearch}
                type="text"
                placeholder="Busque por pratos ou igredientes"
            />
            {user.role === USER_ROLE.ADMIN ? (
                <Button onClick={handleNew} >
                    <p>Novo Prato</p>
                </Button>
            ) : (
                <Button onClick={handleNew} >
                    <img src={Receipt} alt="Receita" />
                    <p>Pedidos(0)</p>
                </Button>
            )}
            <Logout onClick={handleSignOut} >
                <img src={SignOut} alt="Sair" />
            </Logout>
        </Container>
    )
};