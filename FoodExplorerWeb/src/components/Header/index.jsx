import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';

export function Header() {
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    return (
        <Container>
            <Profile to="/profile" >

                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>

            </Profile>

            <Logout onClick={handleSignOut} >
                <RiShutDownLine />
            </Logout>
        </Container>
    )
};