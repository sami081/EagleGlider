import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>A propos de nous</h2>
      <div className="all-character">
        <div className="character ogunta">
          <img src="./ressources/images/picture/ogunta.png" alt="ogunta" />
          <div className="information-character information-ogunta">
            <div className="inside-box inside-box-ogunta">
              <h3>Ogunta</h3>
              <p>
                Il est passionné par le dessin et le design. De formation
                webdesigner, il a le désir de s'améliorer constamment pour être
                le plus compétent possible. D'une personnalité calme et posée,
                il accepte volontiers les différentes épreuves qui s'annoncent
                devant lui.
              </p>
            </div>
          </div>
        </div>
        <div className="character sami">
          <img src="./ressources/images/picture/ogunta.png" alt="ogunta" />
          <div className="information-character information-sami">
            <div className="inside-box inside-box-sami">
              <h3>Sami</h3>
              <p>
                Poussée par de grandes ambitions, Sami poursuit son objectif de
                créer sa propre entreprise. La manière d’y parvenir est tout
                aussi importante pour lui. Pour y arriver, il s’est formé au
                développement web. Ses compétences en leadership lui donnent la
                structure dont il a besoin pour être pragmatique et efficace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <aside>
        <p>
          A la fin d’une conversation, ils ont réalisé la valeur ajoutée qu’ils
          pouvaient s’apporter l'un à l'autre. A partir de ce moment, la
          décision de créer un projet commun est née. Malgré leurs histoires
          différentes, ils unissent leurs passions respectives.
        </p>
      </aside>
    </section>
  );
};

export default AboutUs;
