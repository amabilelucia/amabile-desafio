import React from "react";
import Plot from "react-plotly.js";

function criarTabela(values, labels, titulo) {
  return (
    <Plot
      data={[
        {
          values: values,
          labels: labels,
          type: "pie",
        },
      ]}
      layout={{ width: 700, height: 400, title: titulo }}
    />
  );
}

function dadosTabela(titulo, listaDados) {
  if (!listaDados || listaDados.length === 0) {
    return null;
  }

  const listaFiltradaChave = [];
  const listaFiltradaValor = [];
  let total = 0;
  listaDados.map((item) => {
    if (listaFiltradaChave.includes(item[titulo])) {
      listaFiltradaValor[listaFiltradaChave.indexOf(item[titulo])] += 1;
    } else {
      listaFiltradaChave.push(item[titulo]);
      listaFiltradaValor.push(1);
    }
    total += 1;
    return;
  });

  const listaFiltradaValorPorcentagem = listaFiltradaValor.map(
    (valorFiltrado) => {
      return (valorFiltrado / total) * 100;
    }
  );
  return criarTabela(listaFiltradaValorPorcentagem, listaFiltradaChave, titulo);
}


export default class Graphic extends React.Component {
  render() {
    const lista = this.props.objectList;

    return (
      <div>
        {dadosTabela("gender", lista)}
        {dadosTabela("bloodType", lista)}
      </div>
    );
  }
}
