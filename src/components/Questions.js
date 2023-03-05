import styled from 'styled-components';
import CardQuestion from './CardQuestion';

export default function Questions({cards, contador, setContador}) {

    return (
        <ContainerQuestions>
            {cards.map((card) => (
                <CardQuestion
                    key={cards.number}
                    card={card}
                    contador={contador}
                    setContador={setContador}
                    />
            ))}
            
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

