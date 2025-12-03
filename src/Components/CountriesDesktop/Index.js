import { useMemo, useState } from 'react';
import './style.css';
import JPNdesktop from '../JPNdesktop/Index';

export default function CountriesDesktop() {
  const [trip, setTrip] = useState('');
  const [tripChosen, setTripChosen] = useState(false);

  const finishedTrips = useMemo(
    () => [
      { id: 'Sri Lanka', title: 'Sri Lanka', year: '2018', flag: 'https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg' },
      { id: 'USA2', title: 'United States', year: '2022', flag: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' },
      { id: 'Japan', title: 'Japan', year: '2024', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png' },
    ],
    []
  );

  const unfinishedTrips = useMemo(
    () => [
      { id: 'Morocco', title: 'Morocco', year: '2023', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Morocco_%28large_stroke%29.svg' },
      { id: 'mexico', title: 'Mexico', year: '2025', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg' },
    ],
    []
  );

  function selectTrip(tripId) {
    setTrip(tripId);
    setTripChosen(true);
  }

  function renderTripCard(tripData) {
    return (
      <button key={tripData.id} className="trip-card desktop" onClick={() => selectTrip(tripData.id)}>
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
            <p>View the high-res, desktop-ready spreads</p>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="countries-page desktop">
      {!tripChosen && (
        <>
          <section className="section">
            <div className="section__title-row">
              <h3>Finished Journals</h3>
              <div className="section__accent" aria-hidden="true"></div>
            </div>
            <div className="trip-grid desktop-grid">
              {finishedTrips.map(renderTripCard)}
            </div>
          </section>

          <section className="section">
            <div className="section__title-row">
              <h3>Unfinished Journals</h3>
              <div className="section__accent" aria-hidden="true"></div>
            </div>
            <div className="trip-grid desktop-grid">
              {unfinishedTrips.map(renderTripCard)}
            </div>
          </section>
        </>
      )}

      {trip === 'Japan' && <JPNdesktop tripChosen={tripChosen} setTripChosen={setTripChosen} trip={trip} setTrip={setTrip} />}
    </div>
  );
}
