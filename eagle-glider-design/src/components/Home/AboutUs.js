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
              webdesigner, il a le désir de s'améliorer constamment pour être le
              plus compétent possible. D'une personnalité calme et posée, il
              accepte volontiers les différentes épreuves qui s'annoncent devant
              lui.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
