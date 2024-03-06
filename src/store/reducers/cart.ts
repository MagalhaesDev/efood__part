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
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer