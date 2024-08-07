import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import UploadSimple from "../../assets/icons/UploadSimple.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Buttons } from "./styles";
import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewPlate() {
        if (!title || !description || !price || !category || !image) {
            return alert("Preencha todos os campos obrigatórios.");
        }
        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo adicionar, mas não adicionou.");
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);
        ingredients.forEach(ingredient => formData.append('ingredients[]', ingredient));

        try {
            await api.post("/plates", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Prato criado com sucesso!");
            navigate(-1);
        } catch (error) {
            console.error("Erro ao criar o prato:", error);
            if (error.response) {
                console.error("Dados do erro:", error.response.data);
                alert(`Erro ao criar o prato: ${error.response.data.message || "Tente novamente."}`);
            } else if (error.request) {
                console.error("Nenhuma resposta recebida:", error.request);
                alert("Erro na comunicação com o servidor. Tente novamente.");
            } else {
                console.error("Erro na configuração da requisição:", error.message);
                alert(`Erro ao criar o prato: ${error.message}`);
            }
        }
    }

    return (
        <Container>
            <Header />
            <Form>
                <header>
                    <button onClick={handleBack}>
                        <img src={CaretLeft} alt="Seta" />
                        <h2>Voltar</h2>
                    </button>
                    <h1>Adicionar Prato</h1>
                </header>
                <div className="FirstPart">
                    <Input
                        label="Imagem do Prato"
                        type="file"
                        accept="image/*"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <Input
                        label="Nome"
                        placeholder="Ex.: Salada César"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                        label="Categoria"
                        placeholder="Ex.: Saladas"
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>
                <div className="tags">
                    <section>
                        <h2>Ingredientes</h2>
                        {ingredients.map((ingredient, index) => (
                            <NoteItem
                                key={String(index)}
                                value={ingredient}
                                onClick={() => handleRemoveIngredient(ingredient)}
                            />
                        ))}
                        <NoteItem
                            isNew
                            placeholder="Adicionar"
                            value={newIngredient}
                            onChange={e => setNewIngredient(e.target.value)}
                            onClick={handleAddIngredient}
                        />
                    </section>
                    <Input
                        label="Preço"
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <section>
                    <h2>Observações</h2>
                    <Textarea
                        placeholder="A Salada César é uma opção refrescante para o verão."
                        onChange={e => setDescription(e.target.value)}
                    />
                </section>
                <Buttons>
                    <CustomButton
                        title="Salvar Alterações"
                        onClick={handleNewPlate}
                    />
                </Buttons>
            </Form>
            <Footer />
        </Container>
    );
}
