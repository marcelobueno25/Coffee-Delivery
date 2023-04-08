import { ReactNode } from 'react'
import { CheckoutCardCoffee, CheckoutHeader } from './styles'

interface CardCoffeeProps {
  children: string | ReactNode
  title?: string
  subtitle?: string
  icon?: string | ReactNode
}

export function CardCoffee({
  children,
  title,
  subtitle,
  icon,
}: CardCoffeeProps) {
  return (
    <div>
      <CheckoutCardCoffee>
        <CheckoutHeader style={{ display: `${title ? 'flex' : 'none'}` }}>
          {icon}
          <div>
            <p>{title}</p>
            <small>{subtitle}</small>
          </div>
        </CheckoutHeader>
        {children}
      </CheckoutCardCoffee>
    </div>
  )
}
