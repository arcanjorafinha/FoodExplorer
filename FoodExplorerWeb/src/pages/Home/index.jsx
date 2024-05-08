import { Container, BodyContainer, Menu, Advertisement } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import Macaron2 from '../../assets/plates/Macaron2.png';


export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleTagsSelected(tagName) {
        if (tagName === "all") {
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName);

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }


    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags()
    }, []);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [tagsSelected, search]);

    return (
        <Container>
            <Header />
            <BodyContainer>
                <Advertisement>
                    <img src={Macaron2} alt="" />
                    <div>
                        <h1>Sabores Inigualáveis</h1>
                        <h2>Sinta o cuidado do preparo com igredientes selecionados</h2>
                    </div>
                </Advertisement>
                <Menu>
                    <h1>Refeições</h1>
                    <div>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Menu>
                <Menu>
                    <h1>Refeições</h1>
                    <div>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Menu>
            </BodyContainer>
            <Footer />
        </Container>
    )
}