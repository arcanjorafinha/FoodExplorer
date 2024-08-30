import { Container } from "./styles";
import { Counter } from "../Counter";
import { Button } from "../Button";
import HeartIcon from "../../assets/icons/Heart.svg";
import PencilIcon from "../../assets/icons/Pencil.svg";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

export function Card({ id, title, description, price, image }) {
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleDetails() {
        navigate(`/details/${id}`);
    }

    function handleEdit() {
        navigate(`/edit/${id}`);
    }

    return (
        <Container>
            {user.role === USER_ROLE.ADMIN ? (
                <img src={PencilIcon} alt="Pencil Icon" style={{ alignSelf: "end", marginBottom: "35px" }} onClick={handleEdit} />
            ) : (
                <img src={HeartIcon} alt="Heart Icon" style={{ alignSelf: "end" }} onClick={handleDetails} />
            )}

            <img src={image} alt={title} style={{ width: '176px', height: '176px' }} />
            <h1>{title}</h1>
            <h2>{description}</h2>
            <span>R$ {price}</span>

            {user.role !== USER_ROLE.ADMIN && (
                <div>
                    <Counter />
                    <Button title="incluir" onClick={handleDetails} />
                </div>
            )}
        </Container>
    );
}
