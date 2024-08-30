import { Container, Label, FileInputWrapper, FileInputLabel } from "./styles";
import UploadSimple from "../../assets/icons/UploadSimple.svg";

export function Input({ icon: Icon, label, type = "text", ...rest }) {
    return (
        <Container>
            <Label htmlFor={rest.id}>{label}</Label>
            {type === "file" ? (
                <FileInputWrapper>
                    <input id={rest.id} type="file" {...rest} />
                    <FileInputLabel htmlFor={rest.id}>
                        <img src={UploadSimple} alt="Upload Icon" />
                        Selecionar Imagem
                    </FileInputLabel>
                </FileInputWrapper>
            ) : (
                <>
                    {Icon && <Icon size={20} />}
                    <input type={type} {...rest} />
                </>
            )}
        </Container>
    );
}
