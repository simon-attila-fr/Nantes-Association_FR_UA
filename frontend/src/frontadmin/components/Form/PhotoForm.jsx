import PhotoFormDetail from "./PhotoFormDetail";

export default function PhotoForm({ content }) {
  return (
    <div className="adminPhotoContainer">
      <section className="photoSubTitleZone">
        <h2>Page d'accueil / Mosaïque</h2>
      </section>
      <section className="photoMosaiqueZone">
        {content.map((e) => {
          return <PhotoFormDetail key={e.id} initialContent={e} />;
        })}
      </section>
    </div>
  );
}
