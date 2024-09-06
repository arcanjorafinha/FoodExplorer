import { useState } from 'react';
import { Container } from './styles';
import pix from '../../assets/icons/PIX.svg';
import credit from '../../assets/icons/CreditCard.svg';
import qr from '../../assets/icons/Qrcode.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function PaymentBox() {
    const [paymentMethod, setPaymentMethod] = useState('pix');

    return (
        <Container>
            <div className='buttons'>
                <div className='pix' onClick={() => setPaymentMethod('pix')}>
                    <img src={pix} alt="" />
                    <p>PIX</p>
                </div>
                <div className='card' onClick={() => setPaymentMethod('credit')}>
                    <img src={credit} alt="" />
                    <p>Crédito</p>
                </div>
            </div>

            {paymentMethod === 'pix' && (
                <div className='code'>
                    <img src={qr} alt="QR Code" />
                </div>
            )}

            {paymentMethod === 'credit' && (
                <div className='credit'>
                    <Input
                        placeholder="0000 0000 0000 0000"
                        type="text"
                        label="Número do Cartão"
                    />
                    <div className='section'>
                        <Input
                            placeholder="MM/AA"
                            type="text"
                            label="Validade"
                        />
                        <Input
                            placeholder="000"
                            type="text"
                            label="CVV"
                        />
                    </div>
                    <Button title="Finalizar Pagamento" />
                </div>
            )}
        </Container>
    );
}
