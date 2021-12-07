import { Droppable } from 'react-beautiful-dnd';
import DragabbleCard from './DragabbleCard';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${props => props.theme.boardColor};
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
    border-radius: 5px;
    min-height: 300px;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
    return (
        <Wrapper>
            <Title> {boardId} </Title>
            <Droppable droppableId={boardId}>
            {(magic) => 
                <div ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map((toDo, index) => (
                        <DragabbleCard key={toDo} toDo={toDo} index={index}/>
                    ))}
                {magic.placeholder}
                </div>
            }
            </Droppable>
        </Wrapper>
    )
}

export default Board;