import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import './css/forms.css'


export default function ViewLab() {
    const [ammonia, setAmmonia] = useState(0);
    const [calcium, setCalcium] = useState(0);
    const [chloride, setChloride] = useState(0);
    const [copper, setCopper] = useState(0);
    const [iron, setIron] = useState(0);
    const [manganese, setManganese] = useState(0);
    const [nitrate, setNitrate] = useState(0);
    const [name, setName] = useState("");
    const [observations, setObservations] = useState("");
    const [bacteria, setBacteria] = useState("");
    const [dateentered, setDateentered] = useState("");
    const handleChange_Bacteria = (event) => {
        setBacteria(event.target.value);
    };

    const addLab = () => {
        Axios.post('http://localhost:7193/createlab', {
            ammonia: ammonia,
            calcium: calcium,
            chloride: chloride,
            copper: copper,
            bacteria: bacteria,
            iron: iron,
            manganese: manganese,
            nitrate: nitrate,
            name: name,
            observations: observations,
            dateentered: dateentered,
        })
            .then(() => {
                console.log("success");
            })
    };

    var form = document.getElementById('submissionAlert');
    const myFunction = () => {
        if (form.checkValidity()) {
            alert("Succesfully submitted!");
        }
    }
    const myFunction3 = () => {
        window.location.href = "/editwell";
    }

    return (
        //<div className="form-container" >
        <form action="/editwell"> {/*id="submissionAlert"*/}
            <h2>Lab</h2>
            <div className="css">
                <label for="ammonia">
                    Ammonia <br /> [0-10 ppm(mg/L)]
                </label>
                <input
                    type="number" className="textarea resize-ta" id="ammonia" name="ammonia" min="0" max="10" disabled="disabled"
                    onChange={(event) => {
                        setAmmonia(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="calcium">
                    Calcium hardness <br /> [50-500 ppm(mg/L)]
                </label>
                <input
                    type="number" className="textarea resize-ta" id="calcium" name="calcium" min="50" max="500" disabled="disabled"
                    onChange={(event) => {
                        setCalcium(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="chloride">
                    Chloride <br /> [0-400 ppm(mg/L)]
                </label>
                <input
                    type="number" className="textarea resize-ta" id="chloride" name="chloride" min="0" max="400" disabled="disabled"
                    onChange={(event) => {
                        setChloride(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="bacteria">
                    Bacteria (Colilert) <br />
                    [Positive if more than 1 MPN/100ml]
                </label>
                <div id="App">
                    <div className="select-container">
                        <select
                            value={bacteria}
                            onChange={handleChange_Bacteria}
                            disabled="disabled"
                        >
                            <option hidden selected>Select one...</option>
                            <option value="Clear" id="bacteria" name="bacteria" required >Clear</option>
                            <option value="Yellow_with_fluorescent" id="bacteria" name="bacteria" required>Yellow with fluorescent rim </option>
                            <option value="Yellow_without_fluorescent" id="bacteria" name="bacteria" required >Yellow without fluorescent rim</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="css">
                <label for="copper">
                    Copper <br /> [0-10 ppm(mg/L)]
                </label>
                <input
                    type="number" className="textarea resize-ta" id="copper" name="copper" min="0" max="10" disabled="disabled"
                    onChange={(event) => {
                        setCopper(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="iron">
                    Iron<br /> [0-10 ppm(mg/L)]
                </label>
                <input

                    type="number" className="textarea resize-ta" id="iron" name="iron" min="0" max="10" disabled="disabled"
                    onChange={(event) => {
                        setIron(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="manganese">
                    Manganese<br /> [0-50 ppm(mg/L)]
                </label>
                <input
                    type="number" className="textarea resize-ta" id="manganese" name="manganese" min="0" max="50" disabled="disabled"
                    onChange={(event) => {
                        setManganese(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="nitrate">
                    Nitrate <br /> [0-45 ppm(mg/L)]
                </label>
                <input
                    type="number" className="textarea resize-ta" id="nitrate" name="nitrate" min="0" max="45" disabled="disabled"
                    onChange={(event) => {
                        setNitrate(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="name">
                    Data Collector’s Name:
                </label>
                <input
                    type="text" className="textarea resize-ta" id="name" name="name" disabled="disabled"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="observations">
                    Additional observations:
                </label>
                <textarea
                    type="text" className="textarea resize-ta" maxLength="150" id="observations" name="observations" disabled="disabled"
                    onChange={(event) => {
                        setObservations(event.target.value);
                    }}
                />
            </div>
            <div className="css">
                <label for="dateentered">
                    Date Entered:
                </label>
                <input
                    type="date" className="textarea resize-ta" id="dateentered" name="dateentered" disabled="disabled"
                    onChange={(event) => {
                        setDateentered(event.target.value);
                    }}
                />
            </div>
        </form>
        //</div>
    );
}
