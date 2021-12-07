import { Droppable } from 'react-beautiful-dnd';
import DragabbleCard from './DragabbleCard';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

interface IBoardProps {
    toDos: IToDo[];
    boardId: string;
}

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

interface IForm {
    toDo: string;
}

const Wrapper = styled.div`
    background-color: ${props => props.theme.boardColor};
    width: 300px;
    padding-top: 10px;
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${props => 
        props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent"};
    flex-grow: 1;
    transition: background-color .3s ease-in-out;
    padding: 20px;
`;

const Form = styled.form`
    width: 100%;
    input {
        all: unset;
        width: 100%;
        height: 30px;
        padding-left: 10px;
        background-color: white;
        box-sizing: border-box;
    }
`;

function Board({toDos, boardId}: IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onVaild = ({ toDo }: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo,
        };
        setToDos(allBoards => {
            return {
                ...allBoards,
                [boardId]: [newToDo, ...allBoards[boardId]]
            }
        })
        setValue("toDo", "");
    }
    return (
        <Wrapper>
            <Title> {boardId} </Title>
            <Form onSubmit={handleSubmit(onVaild)}>
                <input 
                    {...register("toDo", { required: true })}
                    type="text"
                    placeholder={`Add task on ${boardId}`}
                />
            </Form>
            <Droppable droppableId={boardId}>
            {(provided, info) => 
                <Area 
                    isDraggingOver={info.isDraggingOver}
                    isDraggingFromThis={Boolean(info.draggingFromThisWith)}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {toDos.map((toDo, index) => (
                        <DragabbleCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index}/>
                    ))}
                {provided.placeholder}
                </Area>
            }
            </Droppable>
        </Wrapper>
    )
}

export default Board;