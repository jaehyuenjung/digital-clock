import { useEffect, useState } from "react";
import styled from "styled-components";
import Number from "./components/Number";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function App() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const getCurTime = () => {
            const date = new Date();
            setSeconds(date.getSeconds());
        };

        getCurTime();
        setInterval(getCurTime, 1000);
    }, []);
    return (
        <Wrapper>
            <Number value={seconds % 10} />
        </Wrapper>
    );
}

export default App;
