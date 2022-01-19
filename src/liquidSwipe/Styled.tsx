import styled from 'styled-components';


export const LQSW_SVG = styled.svg`
    position: absolute;
    height: 100%;
    width: 10px;
`;

export const LQSW_PAGE = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const LQSW_CONTAINER = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
`;

export const LQSW_BUTTON = {
    position: "absolute",
    width: "40px",
    height: "40px",
    background: "transparent",
    cursor: "pointer",
    border: "none",
    touchAction: "pan-y",
    outline: 0
};