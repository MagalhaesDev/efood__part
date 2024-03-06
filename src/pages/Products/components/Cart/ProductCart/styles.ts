import styled from "styled-components";
import { colors } from "../../../../../styles";

export const ProductCartContainer = styled.aside`
    position: relative;
    background-color: ${colors.secondaryColor};
    display: flex;
    margin: 1rem .5rem;
    width: 21.5rem;

    & > div {
        margin: .5rem 0;

        h2 {
            font-size: 1.25rem;
            
        }

        p {
            margin-top: 1rem;
            font-size: .875rem;
            font-weight: 300;
        }
    }

     & > img {
        width: 5rem;
        height: 5rem;
        margin: .5rem;
     }

    button {
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        border: transparent;
        background-color: ${colors.secondaryColor};
        cursor: pointer;
    }
`