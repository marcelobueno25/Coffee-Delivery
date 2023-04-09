import { useContext, useEffect } from 'react'
import { ButtonIcon } from '../../../../../../components/ButtonIcon'
import { Counter } from '../../../../../../components/Counter'
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
import { TitleText } from '../../../../../../components/Typography'
import { CoffeeContext } from '../../../../../../contexts'

export function CardCoffee({ coffee }: any) {
  const { coffees, addCoffeeCart } = useContext(CoffeeContext)

  const handleAddCoffee = (e: any) => {
    // e.preventDefault()
    addCoffeeCart(e)
  }

  useEffect(() => {
    console.log('coffees: ', coffees)
  }, [coffees])

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
          <ButtonIcon coffee={coffee} handleAddCoffee={handleAddCoffee} />
        </CardButtons>
      </CardFooter>
    </CardContainer>
  )
}
