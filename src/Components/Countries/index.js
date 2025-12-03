import React, { useMemo, useState } from 'react';
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

  const finishedTrips = useMemo(
    () => [
      { id: 'Sri Lanka', title: 'Sri Lanka', year: '2018', flag: 'https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg' },
      { id: 'USA1', title: 'United States', year: '2019', flag: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' },
      { id: 'USA2', title: 'United States', year: '2022', flag: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' },
      { id: 'Japan', title: 'Japan', year: '2024', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png' },
      { id: 'mexico', title: 'Mexico', year: '2025', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg' },
    ],
    []
  );

  const unfinishedTrips = useMemo(
    () => [
      { id: 'Morocco', title: 'Morocco', year: '2023', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Morocco_%28large_stroke%29.svg' },
      { id: 'poland', title: 'Poland', year: '2025', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png' },
    ],
    []
  );

  function selectTrip(tripId) {
    setTrip(tripId);
    setTripChosen(true);
  }

  function renderTripCard(tripData) {
    return (
      <button key={tripData.id} className="trip-card" onClick={() => selectTrip(tripData.id)}>
        <div className="trip-card__header">
          <span className="pill">{tripData.year}</span>
          <span className="floating-dot" aria-hidden="true"></span>
        </div>
        <div className="trip-card__body">
          <div className="flag-frame">
            <img src={tripData.flag} alt={`${tripData.title} flag`} />
          </div>
          <div className="trip-card__copy">
            <h4>{tripData.title}</h4>
            <p>Read the day-by-day adventure</p>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="countries-page">
      {!tripChosen && (
        <>
          <section className="section">
            <div className="section__title-row">
              <h3>Finished Journals</h3>
              <div className="section__accent" aria-hidden="true"></div>
            </div>
            <div className="trip-grid finished">
              {finishedTrips.map(renderTripCard)}
            </div>
          </section>

          <section className="section">
            <div className="section__title-row">
              <h3>Unfinished Journals</h3>
              <div className="section__accent" aria-hidden="true"></div>
            </div>
            <div className="trip-grid unfinished">
              {unfinishedTrips.map(renderTripCard)}
            </div>
          </section>
        </>
      )}

      {trip === 'USA2' && <America2022 tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
      {trip === 'USA1' && <America2019 tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
      {trip === 'Sri Lanka' && <SriLanka tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
      {trip === 'Morocco' && <Morocco tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
      {trip === 'Japan' && <Japan tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
      {trip === 'mexico' && <Mexico tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
    </div>
  );
}
