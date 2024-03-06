import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Router } from "./Router";
import { Provider } from "react-redux";
import { store } from './store'
export interface Menu {
  id: number,
  foto: string,
  preco: number,
  nome: string,
  descricao: string,
  porcao: string,
}

export interface Categories {
  id: number,
  titulo: string,
  destacado: boolean,
  tipo: string,
  avaliacao: number,
  descricao: string,
  capa: string,
  cardapio: Menu[],
}

export function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

