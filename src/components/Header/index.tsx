import { BackgroundImage, HeaderContainer, HeaderProducts, Logo, TitleProduct } from "./styles";
import background from "../../assets/background.jpg"
import logo from "../../assets/logo.svg"

import apresentacao from '../../assets/apresentacao.png'
import { useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/api";

export function Header() {
    const { data: categories, isLoading } = useGetCategoriesQuery()
    const { id } = useParams();
  
    if (isLoading || !categories) return <h2>Carregando</h2>


    let categorySellected;

    if (id) {
        categorySellected = categories.find(category => category.id === Number(id))
    }

    return (
        <HeaderContainer>
            {categorySellected ? (
                <>
                    <HeaderProducts>
                        <p>Restaurantes</p>
                       <img src={logo} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
                       <p>0 produto(s) no carrinho</p>
                    </HeaderProducts>
                    <TitleProduct>
                        <div>
                            <div>
                                <p>{categorySellected.tipo}</p>
                            </div>
                            <h2>{categorySellected.titulo}</h2>
                        </div>
                        <img src={apresentacao} alt="" />
                    </TitleProduct></>
            ) :
                (
                    <>
                        <Logo src={logo} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
                        <h1>Viva experiências gastronômicas no conforto da sua casa</h1></>)
            }
            <BackgroundImage src={background} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
        </HeaderContainer>
    )
}