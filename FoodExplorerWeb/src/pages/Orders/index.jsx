import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Order } from "../../components/Order";
import { PaymentBox } from "../../components/PaymentBox";

export function Orders() {
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
                    <div className="orders" >
                        <h2>Meu Pedido</h2>
                        <div>
                            <Order />
                            <Order />
                            <Order />
                            <Order />
                        </div>
                        <h3> Total: R$ 100,00</h3>

                    </div>
                    <div className="payment" >
                        <h2>Pagamento</h2>
                        <PaymentBox />
                    </div>
                </Main>
            )}
            <Footer />
        </Container>
    );
}
