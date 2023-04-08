import { CoffeeSelected } from '../../../../components/CoffeeSelect'
import { TitleText } from '../../../../components/Typography'
import { CardCoffee } from '../CardCoffee'
import { data } from '../../../../data'

export function CardCoffeeSelected() {
  return (
    <div>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <CardCoffee>
        <CoffeeSelected coffee={data[0]} />
        <CoffeeSelected coffee={data[1]} />
      </CardCoffee>
    </div>
  )
}
