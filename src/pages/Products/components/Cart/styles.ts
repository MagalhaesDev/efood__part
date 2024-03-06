import styled from "styled-components";
import { colors } from "../../../../styles";

export const OrderContainer = styled.div`
       position: fixed;
       z-index: 3;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;

       display: flex;
       flex-direction: row-reverse;
`

export const OverlayCart = styled.div`
      z-index: 3;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #000000bb;
      cursor: pointer;
`

export const OrderContent = styled.div`
   background-color: ${colors.primaryColor};
   z-index: 4;
`


export const ResumeCart = styled.div`
   padding: 0 .5rem;
   margin-top: 2.5rem;

   & > div {

      display: flex;
      align-items: center;
      justify-content: space-between;
      
      h2, p, button {
         color: ${colors.secondaryTextColor};
         font-size: .875rem;
      }
   }

   button {
      cursor: pointer;
      margin-top: 1rem;
      width: 100%;
      padding: 0.25rem 0;
      font-weight: 600;
      border: transparent;
      background-color: ${colors.secondaryColor};
   }
`
