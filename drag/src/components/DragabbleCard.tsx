import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
    background-color: ${props => props.theme.cardColor};
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px 10px;
`;

interface IDragabbleCardProps {
    toDo: string;
    index: number;
}

function DragabbleCard ({toDo, index}: IDragabbleCardProps) {
    console.log(toDo);
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(provided) => (
            <Card 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {toDo}
            </Card>
            )}
        </Draggable>
    )
}

export default React.memo(DragabbleCard);