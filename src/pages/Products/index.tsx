import { CardProductsContainer, ProductsContainer } from "./styles";
import { CardProduct } from "./components/CardProduct";
import { Outlet, useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/api";

export function Products() {
  const { id } = useParams();
  const { data: categories, isLoading } = useGetCategoriesQuery()

  if (isLoading || !categories) return <h2>Carregando</h2>

  const categorySellected = categories.find(category => category.id === Number(id));


  return (
    <>
      <ProductsContainer >
        <CardProductsContainer>
          {categorySellected?.cardapio.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </CardProductsContainer>
      </ProductsContainer>
      <Outlet />
    </>
  )
}