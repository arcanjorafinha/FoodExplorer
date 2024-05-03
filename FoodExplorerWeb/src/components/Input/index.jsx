import { Container, Label } from "./styles";

export function Input({ label, ...rest }) {
    return (
        <Container>
            <Label htmlFor={rest.id}>{label}</Label>
            <input {...rest} />
        </Container>
    )
}