import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/Noteitem"
import { Section } from "../../components/Section"
import { CustomButton } from "../../components/CustomButton"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"
import { Select } from "../../components/Select"
import CaretLeft from "../../assets/icons/CaretLeft.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Buttons } from "./styles";
import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("");
    }
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Digite o título da nota");
        }
        if (newLink) {
            return alert("Você deixou um link no campo adicionar, mas não adicionou.")
        }
        if (newTag) {
            return alert("Você deixou uma tag no campo adicionar, mas não adicionou.")
        }


        await api.post("/notes", {
            title,
            description,
            links,
            tags
        });

        alert("Nota criada com sucesso!")
        navigate(-1)
    }

    return (
        <Container>
            <Header />
            <Form>
                <header>
                    <button onClick={handleBack} >
                        <img src={CaretLeft} alt="Seta" />
                        <h2>Voltar</h2>
                    </button>
                    <h1>Adicionar Prato</h1>
                </header>
                <div className="FirstPart" >
                    <Input
                        label="Imagem do Prato"
                        placeholder="selecione imagem"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Input
                        label="Nome"
                        placeholder="Ex.: Salada Cessar"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Select
                    />
                </div>
                <div className="tags" >
                    <section>
                        <h2>Igredientes</h2>
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                ></NoteItem>

                            ))

                        }
                        <NoteItem
                            isNew
                            placeholder="Adicionar"
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        >

                        </NoteItem>
                    </section>

                    <Input
                        label="Preço"
                        placeholder="R$ 00,00"
                        onChange={e => setTitle(e.target.value)}
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
                        onClick={handleNewNote}
                    />
                </Buttons>
            </Form>
            <Footer />
        </Container>
    )
}