import { useState } from 'react'
import './App.css'
import Carmy from './assets/chuteira-3.jpg'
import Cjoa from './assets/chuteira-1.webp'
import Curs from './assets/chuteira-2.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Chuteira Profissional de Campo Nike Mercurial Superfly 8 Elite SG FG "Dragonfly"</h2>
              <p className="desc">A Nike Mercurial Superfly 8 Elite SG FG apresenta um novo visual com componentes especializados para que possa jogar mais rápido do começo ao fim</p>
              <p className="preco">R$ 789,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (472)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Chuteira Nike Air Zoom Mercurial Vapor 15 Elite XXV FG TN</h2>
              <p className="desc">O cabedal leve e respirável da Chuteira Nike Air Zoom Mercurial Vapor 15 Elite garante um conforto excepcional.</p>
              <p className="preco">R$ 899,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (150)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">
              Chuteira Nike Zoom Mercurial Superfly 9</h2>
              <p className="desc">Equipadas com tecnologia de ponta, essas chuteiras possuem uma sola FG que garante excelente tração em gramados naturais.</p>
              <p className="preco">R$ 699,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">
        <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>
        </section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
