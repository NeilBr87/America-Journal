import {useState} from 'react';

import './style.css';
import Day1HeaderPic from './Day1HeaderPic.jpg'

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
    const [day10, setDay10] = useState(false);
    const [day11, setDay11] = useState(false);
    const [day12, setDay12] = useState(false);
    const [day13, setDay13] = useState(false);
    const [day14, setDay14] = useState(false);

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

    function expandDay10() {
        setDay10(!day10);
    }

    function expandDay11() {
        setDay11(!day11);
    }

    function expandDay12() {
        setDay12(!day12);
    }

    function expandDay13() {
        setDay13(!day13);
    }

    function expandDay14() {   
        setDay14(!day14);
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
                <div onClick={expandDay1} id="day1Expander" className="headings">
                    <h4 className="dayHeader">Day 1</h4>
                    <h5 className="dayLocation">Colombo</h5>
                </div>

                {day1 &&
                    <div className="days" id="day1">
                        <p style={{marginTop: '10px'}}>We started the official ‘day one’ of our trip at Dubai’s glamorous (but soulless) international airport, touching down at around seven in the morning. We’d had a long flight already, with most of us sleeping for at least a couple of hours. This turned out to be fairly pivotal for avoiding jet lag but was not good for our general well being. We boarded our second plane to Colombo and landed about five in the afternoon.</p>
                        <p>It was extremely warm. I got that same feeling I used to get upon going on holiday to Spain all those years ago - you’re out on the other side, in a different climate, and your skin is feeling the difference. We were out the airport approximately half an hour later, waiting past the average for my suitcase only in baggage claim. We met Terence’s brother Suresh as well as our first driver, a quiet Sinhalese man. He took us back to our hotel, the Crescat residencies on Galle Road, which was the most western accomodation we would have for a while. And while this wasn’t a bad thing, I would often think of this place and its’ comforts when we were in rougher digs.</p>
                        <p style={{marginTop: '10px'}}>That first night, we went down to a food court near the hotel which was, to say the least, bizarre. For one, the stalls had a shady grasp of geography at best; a Mongolian barbecue was called Seoul Express, for example. Also, they had ramshackle versions of both Pizza Hut and Dominoes; I didn’t try them out, but instead opted for a delicious masala dosa with various sauces. We went to bed with full stomachs, eager to face the next day. We’d successfully faced down jetlag and were ready to take what Sri Lanka had to throw at us.</p>
                    </div>}

                    <div onClick={expandDay2} id="day2Expander" className="headings">
                        <h4 className="dayHeader">Day 2</h4>
                        <h5 className="dayLocation">Colombo</h5>
                    </div>

                    {day2 &&
                    <div className="days" id="day2">

                    </div>}

                    <div onClick={expandDay3} id="day3Expander" className="headings">
                        <h4 className="dayHeader">Day 3</h4>
                        <h5 className="dayLocation">Colombo to Jaffna</h5>
                    </div>

                    {day3 &&
                    <div className="days" id="day3">
                        
                    </div>}

                    <div onClick={expandDay4} id="day4Expander" className="headings">
                        <h4 className="dayHeader">Day 4</h4>
                        <h5 className="dayLocation">Jaffna</h5>
                    </div>

                    {day4 &&
                    <div className="days" id="day4">
                        
                    </div>}

                    <div onClick={expandDay5} id="day5Expander" className="headings">
                        <h4 className="dayHeader">Day 5</h4>
                        <h5 className="dayLocation">Jaffna</h5>
                    </div>

                    {day5 &&
                    <div className="days" id="day5">
                        
                    </div>}

                    <div onClick={expandDay6} id="day6Expander" className="headings">
                        <h4 className="dayHeader">Day 6</h4>
                        <h5 className="dayLocation">Nilaveli</h5>
                    </div>

                    {day6 &&
                        <div>

                        </div>}

                        <div onClick={expandDay7} id="day7Expander" className="headings">
                            <h4 className="dayHeader">Day 7</h4>
                            <h5 className="dayLocation">Nilaveli</h5>
                    </div>

                    {day7 &&
                        <div>
                            
                        </div>}

                    <div onClick={expandDay8} id="day8Expander" className="headings">
                        <h4 className="dayHeader">Day 8</h4>
                        <h5 className="dayLocation">Nilaveli to Nuwaya Eliya</h5>
                    </div>

                    {day8 &&
                        <div>
                            
                        </div>}

                    <div onClick={expandDay9} id="day9Expander" className="headings">
                        <h4 className="dayHeader">Day 9</h4>
                        <h5 className="dayLocation">Nuwaya Eliya and tea plantations</h5>
                    </div>

                    {day9 &&
                        <div>
                         </div>}

                    <div onClick={expandDay10} id="day10Expander" className="headings">
                        <h4 className="dayHeader">Day 10</h4>
                        <h5 className="dayLocation">Little Adam's Peak and Mirissa</h5>
                    </div>

                    {day10 &&
                        <div>
                        
                        </div>}

                        <div onClick={expandDay11} id="day11Expander" className="headings">
                        <h4 className="dayHeader">Day 11</h4>
                        <h5 className="dayLocation">Mirissa and Galle</h5>
                    </div>

                    {day11 &&
                        <div>
                            </div>}

                        <div onClick={expandDay12} id="day12Expander" className="headings">
                        <h4 className="dayHeader">Day 12</h4>
                        <h5 className="dayLocation">Mirissa to Colombo</h5>
                    </div>

                    {day12 &&
                        <div>
                            </div>}

                        <div onClick={expandDay13} id="day13Expander" className="headings">
                        <h4 className="dayHeader">Day 13</h4>
                        <h5 className="dayLocation">Colombo</h5>
                    </div>

                    {day13 &&
                        <div>
                            </div>}

                        <div onClick={expandDay14} id="day14Expander" className="headings">
                        <h4 className="dayHeader">Day 14</h4>
                        <h5 className="dayLocation">Home</h5>
                    </div>

                    {day14 &&
                        <div>
                        </div>}

                        
            </div>

            <h3 onClick={back}>Back</h3>
        </div>
    );
    }