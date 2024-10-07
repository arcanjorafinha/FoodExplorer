import { RiShutDownLine } from 'react-icons/ri';
import { Container, Logout, Logo, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import Polygon from "../../assets/icons/Polygon.svg";
import { NavInput } from "../../components/NavInput";
import { FiSearch } from 'react-icons/fi';
import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import Hamburger from "../../assets/icons/Menu.svg"
import { USER_ROLE } from "../../utils/roles";

export function Header({ onSearch }) {
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

    function handleOrders() {
        navigation("/orders");
    }

    return (
        <Container>
            <img className='Hamburger' src={Hamburger} alt="Menu Hamburger" />
            {user.role === USER_ROLE.ADMIN ? (
                <Logo onClick={handleHome} >
                    <img src={Polygon} alt="Poligono" />
                    <div>
                        <p>food explorer</p>
                        <span>admin</span>
                    </div>
                </Logo>
            ) : (
                <Logo onClick={handleHome} >
                    <img src={Polygon} alt="Poligono" />
                    <p>food explorer</p>
                </Logo>
            )}
            <div className='nav' >
                <NavInput
                    icon={FiSearch}
                    type="text"
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={e => onSearch(e.target.value)}
                />
            </div>
            {user.role === USER_ROLE.ADMIN ? (
                <Button onClick={handleNew} >
                    <p>Novo Prato</p>
                </Button>
            ) : (
                <Button onClick={handleOrders} >
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
