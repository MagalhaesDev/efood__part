import { CardProductContainer, DescriptionContainer, ImageContainer, ButtonAddCart } from "./styles";
import { Product } from "../Product";
import { useState } from "react";
import { Menu } from "../../../../App";

interface CardProductsProps {
    product: Menu
}

export function CardProduct({ product }: CardProductsProps) {
    const [isOpenModalProduct, setIsOpenModalProduct] = useState(false)

    function modalProducts ()  {
        setIsOpenModalProduct(!isOpenModalProduct)
    }


    return (
            <CardProductContainer>
                <ImageContainer>
                    <img src={product.foto} alt="" />
                </ImageContainer>
                <DescriptionContainer>
                    <h2>{product.nome}</h2>
                    <p>{product.descricao.length > 180 ? `${product.descricao.slice(0, 180)} ...` : product.descricao}</p>
                    <ButtonAddCart onClick={() => modalProducts()}>Adicionar ao carrinho</ButtonAddCart>
                </DescriptionContainer>
                {isOpenModalProduct && (<Product modalProducts={modalProducts} product={product} />)}
            </CardProductContainer>
    )
}