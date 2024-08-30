import { Container } from "./styles";

export function CustomButton({ title, loading = false, bgColor, ...rest }) {
    return (
        <Container type="button" disabled={loading} bgColor={bgColor} {...rest}>
            {loading ? "Carregando..." : title}
        </Container>
    )
}