import { useState } from "react";
import "./App.css";
import Suede from "./assets/chuteira-1.webp";
import P180 from "./assets/chuteira-2.webp";
import MB4 from "./assets/chuteira-3.jpg";
import instagram from "./assets/instagram.svg";
import discord from "./assets/discord.svg";
import x from "./assets/x.svg";
import youtube from "./assets/youtube.svg";
import slider1 from "./assets/1.png";
import slider2 from "./assets/2.png";
import slider3 from "./assets/3.png";
import slider4 from "./assets/4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider4} alt="" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">
          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Suede} alt="" className="img-card" />
              <h2 className="titulo-card">
                Chuteira Campo NIKE Mercurial Vapor 14 SG Elite Dragonfly
              </h2>
              <p className="desc">
                A Nike Mercurial Vapor 14 Elite SG é projetada para oferecer
                velocidade e agilidade excepcionais.{" "}
              </p>
              <p className="preco">R$ 700,00</p>
              <div className="avaliacao">
                {" "}
                <span>★ ★ ★ ★ ★</span> (72)
              </div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={P180} alt="" className="img-card" />
              <h2 className="titulo-card">
                Chuteira Campo Air Zoom Mercurial Superfly 9 Elite{" "}
              </h2>
              <p className="desc">
                O campo é seu quando você calça a ousada Vapor 15 Pro FG. Com
                uma unidade Zoom Air para que você possa dominar nos minutos
                finais de uma partida - quando mais importa.
              </p>
              <p className="preco">R$ 899,99</p>
              <div className="avaliacao">
                {" "}
                <span>★ ★ ★ ★ ☆</span> (15)
              </div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={MB4} alt="" className="img-card" />
              <h2 className="titulo-card">
                Chuteira Campo NIKE Air Zoom Superfly 9 Elite FG TN
              </h2>
              <p className="desc">
                A Nike Air Zoom Mercurial Superfly 9 Elite FG é uma chuteira
                projetada para maximizar a velocidade e a agilidade nos momentos
                mais decisivos do jogoA Nike Air Zoom Mercurial Superfly 9 Elite
                FG é uma chuteira projetada para maximizar a velocidade e a
                agilidade nos momentos mais decisivos do jogo.{" "}
              </p>
              <p className="preco">R$ 1799,99</p>
              <div className="avaliacao">
                {" "}
                <span>★ ★ ★ ★ ★</span> (302)
              </div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <section className="destaque">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8SyU1sH3-pY?si=2Nr2I52f3DDSAnD3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <footer>
          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src={instagram} alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src={discord} alt="" id="discord" />
            </div>
            <div className="icon">
              <img src={x} alt="" id="x" />
            </div>
            <div className="icon">
              <img src={youtube} alt="" id="youtube" />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
