import { Counter } from '../Counter'
import {
  CardContainer,
  CoffeeImage,
  Name,
  CardContent,
  CardHeader,
  CardButtons,
  Price,
} from './styles'
import { TitleText } from '../Typography'

export function CoffeeSelected({ coffee }: any) {
  return (
    <CardContainer>
      <CoffeeImage
        className="cardImgCoffee"
        src={coffee.src}
        alt="Imagem do Produto(Café)"
      />
      <CardContent>
        <CardHeader>
          <Name>{coffee.name}</Name>
          <Price>
            <small>R$</small>
            <TitleText size="s" color="text">
              {coffee.price}
            </TitleText>
          </Price>
        </CardHeader>
        <CardButtons>
          <Counter />
        </CardButtons>
      </CardContent>
    </CardContainer>
  )
}
