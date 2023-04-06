import { ReactNode } from 'react'
import headerCoffee from '../../../../assets/header-coffee.svg'
import bgIntro from '../../../../assets/bgIntro.png'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import {
  IntroContainer,
  InfoIconContainer,
  ListItems,
  TitleContend,
} from './styles'
import { TitleText, RegularText } from '../../../../components/Typography'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  interface InfoIconProps {
    text: string
    icon: string | ReactNode
    color: string
  }

  const InfoIcon = ({ text, icon, color }: InfoIconProps) => (
    <InfoIconContainer>
      <div className="iconContainer" style={{ background: color }}>
        {icon}
      </div>
      <p>{text}</p>
    </InfoIconContainer>
  )

  return (
    <IntroContainer>
      <div className="introLeft">
        <TitleContend>
          <TitleText size={'xl'}>
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>
          <RegularText size={'l'}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
        </TitleContend>
        <ListItems>
          <InfoIcon
            text={'Compra simples e segura'}
            icon={<ShoppingCart weight="fill" />}
            color={colors['yellow-dark']}
          />
          <InfoIcon
            text={'Embalagem mantém o café intacto'}
            icon={<Package weight="fill" />}
            color={colors['base-text']}
          />
          <InfoIcon
            text={'Entrega rápida e rastreada'}
            icon={<Coffee weight="fill" />}
            color={colors.yellow}
          />
          <InfoIcon
            text={'O café chega fresquinho até você'}
            icon={<Timer weight="fill" />}
            color={colors.purple}
          />
        </ListItems>
      </div>
      <div className="introRight">
        <img src={headerCoffee} alt="Copo de cafe" />
      </div>
      <img className="bgColorIntro" src={bgIntro} alt={'Foto de um Cafe'} />
    </IntroContainer>
  )
}
