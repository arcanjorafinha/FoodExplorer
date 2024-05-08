import { Container } from "./styles"
import { Counter } from "../Counter"
import { Button } from "../Button"
import HeartIcon from "../../assets/icons/Heart.svg";
import GambePlate from "../../assets/plates/Gambe.png";


export function Card() {
    return (
        <Container>
            <img src={HeartIcon} alt="" style={{ alignSelf: "end" }} />
            <img src={GambePlate} alt="" style={{ width: '176px', height: '176px' }} />
            <h1>Spaguetti Gambe</h1>
            <h2>Massa fresca com camarões e pesto.</h2>
            <span>R$ 79,97</span>
            <div>
                <Counter />
                <Button title="incluir" />
            </div>
        </Container>
    )
}