import { useState } from 'react'
import './App.css'
import Xuxa1 from './assets/3650333.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <header></header>
      <section className="produtos">

        {/* Produto 1 */}
        <div className="card">
          <img src={Xuxa1} alt="" />
          <h2 className="titulo-card">Notebook Xuxa</h2>
          <p className="desc">Notebook Gamer com RGB 1 nucleo e 512Mb de RAM</p>
          <p className="preco"> R$5.999,99</p>
          <p className="avaliacao">★ ★ ★ ★ ✰</p>
        </div>

      </section>
      <section className="destaque"></section>
      <footer></footer>
    </main>
    </>
  )
}

export default App
