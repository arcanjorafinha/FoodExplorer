import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: -5rem;
  margin-bottom: 15rem;



  @media (min-width: 350px) and (max-width: 800px){
    margin-left: 0;
    margin-bottom: 5rem;
    .noneMobile{
      display: none;
    }
  }
`;


export const CarouselContainer = styled.div`
  max-width: 75vw;
  overflow: auto;
  scroll-behavior: smooth;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  

  &::-webkit-scrollbar{
    display: none;
    
  }

  @media (min-width: 350px) and (max-width: 800px){
    max-width: 85vw;
  }

`;