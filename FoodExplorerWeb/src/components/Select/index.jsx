import { Container } from './styles'

export function Select() {
    return (
        <Container>
            <label htmlFor="category">Categoria</label>
            <div className="custom-select-wrapper">
                <select id="category" name="categoria">
                    <option value="meals">Refeição</option>
                    <option value="deserts">Sobremesa</option>
                    <option value="drinks">Bebida</option>
                </select>
                <div className="custom-arrow"></div>
            </div>
        </Container>
    )
}