import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useRef } from 'react';

const BiggerBox = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    // overflow: hidden;
`;

const Box = styled(motion.div)`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, .06);
`;

const boxVariants = {
    hover: {
        scale: 1.5,
        rotateZ: 90,
    },
    click: {
        scale: 1,
        borderRadius: "100px",
    },
    drag: {
        backgroundColor:"rgb(46, 204, 113)",

    }
}

function Drag () {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <BiggerBox ref={biggerBoxRef}>
            <Box 
                drag 
                dragConstraints={biggerBoxRef}
                dragElastic={0.5}
                dragSnapToOrigin
                variants={boxVariants} 
                whileDrag="drag" 
                whileTap="click"
            />
        </BiggerBox>
    )
}

export default Drag;