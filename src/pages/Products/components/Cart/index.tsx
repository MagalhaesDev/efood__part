import { useNavigate, useParams } from "react-router-dom";
import { ProductCart } from "./ProductCart";
import { OrderContainer, OrderContent, ResumeCart, OverlayCart } from "./styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../../store";

export function Cart() {
    const { id } = useParams();
    const navigate = useNavigate();
    const cart = useSelector((state: RootReducer) => state.carrinho.itens)

    function handleCloseCart() {
        navigate(`/products/${id}`);
    }

    console.log(cart)

    return (
        <>
            <OrderContainer >
                <OverlayCart onClick={() => handleCloseCart()}/>
                <OrderContent >
                    <div>
                        {cart.map(product =>(
                            <ProductCart product={product}/>
                        ))}
                    </div>
                    <ResumeCart>
                        <div>
                            <h2>Valor total</h2>
                            <p>R$ 182,70</p>
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