import propTypes from "prop-types";

export default function TableMembers({ data }) {
  return (
    <div>
      <table id="example-table">
        <thead>
          <tr>
            <th>nom</th>
            <th>prénom</th>
            <th>email</th>
            <th>adresse</th>
            <th>téléphone</th>
            <th>date d'insription</th>
            <th>newsletter</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/prop-types */}
          {data.map((list) => (
            <tr key={list.id}>
              <td>{list.name}</td>
              <td>{list.lastName}</td>
              <td>{list.email}</td>
              <td>{list.address}</td>
              <td>{list.phone}</td>
              <td>{list.created_at}</td>
              <td>{list.newsletter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TableMembers.propTypes = {
  data: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    lastname: propTypes.string,
    address: propTypes.string,
    phone: propTypes.number,
    created_at: propTypes.number,
    newsletter: propTypes.number,
  }),
};

TableMembers.defaultProps = {
  data: propTypes.shape({
    id: 1,
    name: "toto",
    lastname: "titi",
    address: "rue baron",
    phone: "06.06.06.06.06",
    created_at: "08.07.2022",
    newsletter: 1,
  }),
};
