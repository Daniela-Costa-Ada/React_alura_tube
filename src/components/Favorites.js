import styled from "styled-components";

export const StyledFavorites = styled.div`
/* flex: 1;
width: 100%;
padding: 16px;
overflow: hidden; */
// Melhorar a apresentação dos favoritos
h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
}
img {
    width: 6rem;
    border-radius: 50%;
    object-fit: cover;
    height: auto;
}
section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {  
width: calc(100vw - 16px * 4);
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(105px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    a {
        scroll-snap-align: start;
        span {
        padding-top: 8px;
        display: block;
        padding-right: 24px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
    }
    }
}
`;