import { Counter } from '../Counter'
import { CardContainer, CardTexts, Description, Tag } from './styles'

export function Card({ children, title, description, src, tag }: any) {
  return (
    <CardContainer>
      <img src={src} alt="" />
      <CardTexts>
        {tag.map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ))}
        <h3>{title}</h3>
        <Description>{description}</Description>
      </CardTexts>
      <Counter />
      {children}
    </CardContainer>
  )
}
