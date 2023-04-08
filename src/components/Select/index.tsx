import { ReactNode } from 'react'
import { RegularText } from '../Typography'
import { SelectStyled } from './styles'

interface SelectProps {
  title: string
  icon: string | ReactNode
  active?: boolean
}

export function Select({ title, icon, active }: SelectProps) {
  return (
    <SelectStyled className={`${active ? 'active' : ''}`}>
      {icon}
      <RegularText size={'s'} color={'text'}>
        {title}
      </RegularText>
    </SelectStyled>
  )
}
