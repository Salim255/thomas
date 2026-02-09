import hero from "../img/image00026.jpg";

const About = () => {
  return (
    <div id="about">
      <section className="about">
        <div className="about__item--1">
          <h1 className="about__thomas heading-1 mb-md">thomas lo presti</h1>
          <p className="about__story mb-md">
            Thomas Lo Presti, photography has over a decade of experience
            capturing wedding days and has been a full-time wedding photographer
            since 2016. he drew (of maddox made film) provide wedding
            photography +videography to all of central kentucky + surrounding
            areas and is available for destination locations + elopements.
          </p>
        </div>

        <div className="about__item--2">
          <img src={hero} alt="" className="about__img" />
        </div>
      </section>

      <section className="composition">
        <div className="div1">
          <div className="overlay">
            <div className="overlay__title">les musées</div>
          </div>
        </div>
        <div className="div2">
          <div className="overlay">
            <div className="overlay__title">street art</div>
          </div>
        </div>
        <div className="div3">
          <div className="overlay">
            <div className="overlay__title">zoo</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
