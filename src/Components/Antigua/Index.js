import './style.css'    

export default function Journal(props) {
    const [day1, setDay1] = useState(false);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [day7, setDay7] = useState(false);
    const [day8, setDay8]   = useState(false);
    const [day9, setDay9] = useState(false);
    const [day10, setDay10] = useState(false);


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

    function back() {
        props.setTripChosen(false);
        props.setTrip('');
    }
    
    return (
        <div>

            <h2 style={{marginTop: '5vh'}}>France and Germany, 2024</h2>
            <h3 style={{marginBottom: '5vh'}}>Travel journal</h3>

            <div id="expand">
                <div onClick={expandDay1} id="day1ExpandermorGer" className="headings">
                    <h4 className="dayHeader">Day 1</h4>
                    <h5 className="dayLocation">Reims, France</h5>
                </div>

                {day1 &&
                    <div className="days" id="day1">
                        <p>I've yet to have a holiday so major that it leaves us not wanting any more throughout the year.</p>
                    </div>}
                    
                    </div>

                    <div id="expand">
                        <div onClick={expandDay2} id="day1ExpandermorGer" className="headings">
                            <h4 className="dayHeader">Day 2</h4>
                            <h5 className="dayLocation">Reims, France</h5>
                        </div>

                        {day2 && <div className="days" id="day2">
                            <p>dfdfd</p>
                        </div>}

                    </div>

                    <div id="expand">
                        <div onClick={expandDay3} id="day1ExpandermorGer" className="headings">
                            <h4 className="dayHeader">Day 3</h4>
                            <h5 className="dayLocation">Colmar, France</h5>
                        </div>

                        {day3 && <div className="days" id="day3">
                            <p>dfdfd</p>
                        </div>}
                    
                    </div>

                    <div id="expand">
                        <div onClick={expandDay4} id="day1ExpandermorGer" className="headings">
                            <h4 className="dayHeader">Day 4</h4>
                            <h5 className="dayLocation">Colmar, France</h5>
                        </div>

                        {day4 && <div className="days" id="day4">
                            <p>dfdfd</p>
                        </div>}

                    </div>

                    <div id="expand">
                        <div onClick={expandDay5} id="day1ExpandermorGer" className="headings">
                            <h4 className="dayHeader">Day 5</h4>
                            <h5 className="dayLocation">Hohenzollen, Germany</h5>
                        </div>

                        {day5 && <div className="days" id="day5">
                            <p>dfdfd</p>
                        </div>}
                    </div>

                    <div id="expand">
                        <div onClick={expandDay6} id="day1ExpandermorGer" className="headings">
                            <h4 className="dayHeader">Day 6</h4>
                            <h5 className="dayLocation">Alpirsbach, Germany</h5>
                        </div>

                        {day6 && <div className="days" id="day6">
                            <p>dfdfd</p>
                        </div>}
                    </div>

                    <div id="expand">
                        <div onClick={expandDay7} id="day1ExpandermorGer" className="headings">
                            <h4 className="dayHeader">Day 7</h4>
                            <h5 className="dayLocation">Schwartzvald, Germany</h5>
                        </div>

                        {day7 && <div className="days" id="day7">
                            <p>dfdfd</p>
                        </div>}
                        </div>

                        <div id="expand">
                            <div onClick={expandDay8} id="day1ExpandermorGer" className="headings">
                                <h4 className="dayHeader">Day 8</h4>
                                <h5 className="dayLocation">Schwartzvald, Germany</h5>
                            </div>

                            {day8 && <div className="days" id="day8">
                                <p>dfdfd</p>
                            </div>}
                            </div>

                            <div id="expand">
                                <div onClick={expandDay9} id="day1ExpandermorGer" className="headings">
                                    <h4 className="dayHeader">Day 9</h4>
                                    <h5 className="dayLocation">Dinant, Germany</h5>
                                </div>

                                {day9 && <div className="days" id="day9">
                                    <p>dfdfd</p>
                                </div>}
                                </div>

                                <div id="expand">
                                    <div onClick={expandDay10} id="day1ExpandermorGer" className="headings">
                                        <h4 className="dayHeader">Day 10</h4>
                                        <h5 className="dayLocation">Calais</h5>
                                    </div>

                                    {day10 && <div className="days" id="day10">
                                        <p>dfdfd</p>
                                    </div>}
                                    </div>


                    <button onClick={back} style={{marginTop: '5vh'}}>Back</button>
                </div>
    )}