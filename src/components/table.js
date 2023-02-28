import React from "react";

function cabecalho(object) {
  if (!object) {
    return;
  }
  const keys = Object.keys(object[0]);
  return keys.map((key) => <th key={key}>{key}</th>);
}

function corpo(object) {
  if (!object) {
    return;
  }
  return object.map((item) => (
    <tr>
      <td>{item.id}</td>
      <td>{item.gender}</td>
      <td>{item.nameSet}</td>
      <td>{item.title}</td>
      <td>{item.givenName}</td>
      <td>{item.middleInitial}</td>
      <td>{item.surname}</td>
      <td>{item.streetAddress}</td>
      <td>{item.city}</td>
      <td>{item.state}</td>
      <td>{item.stateFull}</td>
      <td>{item.username}</td>
      <td>{item.birthday}</td>
      <td>{item.browserUserAgent}</td>
      <td>{item.kilograms}</td>
      <td>{item.centimeters}</td>
      <td>{item.latitude}</td>
      <td>{item.longitude}</td>
      <td>{item.bloodType}</td>
      <td>{item.vehicle}</td>
      <td>{item.domain}</td>
      <td>{item.occupation}</td>
    </tr>
  ));
}

class Table extends React.Component {
  render() {
    const lista = this.props.objectList;
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>{cabecalho(lista)}</tr>
          </thead>
          <tbody>{corpo(lista)}</tbody>
        </table>
      </div>
    );
  }
}
export default Table;
