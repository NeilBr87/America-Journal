import {useState} from 'react';

import './style.css';

export default function Journal(props) {
    const [day1, setDay1] = useState(false);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [day7, setDay7] = useState(false);
    const [day8, setDay8] = useState(false);
    const [day9, setDay9] = useState(false);

    function expandDay1() {
        setDay1(!day1);
    }

    function expandDay2() {
        setDay2(!day2);
    }

    function expandDay3() {
        setDay3(!day3);
    }

    function expandDay4() {
        setDay4(!day4);
    }

    function expandDay5() {
        setDay5(!day5);
    }

    function expandDay6() {
        setDay6(!day6);
    }

    function expandDay7() {
        setDay7(!day7);
    }

    function expandDay8() {
        setDay8(!day8);
    }

    function expandDay9() {
        setDay9(!day9);
    }

    function back() {
        props.setTripChosen(false);
        props.setTrip('');
    }
    
    return (
        <div>

            <h2 style={{marginTop: '5vh'}}>Sri Lanka, 2018</h2>
            <h3 style={{marginBottom: '5vh'}}>Travel journal</h3>

            <div id="expand">
                <div onClick={expandDay1} id="day1ExpanderMor" className="headings">
                    <h4 className="dayHeader">Day 1</h4>
                    <h5 className="dayLocation">Fès</h5>
                </div>

                {day1 &&
                    <div className="days" id="day1">
                        <p style={{marginTop: '10px'}}>Morocco, quite unusually for us, was our first trip for the year. Normally by early September we would have had at least one week holiday by now, or at least a couple of weekends. Steph had been to Utrecht, but that was a business trip as opposed to a leisure holiday. We hadn't because I had started my bootcamp in March, meaning that Steph was the sole mortgage payer - so it was time to be a bit more frugal when it came to overseas trips. </p>
                        <p>Due to how insanely expensive everything was when it came to post-Covid airfare, we'd gone with an overly-cheap option: one piece of hand luggage between us plus two personal items in the form of rucksacks. We'd also gone with the riskiest of risky flight options, getting a self-transfer with an hour and a half to spare. It's rarely a smart play. If you don't make your connecting flight for any reason, you have to eat the cost of it. If it's delayed because of a cancellation or a <i>big</i> delay, you'll get some money back (like we did after Greece) but only for that flight - not for anything after, even if the next flight costs you triple what you paid for the other one.</p>
                        <p style={{marginTop: '10px'}}>So you can imagine that when it came to the day of our flight, we were checking the flight trackers pretty often. We got the airport a good and a half hours before the flight and were greeted with a gigantic queue that stretched all the way from the very start of the departure entrance all the way to the main gates. Steph noticed that they all had large bags and we realised this was the hold-luggage queue for Easyjet. We were flying with Wizz Air on the way out to Malaga (there were very few options, and if they cancelled another flight then we'd get another grand) then changing for Ryanair for the final flight to Fes .</p>
                    </div>}

                    <div onClick={expandDay2} id="day2ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 2</h4>
                        <h5 className="dayLocation">Fès</h5>
                    </div>

                    {day2 &&
                    <div className="days" id="day2">

                    </div>}

                    <div onClick={expandDay3} id="day3ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 3</h4>
                        <h5 className="dayLocation">Fès</h5>
                    </div>

                    {day3 &&
                    <div className="days" id="day3">
                        
                    </div>}

                    <div onClick={expandDay4} id="day4ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 4</h4>
                        <h5 className="dayLocation">Chefchaouen</h5>
                    </div>

                    {day4 &&
                    <div className="days" id="day4">
                        
                    </div>}

                    <div onClick={expandDay5} id="day5ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 5</h4>
                        <h5 className="dayLocation">Fès to Marrakech</h5>
                    </div>

                    {day5 &&
                    <div className="days" id="day5">
                        
                    </div>}

                    <div onClick={expandDay6} id="day6ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 6</h4>
                        <h5 className="dayLocation">Marrakech to Ouarzazate</h5>
                    </div>

                    {day6 &&
                        <div>

                        </div>}

                        <div onClick={expandDay7} id="day7ExpanderMor" className="headings">
                            <h4 className="dayHeader">Day 7</h4>
                            <h5 className="dayLocation">Ouarzazate to the Sahara</h5>
                    </div>

                    {day7 &&
                        <div>
                            
                        </div>}

                    <div onClick={expandDay8} id="day8ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 8</h4>
                        <h5 className="dayLocation">Ait Ben Haddou</h5>
                    </div>

                    {day8 &&
                        <div>
                            
                        </div>}

                    <div onClick={expandDay9} id="day9ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 9</h4>
                        <h5 className="dayLocation">Home</h5>
                    </div>

                    {day9 &&
                        <div>
                         </div>}

                        
            </div>

            <h3 onClick={back}>Back</h3>
        </div>
    );
    }