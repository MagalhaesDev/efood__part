import { CardCategoryContainer, DescriptionContainer, ImageContainer, Tag, ButtonNavegation } from "./styles";
import Star from "../../../../assets/star.svg"
import { NavLink } from "react-router-dom";
import { Categories } from "../../../../context/ProductsContext";

interface CardCategoryProps {
    category: Categories;
}

export function CardCategory({ category }: CardCategoryProps) {
    return (
        <CardCategoryContainer>
            <ImageContainer>
                <img src={category.capa} alt="" />
                <Tag>
                    <p>{category.tipo}</p>
                </Tag>
            </ImageContainer>
            <DescriptionContainer>
                <div>
                    <h2>{category.titulo}</h2>
                    <div>
                        <p>{category.avaliacao}</p>
                        <img src={Star} alt="Estrela Amarela" />
                    </div>
                </div>
                <p>{category.descricao}</p>
                <NavLink to={`/products/${category.id}`}>
                    <ButtonNavegation>Saiba Mais</ButtonNavegation>
                </NavLink>
            </DescriptionContainer>
        </CardCategoryContainer>
    )
}