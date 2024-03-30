import styled from "styled-components";

export const ProductsContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardProductsContainer = styled.div`
        margin: 5rem 0rem;
        width: 64rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
`