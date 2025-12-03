import React from 'react';
import { useState } from 'react';
import America2022 from '../America2022';
import SriLanka from '../SriLanka';
import Morocco from '../Morocco';
import Japan from '../Japan';
import Mexico from '../Mexico';
import America2019 from '../America2019/Index';
import './style.css';

export default function Countries() {
    const [trip, setTrip] = useState('');
    const [tripChosen, setTripChosen] = useState(false);

    const trips = {
        finished: [
            {
                id: 'Sri Lanka',
                label: 'Sri Lanka, 2018',
                flag: 'https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg',
            },
            {
                id: 'USA1',
                label: 'United States, 2019',
                flag: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
            },
            {
                id: 'USA2',
                label: 'United States, 2022',
                flag: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
            },
            {
                id: 'Japan',
                label: 'Japan, 2024',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png',
            },
            {
                id: 'mexico',
                label: 'Mexico, 2025',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
            },
        ],
        unfinished: [
            {
                id: 'Morocco',
                label: 'Morocco, 2023',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Morocco_(large_stroke).svg',
            },
            {
                id: 'poland',
                label: 'Poland, 2025',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png',
            },
        ],
    };

    function chooseTrip(tripName) {
        setTrip(tripName);
        setTripChosen(true);
    }

    return (
        <div className="countries-page">
            {!tripChosen && (
                <div className="trips-landing">
                    <header className="page-header">
                        <p className="eyebrow">Travel journal collection</p>
                        <h1>Neil &amp; Steph's adventures</h1>
                        <p className="subhead">Tap a flag to open the story.</p>
                    </header>

                    <section className="trips-section">
                        <div className="section-header">
                            <h2>Finished journals</h2>
                            <p>Complete write-ups and photos ready to explore.</p>
                        </div>
                        <div className="trip-grid">
                            {trips.finished.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => chooseTrip(item.id)}
                                    className="trip-card"
                                >
                                    <img className="trip-flag" src={item.flag} alt={`${item.label} flag`} />
                                    <span className="trip-title">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="trips-section">
                        <div className="section-header">
                            <h2>Unfinished journals</h2>
                            <p>Work in progress—check back for updates.</p>
                        </div>
                        <div className="trip-grid">
                            {trips.unfinished.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => chooseTrip(item.id)}
                                    className="trip-card"
                                >
                                    <img className="trip-flag" src={item.flag} alt={`${item.label} flag`} />
                                    <span className="trip-title">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            )}

            {trip === 'USA2' && (
                <America2022 tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />
            )}
            {trip === 'USA1' && (
                <America2019 tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />
            )}
            {trip === 'Sri Lanka' && (
                <SriLanka tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />
            )}
            {trip === 'Morocco' && (
                <Morocco tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />
            )}
            {trip === 'Japan' && (
                <Japan tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />
            )}

            {trip === 'mexico' && (
                <Mexico tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />
            )}
        </div>
    )
}
