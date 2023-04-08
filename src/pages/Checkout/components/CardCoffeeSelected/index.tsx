import { CoffeeSelected } from '../../../../components/CoffeeSelect'
import { RegularText, TitleText } from '../../../../components/Typography'
import { CardCoffee } from '../CardCoffee'
import { data } from '../../../../data'
import { Button } from '../../../../components/Button'
import { AlignPrice, AlignPriceTotal } from './styles'
import { NavLink } from 'react-router-dom'

export function CardCoffeeSelected() {
  return (
    <div>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <CardCoffee>
        <CoffeeSelected coffee={data[0]} />
        <CoffeeSelected coffee={data[1]} />

        <AlignPrice>
          <RegularText size="s" color="text">
            Total de itens
          </RegularText>
          <RegularText size="s" color="text">
            R$ 29,70
          </RegularText>
        </AlignPrice>

        <AlignPrice>
          <RegularText size="s" color="text">
            Entrega
          </RegularText>
          <RegularText size="s" color="text">
            R$ 3,50
          </RegularText>
        </AlignPrice>

        <AlignPriceTotal>
          <TitleText size="s" color="subtitle">
            Total
          </TitleText>
          <TitleText size="s" color="subtitle">
            R$ 33,20
          </TitleText>
        </AlignPriceTotal>
        <NavLink to="/success">
          <Button title={'confirmar pedido'} />
        </NavLink>
      </CardCoffee>
    </div>
  )
}
