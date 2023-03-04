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

const Delete = async (id) => {
  try {
    await fetch("http://inovia.eastus.cloudapp.azure.com/api/person/" + id, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

const Post = async (data) => {
  console.log("chegou no post: " + data);

  try {
    await fetch(
      "http://inovia.eastus.cloudapp.azure.com/api/person/",
      { method: "POST", body: JSON.stringify(data), headers: {"Content-type": "application/json; charset=UTF-8"}}
    );
  } catch (error) {
    console.error(error);
  }
};

export { Get, Delete, Post };
