import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Select } from "../../components/Select";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import theme from "../../styles/theme";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Form, Buttons } from "./styles";
import { api } from "../../services/api";

export function Edit() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams(); // Obtém o ID do prato a partir da URL

    useEffect(() => {
        async function fetchPlate() {
            try {
                const response = await api.get(`/plates/${id}`);
                const { title, description, price, category, ingredients } = response.data;

                setTitle(title);
                setDescription(description);
                setPrice(price);
                setCategory(category);
                setIngredients(ingredients.map(ingredient => ingredient.name));
            } catch (error) {
                console.error("Erro ao buscar prato:", error);
            }
        }

        fetchPlate();
    }, [id]);

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

    async function handleUpdatePlate() {
        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo adicionar, mas não adicionou.");
        }

        const formData = new FormData();
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);
        if (price) formData.append('price', price);
        if (category) formData.append('category', category);
        if (image) formData.append('image', image);
        ingredients.forEach(ingredient => formData.append('ingredients[]', ingredient));

        try {
            await api.put(`/plates/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Prato atualizado com sucesso!");
            navigate(-1);
        } catch (error) {
            console.error("Erro ao atualizar o prato:", error);
            alert("Erro ao atualizar o prato. Tente novamente.");
        }
    }

    async function handleDeletePlate() {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este prato?");
        if (confirmDelete) {
            try {
                await api.delete(`/plates/${id}`);
                alert("Prato excluído com sucesso!");
                navigate("/");
            } catch (error) {
                console.error("Erro ao excluir o prato:", error);
                alert("Erro ao excluir o prato. Tente novamente.");
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
                    <h1>Editar Prato</h1>
                </header>
                <div className="FirstPart">
                    <Input
                        label="Imagem do Prato"
                        type="file"
                        accept="image/*"
                        id="imageUpload"
                        onChange={e => setImage(e.target.files[0])}
                    />

                    <Input
                        label="Nome"
                        placeholder="Ex.: Salada César"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Select
                        label="Categoria"
                        value={category}
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
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <section>
                    <h2>Observações</h2>
                    <Textarea
                        placeholder={description || "Fale brevemente sobre prato e sua composição"}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </section>
                <Buttons>
                    <CustomButton
                        title="Excluir Prato"
                        onClick={handleDeletePlate}
                        bgColor={theme.COLORS.DARK_900}
                    />
                    <CustomButton
                        title="Salvar Alterações"
                        onClick={handleUpdatePlate}
                    />
                </Buttons>
            </Form>
            <Footer />
        </Container>
    );
}
