import React from 'react';
import { Container } from './styles';
import Plus from '../../assets/icons/Plus.svg';
import Minus from '../../assets/icons/Minus.svg';

export function Counter({ count, setCount }) {
    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handlePlusClick = () => {
        setCount(count + 1);
    };

    return (
        <Container>
            <img src={Minus} alt="Menos" onClick={handleMinusClick} />
            <span>{count}</span>
            <img src={Plus} alt="Mais" onClick={handlePlusClick} />
        </Container>
    );
}
