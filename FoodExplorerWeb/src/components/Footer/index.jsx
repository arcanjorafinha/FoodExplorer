import { Container } from "./styles"
import PolygonGrey from "../../assets/icons/PolygonGrey.svg"

export function Footer() {
    return (
        <Container>
            <div>
                <img src={PolygonGrey} size="12px" alt="Poligono" />
                <h1>food explorer</h1>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}