import { useState } from 'react';
import { Container } from "./styles";
import { Counter } from "../Counter";
import { Button } from "../Button";
import HeartIcon from "../../assets/icons/Heart.svg";
import PencilIcon from "../../assets/icons/Pencil.svg";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useCart } from "./../../hooks/cart"; // Importa o hook do contexto

export function Card({ id, title, description, price, image }) {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { updateCartCount } = useCart(); // Função para atualizar o valor do carrinho
    const [count, setCount] = useState(0);

    function handleDetails() {
        navigate(`/details/${id}`);
    }

    function handleEdit() {
        navigate(`/edit/${id}`);
    }

    // Função para adicionar o prato ao pedido (Orders)
    async function handleAddToOrder() {
        try {
            const orderItem = {
                plate_id: id,
                quantity: count
            };

            // Chama a API para adicionar o item ao pedido
            await api.post("/orders", {
                status: "pendente",
                orders: [orderItem],
            });

            // Atualiza o contador global de itens no carrinho
            const response = await api.get("/orders");
            updateCartCount(response.data.items.length); // Atualiza o contador global

            // Exibe uma mensagem de sucesso
            alert("Pedido adicionado ao carrinho");
        } catch (error) {
            console.error("Erro ao adicionar prato ao pedido:", error);
        }
    }

    return (
        <Container>
            {user.role === USER_ROLE.ADMIN ? (
                <img src={PencilIcon} alt="Pencil Icon" style={{ alignSelf: "end", marginBottom: "25px" }} onClick={handleEdit} />
            ) : (
                <img src={HeartIcon} alt="Heart Icon" style={{ alignSelf: "end" }} onClick={handleDetails} />
            )}

            <img src={image} onClick={handleDetails} alt={title} className='plateImg' />
            <h1>{title}</h1>
            <h2>{description}</h2>
            <span>R$ {price}</span>

            {user.role !== USER_ROLE.ADMIN && (
                <div>
                    <Counter count={count} setCount={setCount} />
                    <Button title="incluir" onClick={handleAddToOrder} /> {/* Usa a função handleAddToOrder */}
                </div>
            )}
        </Container>
    );
}
