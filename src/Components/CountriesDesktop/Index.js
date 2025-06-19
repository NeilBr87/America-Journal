// import { useState } from 'react';
// import './style.css'

// export default function CountriesDesktop() {

//         const [trip, setTrip] = useState('');
//         const [tripChosen, setTripChosen] = useState(false);

//     //     function sriLanka() {
//     //     setTrip('Sri Lanka');
//     //     setTripChosen(true);
//     // }

//     // // function usa1() {
//     // //     setTrip('USA1');
//     // //     setTripChosen(true);
//     // // }

//     // function usa2() {
//     //     setTrip('USA2');
//     //     setTripChosen(true);
//     // }

//     // function morocco() {
//     //     setTrip('Morocco');
//     //     setTripChosen(true);
//     // }

//     // function japan() {
//     //     setTrip('Japan');
//     //     setTripChosen(true);
//     // }

//     // // function franceGermany() {
//     // //     setTrip('germany');
//     // //     setTripChosen(true);
//     // // }

//     // function mexico() {
//     //     setTrip("mexico");
//     //     setTripChosen(true);
//     // }

//     return (
//         <div>
//             <h1 style={{marginTop: '8vh'}}>Neil and Steph's Travel Journals</h1>
//             <h3 style={{marginTop: '4vh'}}>Finished journals</h3>
//             <div className="tripsDesktop" style={{marginTop: '4vh'}}>
//                 <div className="tripsContainer" onClick={sriLanka}>
//                     <img style={{width: '240px', height: '120px'}} src="https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg" alt="Sri Lanka Flag" />
//                     <h4 className="countryText" style={{textAlign: 'center'}}>Sri Lanka, 2018</h4>
//                 </div>
//                 <div className="tripsContainer">
//                     <img style={{width: '240px', height: '120px'}} src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="USA flag" />
//                     <h4 className="countryText" style={{textAlign: 'center'}}>United States, 2022</h4>
//                 </div>
//                 <div className="tripsContainer">
//                     <img style={{width: '240px', height: '120px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png" alt="Japan flag" />
//                     <h4 className="countryText" style={{textAlign: 'center'}}>Japan, 2024</h4>
//                 </div>
//             </div>
//             <h3 style={{marginTop: '4vh'}}>Unfinished journals</h3>
//                 <div className="tripsDesktop" style={{marginTop: '4vh'}}>
//                 <div className="tripsContainer">
//                     <img style={{width: '200px'}} src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Morocco_%28large_stroke%29.svg" alt="Morocco flag" />
//                     <h4 className="countryText" style={{textAlign: 'center'}}>Morocco, 2023</h4>
//                 </div>
//                 <div className="tripsContainer">
//                     <img style={{width: '200px'}} src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" alt="Morocco flag" />
//                     <h4 className="countryText" style={{textAlign: 'center'}}>Mexico, 2025</h4>
//                 </div>

//             </div>
//         </div>
//     )
// }