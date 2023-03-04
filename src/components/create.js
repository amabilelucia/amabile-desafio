import { useState } from "react";
import Header from "./header";

function fazerPost(e, dadosPost) {
  e.preventDefault();
  console.log(dadosPost);
}

export default () => {
  const [gender, setGender] = useState("");
  const [nameSet, setNameSet] = useState("");
  const [title, setTitle] = useState("");
  const [givenName, setGivenName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [stateFull, setStateFull] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [browserUserAgent, setBrowserUserAgent] = useState("");

  const dadosPost = {
    gender: gender,
    nameSet: nameSet,
    title: title,
    givenName: givenName,
    middleName: middleName,
    surname: surname,
    streetAddress: streetAddress,
    city: city,
    state: state,
    stateFull: stateFull,
    username: username,
    birthday: birthday,
    browserUserAgent: browserUserAgent,
  };

  return (
    <div>
      <Header></Header>
      <div className="container">
        <h1>Adicionar Dado</h1>
        <form
          className="form"
          onSubmit={(e) => {
            fazerPost(e, dadosPost);
          }}
        >
          <input
            className="input"
            type="text"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="name set"
            onChange={(e) => setNameSet(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Given name"
            onChange={(e) => setGivenName(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Middle name"
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="streetAddress"
            onChange={(e) => setStreetAddress(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="State Full"
            onChange={(e) => setStateFull(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Birthday"
            onChange={(e) => setBirthday(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="BrowserUserAgent"
            onChange={(e) => setBrowserUserAgent(e.target.value)}
          />
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};
