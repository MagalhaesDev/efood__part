import { ProductCart } from "./ProductCart";
import { OrderContainer, OrderContent, ResumeCart, OverlayCart } from "./styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../../store";

interface CartProps {
    handleOpenCart: () => void;
}

export function Cart({ handleOpenCart }:CartProps) {
    const cart = useSelector((state: RootReducer) => state.carrinho.itens)
    const valueTotal = cart.reduce((acc, item) => acc += item.preco, 0)
    const formattedPricce = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const priceFormatted = formattedPricce.format(valueTotal);  

    return (
        <>
            <OrderContainer >
                <OverlayCart onClick={() => handleOpenCart()}/>
                <OrderContent >
                    <div>
                        {cart.map(product =>(
                            <ProductCart product={product}/>
                        ))}
                    </div>
                    <ResumeCart>
                        <div>
                            <h2>Valor total</h2>
                            <p>{priceFormatted}</p>
                        </div>
                        <button>
                            Continuar com a entrega
                        </button>
                    </ResumeCart>
                </OrderContent>
            </OrderContainer>
        </>
    )
}