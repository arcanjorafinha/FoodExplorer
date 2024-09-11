import { Container } from './styles';
import { api } from '../../services/api';

export function Order({ order, onRemove }) {
    const image = order.image ? `${api.defaults.baseURL}/files/${order.image}` : 'url/to/default/image.jpg';

    return (
        <Container>
            <img
                src={image}
                alt={order.title}
                style={{ height: "100px", width: "100px" }}
            />
            <div>
                <p>{`${order.quantity}x ${order.title}`}</p>
                <span onClick={() => {
                    console.log("ID do item:", order.id); // Adicione este log
                    onRemove(order.id);
                }}>Excluir</span>

            </div>
            <h3>R$ {(Number(order.price.replace(',', '.')) * order.quantity).toFixed(2)}</h3>
        </Container>
    );
}

