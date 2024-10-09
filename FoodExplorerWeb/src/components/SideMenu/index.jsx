import { useState } from "react";
import { Container, MenuContent, Overlay, CloseButton } from "./styles";
import { NavInput } from "../../components/NavInput";
import { FiSearch } from 'react-icons/fi';
import SignOut from "../../assets/icons/SignOut.svg";
import CloseOut from "../../assets/icons/Close.svg";
import { Footer } from "../../components/Footer"
import { useAuth } from "../../hooks/auth";

export function SideMenu({ isOpen, onClose, onSearch }) {
    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
        onClose();
    }

    if (!isOpen) return null; // Se o menu estiver fechado, não renderiza nada

    return (
        <>
            <Overlay onClick={onClose} /> {/* O fundo escuro ao clicar fora do menu */}
            <Container>
                <CloseButton>
                    <img src={CloseOut} onClick={onClose} alt="" />
                    Menu
                </CloseButton>
                <MenuContent>
                    <NavInput
                        icon={FiSearch}
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={e => onSearch(e.target.value)}
                    />
                    <button onClick={handleSignOut}>
                        <img src={SignOut} alt="Sair" />
                        <p>Sair da Conta</p>
                    </button>
                </MenuContent>
                <Footer />
            </Container>
        </>
    );
}
