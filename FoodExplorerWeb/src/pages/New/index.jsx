import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import CaretLeft from "../../assets/icons/CaretLeft.svg";

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
        if (!title || !description || !price || !category) {
            return alert("Preencha todos os campos obrigatórios.");
        }
        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo adicionar, mas não adicionou.");
        }

        const plateData = {
            title,
            description,
            price,
            category,
            ingredients,
        };

        console.log("Enviando dados do prato:", plateData); // Adicione este log

        try {
            await api.post("/plates", plateData);
            alert("Prato criado com sucesso!");
            navigate(-1);
        } catch (error) {
            console.error("Erro ao criar o prato:", error);
            if (error.response) {
                // O servidor respondeu com um status diferente de 2xx
                console.error("Dados do erro:", error.response.data);
                alert(`Erro ao criar o prato: ${error.response.data.message || "Tente novamente."}`);
            } else if (error.request) {
                // A requisição foi feita, mas nenhuma resposta foi recebida
                console.error("Nenhuma resposta recebida:", error.request);
                alert("Erro na comunicação com o servidor. Tente novamente.");
            } else {
                // Algo aconteceu ao configurar a requisição
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
                        label="Nome"
                        placeholder="Ex.: Salada César"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                        label="Categoria"
                        placeholder="Ex.: Saladas"
                        onChange={e => setCategory(e.target.value)}
                    />
                    <Input
                        label="Preço"
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
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