import { Container, BodyContainer, Menu, Advertisement } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import Macaron2 from '../../assets/plates/Macaron2.png';
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import CaretRight from "../../assets/icons/CaretRight.svg";

export function Home() {
    const [plates, setPlates] = useState({
        refeicoes: [],
        bebidas: [],
        sobremesas: []
    });
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsSelected, setIngredientsSelected] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleIngredientsSelected(ingredientName) {
        if (ingredientName === "all") {
            return setIngredientsSelected([]);
        }

        const alreadySelected = ingredientsSelected.includes(ingredientName);

        if (alreadySelected) {
            const filteredIngredients = ingredientsSelected.filter(ingredient => ingredient !== ingredientName);
            setIngredientsSelected(filteredIngredients);
        } else {
            setIngredientsSelected(prevState => [...prevState, ingredientName]);
        }
    }

    useEffect(() => {
        async function fetchIngredients() {
            const response = await api.get("/ingredients");
            setIngredients(response.data);
        }

        fetchIngredients();
    }, []);

    useEffect(() => {
        async function fetchPlates() {
            try {
                const response = await api.get(`/plates?title=${search}&ingredients=${ingredientsSelected.join(",")}`);
                const categorizedPlates = {
                    refeicoes: response.data.filter(plate => plate.category === 'refeições'),
                    bebidas: response.data.filter(plate => plate.category === 'bebidas'),
                    sobremesas: response.data.filter(plate => plate.category === 'sobremesas'),
                };
                setPlates(categorizedPlates);
            } catch (error) {
                console.error("Erro ao buscar pratos:", error.response ? error.response.data : error.message);
            }
        }

        fetchPlates();
    }, [ingredientsSelected, search]);

    const handleScroll = (contentId, scrollAmount) => {
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            const newScrollLeft = contentElement.scrollLeft + scrollAmount;
            contentElement.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container>
            <Header onSearch={setSearch} />
            <BodyContainer>
                <Advertisement>
                    <img src={Macaron2} alt="MacaronWallpaper" />
                    <div>
                        <h1>Sabores Inigualáveis</h1>
                        <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
                    </div>
                </Advertisement>

                <Menu>
                    <h1>Refeições</h1>
                    <div className="MenuButtons">
                        <button className="CaretLeft" onClick={() => handleScroll('refeicoesContent', -300)}>
                            <img src={CaretLeft} alt="Caret Left" />
                        </button>
                        <button className="CaretRight" onClick={() => handleScroll('refeicoesContent', 300)}>
                            <img src={CaretRight} alt="Caret Right" />
                        </button>
                    </div>
                    <div id="refeicoesContent">
                        {plates.refeicoes.map(plate => (
                            <Card
                                key={plate.id}
                                id={plate.id}
                                title={plate.title}
                                description={plate.description}
                                price={plate.price}
                                image={`${api.defaults.baseURL}/files/${plate.image}`}
                            />
                        ))}
                    </div>
                </Menu>

                <Menu>
                    <h1>Bebidas</h1>
                    <div className="MenuButtons">
                        <button className="CaretLeft" onClick={() => handleScroll('bebidasContent', -300)}>
                            <img src={CaretLeft} alt="Caret Left" />
                        </button>
                        <button className="CaretRight" onClick={() => handleScroll('bebidasContent', 300)}>
                            <img src={CaretRight} alt="Caret Right" />
                        </button>
                    </div>
                    <div id="bebidasContent">
                        {plates.bebidas.map(plate => (
                            <Card
                                key={plate.id}
                                id={plate.id}
                                title={plate.title}
                                description={plate.description}
                                price={plate.price}
                                image={`${api.defaults.baseURL}/files/${plate.image}`}
                            />
                        ))}
                    </div>
                </Menu>

                <Menu>
                    <h1>Sobremesas</h1>
                    <div className="MenuButtons">
                        <button className="CaretLeft" onClick={() => handleScroll('sobremesasContent', -300)}>
                            <img src={CaretLeft} alt="Caret Left" />
                        </button>
                        <button className="CaretRight" onClick={() => handleScroll('sobremesasContent', 300)}>
                            <img src={CaretRight} alt="Caret Right" />
                        </button>
                    </div>
                    <div id="sobremesasContent">
                        {plates.sobremesas.map(plate => (
                            <Card
                                key={plate.id}
                                id={plate.id}
                                title={plate.title}
                                description={plate.description}
                                price={plate.price}
                                image={`${api.defaults.baseURL}/files/${plate.image}`}
                            />
                        ))}
                    </div>
                </Menu>
            </BodyContainer>
            <Footer />
        </Container>
    );
}
