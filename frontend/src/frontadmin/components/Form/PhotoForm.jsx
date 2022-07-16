import PropTypes from "prop-types";
import PhotoFormDetail from "./PhotoFormDetail";
import "../../../assets/styles/PhotosAdmin.css";

export default function PhotoForm({ content }) {
  return (
    <div className="adminPhotoContainer">
      <section className="photoSubTitleZone">
        <h2>Page d'accueil / Mosaïque</h2>
      </section>
      <section className="photoMosaiqueZone">
        {/* eslint-disable-next-line react/prop-types */}
        {content.map((e) => {
          return <PhotoFormDetail key={e.id} initialContent={e} />;
        })}
      </section>
    </div>
  );
}

PhotoForm.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    photo_name: PropTypes.string,
    photo_url: PropTypes.string,
  }),
};

PhotoForm.defaultProps = {
  content: PropTypes.shape({
    id: 1,
    photo_name: "mosaic1",
    photo_url:
      "http://localhost:5000/assets/images/ProfilAttila.png1657924240178.png",
  }),
};
