import { Container } from './styles';
import Gambe from "../../assets/plates/Gambe.png";
export function Order() {
    return (
        <Container>
            <img src={Gambe} alt="" style={{ height: "100px", width: "100px" }} />
            <div>
                <p>1x Salada Radish</p>
                <span>Excluir</span>
            </div>
            <h3>R$ 25,99</h3>
        </Container>
    )
};