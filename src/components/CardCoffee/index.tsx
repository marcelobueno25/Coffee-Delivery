import { ButtonIcon } from '../ButtonIcon'
import { Counter } from '../Counter'
import {
  CardContainer,
  CoffeeImage,
  Tag,
  Tags,
  Name,
  Description,
  CardFooter,
  CardButtons,
  Price,
} from './styles'
import { TitleText } from '../Typography'

export function CardCoffee({ coffee }: any) {
  return (
    <CardContainer>
      <CoffeeImage
        className="cardImgCoffee"
        src={coffee.src}
        alt="Imagem do Produto(Café)"
      />

      <Tags>
        {coffee.tags.map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <Price>
          <small>R$</small>
          <TitleText size="m" color="text">
            {coffee.price}
          </TitleText>
        </Price>

        <CardButtons>
          <Counter />
          <ButtonIcon />
        </CardButtons>
      </CardFooter>
    </CardContainer>
  )
}
