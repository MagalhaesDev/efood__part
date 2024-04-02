import { BackgroundImage, HeaderContainer, HeaderProducts, Logo, TitleProduct } from "./styles";
import background from "../../assets/background.jpg"
import logo from "../../assets/logo.svg"
import { useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/api";
import { useState } from "react";
import { Cart } from "../../pages/Products/components/Cart";
import { RootReducer } from "../../store";
import { useSelector } from "react-redux";

export function Header() {
    const [isOpen,setIsOpen] = useState(false)
    const cart = useSelector((state: RootReducer) => state.carrinho.itens)
    const { data: categories, isLoading } = useGetCategoriesQuery()
    const { id } = useParams();
  
    if (isLoading || !categories) return <h2>Carregando</h2>


    let categorySellected;

    if (id) {
        categorySellected = categories.find(category => category.id === Number(id))
    }

    function handleOpenCart() {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderContainer>
            {categorySellected ? (
                <>
                    <HeaderProducts>
                        <p>Restaurantes</p>
                       <img src={logo} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
                       <button disabled={cart.length <= 0} onClick={() => handleOpenCart()}>{cart.length} produto(s) no carrinho</button>
                    </HeaderProducts>
                    <TitleProduct>
                        <div>
                            <div>
                                <p>{categorySellected.tipo}</p>
                            </div>
                            <h2>{categorySellected.titulo}</h2>
                        </div>
                        <img src={categorySellected.capa} alt="" />
                    </TitleProduct></>
            ) :
                (
                    <>
                        <Logo src={logo} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
                        <h1>Viva experiências gastronômicas no conforto da sua casa</h1></>)
            }
            <BackgroundImage src={background} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
            {isOpen && cart.length > 0 && <Cart handleOpenCart={handleOpenCart}/>}
        </HeaderContainer>
    )
}