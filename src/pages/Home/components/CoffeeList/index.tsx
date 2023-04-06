import { CardCoffee } from '../../../../components/CardCoffee'
import { CoffeeListContainer, List } from './styles'
import { data } from '../../../../data'
import { TitleText } from '../../../../components/Typography'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <TitleText size={'l'} color="subtitle">
        Nossos cafés
      </TitleText>
      <List>
        {data.map((coffee) => {
          return <CardCoffee coffee={coffee} key={coffee.id} />
        })}
      </List>
    </CoffeeListContainer>
  )
}
