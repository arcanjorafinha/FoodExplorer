import { useState } from 'react';
import { Container, Logout, Logo, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import Polygon from "../../assets/icons/Polygon.svg";
import { NavInput } from "../../components/NavInput";
import { FiSearch } from 'react-icons/fi';
import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import Hamburger from "../../assets/icons/Menu.svg";
import Add from "../../assets/icons/Add.svg";
import { USER_ROLE } from "../../utils/roles";
import { SideMenu } from '../SideMenu';

export function Header({ onSearch }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { signOut, cartItems, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function handleHome() {
        navigate("/");
    }

    function handleNew() {
        navigate("/new");
    }

    function handleOrders() {
        navigate("/orders");
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <Container>
                <img className='Hamburger' src={Hamburger} alt="Menu Hamburger" onClick={toggleMenu} />
                {user.role === USER_ROLE.ADMIN ? (
                    <Logo onClick={handleHome}>
                        <img src={Polygon} alt="Polígono" />
                        <div>
                            <p>food explorer</p>
                            <span>admin</span>
                        </div>
                    </Logo>
                ) : (
                    <Logo onClick={handleHome}>
                        <img src={Polygon} alt="Polígono" />
                        <p>food explorer</p>
                    </Logo>
                )}
                <div className='nav'>
                    <NavInput
                        icon={FiSearch}
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={e => onSearch(e.target.value)}
                    />
                </div>
                {user.role === USER_ROLE.ADMIN ? (
                    <Button onClick={handleNew}>
                        <img src={Add} alt="Add" />
                        <p>Novo Prato</p>
                    </Button>
                ) : (
                    <Button onClick={handleOrders}>
                        <img src={Receipt} alt="Receita" />
                        <p>Pedidos({cartItems})</p>
                    </Button>
                )}
                <Logout onClick={handleSignOut}>
                    <img src={SignOut} alt="Sair" />
                </Logout>
            </Container>

            <SideMenu
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                onSearch={onSearch}
            />
        </>
    );
}
