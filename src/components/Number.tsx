import styled from "styled-components";

const Wrapper = styled.div`
    width: 160px;
    height: 200px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;

interface IParams {
    value: number;
}

function Number({ value }: IParams) {
    return <Wrapper>{value}</Wrapper>;
}

export default Number;
