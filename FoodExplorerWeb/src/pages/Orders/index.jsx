import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Order } from "../../components/Order";
import { PaymentBox } from "../../components/PaymentBox";

export function Orders() {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrder() {
            const response = await api.get('/orders');
            const orderData = response.data;

            console.log(orderData);  // Verifique a estrutura dos dados aqui
            setData(orderData);

            // Converte o preço para número e calcula o total
            const orderTotal = orderData.items.reduce((acc, item) => {
                const price = parseFloat(item.price.replace(',', '.'));  // Converte o preço para número
                return acc + price * item.quantity;
            }, 0);

            setTotal(orderTotal);
        }

        fetchOrder();
    }, []);



    function handleRemoveItem(itemId) {
        console.log("Removendo item com ID:", itemId);
        api.delete(`/orders/items/${itemId}`)
            .then(() => {
                // Atualiza a interface após exclusão
                setData((prevData) => ({
                    ...prevData,
                    items: prevData.items.filter(item => item.id !== itemId)
                }));

                // Recalcula o total
                setTotal((prevTotal) => {
                    const removedItem = data.items.find(item => item.id === itemId);
                    const removedItemPrice = parseFloat(removedItem.price.replace(',', '.'));  // Converte o preço para número
                    return prevTotal - removedItemPrice * removedItem.quantity;
                });
            })
            .catch(error => {
                console.error("Erro ao remover item:", error);
            });
    }


    return (
        <Container>
            <Header />
            {data && (
                <Main>
                    <div className="orders">
                        <h2>Meu Pedido</h2>
                        <div>
                            {data.items.map((item) => (
                                <Order
                                    key={item.id}
                                    order={item}
                                    onRemove={handleRemoveItem}
                                />
                            ))}
                        </div>
                        <h3>Total: R$ {total.toFixed(2)}</h3>
                    </div>
                    <div className="payment">
                        <h2>Pagamento</h2>
                        <PaymentBox />
                    </div>
                </Main>
            )}
            <Footer />
        </Container>
    );
}
