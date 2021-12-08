import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, .06);
`;

function Scroll () {
    const x = useMotionValue(0);
    const {scrollYProgress} = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    return (
        <Box drag="x" dragSnapToOrigin style={{x, scale}}/>
    )
}

export default Scroll;