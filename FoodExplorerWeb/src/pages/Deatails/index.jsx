import { Container, Main, Plate } from "./styles"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/Button"
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import GambePlate from "../../assets/plates/Gambe.png";


export function Details() {

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <Main>
        <button onClick={handleBack} >
          <img src={CaretLeft} alt="Seta" />
          <h2>Voltar</h2>
        </button>
        <Plate>
          <img src={GambePlate} alt="Gambe" />
          <section>
            <h1>Spaguetti Gambe</h1>
            <p>Massa fresca com camarões e pesto.</p>
            <button>camarão</button>
            <div>
              <Counter />
              <Button title="Incluir - R$ 25,00" />
            </div>
          </section>
        </Plate>
      </Main>
      <Footer />
    </Container>
  )
}