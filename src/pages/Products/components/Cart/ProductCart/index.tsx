import { useDispatch } from "react-redux";
import { Menu } from "../../../../../App"
import trash from "../../../../../assets/trash.png"
import { remover } from "../../../../../store/reducers/cart";
import { ProductCartContainer } from "./styles"

interface ProductCartProps {
    product: Menu
}

export function ProductCart({product}: ProductCartProps) {
    const dispatch = useDispatch();
    const formattedPricce = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const priceFormatted = formattedPricce.format(product.preco);

    function handleRemoveProductCart(id: number) {
        dispatch(remover(id))
    }

    return (
        <ProductCartContainer>
            <img src={product.foto} alt="Imagem do produto" />
            <div>
                <h2>{product.nome}</h2>
                <p>{priceFormatted}</p>
            </div>
            <button onClick={() => handleRemoveProductCart(product.id)}>
                <img src={trash} alt="Icone de lixeira" />
            </button>
        </ProductCartContainer>
    )
}