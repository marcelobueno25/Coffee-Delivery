import { Card } from '../../../../components/Card'
import Coffe1 from '../../../../assets/coffee1.svg'
import Coffe2 from '../../../../assets/coffee2.svg'
import Coffe3 from '../../../../assets/coffee3.svg'
import Coffe4 from '../../../../assets/coffee4.svg'
import Coffe5 from '../../../../assets/coffee5.svg'
import { CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe1}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe2}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe3}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe4}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe5}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe1}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe2}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe3}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe4}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe5}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe4}
        />
        <Card
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          tag={['Tradicional']}
          src={Coffe1}
        />
      </List>
    </CoffeeListContainer>
  )
}
