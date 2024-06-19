import React from 'react';
import { useState } from 'react';
import America2022 from '../America2022';
import SriLanka from '../SriLanka';
import Morocco from '../Morocco';
import Japan from '../Japan';
import './style.css';

export default function Countries() {
    const [trip, setTrip] = useState('');
    const [tripChosen, setTripChosen] = useState(false);

    function sriLanka() {
        setTrip('Sri Lanka');
        setTripChosen(true);
    }

    function usa1() {
        setTrip('USA1');
        setTripChosen(true);
    }

    function usa2() {
        setTrip('USA2');
        setTripChosen(true);
    }

    function morocco() {
        setTrip('Morocco');
        setTripChosen(true);
    }

    function japan() {
        setTrip('Japan');
        setTripChosen(true);
    }

    return (

        <div>

            {!tripChosen && 
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{marginTop: '6vh'}}>Neil and Steph's travel journals</h1>
                <h3>Finished journals</h3>
                <div onClick={sriLanka} className="trips" style={{marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '200px'}} src="https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg" alt="Sri Lanka Flag" />
                    <h4 className="countryText" style={{textAlign: 'center'}}>Sri Lanka, 2018</h4>
                </div>
                <div onClick={usa1} className="trips" style={{marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '200px'}} src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="USA flag" />
                    <h4 className="countryText" style={{textAlign: 'center'}}>United States, 2019</h4>
                </div>
                <div onClick={usa2} className="trips" style={{marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '200px'}} src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="USA flag" />
                    <h4 className="countryText" style={{textAlign: 'center'}}>United States, 2022</h4>
                </div>
                
                <h3>Unfinished journals</h3>
                <div onClick={morocco} className="trips" style={{marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '200px'}} src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Morocco_%28large_stroke%29.svg" alt="Morocco flag" />
                    <h4 className="countryText" style={{textAlign: 'center'}}>Morocco, 2023</h4>
                </div>
                <div onClick={japan} className="trips" style={{marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '200px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png" alt="Japan flag" />
                    <h4 className="countryText" style={{textAlign: 'center'}}>Japan, 2024</h4>
                </div>
                <br></br>
                <br></br>
            </div>}

            {trip === 'USA2' &&
                <America2022 tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip}/>
            }
            {trip === 'Sri Lanka' &&
                <SriLanka tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip}/>
                }
            {trip === 'Morocco' &&
                <Morocco tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip}/>
            }
            {trip === 'Japan' &&
                <Japan tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip}/>
            }


        </div>
    )
}