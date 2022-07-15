import Footer from "../components/Footer";
import "../../assets/styles/Involve.css";
import corner from "../../assets/img/corner.png";
import monument1 from "../../assets/img/monument1.png";
import monument2 from "../../assets/img/monument2.png";
import monument3 from "../../assets/img/monument3.png";
import Header from "../components/Header";

export default function Involve() {
  return (

    <div>
      <Header />
    </div>

    <div className="involve-body">
      <div className="involve-container">
        <p className="involve-title">
          <span className="involve-span-title">Choisissez la Paix,</span>
        </p>
        <p className="involve-title">
          <span className="involve-span-title">soutenez l'Ukraine ! </span>
        </p>

        <div className="card-container">
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="monument3" src={monument3} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">Donnez !</h2>

                <p className="involve-p">
                  Faire un don c'est nous permettre d'agir, en menant des
                  actions d'aides humanitaires vers les civils ukrainiens
                  victimes de la guerre, et de soutenir les réfugiés en France.
                  Votre don est précieux, nous avons besoin de votre générosité
                  pour intervenir en toute indépendance, afin de soutenir
                  l'Ukraine.
                </p>
                <img className="corner-icon" alt="corner" src={corner} />
              </div>
              <div className="card-back">
                <div>
                  <p className="involve-p">
                    Votre don vous donne droit à une réduction d'impôts de 75%
                    de son montant dans la limite de 1000 euros de dons (plafond
                    2020). Au-delà, la réduction d’impôt est de 66 % du montant
                    dans la limite de 20 % de vos revenus nets imposables. Vous
                    pouvez par la suite remplir vos coordonnées personnelles,
                    elles sont indispensables pour que nous puissions traiter
                    votre don et vous envoyer un reçu fiscal.
                  </p>
                  <a href="sera mis à jour plus tard" className="involve-btn">
                    <span className="involve-span-btn">Je fais un don</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="monument2" src={monument2} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">Adhérez !</h2>
                <p className="involve-p">
                  Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en
                  lui apportant un peu de votre temps et de vos compétences,
                  c'est également contribuer au développement de l'association
                  par les participations aux manifestations extérieures :
                  marches pour la paix, expositions culturelles, missions de
                  bénévolat.
                </p>
                <img className="corner-icon" alt="corner" src={corner} />
              </div>
              <div className="card-back">
                <div>
                  <p className="involve-p">
                    Le montant de votre cotisation sera fonction de votre statut
                    de membre : adhérents (15€), adhérents jeunes (8€), ou
                    encore adhérents bienfaiteurs, associations, collectivités
                    publiques, et autres personnes morales ou membres honoraires
                    (100€). Merci de votre engagement et à bientôt parmi nous !
                  </p>
                  <a href="sera mis à jour plus tard" className="involve-btn">
                    <span className="involve-span-btn">Je deviens membre</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="monument1" src={monument1} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">Participez !</h2>
                <p className="involve-p">
                  Nous sommes toujours à la recherche de bonnes volontés pour
                  participer à nos actions de collecte, de
                  chargement/déchargement de camion, de convoyage ou d'aide aux
                  réfugiés. N'hésitez pas à venir vers nous pour nous proposer
                  votre soutien.
                </p>
                <img className="corner-icon" alt="corner" src={corner} />
              </div>
              <div className="card-back">
                <a href="sera mis à jour plus tard" className="involve-btn">
                  <span className="involve-span-btn">Je prends contact</span>
                </a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="monument2" src={monument2} />
              </div>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2 className="involve-h2">Adhérez !</h2>
              <p className="involve-p">
                Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en
                lui apportant un peu de votre temps et de vos compétences, c'est
                également contribuer au développement de l'association par les
                participations aux manifestations extérieures : marches pour la
                paix, expositions culturelles, missions de bénévolat.
              </p>
              <img className="corner-icon" alt="corner" src={corner} />
            </div>
            <div className="card-back">
              <div>
                <p className="involve-p">
                  Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en
                  lui apportant un peu de votre temps et de vos compétences,
                  c'est également contribuer au développement de l'association
                  par les participations aux manifestations extérieures :
                  marches pour la paix, expositions culturelles, missions de
                  bénévolat.
                </p>
                <img className="corner-icon" alt="corner" src={corner} />
              </div>
              <div className="card-back">
                <div>
                  <p className="involve-p">
                    Le montant de votre cotisation sera fonction de votre statut
                    de membre : adhérents (15€), adhérents jeunes (8€), ou
                    encore adhérents bienfaiteurs, associations, collectivités
                    publiques, et autres personnes morales ou membres honoraires
                    (100€). Merci de votre engagement et à bientôt parmi nous !
                  </p>
                  <a href="sera mis à jour plus tard" className="involve-btn">
                    <span className="involve-span-btn">Je deviens membre</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="monument1" src={monument1} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">Participez !</h2>
                <p className="involve-p">
                  Nous sommes toujours à la recherche de bonnes volontés pour
                  participer à nos actions de collecte, de
                  chargement/déchargement de camion, de convoyage ou d'aide aux
                  réfugiés. N'hésitez pas à venir vers nous pour nous proposer
                  votre soutien.
                </p>
                <img className="corner-icon" alt="corner" src={corner} />
              </div>
              <div className="card-back">
                <a href="sera mis à jour plus tard" className="involve-btn">
                  <span className="involve-span-btn">Je prends contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="involve-footer">
        <Footer />
      </div>

    </div>
  );
}
