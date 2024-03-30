import styled from "styled-components";
import { colors } from "../../../../styles";

export const ProductContainer = styled.div`
       position: fixed;
       z-index: 2;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       background-color: #000000bb;

       display: flex;
       align-items: center;
       justify-content: center;
`

export const ProductContent = styled.div`
       background-color: ${colors.primaryColor};
       width: 64rem;
       min-height: 21.5rem;
       padding: 2rem;
       position: relative;

       display: flex;
       align-items: start;
       gap: 2rem;
       
       p, h2 {
              color: #fff;
       }

       & > button {
              position: absolute;
              z-index: 3;
              border: none;
              right: 1rem;
              top: 1rem;
              padding: .5rem;
              background-color: transparent;
              color: #fff;
              font-size: 1.5rem;
              font-weight: 300;
              cursor: pointer;
       }
`

export const ImageContainer = styled.div`
   img {
       width: 17.5rem;
       height: 17.5rem;
   }
`

export const DescriptionContainer = styled.div`
    h2 {
       font-size: 1.125rem;
    }

    div {
       margin: 1rem 0;

       h4 {
              font-size: .875rem;
              font-weight: 400;
              color: #fff;
       }

       p {
             margin-top : 1rem;
             font-size: .875rem;
             font-weight: 400;
       }

    }

    button {
              padding: .25rem .5rem;
              font-size: .875rem;
              font-weight: bold;
              border: none;
              background-color: ${colors.secondaryColor};
              cursor: pointer;
       }
`