import styled from 'styled-components';
import Variants from '../components/Variants';
import Gestures from '../components/Gestures';
import Drag from '../components/Drag';
import Scroll from '../components/Scroll';
import SVGPath from '../components/SVGPath';


const AnimatioBox = styled.div`
    width: 100%;
    height: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    gap: 30px;
`;

function Animation () {
    return (
        <AnimatioBox>
            <Variants />
            <Gestures />
            <Drag />
            <Scroll />
            <SVGPath />
        </AnimatioBox>
    )
}

export default Animation;