import { CreditCard, TicketPercent, Truck } from 'lucide-react'
import './benefits.css'

const Home = () => {
  return (
    <>
      <div className='banner'>
        
      </div>
      <div className='benefits'>
        <div>
          <Truck className='icon-benefits' />
          <h3>FRETE GRATIS</h3>
          <p>a partir de R$ 399</p>
        </div>
        <div>
          <CreditCard className='icon-benefits' />
          <h3>ATÉ 3X SEM JUROS</h3>
          <p>ou até 12x com juros</p>
        </div>
        <div>
          <TicketPercent className='icon-benefits' />
          <h3>10% de desconto no PIX</h3>
        </div>
      </div>
    </>
  )
}

export default Home
