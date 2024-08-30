import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Select } from "../../components/Select";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import theme from "../../styles/theme"

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Form, Buttons } from "./styles";
import { api } from "../../services/api";

export function Edit() {
    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    useEffect(() => {
        async function fetchPlate() {
            try {
                const response = await api.get(`/plates/${params.id}`);
                const { title, description, category, price, ingredients, image } = response.data;

                setTitle(title);
                setCategory(category);
                setPrice(price);
                setDescription(description);
                setIngredients(ingredients.map(ingredient => ingredient.name));
                setImage(image);
            } catch (error) {
                console.error("Erro ao carregar o prato:", error);
                alert("Erro ao carregar os dados do prato.");
                navigate('/');
            }
        }

        fetchPlate();
    }, [params.id, navigate]);

    function handleAddIngredient() {
        if (newIngredient.length < 3) {
            return alert("Erro: Você está tentando inserir um nome de ingrediente inválido!");
        }
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleUpdatePlate() {
        if (newIngredient.length > 0) {
            return alert('Você deixou um ingrediente pendente no campo para adicionar.');
        }

        const fileUpload = new FormData();
        if (image) {
            fileUpload.append("image", image);
        }

        try {
            await api.put(`/plates/${params.id}`, {
                title,
                price,
                ingredients,
                description,
                category
            });

            if (image) {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };
                await api.patch(`/plates/image/${params.id}`, fileUpload, config);
            }

            alert("Prato atualizado com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao atualizar o prato:", error);
            alert("Erro ao atualizar o prato. Tente novamente.");
            navigate('/');
        }
    }

    async function handleDeletePlate() {
        const confirmDelete = window.confirm("Você tem certeza que deseja excluir este prato?");
        if (confirmDelete) {
            try {
                await api.delete(`/plates/${params.id}`);
                alert("Prato excluído com sucesso!");
                navigate("/");
            } catch (error) {
                console.error("Erro ao excluir o prato:", error);
                alert("Erro ao excluir o prato. Tente novamente.");
            }
        }
    }

    function handleBack() {
        navigate("/");
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
                        placeholder={description}
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
