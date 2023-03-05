import React from "react";
import { Delete } from "../controller/InoviaController";
import Header from "./header";
import { Link } from "react-router-dom";

function cabecalho(object) {
  if (!object) {
    return;
  }
  const keys = Object.keys(object[0]);
  let cabecalhoList = keys.map((key) => <th key={key}>{key}</th>);
  cabecalhoList.push(<th>Excluir</th>);
  return cabecalhoList;
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
      <td>
        <button type="submit" onClick={() => excluir(item.id)}>
          excluir
        </button>
      </td>
    </tr>
  ));
}

function excluir(id) {
  Delete(id);
}

class Table extends React.Component {
  state = {
    pesquisa: "",
  };

  buscarEvento = (event) => {
    this.setState({ pesquisa: event.target.value });
  };

  render() {
    const lista = this.props.objectList;
    let listaFiltrada = null;
    if (lista) {
      listaFiltrada = lista.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(this.state.pesquisa.toLowerCase())
      );
    }
    return (
      <div>
        <Header></Header>
        <div>
          <button className="btn" type="button">
            <Link to="/create" className="text-link">
              Novo Dado
            </Link>
          </button>
          <button className="btn" type="button">
            <Link to="/put" className="text-link">
              Modificar Dado
            </Link>
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            onChange={this.buscarEvento}
            value={this.state.pesquisa}
          />
          <table className="table table-bordered table-striped">
            <thead>
              <tr>{cabecalho(lista)}</tr>
            </thead>
            <tbody>{corpo(listaFiltrada)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Table;
