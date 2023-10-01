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
    const [day8, setDay8]   = useState(false);
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
                        <p>Morocco, quite unusually for us, was our first trip for the year. Normally by early September we would have had at least one week holiday by now, or at least a couple of weekends. Steph had been to Utrecht, but that was a business trip as opposed to a leisure holiday. We hadn't because I had started my bootcamp in March, meaning that Steph was the sole mortgage payer - so it was time to be a bit more frugal when it came to overseas trips. </p>
                        <p>Due to how insanely expensive everything was when it came to post-Covid airfare, we'd gone with an overly-cheap option: one piece of hand luggage between us plus two personal items in the form of rucksacks. We'd also gone with the riskiest of risky flight options, getting a self-transfer with an hour and a half to spare. It's rarely a smart play. If you don't make your connecting flight for any reason, you have to eat the cost of it. If it's delayed because of a cancellation or a <i>big</i> delay, you'll get some money back (like we did after Greece) but only for that flight - not for anything after, even if the next flight costs you triple what you paid for the other one.</p>
                        <p>So you can imagine that when it came to the day of our flight, we were checking the flight trackers pretty often. We got the airport a good and a half hours before the flight and were greeted with a gigantic queue that stretched all the way from the very start of the departure entrance all the way to the main gates. Steph noticed that they all had large bags and we realised this was the hold-luggage queue for Easyjet. We were flying with Wizz Air on the way out to Malaga (there were very few options, and if they cancelled another flight then we'd get another grand) then changing for Ryanair for the final flight to Fes .</p>
                        <p>We got to the airport and got ourselves a seat at the Spoons with a view of the gate. We checked our phones again and were slightly nervous to discover that the flight was already delayed by forty minutes! Our window for the connecting flight was getting smaller before we'd even boarded, and - food and a couple of pints aside - we kept our attention on the various updates. </p>
                        <p>The stakes were high. If we didn't catch the flight from Malaga, the next one was at ten the next morning - and not only would we be in a 'fastest finger first' contest with other passengers trying to get on it, there was a chance we'd be paying through the nose. Add to that our agreed course of action if the worst were to come to the worst - sleeping in the airport, taking turns to watch the stuff while the other got some shuteye. It was far from the way we wanted to spend our first night abroad.</p>
                        <p>We finally got to boarding - separately; buying seats together for short-haul is a mug's game - and I found myself in an window seat. Steph found herself in a window seat too, which was bad. She got claustrophobic in a crowded row of seats, but she was happy enough to discover that there was no one in her middle seat. As for me, I was among a huge group, maybe around twenty people, and I could tell within about thirty seconds that Malaga was their end destination. It's always nice to be around obnoxious English people before you get to your holiday destination, because it reminds you how nice it is to leave the place for a while.</p>
                        <p>We arrived at Malaga with only around twenty-five minutes to spare. I grabbed the suitcase and headed to find Steph at the front as soon as possible. We raced through the arrivals gate, getting put to the front of the passport checking queue before sprinting as fast as we could to the gate. We realised with a stomach lurch that we had to go to the main airport then <i>back through security</i>, which at Gatwick would have meant that we almost certainly missed it.</p>
                        <p>We sprinted as fast as our legs would carry us to the main entrance to the airport. Steph, who'd been doing steady cardio while I stuck to weights at the gym, handled it effortlessly whereas I was ugly-heaving within the first couple of minutes. When we managed to catch sight of a departures board, we saw that the Fes flight was delayed by twenty minutes - result! What was more, we got through security in about five minutes. We sprinted towards the gate and made it in good time. The flight was a lot less busy than the Malaga flight, and we were able to sit together in a row of our own. Within an hour we were in Fes. It was around nine at night, only a little later than we'd expected to be there.</p>
                        <p>We got a cab from the airport which would take us to the outskirts of the Medina - those are the perfectly-preserved historical city centres in Morocco - where we were staying; there were no cars allowed inside, only motorbikes. As we drove, I saw men. Lots of men, young to old, hanging out in groups in the darkness. I saw smoky pool clubs with lots of men crammed inside. I did see the occasional woman out and about, but they were sensible and travelled in groups. Before flying, I'd made a mistake in reading some of the horror stories travellers had encountered in Morocco, from sexual harassment, to pickpocketing, and all manner of scams. It didn't do my sense of ease any good, but it did give me advice that turned out to be quite solid.</p>
                        <p>The way it was described, scammers and people who want your money over in Morocco had two very clear categories they assigned to westerners - clueless, naive tourists, and those on the level. You want to make pains to put yourself in the second category, because they get left alone. There are a few ways you can do it: dress modestly, never look like you're lost, and learn a couple of words of Darija, the dialect of Arabic spoken in Morocco. I learned <i>salaam</i> (well, I knew that one before, but I learned the proper pronunciation: sahl-em instead of sal-arm) for hello, <i>iyeh</i> and <i>lla</i> for yes and no respectively, and <i>shokran</i> for thank you. The last of these proved to be like a magic word in the souks; it stopped people bothering us dead in their tracks. </p>
                        <p>On reflection, I regard all of these horror stories as a little silly. I'm not denying anyone's lived experience, but we did absolutely fine, and Moroccans have definitely been one of the more welcoming and hospitable people we've encountered on our journeys.</p>
                        <p>Our cab driver dropped us off at the outer entrance to the Medina and we made our way inside on foot, and I'll summarise the experience by saying that Fes is not a very welcoming place at night. The dirt piles up, there are mangy cats everywhere (normally I'd love a place that has thousands of stray cats, but between the mange and the rabies you don't want to go there) and the dust carts, which take up most of the path, give you a sense that you're penned in. We didn't get hassled here, not as much as during the day, but those that did looked like people we really wanted to get away from.</p>
                        <p>When walking through the Medina, you're on a narrow path between market stalls and indoor shops. It's a tight, winding path that is very difficult to navigate, especially at night. All we had to lead the way was my offline maps, and it was being very temperamental. As we approached our accomodation, we enountered what we would charitably describe as the 'food district'. I say charitable while it was a section in the souk that sold foodstuffs, it was nothing either of us particularly wanted to eat. Live chickens, meat left out, strange gelatinous substances in tubs, and the worst smell you can imagine. From when we'd started walking through the Medina we got periodically assaulted by an open-sewer smell, but this was something else, something rancid that forced itself into your nose.</p>
                        <p>After a while we found our hotel, the <i>Riad Noujoum Medina</i>. Riads are the best place to stay in Morocco. Instead of corporate hotels, they're old mansions that once belonged to wealthy Moroccan families, but have now been partitioned into several rooms around a large internal courtyard. We headed inside and noticed that the place seemed deserted. We waited in the courtyard - which was very grand, with a marble font containing water in the middle - for a bit, then I decided to go seek someone out to help us.</p>
                        <p>The Riad's staircases were a sign of things to come - Morocco is not built for tall guys. I hunched over as I slowly made my way through the place until I got to the roof. I was struck by the amazing view, even though it was the dead of night. You could see lights stretching off into the distance beyond the Medina, showing me the very outer border of Fes. I saw a member of staff up here and greeted him. He didn't speak much English but I managed to communicate that we were here to check in, and he texted the receptionist to come over.</p>
                        <p>He was already downstairs when I got down. His name was Youssuf (he didn't tell us his name, we found it out later after reading the negative reviews - but more on that later!) and he (initially) seemed polite. We paid for the room and went through some forms, and we were shown to our new room - right off of the courtyard. It was a curious space that didn't resemble any room we'd ever stayed at. On the ground level, you had two twin beds with velvety throws and a large space with a TV and a table and chairs. Then, on the right you had the bathroom, but just to the left of that you had some stairs that led up to a mezzannine where the double bed was. It was quite a big space.</p>
                        <p>We showered and got ready for bed. The shower was another thing not built for a man my size. I had to hunch over to use it properly. As we settled into bed, I shared what was on my mind - that I didn't like the look of this place, the place meaning Fes as opposed to the Riad, and that maybe we should have gone to our runner-up choice Germany instead. It was all a very brief culture shock, of course, and Steph said as much. We made the decision to go to bed without dinner that first night. We were too tired - and too wary of nocturnal Fes - to go out and get something, and we hadn't got any snacks. We were slightly peckish, but not badly, and we managed to sleep very quickly.</p>
                        <p>That was, until I woke up in the middle of the night to pee and made the bad miscalculation to try to descend the steep mezzanine stairs without my phone torch. I was fine until the last step, which I overshot, aiming my foot towards the ground and going down like a sack of spuds. My Judo falling skills saved my head and serious extremities, but I wiped out like half a layer of skin on my upper forearm and got a hell of a jolt. That was, thankfully, the last proper accident I would have in Fes.</p>
                    </div>}

                    <div onClick={expandDay2} id="day2ExpanderMor" className="headings">
                        <h4 className="dayHeader">Day 2</h4>
                        <h5 className="dayLocation">Fès</h5>
                    </div>

                    {day2 &&
                    <div className="days" id="day2">    
                        <p>If I don't take particularly well to a place, usually all it takes is a good night's sleep. You clear out the bad mood from yesterday and you get to see a place in the sunlight, which is always better than seeing it in the dark. I woke up first, my arm throbbing, but my belly not kiling me with hunger, which is nice. Steph woke up a little after me and we headed towards the roof for breakfast, and we got to get a great view of the city in the daytime. The view was even more impressive up here. We got a great look at the main walls of the Medina. Morocco takes city walls seriously. They are perfectly preserved from the thousand-or-so years ago that they were built, and you really feel as if you're in some historical epic when you see them.</p>
                        <p>There's a reason for that, of course. The city of Ouarzazate, which we'd be visiting later in the holiday, is like the North African Hollywood, and has film studios where some of the franchises you know and love - Game of Thrones, Gladiator, the Mummy - were shot. But I'd have loved to have used Fes as a filming location if I was a director, as looking out at it, it had a sort of original authenticity that is very rare.</p>
                        <p>Breakfast was great - it's a meal that were never disappointed with in Morocco. There was some European fair - fried eggs and toast, but there were also traditional Moroccan pastries. The coffee was good too, and it all set us up for our first proper day in the city.</p>
                        <p>The city was startingly different during the day - in the best possible way. While it was much busier and more bustling, all the menace was gone. In this light, the souk wasn't a collection of sinister peddlars out of a Monkey's Paw adaption. It was a bright, colourful place with traders showing off interesting wares. Don't get me wrong, though; the need to be alert was still very present. I kept my hands in my pockets and didn't linger on market stalls for more than a few moments. Once you do, of course, it's like a signal to the stallholder to bother you until you swiftly move on. The horrendous 'food district' (I'll keep referring to it with inverted commas because we wouldn't eat anything from there in a million years) was still there too, of course, and the smell hit us as soon as we approached.</p>
                        <p>Our first stop was the Bou Inania Madrasa, a centre of Islamic learning that dates back to the Middle Ages. We found the name funny, as Boo is one of Leo's favourite words. It was only a few minutes' walk away, but a combination of my offline maps not being particularly effective and the sprawling, labyrinthine nature of the Medina. Morocco's Medinas - especially Fes and Marrakech - are some of the hardest places to navigate in the world. Street names are absent or inconsistent. Turnings are barely-signposted and easy to miss unless you're paying very close attention. The pathways are narrow, overcrowded and cramped. And worst of all, you'll very often be told that a road is closed. It isn't, of course - they'll offer to take you to your destination, a much longer way round that will involve a hefty tip. In the multiple times we heard that during the holiday, it was a lie in all but one instance - and we did the same thing each time, ignored them completely and kept walking.</p>
                        <p>We did eventually find the Madrasa after doubling back on ourselves twice. And it really was only a few minutes' walk from our Riad. We got inside, paying the admission and walking into the main square of the Madrasa. It was composed of a single, large courtyard tucked between two souks. The design was very grand, with traditionally Moroccan geometric patterns as well as elaborate bas-reliefs. The Madrasa also featured, or used to feature, an astronomical clock dating back to the Islamic Golden Age. There was a man giving an imprompteau guided tour to a couple of tourists and we made pains to not seem like we were listening, or he'd try to pry a tip out of us too. All in all, the place was very beautiful, but very small. We did the whole thing in around ten minutes and headed towards our next destination, the Jnan Sbil gardens. They were one of the best green spaces in the whole city, a medium walk out of the Medina gates. We passed through the rest of the place and took a quick path out into the rest of the city. It was now mid-morning and the heat was already starting to get stifling. We were close to sweating by the time we got the   </p>
                        <p></p>
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