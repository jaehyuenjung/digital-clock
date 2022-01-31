import styled from "styled-components";

const Wrapper = styled.div`
    width: 160px;
    height: 200px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    position: absolute;
`;

const Row = styled.div`
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

const ValueWrap = styled.div`
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

interface IParams {
    value: number;
}

function Number({ value }: IParams) {
    return (
        <Wrapper>
            <Card>
                <Row>
                    <ValueWrap>
                        <Value>{value}</Value>
                    </ValueWrap>
                </Row>
                <Row>
                    <ValueWrap>
                        <Value>{value}</Value>
                    </ValueWrap>
                </Row>
            </Card>
        </Wrapper>
    );
}

export default Number;
