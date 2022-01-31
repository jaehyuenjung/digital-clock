import { motion } from "framer-motion";
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

const NumberWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const DobuleDot = styled(motion.div)`
    width: 80px;
    height: 120px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    border-radius: 50%;

    &::before,
    &::after {
        content: "";
        width: 35px;
        height: 35px;
        border-radius: inherit;
        background-color: black;
    }
`;

function App() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    useEffect(() => {
        const getCurTime = () => {
            const date = new Date();
            setSeconds(date.getSeconds());
            setMinutes(date.getMinutes());
            setHours(date.getHours());
        };

        getCurTime();
        setInterval(getCurTime, 1000);
    }, []);
    return (
        <Wrapper>
            <NumberWrap>
                <Column>
                    <Number value={~~(hours / 10)} />
                    <Number value={hours % 10} />
                </Column>
                <DobuleDot
                    whileHover={{ borderRadius: "0%" }}
                    transition={{ duration: 0.5 }}
                />
                <Column>
                    <Number value={~~(minutes / 10)} />
                    <Number value={minutes % 10} />
                </Column>
                <DobuleDot
                    whileHover={{ borderRadius: "0%" }}
                    transition={{ duration: 0.5 }}
                />
                <Column>
                    <Number value={~~(seconds / 10)} />
                    <Number value={seconds % 10} />
                </Column>
            </NumberWrap>
        </Wrapper>
    );
}

export default App;
