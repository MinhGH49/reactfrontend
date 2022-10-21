import "./App.css";
import React, {useState } from "react";

function InsertData() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [prescribe, setPrescribe] = useState("");
  const [contraindication, setContraindication] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://minh-restfulapi.herokuapp.com/drugs/insert", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          id: id,
          name: name,
          prescribe: prescribe,
          contraindication: contraindication,
          manufacturer: manufacturer,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setId("");
        setPrescribe("");
        setContraindication("");
        setManufacturer("");
        setMessage("Insert new drugs successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // <form onSubmit={handleSubmit}>
  //   <input
  //     type="text"
  //     value={id}
  //     placeholder="id"
  //     onChange={(e) => setId(e.target.value)}
  //   />
  //   <input
  //     type="text"
  //     value={name}
  //     placeholder="name"
  //     onChange={(e) => setName(e.target.value)}
  //   />
  //   <input
  //     type="text"
  //     value={prescribe}
  //     placeholder="prescribe"
  //     onChange={(e) => setPrescribe(e.target.value)}
  //   />
  //   <input
  //     type="text"
  //     value={contraindication}
  //     placeholder="contraindication"
  //     onChange={(e) => setContraindication(e.target.value)}
  //   />
  //   <input
  //     type="text"
  //     value={manufacturer}
  //     placeholder="manufacturer"
  //     onChange={(e) => setManufacturer(e.target.value)}
  //   />
  //   <button type="submit">Create</button>
  //
  //   <div className="message">{message ? <p>{message}</p> : null}</div>
  // </form>

  return (
    <div className="InsertData">

      <input
        type="text"
        value={id}
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={prescribe}
        placeholder="prescribe"
        onChange={(e) => setPrescribe(e.target.value)}
      />
      <input
        type="text"
        value={contraindication}
        placeholder="contraindication"
        onChange={(e) => setContraindication(e.target.value)}
      />
      <input
        type="text"
        value={manufacturer}
        placeholder="manufacturer"
        onChange={(e) => setManufacturer(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Create</button>

      <div className="message">{message ? <p>{message}</p> : null}</div>

    </div>
  );
}

export default InsertData;
