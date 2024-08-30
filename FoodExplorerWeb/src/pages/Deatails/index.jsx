import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Main, Plate } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";
import CaretLeft from "../../assets/icons/CaretLeft.svg";

export function Details() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${id}`);
      setData(response.data);
    }

    fetchPlate();
  }, [id]);

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      {data && (
        <Main>
          <button onClick={handleBack}>
            <img src={CaretLeft} alt="Seta" />
            <h2>Voltar</h2>
          </button>
          <Plate>
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.title} />
            <section>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              {data.ingredients && data.ingredients.map((ingredient) => (
                <button key={ingredient.id}>{ingredient.name}</button>
              ))}
              <div>
                <Counter />
                <Button title={`Incluir - R$ ${data.price}`} />
              </div>
            </section>
          </Plate>
        </Main>
      )}
      <Footer />
    </Container>
  );
}
