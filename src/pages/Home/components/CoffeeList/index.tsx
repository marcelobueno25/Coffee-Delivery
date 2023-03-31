import { Card } from '../../../../components/Card'
import { CoffeeListContainer, List } from './styles'
import { data } from '../../../../data'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              tag={item.tags.map((item) => item)}
              src={item.src}
            ></Card>
          )
        })}
      </List>
    </CoffeeListContainer>
  )
}
