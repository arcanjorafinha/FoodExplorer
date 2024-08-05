import { Container } from "./styles"
import { Counter } from "../Counter"
import { Button } from "../Button"
import HeartIcon from "../../assets/icons/Heart.svg";
import GambePlate from "../../assets/plates/Gambe.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function Card() {

    const navigate = useNavigate()

    function handleDetails() {
        navigate("/details/");
    }

    function handleNew() {
        navigate("/new");
    }

    return (
        <Container>
            <img src={HeartIcon} alt="" style={{ alignSelf: "end" }} onClick={handleNew} />
            <img src={GambePlate} alt="" style={{ width: '176px', height: '176px' }} />
            <h1>Spaguetti Gambe</h1>
            <h2>Massa fresca com camarões e pesto.</h2>
            <span>R$ 79,97</span>
            <div>
                <Counter />
                <Button title="incluir" onClick={handleDetails} />
            </div>
        </Container>
    )
}
