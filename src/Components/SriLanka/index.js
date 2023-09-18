import {useState} from 'react';

import './style.css';
import Day1HeaderPic from './Day1HeaderPic.jpg'
import Day2HeaderPic from './Day2HeaderPic.jpg'
import Day1Pic2 from './Day1Pic2.jpg'
import Day2Pic1 from './Day2Pic1.jpg'
import Day3Pic1 from './Day3Pic1.jpg'
import Day3Pic2 from './Day3Pic2.jpg'
import Day3Pic3 from './Day3Pic3.jpg'

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

            <h2 style={{marginBottom: '5vh'}}>Sri Lanka, 2018</h2>
            <h3 style={{marginBottom: '5vh'}}>Travel journal</h3>

            <div id="expand">
                <div onClick={expandDay1} id="day1Expander" className="headings">
                    <h4 className="dayHeader">Day 1</h4>
                    <h5 className="dayLocation">Colombo</h5>
                </div>

                {day1 &&
                    <div className="days" id="day1">
                        <p style={{marginBottom: '10px'}}>We started the official ‘day one’ of our trip at Dubai’s glamorous (but soulless) international airport, touching down at around seven in the morning. We’d had a long flight already, with most of us sleeping for at least a couple of hours. This turned out to be fairly pivotal for avoiding jet lag but was not good for our general well being. We boarded our second plane to Colombo and landed about five in the afternoon.</p>
                        <img src={Day1HeaderPic} alt="Day 1" className="landscapePictures" />
                        <p>It was extremely warm. I got that same feeling I used to get upon going on holiday to Spain all those years ago - you’re out on the other side, in a different climate, and your skin is feeling the difference. We were out the airport approximately half an hour later, waiting past the average for my suitcase only in baggage claim. We met Terence’s brother Suresh as well as our first driver, a quiet Sinhalese man. He took us back to our hotel, the Crescat residencies on Galle Road, which was the most western accomodation we would have for a while. And while this wasn’t a bad thing, I would often think of this place and its’ comforts when we were in rougher digs.</p>
                        <p style={{marginBottom: '10px'}}>That first night, we went down to a food court near the hotel which was, to say the least, bizarre. For one, the stalls had a shady grasp of geography at best; a Mongolian barbecue was called Seoul Express, for example. Also, they had ramshackle versions of both Pizza Hut and Dominoes; I didn’t try them out, but instead opted for a delicious masala dosa with various sauces. We went to bed with full stomachs, eager to face the next day. We’d successfully faced down jetlag and were ready to take what Sri Lanka had to throw at us.</p>
                        <img style={{marginBottom: '10px'}} src={Day1Pic2} alt="Day 1" className="portraitPictures" />
                    </div>}

                    <div onClick={expandDay2} id="day2Expander" className="headings">
                        <h4 className="dayHeader">Day 2</h4>
                        <h5 className="dayLocation">Colombo</h5>
                    </div>

                    {day2 &&
                    <div className="days" id="day2">
                        <p>Our first proper day in Sri Lanka. We slept well and woke up at our leisure. We were due to go to Kotahena, an area of the city where Anna’s mother lived. Terence also asked us about going to the elephant sanctuary in Pinawalla. I’d heard bad things about elephant sanctuaries in Kenya from my mum and was hesitant but relented in the end. We headed into Kotahena and visited the ladies. There wasn’t much to comprehend with the conversation going in fast-paced Tamil but I used the few words I have a grasp of for comic effect and we seemed to get on like a house on fire. After about half an hour it was time for us to go, minus Anna who was going to spend the day with her family. </p>
                        <p style={{marginBottom: '10px'}}>We took a ride - a couple of hours each way - to Pinawalla, which was as uncomfortable as I’d imagine. The elephants were chained in part, and the mahouts - traditional elephant handlers for the uninitiated, which I estimate to be 90% of the western world - had long sharp spears that are used for punishment and training. I left with a bad taste in my mouth and we headed back to Colombo by way of a long drive and a sales pitch for pricey ‘alternative’ medicine courtesy of our driver’s friend.</p>
                        <img src={Day2Pic1} alt="Day 2" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}> We didn’t stay long in Kotahena and before long we were out in Galle Face, the beachside area near the hotel and a Colombo landmark. There were posh street food vendors that we avoided, and settled on a nice bar/restaurant nearer to the hotel. Then everything got a bit unpleasant but the less said about that the better. </p>
                        <img style={{marginBottom: '10px'}} src={Day2HeaderPic} alt="Day 2" className="landscapePictures" />
                    </div>}

                    <div onClick={expandDay3} id="day3Expander" className="headings">
                        <h4 className="dayHeader">Day 3</h4>
                        <h5 className="dayLocation">Colombo to Jaffna</h5>
                    </div>

                    {day3 &&
                    <div className="days" id="day3">
                        <p style={{marginBottom: '10px'}}>We were up reasonably early as we had a long day on the road. It would prove to be our longest drive, not to mention the most strenuous. Steph’s cousin Noel (pronounced No-El, not the proper English way) met us at the hotel and we left. He was a cheerful guy, just a bit too oblivious to notice he’d walked into an emotional warzone (thank Christ for that). The drive took us first to Negombo, a city just north of Colombo that sounded from name like a central African capital. We stopped in a lovely little breakfast place before tearing through half the country.</p>
                        <img src={Day3Pic2} alt="Day 3 pic 2" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We stopped for lunch near one of the larger safari parks, by which point I was virtually dead. On to Anurdahapura, a Buddhist temple that we opted to climb but not pay for. It was a beautiful climb, however; sharp steps with a beautiful view from the top, and monkeys in abundance. We got into Jaffna around half eight and went straight out to eat, at a place called the Green Grass Inn. It was great food and it was a welcome respite from such a long day on the road. The food was delicious but so spicy! I had a crab curry that made steam billow out of my ears. I got a sharp chilli high and even a couple of chilled Lion beers couldn’t take the heat out of my mouth.</p>
                        <img src={Day3Pic1} alt="Day 3" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>By the time we got  to the room it was nearly ten, which was a problem; there was nothing in the house, and most shops in Jaffna Town closed at six. It was here that my truly random thought process came into its own. You see, when I - a particularly germaphobic man who washes, and dries, his hands twice after a bowel movement - was considering what to bring in my washbag, I decided on an emergency bar of soap. They said I was crazy. They said it would never come in handy. And yet I persevered, choosing a bar of coal black soap I could slip in with my toiletries. My need to keep my hands clean reminded me of this last minute addition to my luggage and I felt a surge of triumph as I retrieved it and put it on the sink.</p>
                        <img src={Day3Pic3} alt="Day 3" className="landscapePictures" />
                        <p>One problem solved; we had one more in the night, slightly more pressing as far as I was concerned. We had a visitor in the form of a gigantic spider, the unholy love child of Shelob and Pennywise the Clown’s nightmarish true form. John did battle with the hellbeast and crushed it underfoot, making a perverse part of my brain hope that the next animal threat would come in the form of a snake so that I could act without phobia paralysis. </p>
                        <p>So we made do and settled in; it was very spartan, there was no hot water in either the taps or the shower, but undoubtedly the place had a homely, family-oriented charm. After such a long journey, we were glad to be rested up, even if the beds were on the verge of breaking at all times.</p>
                    </div>}

                    <div onClick={expandDay4} id="day4Expander" className="headings">
                        <h4 className="dayHeader">Day 4</h4>
                        <h5 className="dayLocation">Jaffna</h5>
                    </div>

                    {day4 &&
                    <div className="days" id="day4">
                        <p>Our first proper day in Jaffna. We woke up reasonably early and headed further into Jaffna town where Steph’s aunt, Bubsy Mami, lived with her husband Cyril. She was an intergenerational matriarch, a stout and formidable woman who had Cyril properly henpecked. A good few members of the family were there, including Steph’s uncle Ravi, whom I’d met before, but also Terence’s mother and aunt (Appama and Baby Appama, respectively) and the girls’ cousin Rachel.</p>
                        <p>After breakfast Noel drove us to the beach with Rachel. The six of us went around Jaffna, checking out three of the best beaches in the peninsula. As the afternoon wore on, we headed over to Jaffna Fort, an impressive old Dutch building from the seventeenth century, to watch the sun set.</p>
                        <p> Unfortunately it was hidden by a thick horizon cloud by the time it set, so there wasn’t much to see in the final stages. We took a Tuk Tuk back to the house and got ready for dinner, which was an understandably belated birthday celebration for Terence at Ravi’s church. It was a sweetly grand affair which culminated in Terence being presented with the ponardee, or gold cloak. What followed was three of the hottest curries I’ve ever had - prawns, cuttlefish, and crab, all topped off with lashings of arrack, a spirit distilled from coconut. It’s similar to dark rum in taste and look but it can be vicious stuff, especially when you only distill it once. And with the Lion beers and a chilli high, I was soon rocking and rolling. By the time I went to sleep, I was worse for wear, and not for the last time on the trip.</p>
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