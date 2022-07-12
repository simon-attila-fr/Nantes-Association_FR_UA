import React from "react";
import PropTypes from "prop-types";
import HomeFormDetail from "./HomeFormDetail";

export default function HomeForm({ content }) {
  return (
    <section className="home-admin-contnair">
      <div className="lang-column">
        <div>
          <h3>Français</h3>
        </div>
        <div className="home-admin">
          {content
            // eslint-disable-next-line react/prop-types
            .filter((e) => e.language_code === "FR")
            .map((e) => {
              return <HomeFormDetail key={e.id} initialContent={e} />;
            })}
        </div>
      </div>
      <div className="lang-column">
        <div>
          <h3>Ukrainien</h3>
        </div>
        <div className="home-admin">
          {content
            // eslint-disable-next-line react/prop-types
            .filter((e) => e.language_code === "UK")
            .map((e) => {
              return <HomeFormDetail key={e.id} initialContent={e} />;
            })}
        </div>
      </div>
    </section>
  );
}

HomeForm.propTypes = {
  content: PropTypes.shape({
    body: PropTypes.string,
    language_code: PropTypes.string,
    description: PropTypes.string,
    traduction_id: PropTypes.number,
    ref: PropTypes.string,
  }),
};

HomeForm.defaultProps = {
  content: PropTypes.shape({
    body: "ceci est du contenu",
    language_code: "FR",
    description: "titre",
    traduction_id: 1,
    ref: "ref1",
  }),
};
