import React, { useEffect, useState } from "react";

const Get = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const getAllDados = async () => {
    const resposta = await fetch(
      "http://inovia.eastus.cloudapp.azure.com/api/person"
    );
    resposta.json().then((res) => {
      setDados(res);
      setCarregando(false);
    });
  };

  useEffect(() => {
    getAllDados();
  }, []);
  if (carregando) {
    return null;
  }

  return dados;
};

export {Get}