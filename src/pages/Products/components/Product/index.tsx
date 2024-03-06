import { useDispatch, useSelector } from "react-redux";
import { Menu } from "../../../../App";
import { ProductContainer, ProductContent, ImageContainer, DescriptionContainer } from "./styles";
import { adicionar } from "../../../../store/reducers/cart";
import { RootReducer } from "../../../../store";

interface ProductProps {
    modalProducts: () => void;
    product: Menu
}

export function Product({modalProducts, product}: ProductProps) {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootReducer) => state.carrinho.itens)
    const formattedPricce = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const priceFormatted = formattedPricce.format(product.preco);

    console.log(cart)
    

    function handleCloseModalProduct() {
        modalProducts();
        dispatch(adicionar(product))
    }

    return (
        <ProductContainer>
            <ProductContent>
                <ImageContainer>
                    <img src={product.foto} alt="" />
                </ImageContainer>
                <DescriptionContainer>
                    <h2>{product.nome}</h2>
                    <div>
                        <h4>{product.descricao}</h4>
                        <p>Serve: de {product.porcao}</p>
                    </div>
                    <button>Adicionar ao carrinho - {priceFormatted}</button>
                </DescriptionContainer>
                <button onClick={() => handleCloseModalProduct()}>X</button>
            </ProductContent>
        </ProductContainer>
    )
}