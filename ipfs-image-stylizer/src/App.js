import "./App.css";
import { useState } from "react";
import { create } from "ipfs-http-client";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const pinataApiKey = "533c09e27275876e201e";
const pinataSecretApiKey =
  "952e02114ea175b917cddc2b12eb118ae9b8d73ab9e6a78b99e518fbc95ce49";

const client = create("https://ipfs.infura.io:5001/api/v0");

function App() {
  const [fileUrl, updateFileUrl] = useState(``);

  async function savePinata() {
    let pinataClient = await create({
      url: "https://api.pinata.cloud/psa",
      repo: "file-path" + Math.random(),
    });
    const { cid } = await pinataClient.add("hello world");
    const url = `https://gateway.pinata.cloud/ipfs/${cid.string}`;
    console.log(url);
  }

  async function onChangePinata(e) {
    let pinataClient = await create({
      url: "https://api.pinata.cloud/psa",
      repo: "file-path" + Math.random(),
    });
    const file = e.target.files[0];
    const { cid } = await pinataClient.add(file);
    const url = `https://gateway.pinata.cloud/ipfs/${cid.string}`;
    console.log(url);
  }

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div className="App">
      <h1>IPFS Stylizer</h1>

      <h3>Style file</h3>
      <input type="file" onChange={onChange} />
      {fileUrl && <img src={fileUrl} width="1600px" />}

      <br />

      <h3>Content file</h3>
      <input type="file" onChange={onChange} />
      {fileUrl && <img src={fileUrl} width="1600px" />}

      <button id="stylize" disabled>
        Stylize
      </button>
    </div>
  );
}

export default App;
