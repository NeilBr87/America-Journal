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
    const [day11, setDay11] = useState(false);

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
        setDay11(!day11)
    }

    function back() {
        props.setTripChosen(false);
        props.setTrip('');
    }
    
    return (
        <div>

            <h2 style={{marginTop: '5vh'}}>Mexico, 2025</h2>
            <h3 style={{marginBottom: '5vh'}}>Travel journal</h3>

            <div id="expand">
                <div onClick={expandDay1} id="day1ExpandermorMex" className="headings">
                    <h4 className="dayHeader">Day 1</h4>
                    <h5 className="dayLocation">Cancun</h5>
                </div>

                {day1 &&
                    <div className="days" id="day1">
                            <p>At first, Mexico seemed like a strange choice for us. We'd started our (well, my) foray into East Asia with Japan, and we'd been talking about going to South Korea next. But Steph made the case that having these two holidays a year apart would feel far too samey, and suggested a few of the places she'd also had on the agenda: Kenya for the safari, Chile, and Mexico.</p>
                            <p>I argued that a big Kenyan safari was a bit too expensive a holiday for us at this stage, the alternative being to bum around Nairobi for two weeks - which wasn't really of interest to either of us. Then there was Chile, but this was prohibitively-expensive to travel to, and would be a large logistical ask based on travelling around.</p>
                            <p>Mexico was definitely a viable alternative, and it was definitely of interest to the both of us. At the same time, I had reservations. Most of the major areas of the north - Sinaloa, Juarez, Tijuana - were covered in Foreign Office warnings and were only known to us through shows such as Breaking Bad or Narcos: Mexico. At the same time, a general, consistent warning of anything from simple pickpocketing to having a handgun placed in your mouth while someone cleaned out your pockets were present in both official advice and YouTube travel guides.</p>
                            <p>But, and while I didn't necessarily see things like this at the time, we've been to places with a reputation for crime, particularly Fez and Marrakech (in the latter case the only crime against our persons came from the very ground itself), Istanbul, and Havana. After visiting these cities, I've always felt the same way: That the 'You may get robbed here' warnings should always be suffixed with 'If you're a dumb, conspicuous tourist without any semblance of street smarts'.</p>
                            <p>So it was after some debate that we decided on Mexico, and narrowed it down to our hotspots. I'd always wanted to go Chichén Itzá over in Yucatan, and I'd been quite interested in Mayan culture for the last few years - though hadn't read into more than the juicy parts, like the human sacrifices and the famous Ball-Game, which I'll go into in more detail and, like all aspects of Pre-Columbian cultures, is much more grim than it sounds.</p>
                            <p>So Yucatan was definitely a must for both of us, as well as Mexico City, which is a home of food, history and traveller every traveller should visit. You'll see it referred to here as CDMX, which stands for La Ciudad de México but is usually shortened - for the locals, this is a case of convenience, and for me, it's because I don't know how to pronounce &lt;i&gt;Ciudad&lt;/i&gt; correctly. At first, we had a whole Yucatani road trip planned, including Tulum, Bacalar, Valladolid, Merida, and even - ambitiously - Las Coloradas, the lakes that are the exact same shade of pink as the colour our hydration tablets turn water. But it was a huge logistical ask, and once our rental car company started giving us trouble, we decided to pack it in and do what was very unfamiliar for us - spend a few days at an all-inclusive resort.</p>
                            <p>As a kid, I used to spend my summers with my family in Ibiza and Tenerife, reading Harry Potter by the pool. As soon as I discovered city breaks, I knew this was much more my speed, and Steph is completely the same. The only time we've done all-inclusive as a couple was two nights in Varadero, Cuba as a respite after trekking through Havana in the intense heat for a week. But Cancun, capital of the Yucatan, is known for all-inclusive resorts and we agreed that it wouldn't be the same as Tenerife - mostly because it wasn't as trashy, but also because our fellow guests would be Americans and not purely Brits - we much prefer to spend time with the locals, but Americans are at least tolerable.</p>
                        </div>}
                    
                    </div>

                    <div id="expand">
                        <div onClick={expandDay2} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Day 2</h4>
                            <h5 className="dayLocation">Chichen Itza</h5>
                        </div>

                        {day2 && <div className="days" id="day2">
                            <p>dfdfd</p>
                        </div>}

                    </div>

                    <div id="expand">
                        <div onClick={expandDay3} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Days 3-6</h4>
                            <h5 className="dayLocation">Cancun</h5>
                        </div>

                        {day3 && <div className="days" id="day3">
                            <p>dfdfd</p>
                        </div>}
                    
                    </div>

                    <div id="expand">
                        <div onClick={expandDay4} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Day 7</h4>
                            <h5 className="dayLocation">CDMY</h5>
                        </div>

                        {day4 && <div className="days" id="day4">
                            <p>dfdfd</p>
                        </div>}

                    </div>

                    <div id="expand">
                        <div onClick={expandDay5} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Day 8</h4>
                            <h5 className="dayLocation">Xochimilco</h5>
                        </div>

                        {day5 && <div className="days" id="day5">
                            <p>dfdfd</p>
                        </div>}
                    </div>

                    <div id="expand">
                        <div onClick={expandDay6} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Day 9</h4>
                            <h5 className="dayLocation">CDMY</h5>
                        </div>

                        {day6 && <div className="days" id="day6">
                            <p>dfdfd</p>
                        </div>}
                    </div>

                    <div id="expand">
                        <div onClick={expandDay7} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Day 10</h4>
                            <h5 className="dayLocation">CDMY</h5>
                        </div>

                        {day7 && <div className="days" id="day7">
                            <p>dfdfd</p>
                        </div>}
                        </div>

                        <div id="expand">
                            <div onClick={expandDay8} id="day1ExpandermorMex" className="headings">
                                <h4 className="dayHeader">Day 11</h4>
                                <h5 className="dayLocation">Teotihuacán</h5>
                            </div>

                            {day8 && <div className="days" id="day8">
                                <p>dfdfd</p>
                            </div>}
                            </div>

                            <div id="expand">
                                <div onClick={expandDay9} id="day1ExpandermorMex" className="headings">
                                    <h4 className="dayHeader">Day 12</h4>
                                    <h5 className="dayLocation">Tolantongo</h5>
                                </div>

                                {day9 && <div className="days" id="day9">
                                    <p>dfdfd</p>
                                </div>}
                                </div>

                                <div id="expand">
                                    <div onClick={expandDay10} id="day1ExpandermorMex" className="headings">
                                        <h4 className="dayHeader">Day 13</h4>
                                        <h5 className="dayLocation">Cocobongo</h5>
                                    </div>

                                    {day10 && <div className="days" id="day10">
                                        <p>dfdfd</p>
                                    </div>}
                                    </div>

                                    
                                <div id="expand">
                                    <div onClick={expandDay11} id="day1ExpandermorMex" className="headings">
                                        <h4 className="dayHeader">Day 14</h4>
                                        <h5 className="dayLocation">Home</h5>
                                    </div>

                                    {day10 && <div className="days" id="day10">
                                        <p>dfdfd</p>
                                    </div>}
                                    </div>


                    <button onClick={back} style={{marginTop: '5vh'}}>Back</button>
                </div>
    )}