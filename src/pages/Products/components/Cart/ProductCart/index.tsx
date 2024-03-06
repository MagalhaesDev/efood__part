import { Menu } from "../../../../../App"
import trash from "../../../../../assets/trash.png"
import { ProductCartContainer } from "./styles"

interface ProductCartProps {
    product: Menu
}

export function ProductCart({product}: ProductCartProps) {
    const formattedPricce = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const priceFormatted = formattedPricce.format(product.preco);

    return (
        <ProductCartContainer>
            <img src={product.foto} alt="Imagem do produto" />
            <div>
                <h2>{product.nome}</h2>
                <p>{priceFormatted}</p>
            </div>
            <button>
                <img src={trash} alt="Icone de lixeira" />
            </button>
        </ProductCartContainer>
    )
}