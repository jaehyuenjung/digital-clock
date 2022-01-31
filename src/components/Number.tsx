import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const COLOR_LIST = [
    "#d63031",
    "#e17055",
    "#fdcb6e",
    "#00b894",
    "#78e08f",
    "#00cec9",
    "#0984e3",
    "#6c5ce7",
    "#8e44ad",
    "#1e3799",
];

const Wrapper = styled.div`
    width: 160px;
    height: 200px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const Card = styled(motion.div)<{ index: number }>`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    position: absolute;
    transform: perspective(500px);
    transform-style: preserve-3d;
    z-index: ${(props) => props.index};

    * {
        backface-visibility: hidden;
    }
`;

const Row = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    &:first-child {
        align-items: end;
        transform-origin: center bottom;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    &:last-child {
        align-items: start;
        transform-origin: center top;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

const ValueWrap = styled(motion.div)`
    display: flex;
    position: absolute;
    align-items: center;
    font-size: 120px;
    line-height: 0px;
    font-family: "DIGITAL7";
    text-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
        rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
        rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    &::before {
        content: "8";
        color: rgba(0, 0, 0, 0.3);
    }
`;

const Value = styled.div`
    position: absolute;
    color: white;
`;

const cardVariants = {
    entry: {},
    visible: {},
    exit: {},
};

interface IParams {
    value: number;
}

function Number({ value }: IParams) {
    const pre = (10 - value + 1) % 10;
    const next = (value + 1) % 10;
    const [back] = useState(false);

    const topVariants = {
        entry: (back: boolean) => ({
            rotateX: back ? -180 : 0,
            opacity: 1,
            backgroundColor: back ? COLOR_LIST[pre] : COLOR_LIST[next],
        }),
        visible: { rotateX: 0, backgroundColor: COLOR_LIST[value] },
        exit: (back: boolean) => ({
            rotateX: back ? 0 : -180,
            opacity: 0,
            backgroundColor: back ? COLOR_LIST[next] : COLOR_LIST[pre],
        }),
    };

    const bottomVariants = {
        entry: (back: boolean) => ({
            rotateX: back ? 0 : 180,
            opacity: 1,
            backgroundColor: back ? COLOR_LIST[next] : COLOR_LIST[pre],
        }),
        visible: { rotateX: 0, backgroundColor: COLOR_LIST[value] },
        exit: (back: boolean) => ({
            rotateX: back ? 180 : 0,
            opacity: 0,
            backgroundColor: back ? COLOR_LIST[pre] : COLOR_LIST[next],
        }),
    };

    return (
        <Wrapper>
            <AnimatePresence initial={false}>
                <Card
                    key={value}
                    variants={cardVariants}
                    initial="entry"
                    animate="visible"
                    exit="exit"
                    index={10 - value}
                >
                    <Row
                        custom={back}
                        variants={topVariants}
                        transition={{
                            type: "tween",
                            duration: 0.5,
                        }}
                    >
                        <ValueWrap>
                            <Value>{value}</Value>
                        </ValueWrap>
                    </Row>
                    <Row
                        custom={back}
                        variants={bottomVariants}
                        transition={{
                            type: "tween",
                            duration: 0.5,
                        }}
                    >
                        <ValueWrap>
                            <Value>{value}</Value>
                        </ValueWrap>
                    </Row>
                </Card>
            </AnimatePresence>
        </Wrapper>
    );
}

export default React.memo(Number);
