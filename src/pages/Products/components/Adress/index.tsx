import { OrderContainer, OrderContent } from "../Cart/styles";
import { FormContainer } from "./styles";

export function Adress() {
    return (
        <OrderContainer>
            <OrderContent>
                <FormContainer>
                    <h2>Entrega</h2>

                    <label htmlFor="">
                        Quem irá receber:
                        <input type="text" name="nome" />
                    </label>

                    <label htmlFor="">
                        Endereço:
                        <input type="text" name="adress" />
                    </label>

                    <label htmlFor="">
                        Cidade
                        <input type="text" name="city" />
                    </label>

                    <div>
                        <label htmlFor="">
                            CEP:
                            <input type="text" name="cep" />
                        </label>

                        <label htmlFor="">
                            Número:
                            <input type="text" name="number" />
                        </label>
                    </div>

                    <label htmlFor="">
                        Complemento (opcional):
                        <input type="text" name="complement" />
                    </label>

                    <footer>
                        <button>Continuar com o pagamento</button>
                        <button>Voltar para o carrinho</button>
                    </footer>
                </FormContainer>
            </OrderContent>
        </OrderContainer>
    )
}