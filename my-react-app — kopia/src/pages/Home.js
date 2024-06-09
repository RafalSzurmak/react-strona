import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <header>
        <h1>Witamy w Naszej Firmie</h1>
        <p>Twoje ulubione miejsce dla wszystkich potrzeb związanych z kotami.</p>
      </header>

      <section className="about-brief">
        <h2>O nas</h2>
        <p>
          Nasza firma jest dedykowana dobrobytowi i szczęściu kotów. Oferujemy szeroki zakres usług, w tym pielęgnację, hotel dla kotów oraz opiekę weterynaryjną. 
          <Link to="/about">Dowiedz się więcej</Link>
        </p>
      </section>

      <section className="services-brief">
        <h2>Nasze Usługi</h2>
        <ul>
          <li>Pielęgnacja kotów</li>
          <li>Hotel dla kotów</li>
          <li>Opieka weterynaryjna</li>
        </ul>
        <Link to="/about">Zobacz wszystkie usługi</Link>
      </section>

      <section className="gallery-brief">
        <h2>Galeria</h2>
        <p>Zobacz zdjęcia naszych szczęśliwych klientów.</p>
        <Link to="/gallery">Zobacz galerię</Link>
      </section>

      <section className="testimonials-brief">
        <h2>Referencje</h2>
        <blockquote>
          <p>"Najlepsza firma zajmująca się kotami! Moje koty zawsze są szczęśliwe po wizycie."</p>
          <footer>— Zadowolony Klient</footer>
        </blockquote>
      </section>

      <section className="contact-brief">
        <h2>Kontakt</h2>
        <p>Masz pytania? Skontaktuj się z nami.</p>
        <Link to="/support">Skontaktuj się z nami</Link>
      </section>
    </div>
  );
}

export default Home;
