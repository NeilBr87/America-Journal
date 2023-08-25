import {useState} from 'react';
import Day1Pic1 from './Day1Pic1.jpg'
import Day1Pic2 from './Day1Pic2.jpg'
import Day2Pic2 from './Day2Pic2.JPG'
import './style.css';

export default function Journal() {
    const [intro, setIntro] = useState(false);
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
    const [day15, setDay15] = useState(false);
    const [day16, setDay16] = useState(false);
    const [day17, setDay17] = useState(false);
    const [day18, setDay18] = useState(false);
    const [day19, setDay19] = useState(false);
    const [day20, setDay20] = useState(false);
    const [day21, setDay21] = useState(false);

    function expandIntro() {
        setIntro(!intro);
    }

    function expandDay1() {
        setDay1(!day1);
    }

    function expandDay2() {
        setDay2(!day2);
    }


    return (
        <div>

            <h2 style={{marginTop: '5vh'}}>America 2022</h2>
            <h3 style={{marginBottom: '5vh'}}>Travel journal</h3>

            <div id="expand">
                <div onClick={expandIntro} id="introExpander" className="headings">
                    <h4 className="introHeader">Intro</h4>
                </div>
                {intro && 
                <div className="days" id="intro">
                <p style={{marginBottom: '10px'}}>It wasn’t long after our first glorious road trip to America that I started to think about a follow up. It started as a way to stave off the post-holiday blues, then a way to pass the time. At one point, I’d sketched out around fifteen different routes all around the US, and Canada at one point, but it all seemed like a wonderful pipe dream.</p>
                    <img src={Day1Pic1} alt="Day 1 Pic 1" className="landscapePictures" />
                    <p>It was COVID that served as the real impetus of our choice to go to America once again. We’d had some UK holidays in 2021 and 2020, Salisbury and Scotland respectively, and we did end up going to Athens in June. But like a lot of people coming out of lockdown, we had two things: a bit of extra money after months of minimal spending, and an absolutely burning desire to get out of the country. We had a few different choices; we both had an interest in seeing more of Asia, and I had some interest in going interrailing, albeit at hotels rather than dirty hostels.</p>
                    <p>But after two years of confinement and isolation, we knew that when we did do our next main holiday, it had to be REALLY big. Nothing but a major trip would suffice, and only a few destinations would count. At first, America again seemed an impossibility – for one I didn’t drive, I of course had no intention of saddling Steph with two weeks of shouldering the load, and we’d only been three years ago. Eventually I agreed, with the caveat that we make it clear to everyone that asks that this was Steph’s idea, and that I hadn’t demanded she be my chauffeur for a whole holiday.</p>
                    <p>Once our attention had turned to the US, discussions nationally turned to where we could go. The two of us pored over my previous routes and some others, but we underestimated one thing – how expensive it would be to go on a multi-airport journey in the financially-difficult world of post-COVID. While a circular journey around southern California worked perfectly last time, the routes I’d been looking at for this trip had been linear – a single journey across multiple states, each point in the journey well-defined – which didn’t work once we found out how expensive it was to travel back from different, and especially regional, airports. By the time it came to looking at flights, there was one state that formed the bulk of our looking, for our return flights as opposed to our outgoing: Montana.</p>
                    <p>For all the states that we were looking at, Montana featured very highly. Some had been easy eliminations; we had no major inclination, for example, to drive through thousands of miles of cornfields in Indiana, Nebraska, Iowa, Illinois or Ohio. Others, such as East Coast (especially New England) were much more of a sell for me than Steph. But of all the western states, Montana figured as an absolute high on all relevant searches. It had the mountains, National Parks, and huge swathes of beautiful, barely-crossed wilderness.</p>
                    <p>The route we eventually settled on was, possibly ironically, not on my original list. We agreed we both wanted to do Vegas again, but beyond that, we were wide open. We initially thought of Montana as the end destination, maybe flying from one of its regional airports – probably Butte – to Chicago and then to London. It was on a very brief googling of prices that we found the flaw in this plan – it was a couple grand over the direct flights we’d looked at. We then had a slightly mad idea – what if we did direct flights to and from Vegas, but went to Montana too?</p>
                    <p>It wasn’t long before we found a clear solution – we would use Vegas as our flight base, but take a singular journey to the very top of Montana, to Glacier National Park right on the Canadian border, then drive back to Vegas. We initially had a very packed two-week concept, which I’m happy to say we changed into a much more expansive three-week holiday. There was just one more thing to add – and it was quite important.</p>
                    <p>We’d gotten engaged three years ago in the very same country, notwithstanding the very same part of the country, that we were going to now. Since then we’d come back and forth on the shape our wedding would take – me wanting something bigger and grander, Steph wanting something small and functional. With it being confirmed that we were going back to Vegas, Steph had what would turn out to be an incredible idea – we elope with a Las Vegas wedding! Moreover, we looked it up and there’s no problem with taking a Las Vegas marriage certificate to the UK – there’s no additional administration to make your wedding ‘valid’ in the UK. These were side considerations though; what really attracted Vegas, first to Steph and then to me, was the unique and romantic attraction to the spiritual home of eloping, not a hundred miles from where we got engaged. We booked the Graceland Chapel, where David Harbour and Lily Allen, plus a bunch of other celebrities, got married. And as everything got gradually booked, our excitement reached fever pitch.</p>
                </div>}

                <div onClick={expandDay1} id="day1Expander" className="headings">
                    <h4 className="dayHeader">Day 1</h4>
                    <h5 className="dayLocation">Las Vegas</h5>
                </div>

                {day1 &&
                    <div className="days" id="day1">
                        <p>We were all set.</p>
                        <p>After weeks of waiting, we were ready to fly to America. We’d booked flights, hotels, spent hours looking at things to do, and – especially in the last couple of weeks – compiled a gigantic playlist for the road.</p>  
                        <p>We were fascinated by how our flight would turn out. We hadn’t flown long-haul since just before COVID, and while we’d flown in June, we knew that the difference between Virgin and Wizz Air would be the difference between driving a Ferrari and an old Vauxhall Corsa that had failed its MOT.</p>
                        <p>We were leaving the house in John and Michele’s very capable hands for three weeks while they used it as a base, and Michele drove us to the airport to boot. We packed exceptionally well thanks to the vacuum bags Steph had bought. We had a slight hiccup – Steph didn’t think she needed to bring her driving licence – but thanks to her diligent driving Michele got us to the airport in excellent time.</p>
                        <p>Things were slightly different to the last time we flew with Virgin. Firstly, the food had dropped off. Secondly, the huge selection of films we’d been given last time, from brand-new movies to a big array of classics, was gone, replaced by a small, forgettable selection. And finally, their free-flowing booze was gone, replaced by stingy timed services that was apparently in aid of responsible drinking but we all knew was about post-COVID cost-cutting.</p>
                        <p>But we didn’t care. We were so excited that the flight went by quite quickly, and before long we were touching down in Las Vegas on a beautifully sunny afternoon. Last time we arrived in San Fran, we’d had a huge wait in arrivals, but this time we got through quickly and painlessly. Then we got outside.</p>
                        <p>There is simply nothing in the world like desert heat, and it hit us the moment we got out of the air conditioned arrivals lounge. In the months leading up to our flight, the UK had been hit by successive heat waves, but heat waves in southern England are humid, sticky things that make your clothes cling to you and force you to sleep in a damp blanket of your own sweat. Desert heat? That couldn’t be more different. It’s a dry, dusty heat that makes you feel like you’re under a giant tanning bulb. You can’t bear it for long, much as you can’t bear a humid heatwave, but it feels amazing the first time it hits you.</p>
                        <p>We had one important stop to make before we got to the hotel: the Clark County Marriage Licence Bureau, where we’d pick up the marriage licence that would be validated at our ceremony tomorrow. I had a fantastical image of how it might be – young kids in their early twenties running from patriarchal families and ready to start their lives together, like Rod Stewart’s Young Turks. It wasn’t that at all. It was an almost even mix of people not too dissimilar to us, having a Vegas wedding as a quirky alternative to a traditional ceremony, and people who I don’t feel any hesitation to call trash.</p>
                        <p>The Bureau gave me a sharp reminder that COVID had taken away my street-smarts, which I feel is a statement that needs explanation. There were several people looking semi-official outside the marriage licence bureau and normally I’d have immediately sussed that they were looking for something. COVID, however, had given me one instinct when dealing with government facilities, specifically testing and vaccine centres – don’t do anything until you find the person who looks helpful and they’ll tell you what to do. So I was in full engagement with the people standing outside the bureau as opposed to smiling without making particular eye contact, nodding, and walking past. They actually did direct me inside, and didn’t directly ask for and demand tips, though they were of course full of recommendations about where to get married.</p>
                        <p style={{marginBottom: '10px'}}>We picked up our marriage certificate, the drab bureaucratic settings doing nothing to stifle our excitement. We got out and got a cab straight to the Luxor to check in. It was one of those casinos that we’d always seen from afar, but neither of us had been inside. It was an especially cool structure both outside and inside, and we were already itching for a shower and a change of clothes. We had one hitch – the tower where we’d reserved was fully booked so we needed to stay in the main pyramid. We kicked up a polite stink and got our resort fees comped, as well as fifty dollars on our room account!</p>
                        <img src={Day1Pic2} alt="Day 1 Pic 2" className="landscapePictures" />
                        <p>The room was just fine, very modern with a very nice bathroom. We both showered and got our wedding clothes ready for tomorrow. The next stop was food. We’d be having some incredible meals on our holiday, but our first dinner didn’t quite count – I went to a little convenience store within the casino and bought two cold subs, which we ate unceremoniously in the room. It was around nine in the evening at this point, and Steph was ready for bed – though I wanted to check out the casino. Steph gave me the option of going down alone, and while I thought about it, bed was calling just as much.</p>
                    </div>}

                    <div onClick={expandDay2} id="day2Expander" className="headings">
                        <h4 className="dayHeader">Day 2</h4>
                        <h5 className="dayLocation">Las Vegas</h5>
                    </div>

                    {day2 &&
                    <div className="days" id="day2">
                        <p>While I may have kicked and screamed slightly about eloping, I have to admit there’s something magical about waking up on your wedding day in Las Vegas. In a few hours we’d be married, a small delay in paperwork aside, ready to enjoy our holiday as husband and wife.</p>
                        <p>We got a big, delicious breakfast in the Pyramid Café, the Luxor’s in-house diner. Steph had a breakfast BLT and I had their equivalent of a Full English. We were glad to find a proper sit-down meal after last night’s cold subs, and we needed to steel our stomachs – otherwise we’d eat later and ruin our very special wedding night dinner.</p>
                        <p>It took us a while to get ready before we got dressed to the nines. Steph looked so beautiful in her wedding dress, and I readily admit I scrubbed up pretty good. We were full of excitement as we waited for 1pm, where we’d be picked up by a fancy limousine and taken to our wedding.</p>
                        <img src={Day2Pic2} alt="Day 2 Pic 2" className="landscapePictures" />
                        <p>We had some confusion finding the limo, but it did show on time, and was impressive! We felt like VIPs getting chauffeured over to the Graceland Chapel in this thing, making our way through traffic and no doubt making everyone feel just that little bit jealous. The place was quite far off the strip and down a side road, but was very pretty – it was the opposite of the kind of place I’d been reverse-pitching while arguing against eloping - a dreary little place without anything resembling romance. This place was a nice, pleasant little building that was a welcome touch of something almost small-town among the towers of Vegas.</p>
                        <p>We saw some of the other people who’d been married at Graceland, and saw one pair of familiar faces – David Harbour and Lily Allen! We got all booked in and went inside the chapel to meet our photographer and our minister. True to its name, Graceland’s main minister is an Elvis impersonator, so you can get married by Elvis. The vast majority of people have taken this option, but neither of us are Elvis fans, so we opted for another minister thinking he – or she – would be more of an elegant option.</p>
                        <p>The guy was…unusual. He was French, an older man, and very eccentric. He’d go on long, rambling diatribes about marriage, the bible and sex, all of which he’d punctuate with an utterly creepy Yeessss. He reminded me of the arms dealer from In Bruges, which is normally a reference I’d be all for, but he just weirded us out. The minister wasn’t the only hitch – my boutonnière, fixed in by the lady at the front desk only minutes ago, fell out right as Steph was walking down the aisle, sending me scrambling to get it at the worst possible moment! At first I was mortified, but then came to appreciate that it made the whole thing so uniquely us.</p>
                        <p>We didn’t get prompted for our wedding song (which we hadn’t chosen anyway) but we did get prompted for our vows – which we had prepared. I’d drafted mine in the few weeks before we flew and got a final draft around two weeks before – but Steph’s was more of a collection of ideas. I helped her refine it on the plane, fleshed it out more and gave her a signature touch – Soupsnakes from The Office! I’ve kept these vows for posterity at the end of this journal, so go check it out.</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>}


                <h4 className="headings">Day 3</h4>
                <h4 className="headings">Day 4</h4>
                <h4 className="headings">Day 5</h4>
                <h4 className="headings">Day 6</h4>
                <h4 className="headings">Day 7</h4>
                <h4 className="headings">Day 8</h4>
                <h4 className="headings">Day 9</h4>
                <h4 className="headings">Day 10</h4>
                <h4 className="headings">Day 11</h4>
                <h4 className="headings">Day 12</h4>
                <h4 className="headings">Day 13</h4>
                <h4 className="headings">Day 14</h4>
                <h4 className="headings">Day 15</h4>
                <h4 className="headings">Day 16</h4>
                <h4 className="headings">Day 17</h4>
                <h4 className="headings">Day 18</h4>
                <h4 className="headings">Day 19</h4>
                <h4 className="headings">Day 20</h4>
                <h4 className="headings"p>Day 21</h4>
            </div>

            
            <div>

            </div>

        </div>
    );
    }