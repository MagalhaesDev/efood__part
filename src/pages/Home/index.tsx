import { HomeContainer, CardsCategoriesContainer } from "./styles";
import { CardCategory } from "./components/CardCategory";
import { useGetCategoriesQuery } from "../../services/api";

export function Home() {
  const { data: categories, isLoading } = useGetCategoriesQuery()
  
  if (isLoading || !categories) return <h2>Carregando</h2>

  return (
    <HomeContainer >
      <CardsCategoriesContainer>
        {categories.map(category => (
          <CardCategory category={category} key={category.id} />
        ))}
      </CardsCategoriesContainer>
    </HomeContainer>
  )
}