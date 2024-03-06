import styled from "styled-components";
import { colors } from "../../../../styles";

export const FormContainer = styled.form`
   margin: .5rem;
   display: flex;
   flex-direction: column;

   h2 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;
   }

   h2, label {
    color: ${colors.secondaryTextColor};
   }

   label {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: .5rem;

    input {
      width: 21.5rem;
      padding: .5rem;
      border: transparent;
      background-color: ${colors.secondaryColor};
      font-weight: bold;
      color: #000;
    }
   }

   div {
      display: flex;
      justify-content: space-between;

      input {
        width: 10rem;
      }
   }

   footer {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      button {
        padding: .25rem 0;
        border: transparent;
        font-weight: bold;
        background-color: ${colors.secondaryColor};
        cursor: pointer;
      }
   }
`