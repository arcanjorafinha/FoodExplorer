import { Container } from './styles';

export function Select({ label, value, onChange, options }) {
    return (
        <Container>
            {label && <label htmlFor="category">{label}</label>}
            <div className="custom-select-wrapper">
                <select id="category" name="categoria" value={value} onChange={onChange}>
                    <option value="">Selecione uma categoria</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="custom-arrow"></div>
            </div>
        </Container>
    );
}
