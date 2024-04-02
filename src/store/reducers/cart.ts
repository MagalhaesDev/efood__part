import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Menu } from '../../App'

type CarrinhoState = {
  itens: Menu[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Menu>) => {
      const product = action.payload
      state.itens.push(product)   
    },
    remover: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const cartWithoutProduct = state.itens.filter(item => item.id !== id)

      state.itens = cartWithoutProduct;
    },
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer