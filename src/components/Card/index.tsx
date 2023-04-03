import { ButtonIcon } from '../ButtonIcon'
import { Counter } from '../Counter'
import { CardContainer } from '../CardContainer/styles'
import {
  CardImgCoffee,
  CardTexts,
  CardFooter,
  CardButtons,
  Description,
  Tag,
  CardPrice,
} from './styles'

export function Card({ children, title, description, src, tag }: any) {
  return (
    <CardContainer>
      <CardImgCoffee className="cardImgCoffee" src={src} alt="" />
      <CardTexts>
        {tag.map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ))}
        <h3>{title}</h3>
        <Description>{description}</Description>
      </CardTexts>
      <CardFooter>
        <CardPrice>
          <small>R$</small>
          <strong>9,90</strong>
        </CardPrice>

        <CardButtons>
          <Counter />
          <ButtonIcon />
        </CardButtons>
      </CardFooter>

      {children}
    </CardContainer>
  )
}
