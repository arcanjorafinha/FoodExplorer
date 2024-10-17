import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Order } from "../../components/Order";
import { PaymentBox } from "../../components/PaymentBox";
import { useCart } from "../../hooks/cart"; // Importa o hook do contexto

export function Orders() {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const { updateCartCount } = useCart(); // Função para atualizar o valor do carrinho
    const navigate = useNavigate();

    useLayoutEffect(() => {
        async function fetchOrder() {
            const response = await api.get('/orders');
            const orderData = response.data;

            console.log(orderData);
            setData(orderData);

            const orderTotal = orderData.items.reduce((acc, item) => {
                const price = parseFloat(item.price.replace(',', '.'));
                return acc + price * item.quantity;
            }, 0);

            setTotal(orderTotal);
        }

        fetchOrder();
    }, []);

    // Função para remover item do pedido e atualizar o contador global
    function handleRemoveItem(itemId) {
        console.log("Removendo item com ID:", itemId);
        api.delete(`/orders/items/${itemId}`)
            .then(() => {
                // Atualiza os itens e o total
                setData((prevData) => ({
                    ...prevData,
                    items: prevData.items.filter(item => item.id !== itemId)
                }));

                setTotal((prevTotal) => {
                    const removedItem = data.items.find(item => item.id === itemId);
                    const removedItemPrice = parseFloat(removedItem.price.replace(',', '.'));
                    return prevTotal - removedItemPrice * removedItem.quantity;
                });

                // Atualiza o contador global de itens no carrinho
                updateCartCount(data.items.length - 1); // Decrementa o contador global
            })
            .catch(error => {
                console.error("Erro ao remover item:", error);
            });
    }

    return (
        <Container>
            <Header />
            {!data ? (
                <p>Carregando...</p>
            ) : (
                <Main key={data.id}>
                    <div className="orders">
                        <h2>Meu Pedido</h2>
                        <div>
                            {data.items.map((item) => (
                                <Order
                                    key={item.id}
                                    order={item}
                                    onRemove={handleRemoveItem} // Passa a função de remoção
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
