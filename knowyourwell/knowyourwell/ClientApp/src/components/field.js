﻿import React from 'react'
import './css/PreField.css'
import './css/forms.css'
import { useState } from 'react';
import Axios from 'axios'       

export default function Field() {
    const [conditions, setConditions] = useState("");
    const [temp, setTemp] = useState(0);
    const [ph, setPh] = useState("");
    const [conductivity, setConductivity] = useState("");
    const [name, setName] = useState("");
    const [observation, setObservation] = useState("");

    const [wellcover, setWellcover] = useState("");
    const handleChange_wellcover = (event) => {
        setWellcover(event.target.value);
    };

    const [evidence, setEvidence] = useState("");
    const handleChange_evidence = (event) => {
        setEvidence(event.target.value);
    };

    const [pooling, setPooling] = useState("");
    const handleChange_pooling = (event) => {
        setPooling(event.target.value);
    };

    const addField = () => {
        debugger;
        Axios.post('http://localhost:7193/api/insert', {
            conditions: conditions,
            wellcover: wellcover,
            evidence: evidence,
            pooling: pooling,
            temp: temp,
            ph: ph,
            conductivity: conductivity,
            name: name,
            observation: observation,
        })
            .then(() => {
                console.log("success");
            });
            //.catch((error) => {
            //    console.log(error.response.conditions);
            //    console.log(error.response.wellcover);
            //    console.log(error.response.evidence);
            //    console.log(error.response.pooling);
            //    console.log(error.response.temp);
            //});
    };

    var form = document.getElementById('submissionAlert');
    const myFunction = () => {
        if (form.checkValidity()) {
            alert("Succesfully submitted!");
        }
    }
    return (
        /*<div className="form-container"> */
            <form method="post" id="submissionAlert" action="create" >
                <h2>Field</h2>
                <div className="css">
                    <label for="conditions">
                        Conditions: Describe weather,
                        temperature,<br /> or anything
                        note-worthy about your well
                    </label>
                    <textarea
                        type="text" id="conditions" name="conditions" className="textarea resize-ta" maxLength="150" required autoFocus
                        onChange={(event) => {
                            setConditions(event.target.value);
                        }}
                    />
                </div>
                <div className="css">
                    <label for="wellcover">
                        Condition of the well cover
                    </label>
                    <div id="App">
                        <div className="select-container">
                            <select id="wellCover"
                                value={wellcover}
                                onChange={handleChange_wellcover}
                            >
                                <option hidden selected>Select one...</option>
                                <option value="Intact" id="wellcover" name="wellcover" required >Intact</option>
                                <option value="Observable_Opening" id="wellcover" name="wellcover" required>Observable Opening</option>
                                <option value="Damaged" id="wellcover" name="wellcover" required >Damaged</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="css">
                    <label for="evidence">
                        Is there evidence of surface<br />
                        run-off entry to the well?
                    </label>
                    <div id="App">
                        <div className="select-container">
                            <select
                                value={evidence}
                                onChange={handleChange_evidence}
                            >
                                <option hidden selected>Select one...</option>
                                <option value="Yes" id="evidence" name="evidence" required >Yes</option>
                                <option value="No" id="evidence" name="evidence" required >No</option>
                                <option value="Unknown" id="evidence" name="evidence" required >Unknown</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="css">
                    <label for="pooling">
                        Is there evidence of pooling or<br />
                        Puddles within 12 ft of the well?
                    </label>
                    <div id="App">
                        <div className="select-container">
                            <select
                                value={pooling}
                                onChange={handleChange_pooling}
                            >
                                <option hidden selected>Select one...</option>
                                <option value="Yes" id="pooling" name="pooling" required >Yes</option>
                                <option value="No" id="pooling" name="pooling" required >No</option>
                                <option value="Unknown" id="pooling" name="pooling" required >Unknown</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="css">
                    <label for="temp">
                        Groundwater Temperature<br /> [Degrees Celsius]
                    </label>
                    <input
                        type="number" className="textarea resize-ta" id="temp" name="temp" required
                        onChange={(event) => {
                            setTemp(event.target.value);
                        }}
                    />
                </div>
                <div className="css">
                    <label for="ph">
                        PH<br /> [0-14]
                    </label>
                    <input
                        type="number" className="textarea resize-ta" min="0" max="14" id="ph" name="ph" required
                        onChange={(event) => {
                            setPh(event.target.value);
                        }}
                    />

                </div>
                <div className="css">
                    <label for="conductivity">
                        Conductivity <br /> [uS/cm]
                    </label>
                    <input
                        type="number" className="textarea resize-ta" id="conductivity" name="conductivity" required
                        onChange={(event) => {
                            setConductivity(event.target.value);
                        }}
                    />
                </div>
                <div className="css">
                    <label for="name">
                        Data Collector’s Name:
                    </label>
                    <input
                        type="text" className="textarea resize-ta" id="name" name="name" required
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="css">
                    <label for="observation">
                        Observations
                    </label>
                    <textarea
                        type="text" className="textarea resize-ta" maxlength="150" id="observation" name="observation" required
                        onChange={(event) => {
                            setObservation(event.target.value);
                        }}
                    />
                </div>
                <button type="submit" onClick={addField}  >Save</button>
            </form >
       /* </div>*/
    );
}
