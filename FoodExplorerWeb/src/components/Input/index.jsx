import { Container, Label } from "./styles";

export function Input({ icon: Icon, label, ...rest }) {
    return (
        <Container>
            <Label htmlFor={rest.id}>{label}</Label>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}