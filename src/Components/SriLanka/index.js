import {useState} from 'react';

import './style.css';
import Day1HeaderPic from './Day1HeaderPic.jpg'
import Day2HeaderPic from './Day2HeaderPic.jpg'
import Day1Pic2 from './Day1Pic2.jpg'
import Day2Pic1 from './Day2Pic1.jpg'
import Day3Pic1 from './Day3Pic1.jpg'
import Day3Pic2 from './Day3Pic2.jpg'
import Day3Pic3 from './Day3Pic3.jpg'
import Day4Pic1 from './Day4Pic1.jpg'
import Day4Pic2 from './Day4Pic2.jpg'
import Day4Pic3 from './Day4Pic3.jpg'
import Day5Pic1 from './Day5Pic1.jpg'
import Day5Pic2 from './Day5Pic2.jpg'
import Day5Pic3 from './Day5Pic3.jpg'
import Day6Pic1 from './Day6Pic1.jpg'
import Day6Pic2 from './Day6Pic2.jpg'
import Day7Pic1 from './Day7Pic1.jpg'
import Day7Pic2 from './Day7Pic2.jpg'
import Day8Pic1 from './Day8Pic1.jpg'
import Day8Pic2 from './Day8Pic2.jpg'
import Day8Pic3 from './Day8Pic3.jpg'
import Day9Pic0 from './Day9Pic0.jpg'
import Day9Pic1 from './Day9Pic1.jpg'
import Day9Pic3 from './Day9Pic3.jpg'
import Day9Pic4 from './Day9Pic4.jpg'
import Day9Pic5 from './Day9Pic5.jpg'
import Day9Pic6 from './Day9Pic6.jpg'
import Day10Pic1 from './Day10Pic1.jpg'
import Day10Pic2 from './Day10Pic2.jpg'
import Day10Pic3 from './Day10Pic3.jpg'
import Day11Pic1 from './Day11Pic1.jpg'
import Day11Pic2 from './Day11Pic2.jpg'
import Day11Pic3 from './Day11Pic3.jpg'
import Day11Pic4 from './Day11Pic4.jpg'
import Day11Pic5 from './Day11Pic5.jpg'
import Day12Pic1 from './Day12Pic1.jpg'
import Day13Pic1 from './Day13Pic1.jpg'
import Day14Pic1 from './Day14Pic1.jpg'


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
                        <p style={{marginBottom: '10px'}}>Our first proper day in Jaffna. We woke up reasonably early and headed further into Jaffna town where Steph’s aunt, Bubsy Mami, lived with her husband Cyril. She was an intergenerational matriarch, a stout and formidable woman who had Cyril properly henpecked. A good few members of the family were there, including Steph’s uncle Ravi, whom I’d met before, but also Terence’s mother and aunt (Appama and Baby Appama, respectively) and the girls’ cousin Rachel.</p>
                        <img src={Day4Pic3} alt="Day 4" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>After breakfast Noel drove us to the beach with Rachel. The six of us went around Jaffna, checking out three of the best beaches in the peninsula. As the afternoon wore on, we headed over to Jaffna Fort, an impressive old Dutch building from the seventeenth century, to watch the sun set.</p>
                        <img src={Day4Pic1} alt="Day 4" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}> Unfortunately it was hidden by a thick horizon cloud by the time it set, so there wasn’t much to see in the final stages. We took a Tuk Tuk back to the house and got ready for dinner, which was an understandably belated birthday celebration for Terence at Ravi’s church. It was a sweetly grand affair which culminated in Terence being presented with the ponardee, or gold cloak. What followed was three of the hottest curries I’ve ever had - prawns, cuttlefish, and crab, all topped off with lashings of arrack, a spirit distilled from coconut. It’s similar to dark rum in taste and look but it can be vicious stuff, especially when you only distill it once. And with the Lion beers and a chilli high, I was soon rocking and rolling. By the time I went to sleep, I was worse for wear, and not for the last time on the trip.</p>
                        <img style={{marginBottom: '10px'}} src={Day4Pic2} alt="Day 4" className="landscapePictures" />  
                    </div>}

                    <div onClick={expandDay5} id="day5Expander" className="headings">
                        <h4 className="dayHeader">Day 5</h4>
                        <h5 className="dayLocation">Jaffna</h5>
                    </div>

                    {day5 &&
                    <div className="days" id="day5">
                        <p style={{marginBottom: '10px'}}>Our last day in Jaffna. We started the day with fish buns provided by Bubsy Mami. We went there after finishing and had a more thorough breakfast, seeing the family again in advance of the night, which would be a big dinner in town to mark our departure. Our paths diverted at this point; Terence and Anna stayed with the family for a few more hours while we headed into Jaffna Town. We headed to Nallur Kanda Swami, a prominent Hindu temple. It was full of rich designs and sculptures, and was truly a wonder of the north. We explored the temple in its entirety then headed into town to check out the market. </p>
                        <img src={Day5Pic1} alt="Day 5" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We had our first lunchtime break at Rios, an ice cream shop with more than a hint of American fifties nostalgia - a part of me expected to see a Tamil Fonzie jamming a jukebox with his elbow. We gorged on rolls and a strange ice cream sundae with jelly, and returned to Bubsy Mami for kool, a delicious and spicy seafood broth which did not come with a gang. After gorging ourselves our paths split off once more with Terence and Anna; they stayed in the family home, the four of us went back to the rented one for showers, possible naps, and getting ready. </p>
                        <img src={Day5Pic2} alt="Day 5" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We walked back through Jaffna, getting dozens of stares from politely curious to outright suspicious. It was the great untouched north; almost bereft of backpackers and Vellai (the Tamil word for white we’d co-opted as a byword for the people) in general. We bought a load of Lion lagers and had a drink to shore us up for the evening ahead. The night, our last in Jaffna, was approaching, and we were joining the family for a grand dinner in town in our honour.</p>
                        <img src={Day5Pic3} alt="Day 5" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}> A couple of hours passed and Noel came to pick us up. We dined in the Valampuri Hotel, a charming old establishment, possibly colonial, in a large dining hall that had the long table-style layout of a Bavarian beer hall. I found myself in the middle of this grand long table joining in with conversations in a language I couldn’t understand, and I realised with a pang that I was going to miss Jaffna. Week two of our trip would take us to the far-flung corners of this magnificent island but we would be left utterly with our own company, strangers in a strange land full of Sinhalese. But here, we were family; we were  part of something, and even if everyone outside the family treated us as a bizarre curiosity, there was a sense of belonging to something greater. The prodigal son, the prodigal family had returned, and (not legally, but I like to think in the eyes of those present) I was one of that number.</p>
                    </div>}

                    <div onClick={expandDay6} id="day6Expander" className="headings">
                        <h4 className="dayHeader">Day 6</h4>
                        <h5 className="dayLocation">Nilaveli</h5>
                    </div>

                    {day6 &&
                        <div>
                            <p>Our early morning began with Noel and our new driver, whose name escapes me, driving up to the house with Ravi Sittupa. We were going to Bubsy Mami’s house for a goodbye breakfast before setting off for Nilaveli on the east coast. The day seemed dark ahead of us; I wasn’t looking forward to leaving Jaffna, and we faced a long journey with a driver we didn’t know. Soon it was the big goodbye at the door, and I think we all felt a rush of emotion; Baby Appama was crying, and I can only wonder what was going through Terence’s mind as he said goodbye to the family. </p>
                            <p style={{marginBottom: '10px'}}>There was a last hurrah on the horizon - most of the gang would be coming down to Colombo to see us off. But it was still very emotional, and looking back a couple of weeks later, Jaffna’s definitely one of the places I miss the most. But as we zoomed away from Jaffna town, staging our own South Asian Mad Max as we zipped between cars, we were aware that the next part of the holiday was about to begin. It was day six, resting just on the tip of our journey’s halfway point. It was a long drive into Nilaveli; not as long as the journey from Colombo to Jaffna, but long enough to prove a sharp contrast to the last few days.</p>
                            <img src={Day6Pic1} alt="Day 6" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>We had a couple of stops on the way, the first of which was   the Kanniya hot springs. This was a semi-religious collection of seven hot springs, each of which was at a different temperature despite their proximity to each other. It’s a phenomena no one’s stepped forward to try to explain, but the hot springs are interesting. It’s perhaps something I’d like to take a dip in in England, where it’s cold enough to be appreciated. The next stop was Koneswaram, a large Hindu temple built into a cliff edge. Its centrepiece was a giant statue of Shiva in all...their?...glory, exquisitely-painted and shining in the sun. The whole place was paradise. Deer roamed freely, drinking from a stream below the main path. A few of them were up near the path and I made friends with one. The temple was spectacular, with grand frescoes that made the place resemble something like a polytheist Sistine Chapel</p>
                            <img src={Day6Pic2} alt="Day 6" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>After Koneswaram, the next stop was Nilaveli, and the hotel. It was extremely grand, and to coin a phrase we would be fond of later, so colonial. It was a walled compound that was deserted apart from us and a tiny cadre of staff that kept the place ticking over. They prepared a brilliant dinner for us and I took a walk down the beach with John and Terence. It was beautiful, and the stars gloriously hung in the night’s sky. I came back to the room - it was only half nine in the evening, but I slept solidly until mid-morning.</p>
                        </div>}

                        <div onClick={expandDay7} id="day7Expander" className="headings">
                            <h4 className="dayHeader">Day 7</h4>
                            <h5 className="dayLocation">Nilaveli</h5>
                    </div>

                    {day7 &&
                        <div>
                            <p style={{marginBottom: '10px'}}>This will go down in infamy as the day of the burn. We started the day off with a gorgeous string hoppers breakfast courtesy of the hotel staff. Terence then announced he’d found a good deal for a boat trip - we thought it was to Pigeon Island at first, but it proved to be the rivers nearby. Pigeon Island was a large island in the near distance, where you could do snorkelling and other activities. Apparently the winds were too strong to go out on, but the rivers were wide open. The tour looked like something out of Apocalypse Now - the river was narrow and snaking, and surrounded by dense-looking jungle. The trip took around an hour and a half, during which time I got badly burned and Steph developed amazing powers for frightening birds. When we went back, I was suffering but was eager to ride it out with a dip in the sea.</p>
                            <img src={Day7Pic1} alt="Day 7" className="portraitPictures" />
                            <p style={{marginBottom: '10px'}}>We headed down to the beach and had a good solid day in the sea, pausing only for a delicious lunch of fried fish at the hotel and the occasional drying off. By the time the evening rolled in and we were starting to think about going out, I had some of the worst sunburn I’ve ever had. I was burned worst on the backs of my hands and arms, but also my neck and face. I reckoned I’d gotten quite sunburned on the bed but had exacerbated the problem by staying in the sea all day with washed-off suncream. I was suffering by the time we left for town, where a restaurant (simply titled ‘Family Restaurant’) was waiting for us. It had some good local reviews and was on TripAdvisor, but the food was mediocre and the kitchen was dirty. Our prawns were comparatively expensive and mediocre. We walked back to the hotel full of disappointment, especially because this was our last night in Nilaveli. Everything would be different tomorrow; we’d be going to Nuwara Eliya, all the way across the country, and we’d be losing one of our party, namely Anna. She was going another way across the country, back to Colombo to spend some time with her family in Kotuhena.</p>
                            <img src={Day7Pic2} alt="Day 7" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>As we made our way back through the darkness, I felt an unseasonal shiver and a pain in my throat - either I’d caught something, or this was heatstroke. Either way, I was freezing by the time we got back into bed, and huddled for warmth as I dropped to sleep.</p>
                           </div>}

                    <div onClick={expandDay8} id="day8Expander" className="headings">
                        <h4 className="dayHeader">Day 8</h4>
                        <h5 className="dayLocation">Nilaveli to Nuwaya Eliya</h5>
                    </div>

                    {day8 &&
                        <div>
                            <p style={{marginBottom: '10px'}}>An early wakeup this morning - we were up and showered just after six in the morning. Our driver was due to get to us at half six to take us to Nuwara Eliya (plus Anna to the bus station). But he was late, and we ended up hitting the road around seven. He pulled up in a large black van that had more than a passing resemblance to the A-Team’s classic vehicle, wearing a smart white shirt and black work trousers. </p>
                            <img src={Day8Pic1} alt="Day 8" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>This man’s name was Pragash, an older Tamil man who also spoke Sinhalese, and he proved to be one of the weirder and more unique people we’d meet on this trip. He was also our longest driver, being with us nearly a week. It was an interesting experience. Pragash’s first job was to get Anna to the Trincomalee bus station so that she could catch her coach to Colombo. It was not a departure any of us were particularly looking forward to. Anna was the heart and soul of the travelling party; always calm, level-headed and sympathetic. She didn’t want to leave us, but if there were two things she didn’t like, they were the south coast (which she deemed to be too full of Sinhalese) and the prospect of going to Sri Lanka without spending any significant time with her family. And so it was that we were soon unloading her suitcases from Pragash’s van at the jam-packed bus station and trying to keep our emotions in check. Terence and Anna were going to be apart for almost a week, which was extremely rare in their marriage. We waited there until the bus was out of sight, trying to raise Terence’s spirits. Then it was on the road.</p>
                            <img src={Day8Pic2} alt="Day 8" className="landscapePictures" />
                            <p>Almost immediately, we started to get annoyed with Pragash. He was determined to take charge of our journey, perhaps assuming we were inexperienced tourists who needed a firm hand. That was the case for me and John, perhaps even Steph and Michele, but not Terence, who had spent a large chunk of his life in Sri Lanka. There was not even any communication possible for most of us as one language he did not speak, quite reasonably of course, was English. On identifying Terence as the shot-caller and the only one he could have a conversation with, he went to work on him, cutting us out of the equation and changing some things around, most notably the price (which they later haggled down). </p>
                            <img src={Day8Pic3} alt="Day 8" className="landscapePictures" />
                            <p>Tensions spilled over at a toilet stop and we asked Terence to change drivers. He didn’t, and in retrospect I’m glad he didn’t. Pragash was certainly an odd duck - clinging on to us regardless of where we were going, disappearing then popping up right behind us when we least expected it - but he was good at his job and I quite liked him in the end. The journey was mostly uneventful until we got to Kandy, a few hundred miles and a couple of hours’ drive away. Kandy was quite high up in the mountains, but nothing compared to the altitude of Nuwara Eliya. It seemed to me like an unremarkable place, one of the few tourist attractions being the Temple of the Sacred Tooth. This was without question one of the low points of the trip. The temple, named after the tooth of the Buddha (which is on-site but can rarely be seen; convenient, that) was expensive (only for foreigners) and you could only visit a small section, which had very few interesting things to see. We left thoroughly unsatisfied, and all the subtle anti-Buddhist sensibilities I’d been developing so far were now becoming militant. </p>
                            <p>The mood was sour. It was cold in the mountains and I still had a chill. There were snipes being exchanged in all directions. But things were about to get a bit worse, and the longest drive was ahead of us. It was getting darker, the temperature was dropping, and the roads were becoming more and more snaky. This did not seem to bother Pragash, who was tearing down the narrow tarmac with reckless abandon. These were not European mountain roads; there were no barriers or anything stopping us falling to a gruesome death. But Pragash was not the least intimidated by this prospect, and our van tore down the road with abandon.</p>
                            <p style={{marginBottom: '10px'}}>By the time we got to Nuwara Eliya it was late, I was tired, and nature was calling something fierce. After a prolonged, very unproductive conversation with the owner of the villa we were staying at we found ourselves on the edge of town, in a house right next to the Hill Club, a hotel that was once a private members’ club during the imperial period. Our living area was upstairs, and after Nilaveli it was a huge disappointment. It was dirty, the toilets didn’t flush and there was no hot water. It turned out later that the water hadn’t been turned on, and once it was you could get lukewarm water through the tap and even the shower, once you worked a truly startling combination of knobs, buttons and levers. After the day we’d had and the standards of previous accommodation, I was at my wits end. I hit a wall and had to be talked down by Steph, who was getting tired of my attitude. We had a meal courtesy of the villa’s two maids, showered and got a good night’s sleep.</p>
                         </div>}

                    <div onClick={expandDay9} id="day9Expander" className="headings">
                        <h4 className="dayHeader">Day 9</h4>
                        <h5 className="dayLocation">Nuwaya Eliya and tea plantations</h5>
                    </div>

                    {day9 &&
                        <div>
                            <img style={{marginTop: '10px'}} src={Day9Pic0} alt="Day 9" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>A much better day than the one before. It was a beautiful Nuwara Eliya morning when we woke up, and we started it with coffee on the veranda, which was surprisingly plush compared to the rest of the place. After a string hoppers breakfast, we headed out on the road. Our first stop was Piduruthalagala, the highest point in Sri Lanka with a commanding view of the surrounding mountain range. Typically of Sri Lanka, it was also an army base used for high-altitude training. Surprisingly for the Sri Lankan army, there was quite a relaxed and friendly atmosphere. The only reminder that the country was basically a Junta came at the foot of the drive, where our passports were scanned and Pragash was questioned. The reason for this proved to be surprisingly altruistic, however; the route to the top took us through a leopard sanctuary, and they wanted to identify poachers. We didn’t see any leopards, but we did see some incredible views, including of the majestic Adam’s Peak in the distance. Adam’s peak is a tall, narrow mountain with a feature called the Sri Pada or sacred footprint. This is held in high esteem by a number of religions. The Buddhists believe it belongs to Buddha, the Hindus, Shiva, and the Christians, the biblical Adam, hence the name.</p>
                            <img src={Day9Pic1} alt="Day 9" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>We weren’t going to climb Adam’s Peak on this holiday. I’d wanted to; there’s an established custom of making the hike upwards in the early hours of the morning and watching the sun rise from the peak. But it wasn’t popular enough with the group and it would have taken up too much time to boot. We left Piduruthalagala and drove over to Lover’s Leap, which was a well-known waterfall and tea plantation. Nuwara Eliya is all about tea; it was used by the British for plantations and the town, including the old hotels, golf courses, and private members’ clubs, grew around them. Lovers’ Leap was something of a local suicide hotspot, where lovers forcibly torn apart by issues such as caste and ethnicity could cast themselves to their deaths. It sounds depressing, but it wasn’t as intense as, one would imagine, the Aokigahara suicide forest in Japan would be. In fact, with its cheerful hikers and scenic views, it came off as more of a Beachy Head type of place, albeit slightly more self-aware. It was quite blissful, and fun; John did an amazing Evel Knievel jump across the gap in the grates and Terence and Steph stood on the high wall that bordered the upper part of the waterfall. That is, until Terence heard a growling from the jungle behind him. I give him his due there; if I thought a leopard, or any other terrifying feline predator was behind me, I’d have to race my own brown streak to the van. </p>
                            <img src={Day9Pic3} alt="day 9" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>After our hike we settled on somewhere to eat, and came across a vegetarian restaurant in town. It proved to be one of our finer meals in Sri Lanka and everything about it was charming. We were sat up on a mezzanine flooring area overlooking the main restaurant, which was tiny and full of people. It was not at all cramped or unpleasant, however. In fact, it was a pleasant distraction from the rest of town, which seemed geared exclusively to wealthy westerners. The food was delicious. I had a masala dosa, and it felt good to enjoy something that didn’t contain meat or fish. The real draw of the place, though, was the staff. We had a phenomenally cheerful waiter with whom I formed an instant and unshakeable bond, to the extent of me hailing him with ‘I love you’ in broken Tamil and shaking his hand more times than any reasonable social graces would dictate. The other diners around us, mostly Tamil, found this double act hilarious and I felt like a bit of a minor celebrity when I got out there. The guy remembered me too, and when we were looking for another place to eat a few days ago he seemed mortified I didn’t come back.</p>
                            <img src={Day9Pic4} alt="Day 9" className="portraitPictures" />
                            <p style={{marginBottom: '10px'}}>When we finished eating we drove over to the Labookelie tea plantation for Damro, or Mackwoods, Tea. While the tea fields were beautiful and stretched as far as the eye could see, there was an unmistakably uncomfortable air about the place. It was uncomfortably reminiscent of a slave plantation in the antebellum Deep South, down to the rags the workers (all Tamil women) wore and the supervisor, which in the context seemed like a modern term for an overseer. The women were paid an absolute pittance, 300 rupees a day, which barely even buys a loaf of bread. The place was a massive eye-opener about tea, a product which I assumed was reasonably ethically-produced.There were some moments of levity on this part of the trip - I remember chasing after a worker trying to give her 500 rupees after finding out how much they made, or pulling up to two more in a jet-black van with blacked out windows to offer the same amount. But it was mostly a sobering experience. </p>
                            <img src={Day9Pic5} alt="Day 9" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>The last big stop on our day’s journey was Ramboda Falls, a large waterfall we had to hike uphill to. We had to go here; back around sixteen years ago, when Steph and Michele were a lot younger, they had taken a picture in the waterfall. They wanted to take a updated picture in the same position all those years later, which we all thought was a great idea. It was quite a bracing trek, and we found ourselves doing quite a lot of climbing. It was a very varied hike; gentle slopes gave way to steep inclines, some of which had steps and a rail, some of which had nothing giving you a way up unless you had your hiking boots on, which most of us did. There was also a cave full of tiny spiders which clung to my person for ages after I went through it. All I had to protect me from the perils of gravity was my trusty stick. My stick stayed with me throughout the hike, even when I threw it across the waterfall and retrieved it at no small personal danger to myself. The girls ended up taking the picture on the way down from the top, choosing a similar spot as their previous one was occupied.</p>
                            <img src={Day9Pic6} alt="Day 9" className="portraitPictures" />
                            <p style={{marginBottom: '10px'}}>The day was getting on. We headed back to the villa, got ready and headed out into town. We went to a Muslim restaurant in the middle of town that specialised in kottu roti, and you could hear the loud drumming of them making it in the kitchen. It was incredible to listen to, much more so than when we heard it performed for tourists in Mirissa. We slept with lots of good food in our bellies, ready to face the next leg of the journey. </p>
                        </div>}

                    <div onClick={expandDay10} id="day10Expander" className="headings">
                        <h4 className="dayHeader">Day 10</h4>
                        <h5 className="dayLocation">Little Adam's Peak and Mirissa</h5>
                    </div>

                    {day10 &&
                        <div>
                        <p>This was, thankfully, one of the least-strenuous driving days. I’d grown to dislike them - Colombo to Jaffna was awfully hard work, and Jaffna to Nilaveli was difficult also. But this was a comparatively easy drive. We were going to Mirissa, a seaside town on the south coast, near the famous Galle. A part of me was looking forward to it, an equal part wasn’t. The mountain air was practically warm when compared to Britain but a part of me missed hot, sunny days of Nilaveli and Jaffna. We set out quite early like normal, as we had a few sites to take in along the way. First up was the Sita Hindu Temple, which was famous because according to Hindu mythology, it was visited by the monkey god, Hanuman. Perhaps fittingly, there were monkeys everywhere. It was an incredible temple, and even though there wasn’t much inside, it was quite spectacular to look at. </p>
                            <p style={{marginBottom: '10px'}}>The next stop was a real treat. While I hadn’t been able to climb up Adam’s Peak back in Nuwara Eliya, its junior cousin - literally, Little Adam’s Peak, was a much less punishing climb. It was twinned with Ella, which was close to Adam’s peak in terms of size, but was steeper and an extremely difficult climb. We weren’t going to attempt that though; we had a time constraint. While we were all excited about Little Adam’s Peak, we saw something in the village of Ella that took the taste right out of our mouths - white people. Garlic. Vellai. The village was completely chock-a-block with every type of obnoxious traveller from English gap-yah types to American backpacking hipsters in search of Instagram gold. I don’t think there was a single one of them I didn’t dislike on sight. This overabundance of white people was going to be par for the course until we came full circle into Colombo, not that we knew that yet.</p>
                            <img src={Day10Pic1} alt="Day 10" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>We ignored the masses and headed to Little Adam’s Peak. The trail was full of the same posers but it was an interesting climb. Terence and Pragash steamed ahead of us, followed (reasonably) closely by me and Steph, with John and Michele bringing up the rear. After a little while we reached the peak, which was one of the more magnificent sights we’d seen so far. We were well-aware of the fact that our peak was dwarfed by Ella’s, and we couldn’t even see the top from the peak from where we were standing. But it was still an impressive sight. The valleys stretched for miles around, giving us an incredible view that was mostly unencumbered by clouds and mist. It was the last mountain we stood on in Sri Lanka, and it was absolutely magnificent. </p>
                            <img src={Day10Pic2} alt="Day 10" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>The next stop was a welcome break from a rush of both driving and activity, a posh meal in the mountains. The restaurant we happened across commanded a superb view of the mountain valley and seemed to be very popular with the tourists. It offered a buffet, which looked delicious, but as the money was running out we were drawn to the cheaper a-la-carte menu. We also tore through a couple of Lion beers and sat back contentedly, ready to hit the south coast. Our longest drive was between that restaurant and Mirissa, and we only stopped once - for Sri Lankan yoghurt that was, surprisingly, unpasteurised. We found this a little strange, and Michele found it disgusting, but we ate it regardless. Steph even bought some of the delicious palm syrup which we still have in our cupboard. </p>
                            <img src={Day10Pic3} alt="Day 10" className="portraitPictures" />
                            <p>Late in the evening, we arrived in Mirissa and found the accommodation, which had been booked by Noel. I say accommodation, because there is no kinder term I can refer to it by. It was a backpackers’ hostel, basic to the extreme. The proprietor was Sam, a Sinhalese man with dreadlocks (I kid you not; long, luxurious dreadlocks) who had not had a Sri Lankan guest in three years. While I’d taken to some extremely negative views about the Sinhalese during my trip, Sam was perhaps one of the nicest and most accommodating people I met in southern Sri Lanka. He was always cheerful and had a story to tell, even if they were 95% lies. Despite this, however, he was able to give us some memorable tips, including to one of the nicest beaches I’ve ever been to. But more on that later. </p>
                            <p style={{marginBottom: '10px'}}>We got into the rooms, and my disappointment reached critical levels. The beds were threadbare mattresses, squared rather than rectangular, with nothing but a tiny blanket, a miniscule pillow, and a mosquito that you had to maneuver in and out of each time you moved from the bed. The rest of the room barely fit our bags and could only be compared to a particularly sparse prison cell. The bathroom was full of large, nasty looking spiders but the water was warm. That night, I couldn’t get to to sleep until around three in the morning. The air con sounded like a jumbo jet, the humidity was unbearable and the blanket only covered Steph. Even in the grosser beds we’d been in so far, I’d taken a large fluffy blanket as a granted, and to be barely covered by this pathetic flimsy thing just felt wrong. I did, in the end, manage to get some shut-eye.</p>
                        </div>}

                        <div onClick={expandDay11} id="day11Expander" className="headings">
                        <h4 className="dayHeader">Day 11</h4>
                        <h5 className="dayLocation">Mirissa and Galle</h5>
                    </div>

                    {day11 &&
                        <div>
                        <p style={{marginBottom: '10px'}}>I woke up strangely refreshed despite having had only around four hours’ sleep. I was determined to put my misgivings about our hostel behind me. It was a boiling morning - we were the closest to the equator here, and the temperature was off the charts. Even so early in the morning we could barely stand in the open sun more than a few seconds, and it would get steadily hotter during the day. We had what was advertised as an English breakfast, but rather than an English breakfast it turned out to be about fifty slices of toast (seemingly each) with jam and butter. I was half expecting it to be a pleasant reminder of home, but to be honest I would have preferred something Sri Lankan. I was seeking appam, a delicious pancake made of the same rice flour as string hoppers (the pancakes themselves are called hoppers in English) that I enjoyed with sambol (a delicious dish made of dried fish and chilli) back at Steph’s house. I’d been cruelly stymied in my all my efforts to eat this dish so far, and today was no different.</p>
                        <img src={Day11Pic1} alt="Day 11" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>Once we were done with breakfast, we headed out on the road. We were doing a grand circle of the surrounding seaside areas - Galle, Koggala, then back to Mirissa. We made the longer drive to Galle first, and our first stop was the impressive Galle Fort. It was a Portugese fortification, different than the Dutch stronghold we’d seen in Jaffna. It didn’t seem to keen to tell its own history as there were no signs about, in either Sinhala or English, although there were some intersting cast-iron statues of some Dutch colonial troops and some Sri Lankan sepoys which sadly went without context. It would have been fascinating to explore more of the fort, but the sad truth was that even as far as the first quarter of the fort was concerned, we couldn’t withstand the heat. It bore down on us, making it impossible to think let alone resist it. After standing on the edge of the fortifications and taking in some truly incredible views of the bay, me Steph, John and Michele retired to a shady alcove while Terence and Pragash, much more used to the heat, tore through the rest of the place. </p>
                        <img src={Day11Pic2} alt="Day 11" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We hung around Galle Town and had some fruit before making the next leg of the journey over to Koggala, the next seaside town. On the way we made one stop we’d all been eagerly looking forward to: a sea turtle sanctuary and hatchery. They had around twenty different adult sea turtles, ranging from relatively small to absolutely huge. This was a lot more of an ethical operation than the elephant ‘sanctuary’ I’d been to in Pinawalla. Many of the turtles had been injured offshore, either by the stupid actions of tourists or locals, or just bad luck. They seemed well-cared for, and our guide knew lots about them. This was the only time I ever encountered (or, indeed, had ever heard of) carnivorous turtles. They turned out to be quite dangerous, as our guide demonstrated by putting his fingers out as bait. Other than these man-eaters I bonded with every single turtle, further cementing my reputation as the animal-whisper. They came over for me to stroke them, and the one huge turtle I held (one activity that seemed slightly exploirative until I tried it) seemed a lot more relaxed about it than he normally would have been. The final part of the tour involved picking up some baby turtles that had only just hatched. It was one I nearly missed as I was too busy bonding with the adult turtles - it was the Alaskan huskies in Norway all over again! But in hanging back I was the first to witness Pragash’s marvelous infiltration abilities - with money running low we’d decided against getting him a ticket, but he’d found his way in somehow, appearing behind me like some sinister Tamil Svengali. It was...unnerving, to say the least. </p>
                        <img src={Day11Pic3} alt="Day 11" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>Our next stop was the beach, and a truly awesome sight - traditional Sri Lankan stick fishermen. These lads sat on ramshackle seats derived of sticks poking into the sand for hours waiting to catch fish. We were charged five hundred rupees for the privilege of taking pictures of them, as it was out of season and their only stream of revenue at that time was the tourist buck. Nevertheless, I got a handful of great pictures and got to support an important local industry. In the Koggala town itself we bought a few bits, including a canvas print of the same stick fishermen, which Steph bought and I framed approximately a month later. It’s still hung on the wall in her bedroom.</p>
                        <img src={Day11Pic4} alt="Day 11" className="portraitPictures" />
                        <p style={{marginBottom: '10px'}}> After spending some time in Koggala and dodging the unbearable heat we headed back towards Mirissa. We were going to get some time on the beach before the sun set, and we decided on a lovely strip of sand between the two towns. It was unusual in that there was a large island around fifty yards away from the beach, which answered to the cheerful name of Taprobane. We’d assumed it was some sort of secret headquarters for a global criminal mastermind but it turned out to be a mid-range hotel. </p>
                        <img src={Day11Pic5} alt="Day 11" className="landscapePictures" />
                        <p>Strike that up to wasted opportunity, but we didn’t stay long at this weird beach/island combo. Terence had heard about an incredible beach from Sam, the proprietor of our hostel, that formed a part of a hotel owned by his family. Michele wasn’t feeling particularly well and John wanted to stay with her so me, Steph and Terence headed there on our own. It turned out to be one of the nicest beaches I’d ever seen. We swam in a gorgeous lagoon surrounded by rocks, and lounged out as the sun set. Sadly we couldn’t see it give out its last few rays of sun as it retreated behind the clouds, but what we did see at the same time was the moon. It looked incredible - not just an orb in the sky at a thin waxing crescent, but a real life planet. I could see contours, I could see planetary shape, I could see a surface. The moon grew more and more prominent as the sun retreated, then disappeared itself behind the clouds as the darkness rolled in. We were left there, the three of us, the waves roaring over the rocks and gently pulling us from side to side. I don’t know if it was the most memorable part of the holiday and it’s certainly got competition. But what I do know is that since I’ve been home, surrounded by the stress of London life and a million loud, obnoxious faces, I’ve thought on the beautiful solitude of that beach more often than I care to admit. It was heaven.</p>
                        <p>Dragging ourselves away from the beach at some effort, we rejoined John and Michele and headed into town. Our target for food this evening was a popular local restaurant, the name of which escapes me. And when I say popular, I of course mean popular for the legions of westerners that I’d been all too keen to avoid at the beach. It could charitably be described as a starter course for Sri Lankan food for whiteys. The selections were bland and inauthentic - they were mostly rotis with lukewarm spices. They even offered a dessert roti section - peanut butter, banana and other standard dessert options. The whole idea made us scoff, though of course some of us (myself included) tried them. They were also making kottu roti, which was their biggest stab at authenticity while also shamelessly pandering to the tourists. The chef was clearly very skilled, but I had to compare him to the chef at the Muslim restaurant back in Nuwara Eliya, who was so much more impressive despite being so much less theatrical. Real skills, done not for theatrics but for function, will always out.</p>
                        <p> After a middling dinner Pragash drove us back to the hostel and I settled into another uneasy night’s sleep. This was to be our last night in the place, and while I’d grown quite fond of Sam and his staff, my attitude could only be described as Thank Christ. We were going back to Colombo and back to Kotahena. We would be seeing Anna for the first time in a few days and if me and Steph were missing her like crazy, we could only imagine what Terence must be feeling. We were also going to be seeing the family, and I was very keen to resurrect that warm, community-heavy feeling I missed from Jaffna. I was getting tired of the south. I disliked the tourists, hated (most) of the Sinhalese and was constantly annoyed by the ‘tourist price’ culture that seemed prevalent here. </p>
                        <p style={{marginBottom: '10px'}}>It wasn’t all good news though - tomorrow was going to be our last night. The idea of going back to London’s freezing cold winds and back to my boring work at my boring desk in my boring office after we’d lived so much in the last two weeks left me with a lump in my throat. I resolved to enjoy my last two days in Sri Lanka at all costs.</p>
                        </div>}

                        <div onClick={expandDay12} id="day12Expander" className="headings">
                        <h4 className="dayHeader">Day 12</h4>
                        <h5 className="dayLocation">Mirissa to Colombo</h5>
                    </div>

                    {day12 &&
                        <div>
                        <p>We woke to a wonderful but almost unbearable heat. The sun was bearing down hard on us, making it impossible to stay in the sun for more than a few moments. We got ready and had breakfast, which was billed as Sri Lankan. It turned out to be lots of string hoppers and sodhi. I had a pang of disappointment that there was no appam, and I was convinced I wouldn’t get it on this holiday. Overhearing and no doubt sympathising with my plight, Sam sent out a single hopper for each of us. It didn’t taste very good, nothing compared to Anna’s, but I’ll be damned if that didn’t cement him as a legend in my memory. Words couldn't express my appreciation. Before we left we made friends with an older English couple travelling with their daughter, before  (we think) mortally offending them by making disparaging comments about backpackers without realising their daughter was one. </p>
                        <p>This journey was a little different to its predecessors. Whether it was the road between Colombo and Jaffna, Jaffna to Nilaveli, Nilaveli to Nuwara Eliya or Nuwara Eliya to Mirissa, we’d always had a myriad of stops to break up the drive. Mirissa to Colombo was the longest one by far, and we only had one real stop, the beach town of Hikkaduwa, which cracked me up as it reminded me of the Hicadoola song from Family Guy. It turned out to be a very nice town full of souvenir stands. We all bought a few bits, but the prize of the day was Steph’s beautiful canvas painting of the Koggala stick fishermen. I built a frame for it to wrap around and it now rests on our wall, a beautiful memento of a beautiful holiday. After shopping we stopped in to a pub on the beach for a couple of beers. The sun was out and the sea was a beautiful shade of green. It was so relaxing, and I promised myself that this would be the image I would have in my head when I made that freezing cold journey to work on Monday morning -  blue sea, white sand, coconut tree leaves rustling in the gentle breeze, a beer in my hand and the warm sun on my skin.</p>
                        <p>After Hikkaduwa, it was non-stop to Colombo. We drove down the Galle Road, which if you have an eidetic memory you will realise our first hotel was on. It isn’t just some posh Colombo road though - it’s an unfathomably long coastal stretch that leads all the way from Galle in the south to the middle of Colombo. The only thing that I can compare it to in terms of length and beautiful coastal scenery is America’s Route 101, a 2,500 kilometer road that covers almost the entirety of the west coast. We drove up the Galle Road and long, luxurious stretches of beach gradually gave way to urban industrialisation until we reached the southern side of Colombo - and a wall of traffic. The drive from the outskirts of Colombo to the apartment Noel had booked in Kotahena felt longer than the drive from Galle. It didn’t help one bit that it was elections week. The pavement was full of increasingly-agitated activists and on the road, loudspeakers blasted out the candidates’ speeches. It was a stark reminder that while Sri Lanka was a democracy, it had all the aggressive populism of Russia or the Philippines. Further down the road, which was now clogged with cars, we witnessed a protest for free education. We watched in shock as the police used tear gas against peaceful protesters, reminding us of some of the ugliness that hid behind such a beautiful island. </p>
                        <p style={{marginBottom: '10px'}}>Eventually we got to Kotahena and made our way to the apartment. We feared the worst. Noel had booked the hostel in Mirissa, we could only fret over the type of place he would send us to in a run-down area like Kotahena. We (well I; some of us didn’t like the place, but I thought it was fine) were pleasantly surprised. While the apartment was down one of the roughest-looking roads in Kotahena, it was a well-furnished modern home with a balcony overlooking a part of the city. The beds were comfy and the water was quite warm. It also had its own private garage where we could store the van when needed. But we didn’t have that long to settle in. We all needed showers after such a long day and we wanted to be presentable for the restaurant. Terence sent Pragash to get some arrack and we had a couple of glasses before we left.</p>
                        <img src={Day12Pic1} alt="Day 12" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}} >We got to the restaurant first and were escorted to a large table upstairs. The place was a dive - we’d dined in much nicer places even in considerably more remote areas. The menu was basic already and it would soon turn out the family had ordered some dishes off a reduced menu. Before long, they started to arrive. We saw Anna and were extremely happy to have the six of us back together. We’d experienced some amazing things since we parted ways with her but we were very glad to see her again. We told her about our adventures and she told us about what it had been like in the last few days in Colombo. We sat down with the rest of the family for a meal that wasn’t bad, wasn’t great, but I enjoyed feeling like we were in Jaffna again. It wasn’t exactly what I would have done on our last night, but it was a fine evening all in all. When the meal was over everyone headed over to ours and we found ourselves hosting a little party. I served some arrack and had a small glass myself, and we hung out on the periphery while everyone else bantered in Tamil. Everyone left after around and hour and we headed to bed, sleeping our last night in Sri Lanka. </p>
                        </div>}

                        <div onClick={expandDay13} id="day13Expander" className="headings">
                        <h4 className="dayHeader">Day 13</h4>
                        <h5 className="dayLocation">Colombo</h5>
                    </div>

                    {day13 &&
                        <div>
                        <p style={{marginBottom: '10px'}}>It was the day we’d dreaded - our last day. We were flying at 8:45 at night so had a full day, but the sense of impending doom was no doubt felt all round. This was compounded in my case by the fact that my head was about to explode. I’d had three reasonably small glasses of arrack, and while I’d been warned that the stuff was lethal in the morning unless you double-distilled it, I felt like I’d gotten plastered. I was alright once I’d had a shower, but still I haven’t touched a drop of the stuff since. We had a full day of family stuff ahead of us. Amama and Kuthi Amama (spelling errors mine) were coming over in the morning to see us off. We were then going to drive to downtown Colombo and buy some spices, souvenirs and other bits and pieces. Our final stop would be back to Negombo, where we would go to Suresh’s house before making the final journey to the airport.</p>
                        <img src={Day13Pic1} alt="Day 13" className="landscapePictures" />
                        <p>I felt like I was on the verge of understanding the conversation this time, and I plugged the ten-or-so words of Tamil I know for maximum laughs. We parted on a high and drove into town while Anna stayed behind with the ladies. We went down to the market and filled our bags with spices, sambal, tea and coffee, soaps and sweets before taking a look at souvenirs. I bought a lovely cotton shirt that closely resembled a guayabera I never got round to buying in Cuba. I wore it for the rest of the day and even back to London! After shopping we headed over to Negombo, where apparently we were meeting Bubsy Mami, Ravi, Noel, and Baby Appama in a restaurant. It turned out to be the same restaurant we’d visited in Negombo back when we first came through on the way to Jaffna, which I felt rounded off things nicely. We had a solid lunch but there was more food waiting for us at Suresh’s house. We drove to the house which was concealed, quite bizarrely, by a metalworks. All the family was gathered here and despite him being a bit of a dodgy geezer it was nice to see Suresh again. There wasn’t a great deal to eat at the house but it turned out to be a fun afternoon, as I looked through some old photo albums with Bubsy Mami and drank lots of tea. But the afternoon was wearing on, and our inevitable departure loomed like a dark cloud.</p>
                        <p> As the sun set, we said our goodbyes and made the final drive to the airport. Our dream holiday was about to end. None of us were in particularly good spirits about it, but a tiny part of us missed the home comforts. As we reached the airport we said our final goodbyes: Bubsy, Ravi, Noel, and Pragash. We’d had our ups and downs with Pragash but his goodbye was particularly earnest; the language barrier meant none of us bar Terence had exchanged more than five words with him but we’d grown used to, and comfortable with, his constant presence. We would talk about him for weeks to come, most of it in the form of jokes, but all of it with affection. </p>
                        <p style={{marginBottom: '10px'}}>Our last hour in Sri Lanka was marked by a unpleasant but intensely satisfying experience, as we argued with and subsequently humiliated a couple of Russian mongrels who were trying to jump the check-in queue. I would go into detail, but wouldn’t that put things on a bit of a down note? So anyway. We got on the plane, waving goodbye to the weird, wonderful and beautiful nation of Sri Lanka. At least for now.</p>
                        </div>}

                        <div onClick={expandDay14} id="day14Expander" className="headings">
                        <h4 className="dayHeader">Day 14</h4>
                        <h5 className="dayLocation">Home</h5>
                    </div>

                    {day14 &&
                        <div>
                        <p style={{marginBottom: '10px'}}>We got into Dubai in the early hours of the morning and I spent the short stopover sleeping on one of the airport loungers. It was one of the only solid bits of sleep I’d get. We boarded the last plane and I tried to sleep, ultimately failing and watching some movies. We landed at Gatwick on a freezing cold January morning, feeling the kind of chill that even the coldest night in Nuwara Eliya wouldn’t have turned up. I had a jumper and my new guayabera on, so suffice to say I was looking forward to getting into my pyjamas. Our adventure was over; we’d gained memories that would stay with us for a lifetime, lived a tropical dream in the height of the unforgiving winter, and lived totally free for two fantastic weeks. As of Monday we would be back in tiny offices huddled against the cold outside, but for now, we were truly Sri Lankan.</p>
                        <img src={Day14Pic1} alt="Day 14" className="landscapePictures" />
                        <p>We parted from John and Michele at the airport, joking about the time we would need apart from each other before saying fond goodbyes. Then we got breakfast from the McDonalds in Shirley. Then home to bed.</p>
                        <p style={{fontWeight: 'bold', marginBottom: '10px'}}>The end.</p>
                        </div>}

                        
            </div>

            <h3 onClick={back}>Back</h3>
        </div>
    );
    }