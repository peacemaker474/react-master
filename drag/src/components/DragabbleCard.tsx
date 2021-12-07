import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{isDragging: boolean}>`
    background-color: ${props => props.isDragging ? "#74be99" : props.theme.cardColor};
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px 10px;
    box-shadow: ${props => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, .05)" : "none"}
`;

interface IDragabbleCardProps {
    toDoId: number;
    toDoText: string;
    index: number;
}

function DragabbleCard ({toDoId, toDoText, index}: IDragabbleCardProps) {
    return (
        <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
            {(provided, snapshot) => (
            <Card 
                isDragging={snapshot.isDragging}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {toDoText}
            </Card>
            )}
        </Draggable>
    )
}

export default React.memo(DragabbleCard);