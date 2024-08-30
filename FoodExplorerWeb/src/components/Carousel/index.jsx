import { Container, CarouselContainer } from "./styles";
import { Card } from '../Card';
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";
import { api } from "../../services/api";


export function Carousel({ category, plates }) {
    const carousel = useRef(null);

    function handleLeftClick(event) {
        event.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    function handleRightClick(event) {
        event.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const filteredPlates = plates.filter(plate => plate.category === category);



    return (
        <Container>
            <CaretLeft size={47} onClick={handleLeftClick} className="noneMobile" />
            <CarouselContainer ref={carousel}>
                {filteredPlates.map((plate, index) => (
                    <Card
                        plates={plates}
                        key={plate.id || index}
                        title={plate.title}
                        description={plate.description}
                        price={`R$ ${plate.price}`}
                        imageURL={`${api.defaults.baseURL}/files/${plate.image}`}
                        amount='01'
                        id={plate.id}

                    />
                ))}
            </CarouselContainer>
            <CaretRight size={47} onClick={handleRightClick} className="noneMobile" />
        </Container>
    );
};