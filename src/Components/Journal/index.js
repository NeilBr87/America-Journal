import {useState} from 'react';
import Day1Pic1 from './Day1Pic1.jpg'
import Day1Pic2 from './Day1Pic2.jpg'
import Day2Pic1 from './Day2Pic1.jpg'
import Day2Pic2 from './Day2Pic2.JPG'
import Day2Pic3 from './Day2Pic3.jpg'
import Day2Pic4 from './Day2Pic4.jpg'
import Day3Pic1 from './Day3Pic1.jpg'
import Day3Pic2 from './Day3Pic2.jpg'
import Day3Pic3 from './Day3Pic3.jpg'
import Day4Pic1 from './Day4Pic1.jpg'
import Day4Pic2 from './Day4Pic2.jpg'
import Day4Pic3 from './Day4Pic3.jpg'
import Day4Pic4 from './Day4Pic4.jpg'
import Day4Pic5 from './Day4Pic5.jpg'
import Day4Pic6 from './Day4Pic6.jpg'
import Day4Pic7 from './Day4Pic7.jpg'
import Day5Pic1 from './Day5Pic1.jpg'
import Day5Pic2 from './Day5Pic2.jpg'
import Day5Pic3 from './Day5Pic3.jpg'
import Day5Pic4 from './Day5Pic4.jpg'
import Day5Pic5 from './Day5Pic5.jpg'
import Day5Pic6 from './Day5Pic6.jpg'
import Day5Pic7 from './Day5Pic7.jpg'
import Day6Pic1 from './Day6Pic1.jpg'
import Day6Pic2 from './Day6Pic2.jpg'
import Day6Pic3 from './Day6Pic3.jpg'
import Day6Pic4 from './Day6Pic4.jpg'
import Day6Pic5 from './Day6Pic5.jpg'
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
    const [day22, setDay22] = useState(false);

    function expandIntro() {
        setIntro(!intro);
    }

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

    function expandDay15() {
        setDay15(!day15);
    }

    function expandDay16() {
        setDay16(!day16);
    }

    function expandDay17() {
        setDay17(!day17);
    }

    function expandDay18() {
        setDay18(!day18);
    }

    function expandDay19() {
        setDay19(!day19);
    }

    function expandDay20() {
        setDay20(!day20);
    }

    function expandDay21() {
        setDay21(!day21);
    }

    function expandDay22() {
        setDay22(!day22);
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
                        <p>The whole ceremony went through too fast, even with the weird minister’s psychedelic ravings slowing things down, and soon – pending the latter receipt of the marriage certificate – we were married! We were going to spend the rest of our lives together as man and wife, and we’d had an experience we’d never forget into the bargain.</p>
                        <p style={{marginBottom: '10px'}}>Once the ceremony was over, we needed to celebrate! We had a reservation booked at an extremely swanky steakhouse – STK – later, but we were in the mood for champagne, and we’d heard excellent things about Freemont Street, Vegas’s famous downtown where the locals enjoy themselves without the inflated prices of the strip. We stopped off in a random hotel bar for champagne first while the fanfare came in from the folks who had been watching it through Facebook. The place wasn’t great for more than a couple of glasses though – so we headed slightly down the road and went to a place we’d looked up – the exclusive Legacy Club.</p>
                        <img src={Day2Pic3} alt="Day 2 Pic 3" className="landscapePictures" />
                        <p>The Legacy Club was a cut above much of Vegas in terms of class. It conjured up connotations of the very peak of fifties elegance, a glamorous cocktail bar with an equally-glamorous patio terrace commanding impressive views of outer Vegas. We ordered two very expensive cocktails – a Sazerac for me and some delicious concoction for Steph – as soon as they opened at four in the afternoon. We had the whole place to ourselves, even when we left – which we did after our first drink.</p>
                        <p style={{marginBottom: '10px'}}>We took a cab over to STK, hungry and ready to fill our bellies. Steph had warned me this place was expensive, but my stomach lurched when I saw the menu. This would be the most expensive meal we’d have on this holiday, and probably in our lives, but while I was slightly anxious at the time, I soon calmed down and enjoyed our food. We had some excellent champagne and started out with a mouth-watering platter of lobster, prawn, and a variety of mixed shellfish on a bed of ice, alongside butter sauce and other accompaniments. Our steaks were delicious, perfectly cooked, and I learned a valuable lesson about etiquette in upscale dining – you’re not supposed to help the waiters with anything or do anything for yourself. You don’t pour champagne, you don’t hand over dishes, you are simply there to be waited on.</p>
                        <img src={Day2Pic4} alt="Day 2 Pic 4" className="landscapePictures" />
                        <p>We walked back to the Luxor, wanting to take in the city like we’d done before. Vegas isn’t the easiest city to walk through – you can’t just walk down the block, you have to navigate an endless series of walkways and promenades, and it takes twice as long as any other city. In London, with open streets and no jaywalking laws, I can get across town in no time at all, and I could have walked from London Bridge to Victoria in the forty or so minutes it took us to walk just over a mile back. But that’s no problem at all; Vegas is a lovely city to walk around in, and I’m reminded of a singular moment that wonderfully soundtracked us as we walked – a busker singing Creedence Clearwater’s <i>Have you ever seen the Rain?</i></p>
                        <p style={{marginBottom: '10px'}}>It was by all counts an amazing wedding day. We’d each found our soulmate and the person who we wanted to spend the rest of our lives with - and now we had an amazing adventure to look forward to!</p>
                        <img style={{marginBottom: '20px'}} src={Day2Pic1} alt="Day 2 Pic 1" className="landscapePictures" />
                    </div>}

                    <div onClick={expandDay3} id="day3Expander" className="headings">
                        <h4 className="dayHeader">Day 3</h4>
                        <h5 className="dayLocation">Las Vegas</h5>
                    </div>

                    {day3 &&
                    <div className="days" id="day3">
                        <p>Day 3 was important for two main reasons. Firstly, it was our last day in Las Vegas – tomorrow we’d be setting off on a long journey to Salt Lake City. But secondly, we were going to be doing something I’d looked forward to for the longest time – shooting guns! Back in California 2019, I’d been looking for a decent gun rental place, but I hadn’t gotten round to it. This time, Steph had very kindly booked a shooting experience for my birthday present, and we’d shortly be taking a ride in a military Humvee to an awesome shooting experience by a company called Battlefield Vegas.</p>
                        <p style={{marginBottom: '10px'}}>I wanted to ride on the back of the Humvee when it arrived, which would prove scarier than I thought. With the heavy camo decals on the vehicle and the desert surroundings, I really felt like we were driving through downtown Baghdad as a two-person platoon. It was boiling hot by the time we got out into the open and I’d slathered factor 50 all over myself, terrified of having my usual reaction to too much sunburn too early in the holiday.</p>
                        <img src={Day3Pic1} alt="Day 3 Pic 1" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>Battlefield Vegas wasn’t just a shooting range; it had an absolutely impressive array of decommissioned military machinery, from Apache helicopters to Sherman tanks. You could ride each one (I mean a static ride of course, we couldn’t take them on manoeuvres) and we got some great photos from various cockpits.</p>
                        <img src={Day3Pic2} alt="Day 3 Pic 2" className="landscapePictures" />
                        <p>Once we were done marvelling at the equipment, we went inside. The place had an impressive collection of guns of every time, from Civil War-era Winchester rifles to P90s, that assault rifle that looks like it’s from the future. We checked out the shop while we waited to get called in. I saw lots of what I’d call casual right-wing indicators, which are a lot more prevalent in the US than the UK – most of it Second Amendment, such as diatribes against gun control. It wasn’t over the top, but gun culture doesn’t attract an overly liberal breed of people.</p>
                        <p style={{marginBottom: '10px'}}>It was time for us to shoot. Our instructor was Alan, a former squaddie who’d done tours in Iraq and Afghanistan. He was a nice guy, and professional, and like me, had nothing but disdain for wealthy Saudis. That sounds especially random, but it came from him explaining to us at length about some of the rows he’d had with Saudi clients who didn’t like him touching their wives while teaching them to shoot. We easily fell into the category of ‘Europeans who I normally associate as anti-gun hyperliberals but are actually very interested in guns and are keen to shoot’ for him, so I think he liked us.</p>
                        <img src={Day3Pic3} alt="Day 3 Pic 3" className="portraitPictures" />
                        <p>After we were done, we took another Humvee ride to the Sahara, where we’d stayed back in 2019, back when it had been temporarily renamed SLS. It wasn’t nostalgia that brought us back through – the place had been a fairly common point of retreat last time when we wandered into a casino with high table minimums, as around half of the casino had five dollar minimum bets. This was important – the little bit of gambling we’d done so far had revealed a slightly disheartening pattern; Vegas was out to bleed us dry. The table minimums, whether in roulette or blackjack – they were always slightly higher in Blackjack but could go down as low as three or four dollars on the roulette – had jumped to fifteen dollars minimum, with many a lot higher.</p>
                        <p>It made sense from a business point of view. The big casinos must have come close to going broke during the pandemic, and if someone had already signed on to spend more than a day or so in the city, it was a given that they’d still play some hands even if they had to dip further into their bank balances to pay for it. But I can say that, in addition to the amount of times we’d been to the city already, was the reason we decided we wouldn’t come back to Vegas.</p>
                        <p>The Sahara was a bust. Table minimums were just as high here, and while some people had decided to just bite the bullet and start gambling, we decided to leave it until later. We were hungry, and we had a close eye on a McDonalds we’d been to around the corner last time. The walk over was a lot more intimidating than we remembered; we’d seen lots of homeless and junkies around here last time, but this time they were on the move. I didn’t feel directly threatened, it was broad daylight after all, but some of the faces we passed looked like they were one bout of withdrawal symptoms away from mugging you for a score. It was only a short walk away though, and we enjoyed a hearty meal before deciding to get an Uber back to the Luxor for a leisurely go on the much-cheaper video roulette machines, as well as to have a swim.</p>
                        <p>I’d never been more glad that we had arrived at the end of the US school holidays as opposed to earlier in the summer. The swimming pool was crowded by an unseemly blend of young kids and their parents, and party groups in their twenties sunning themselves and playing ball games. The vibe was completely off, and we got semi-told off by a member of staff due to us moving our sunbeds close to the poolside where it was shady.</p>
                        <p>We didn’t stay long. We got dressed, hung around on the video roulette, while we waited for the evening. We had tickets to see the Blue Man Group, who were in residence at this very hotel, and we were both excited. Our original plan had been the Jew Man Group, a piggyback gimmick with comedy in place of a visual show, and while we would eventually see them on our return trip to Vegas, we’d managed to grab the actual main event. We won some money, having a couple of drinks – spaced out by the fact that three and four dollar tips to the waitresses didn’t quite cut it anymore – before heading to Fat Tuesdays. Fat Tuesdays is an alcoholic slushie popup that has popular cocktail flavours like Margarita and Pina Colada. We got our slushies in a sports bottle which we could later return to fill for a discount, and we kept these two all through our trip, establishing them to be handy water bottles on the road.</p>
                        <p>The evening was drawing on and it was time to head to the Blue Man Group. It was a psychedelic setup with lots of atmospheric lights before the show started. The auditorium was smaller than I imagined with how big their own individual building looked compared to the Luxor, but we got good seats and were on time. Which was lucky – they highlight latecomers pretty hard.</p>
                        <p>I’d had an inkling that I wouldn’t like the show in advance, and I’d thrown up a few lightweight objections when we’d made the decision to book. I don’t particularly like visual comedy, and the snippet I see of what a typical BMG performance looks like – lots of synchronised instruments – didn’t seem like it would get my interest. Of course, Penn and Teller are quite visual, as befits magicians, but I had two things on my side there – one, I’d liked their magic on and off for quite some time, and two, I’d recently had a colleague sing their praises to me before we decided to book.</p>
                        <p>So when their set got going and I found myself a bit underwhelmed, I kept it to myself for a while. They were all style and no substance, and I couldn’t have cared less for the manner of their style. It was lots of quirky moves and showing off, and I cared neither for the showboating nor for the music they were making. Shortly after I discovered something – Steph wasn’t enjoying it either! We were both quite bored, wishing we’d spent our last night in Vegas doing something else. What really put the final nail in the coffin was an utterly grotesque act which included an audience member – the only bit of audience participation I’d ever outright refuse to do if asked – and it involved some weird-smelling putty they ‘ate’ as Chinese food from the box, then vomited grossly outward, then scooped back up and ate again. Vomit stuff turns my stomach at the best of times, and I was completely repulsed by this. I don’t have a weak stomach when it comes to most things, especially horror, but nausea-fuel is a particular weakness of mine. The display ruined my appetite, and even though I would have otherwise been quite hungry afterwards, I couldn’t even think about eating, and the last thing in my stomach that day had been the McDonalds lunch.</p>
                        <p>We stayed to the end but perched ourselves right near the exit, and headed out as soon as they finished. I understand that people enjoy the Blue Man Group and for lots of people it’s a once-in-a-lifetime show, but we both found it underwhelming. We didn’t dwell on it for too long though we were too excited. Tomorrow morning we’d be picking up our rental car and hitting the open road. Our first day would be a long journey to Salt Lake City, our essential conduit for the steady trip north, and we were both very excited about hitting the open road, with a touch of nervousness on Steph’s part as it was the first time in three years she’d driven in the States. She’d done an amazing job in Scotland last year, but nerves were understandable. We’d be back to Vegas at the end of the journey, a thought I had absolutely no intention of allowing into my head.</p>
                        <p>We fought through the excitement and managed to get a solid night’s sleep for the journey tomorrow.</p>
                    </div>}

                    <div onClick={expandDay4} id="day4Expander" className="headings">
                        <h4 className="dayHeader">Day 4</h4>
                        <h5 className="dayLocation">Salt Lake City</h5>
                    </div>

                    {day4 &&
                    <div className="days" id="day4">
                        <p style={{marginBottom: '10px'}}>We woke up nice and early the next morning and got ourselves packed, washed, and ready. We had time to kill, so went down to the video roulette again with our suitcases perched near us. We picked up the car from the valet parking at ten in the morning – it was a white Nissan Versa which seemed in quite good nick, despite some paint that had worn away around the tires. We took pictures of every square inch of the car before we loaded it up, and Steph took it onto the I-15, that gigantic highway that stretches all the way from the Mexican to the Canadian border.</p>
                        <img src={Day4Pic2} alt="Day 4 Pic 2" className="landscapePictures" />
                        <p>Steph regained her confidence naturally following a few moments of uncertainty, very much in the same frame of mind she’d had when driving around Cali. I was adjusting slightly worse to the car, however; the air-con wasn’t very strong, the sun was beaming down on my side, and the car became a hotbox quite quickly. It was unbearable at first, and I was probably unbearable for it, but soon I got used to it and was able to stay cool.</p>
                        <p style={{marginBottom: '10px'}}>The Fifteen took us through untold deserts on our journey to the border of Utah. When we’d first arrived in the Mojave, I’d come to the same conclusion as last time; it was less a sandy, featureless landscape like the Sahara, and more a rocky, stony shrubland like the Jornada del Muerto or the Sonoran over in Cali. Going northeast, however, I could tell I was wrong. The desert on either side of the highway was sandy, and very red in many parts. It was a beautiful sight after spending three days in the big city.</p>
                        <img src={Day4Pic3} alt="Day 4 Pic 3" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We saw a lot of what I recognised as Vegas’s satellite towns on the way. These are quite a random sight. They spring up everywhere as more and more casino and city staff get hired, and are known for being quite dead places with no culture of their own; no bars, no restaurants, no arts, just a few rows of brand-new houses that looked like scaled-down McMansions. I’m aware that description could apply to lots of suburb towns orbiting big cities, but I feel as if these places make special effort not to bother to make those towns entertaining when the world capital of entertainment is nearby.</p>
                        <img src={Day4Pic4} alt="Day 4 Pic 4" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>It wasn’t too long before we were approaching the Utah border. Each state really wants you to know that you’re going there, and I made sport of snapping photographs of each state line sign as I went. I didn’t get everything on the trip sadly, but I was glad to start our journey off on the right foot.</p>
                        <img src={Day4Pic5} alt="Day 4 Pic 5" className="landscapePictures" />
                        <p>Utah didn’t transform our scenery immediately, to Steph’s minor disappointment. We were still driving through a similar desert. I said that they don’t design state barriers around changes in landscape, but it would have been quite cool to see an immediate change. It wasn’t too long before the desert started to shift though. The sand was lighter, there was more vegetation, and it didn’t take us long to realise that we’d shifted an hour ahead. I said to Steph later in the evening that when we crossed the state line, we changed both time and religion; we were now in Mormon country.</p>
                        <p>We stopped at the midway point, a tiny little town in southwest Utah called Beaver. It had a couple of small streets, a gas station (which I’ll generally call it for the rest of this account even though it is really a petrol garage) and a little Mexican restaurant. It was a rinky-dink little place, tiled in a way that reminded me of my old school toilets, but with a friendly older lady running it. I ordered hard tacos, not realising I was actually ordering taquitos, a similar dish with a thick outer shell, and Steph got Chimichangas. The portions were gigantic, and it’s a rare day where I don’t finish my food, but I ended up taking quite a few of the taquitos with me.</p>
                        <p style={{marginBottom: '10px'}}>We topped up gas, which due to the international restrictions of our Revolut card we came to develop a system for – I’d go into the station shop first, top up a preset amount, then come back and start scrubbing at the front of the car while Steph pumped gas. The amount of insects that get smashed on your car when driving out west is insane – it hadn’t been so bad in California, but out here in Utah, our bonnet was a Jackson Pollock of colourful insect splats. I always got slightly grossed out by this task, but I quite liked topping up gas; I liked seeing the range of reactions the cashiers got to an English guy. Sometimes they’d be completely nonplussed, sometimes they’d be surprised or confused but took pains not to show it, other times they leaned right into it and would ask where I was from. They were generally good for a chat or possibly a banter, in the type of banter Americans are good at, without the inherent meanness of British bants.</p>
                        <img src={Day4Pic6} alt="Day 4 Pic 6" className="landscapePictures" />
                        <p>There were bigger and bigger towns on the approach to Salt Lake City, but as soon as we got nearby, the big towns in the area – Provo, West Valley City, Jordan, Bluffdale, American Fork – blended together to form one continuous metropolitan area that stretched all the way to SLC. They were bisected quite sharply by the Fifteen, which especially when it came to Provo looked like it had been steamrolled right through the centre of town. I’d heard about Provo – it tops the charts as the happiest city in the United States, and while I’d found it difficult to drill down why, it was originally one of my stops. Though seeing it in action, I doubted I’d missed much.</p>
                        <p>Salt Lake City was a very different beast to the cities we’d seen so far. As far as big cities are concerned, I’ve been to Vegas, LA, San Francisco, Portland and Seattle, and every single one of them had a USP. Gambling for Vegas, Hollywood for LA, the Bay for San Francisco, Portland’s whole entire beatnik vibe, and green spaces and music for Seattle. Salt Lake City had no distinctive USP. You might say that the Latter Day Saints are the USP, but that’s only a small part of the city centre; the rest of the place is nondescript.</p>
                        <img src={Day4Pic1} alt="Day 4 Pic 1" className="landscapePictures" />
                        <p>We found our hotel for the next two nights, the Ramada. After the relative luxury of the Luxor, it was quite a big let-down. It was a very low-level corporate type of motel, the kind of place that the less-successful travelling salesmen stay while on business in the city. But the room was okayish, nice and spacious, and we weren’t too far from the centre of town.</p>
                        <p style={{marginBottom: '10px'}}>We showered and changed and got ready to head out for the evening. I wanted to check out Temple Square, the headquarters of the LDS, where there was a museum that taught all about church history. I knew that the Mormons had had an interesting history; being kicked from pillar to post by the government and angry locals, all the way from the east to Utah, they’d actually fought wars against the US army before, and were fiercely independent. We arrived a little late, and couldn’t find the place, so we headed out of the parking and had a walk around town.</p>
                        <img src={Day4Pic7} alt="Day 4 Pic 7" className="landscapePictures" />
                        <p>The place reminded me very much of a city from the late 1900s, with its antique trams, broad streets, and lots of gothic and art deco buildings among the more modern constructions. It was clean and pretty, but we saw quite a few homeless around, grouped up in that same intimidating way we’d seen back in Vegas.</p>
                        <p>We wandered the streets, getting hungry, looking around for something to do. We stopped off at a souvenir shop and bought a few bits; we’d decided to get a fridge magnet for every state we stopped in, and we bought a few other bits besides. We got chatting to the clerk, who gave us a heads up about a spot to check out, Big Cottonwood. We then went to a bar and sat outside; it was quite busy and overpriced, but we got to do some great people-watching as we had a beer. We were quite hungry at this point, and having seen a few ramen places – Steph is a huge ramen fan – we set off to find one.</p>
                        <p>It was unfortunately futile – everywhere was either closed or had sold out of ramen. SLC is one of those early-evening cities where everything closes up around the nine PM mark. We gave up, got in the car, and went to In N’ Out burger for a takeaway, which we ate in our hotel room. Then, with a hell of a long journey behind us, we got some sleep. </p>
                    </div>}

                    <div onClick={expandDay5} id="day5Expander" className="headings">
                        <h4 className="dayHeader">Day 5</h4>
                        <h5 className="dayLocation">Salt Lake City</h5>
                    </div>

                    {day5 &&
                    <div className="days" id="day5">
                        <p>Before we journeyed north tomorrow, we had a full day to spend around SLC. We were going to factor in Big Cottonwood as of yesterday’s recommendation, but one spot we both really wanted to go to was Antelope Island. This island – actually a peninsula – lies on the Great Salt Lake and is a fascinating wildlife refuge and hiking spot. We grabbed a quick breakfast at the hotel – a grab back with convenience-store pastries and a coffee – then drove over.</p>
                        <p style={{marginBottom: '10px'}}>The Great Salt Lake is a strange and beautiful sight. It’s very light blue, aquamarine-coloured, and completely still. There are no waves, no ripples, no choppy waters. The only breaks from the perfectly-crystalline surface are the salt deposits near the shore, which form a sort of Aurora Borealis effect.</p>
                        <img src={Day5Pic1} alt="Day 5 Pic 1" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We started our journey by heading over to the Buffalo Point trail, one of the island’s major short hiking trails, a light incline with some good views at the top. The last time we’d hiked had been Scotland, and Steph would be the first to admit it wasn’t her finest moment hiking – she was able to cope with the sharp incline of hikes such as the Old Man of Storr on Skye, but had to rest quite often. I had better general endurance at the time but my overall fitness was quite poor. This time, however, we were a relative fitness machine between the two of us – we’d been going to the gym for the last three months. As soon as we got onto the trail, Steph was a powerhouse, leading the way and breaking ahead. The trail was narrow but well-beaten, with long grass surrounding us on either side.</p>
                        <img src={Day5Pic2} alt="Day 5 Pic 2" className="landscapePictures" />
                        <p>I got nervous about the long grass. Antelope Island, like most of the southwest, was home to all sorts of breeds of spider, including – to my horror – my arachnid bête noire, the tarantula. As a result, I scanned every patch of grass and hedge, not to mention our path in case one of the hideous creatures crawled over it. I didn’t see any tarantulas – throughout the whole trip, thankfully – but I did see one very unusual spider that I’d never seen before – a strange, teal coloured one that even a committed arachnophobe can confirm looked quite interesting. </p>
                        <p>We got to the top in no time, Steph a bundle of fitness-based energy, and surveyed the view. We could see a large stretch of the Salt Lake ahead of us, pulling into the distance, with more of those strange salt formations going along with it. We took in the view properly and took a slow walk down the sloped path.</p>
                        <p style={{marginBottom: '10px'}}>On our way to the ranch we saw buffalo. Actual, living buffalo right out of a western film. I’d seen them before, on a farm in Wiltshire (courtesy of a farmer with a big obsession with Native Americans) but seeing them here, right in their natural habitat, was something else entirely. There were dozens of them scattered among the sandy plains, formed into loose family units, with calves trailing their mothers as they lumbered and grazed.</p>
                        <img src={Day5Pic3} alt="Day 5 Pic 3" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>We would be fortunate enough to see lots of buffalo on our travels, but this group definitely left a big lasting impact on us. We drove on to the ranch, taking a walk over to the barn area first. It was a fantastic bit of living history, all tastefully cluttered with tools and equipment like saddles, anvils, and a whetstone. Lots of the display was interactive, including – to our childish delight - an old butter churn, which we were keen to try out.</p>
                        <img src={Day5Pic4} alt="Day 5 Pic 4" className="portraitPictures" />
                        <p>The ranch-house was slightly more Spartan than I’d thought. When you think of ranch houses, you think of profligate cattle-baron mansions, which is silly when you think that cattle-barons were only a tiny percentage of ranch owners, and that most of them weren’t that better off than their ranch hands.</p>
                        <p style={{marginBottom: '10px'}}>It was a fascinating house, less cluttered than the barn but filled with all sorts of interesting details. What I really respected about the place was that they didn’t seal off its contents as if the public were wayward children that can’t be trusted with nice things. There wasn’t a ‘please don’t touch’ sign to be found, and I was able to peruse the house’s bookshelves at my leisure – I got way too invested in an early twentieth century etiquette guide for young well-to-do ladies and gentlemen, and I – much like all of the ranch’s visitors who must have thumbed through it and other volumes – treated it with the utmost respect. There’s a lesson there.</p>
                        <img src={Day5Pic5} alt="Day 5 Pic 5" className="landscapePictures" />
                        <p>The historians in charge of maintaining the place clearly had a slightly twisted sense of humour – there were dolls of varying and increasing creepiness scattered all over the place, particularly on the beds. Their glass eyes were still and lifeless but seemed to follow you all around the room for some reason. I’m sure we had at least one nightmare a piece about them.</p>
                        <p>We saw the bunkhouses that were shared by workers as well as the stables. The whole place was very impressive, a real piece of classic Americana. I struggled to see how anyone could set up a business in such intense heat, let alone an outdoorsy business like a cattle ranch, but the place would still have been a little slice of heaven to the ranchers living here – but probably not the ranch hands.</p>
                        <p>I had one major desire on Antelope Island – I wanted to swim in the Great Salt Lake if such a thing were possible. For the last major leg of our time on the island we drove over to Bridger Bay, one of Antelope’s major beach areas. If you’re picturing parasols and a beach bar, you’re way off the mark – it was a grassy, sandy desert with a snack bar that was little more than a large shack. </p>
                        <p>We parked up and set off walking to the lake. It was around half a mile to the water’s edge, which would have been a gentle stroll anywhere else, but across that tract of boiling white sand in 40 degree weather was like trekking the Sahara in a mankini. Shortly, we reached the water, and what I’d expected – beautifully cool water I could swim out into – was quite sharply subverted. There was a solid crust of pure salt granules, and as soon as I stepped out onto it, it gave way to hot salty mud below. My feet were quickly caked in that horrible stuff, and I retreated from the lake like it was the filthy Thames.</p>
                        <p>My dreams of swimming in the Great Salt Lake dashed, we decided on a tactical retreat. The walk back felt like torture despite being one of the shortest distances we’d traverse throughout our holiday. As my feet were slathered in mud, I didn’t put my shoes back on, leading to utter agony of the feet over sizzling white sand and salt. Eventually I gave up, putting a pair of socks – which I would later dump – over the mud and my hiking boots over my socks. With my boots on, the walk back was slightly more tolerable, but I was still running on empty by the time we got back.</p>
                        <p>That snack bar – a place called the Island Buffalo Grill – was an unbelievable godsend. It was a sparse place, with concrete floors and Soviet metal benches, but if there is one place in this world that has a greater understanding of the needs of its clients, I haven’t encountered it yet. What I mean by this is that they had ice water; real ice water, the kind that would give you hypothermia after a few gulps in any other climate. We had icy Gatorade too, and I had a snowcone, all of which were designed with maximum relief in mind.</p>
                        <p style={{marginBottom: '10px'}}>We headed away from Antelope Island and back to the hotel so I could get myself cleaned up. We drove over to Big Cottonwood, the canyon that had been recommended by the gift shop guy. It was about an hour’s drive outside the city limits through mountain roads that could only be described as ‘Shining-esque’. Big Cottonwood is a popular ski resort, which was a surprise to me because I can’t imagine Utah being a major player in snowy sports. We stopped off at Silver Lake, a beautiful nature spot, which included a five-mile looped hike around the lake itself. We got chatting to some older folk out on the lake, one of whom was a Brit by birth, born in Southampton. I remember that because I followed it up with “I love Southampton” which is a darn dirty lie, considering that Southampton is a sleazy dockers’ town with a major chav infestation. His wife was curious about where Steph was from in a way that was too adorable to be considered racist by either of us.</p>
                        <img src={Day5Pic6} alt="Day 5 Pic 6" className="landscapePictures" />
                        <p style={{marginBottom: '10px'}}>The hike was absolutely beautiful, and our new friend hadn’t steered us wrong. I couldn’t believe that a place like this could exist in a state that I assumed was mostly desert. There was a thick pine forest all around the lake and the whole thing was very tranquil. We saw deer in the distance, and most people didn’t get far enough around the hike to make things too crowded. Around two-thirds of the way through, one of the serious hikers directed us to a small diversion path where a moose and her calves could be seen. There were a small group of us observing as they grazed. The mother moose was gigantic; much like everything else in the American wilderness they can kill a fully-grown man with the minimum of effort, and that’s without even using their fearsome horns. That proved too much for some of the observers, who tried to get slightly closer, but for us I was just content to watch them do their thing. They’re absolutely incredible animals.</p>
                        <img src={Day5Pic7} alt="Day 5 Pic 7" className="landscapePictures" />
                        <p>After completing the loop of our hike, we drove back into central SLC. We saw our friend who’d recommended Big Cottonwood packing in some bits from outside his gift shop after a long shift, and he was delighted that we’d got so much out of it. We had one singular goal in mind – ramen. Steph was desperate to experience one of the ramen places we’d missed out on, and I was getting hungry. We found a quirky little place that served delicious ramen, and turned in reasonably early. We had another long drive tomorrow, just under five hours in total, going to the very north of Utah, through Idaho, and into Montana, with our final destination being the town of West Yellowstone, which would be our base as we ventured into the most famous national park in the US – Yellowstone.</p>
                    </div>}

                    <div onClick={expandDay6} id="day6Expander" className="headings">
                        <h4 className="dayHeader">Day 6</h4>
                        <h5 className="dayLocation">West Yellowstone</h5>
                    </div>

                    {day6 &&
                        <div>
                            <p style={{marginBottom: '10px'}}>Having spent some time in the Pacific Northwest, I’d heard quite a bit about Idaho. On the other hand, it was described by all as an untapped, beautifully isolated wilderness, an Alaska of the Midwest. That was only one side of it, though. The progressives I’d spent my time with in Oregon had described the place as a haven for right-wing lunatics, and I also knew – both from a documentary I’d watched and an offhand joke in an episode of Frasier – that the state was full of extremist anti-government militias. A part of me was worried, considering that we were coming to the place as an interracial married couple, but another part of me wasn’t – I’d said coming to America that I’d love to actually talk to some right-wingers, especially Trump supporters, and see how they tick. Having been to some pretty rednecky places, chief of which was probably the town of Bridgeport back in California, and I still maintained the same thought – even racist rednecks don’t care anything about where you come from as long as you don’t act any different from them. This trip would prove this theory right for some people and wrong for others – but neither happened in Idaho.</p>
                            <img src={Day6Pic2} alt="Day 6 Pic 2" className="landscapePictures" />
                            <p>That’s not to say that the place was a bastion of tolerance; we saw lots of signs of the state’s support for Trump along the way (some of them quite literal) and I learned to my shock that Ammon Bundy, part of that infernal Bundy clan that fought the Bureau of Land Management and led an armed occupation of a federal wildlife refuge over in Washington, was running for governor and had signs out all over the place. But since he didn’t win, and since we saw worse Trump signs in Montana and Wyoming, I can’t quite declare it a Neo-Nazi stronghold.</p>
                            <p style={{marginBottom: '10px'}}>The state is as wild as described, though. You can drive hundreds of miles without passing so much as a tiny roadside town, and the wild mountains and forests stretch as far as the eye can see. If you were to wind up in one of those forests, it might be a good week’s worth of walking before you found the highway again. We did pass a few towns in our massive drive, though; Malad, Downey, Pocatello, and a few more. They were pleasant places, but we’d already scouted out our midway stopping point – a picturesque little town called Blackfoot.</p>
                            <img src={Day6Pic3} alt="Day 6 Pic 3" className="landscapePictures" />
                            <p style={{marginBottom: '10px'}}>I’ve been to a good few little towns across the West Coast, some with Steph some without, and to this day I struggle to think of a nicer place than Blackfoot. It’s pulled right out of a picture book, or an Edward Hopper painting, or a Stephen King novel without the creeping sense of menace. Its Main Street has a quaint, historical feel to it, and it boasts one of the weirdest museums I’ve seen since a certain phallic one in Reykjavik – the Idaho Potato Museum. Idaho is one of the biggest potato growers in the world, and Blackfoot is known informally as the Potato Capital of the World. As a part Irishman, that was either going to pique me or pique my curiosity, but the place was positively-reviewed enough that I wouldn’t have wanted to miss it.</p>
                            <img src={Day6Pic4} alt="Day 6 Pic 4" className="portraitPictures" />
                            <p>The Idaho Potato Museum marks its presence with a huge sculpture of a jacket potato, which is a quirky example of what one could expect from the place. It’s run by one family, who both grow and cook potatoes near the town. The museum turned out to be a very thorough collection, with a well-researched history of potato growth in Idaho throughout the decades, from early cultivation, through to Idaho’s potato-based culture of the Twentieth Century. As an Aspie, I can thoroughly respect a bizarre devotion to a singular object of study, and if my family’s fortune had been made by the humble potato, I’d want to scream about it to the rafters too.</p>
                            <p style={{marginBottom: '10px'}}>After the museum, we went to get some food, going to an awesome barbecue place we’d spotted earlier. It was set in a very basic brick building with a corrugated steel roof, but if American food TV is to be believed, these features mark a place as a true gem. I ordered a Hawaiian pineapple pork brisket and Steph got a barbecue pork ‘slaw brisket. I instinctively avoid Hawaiian on other dishes, like pizza, but barbecue seems to be the generally accepted exception to the poor taste rule. The dishes were delicious. The place itself was run by war veterans and seemed to hire them exclusively. We saw a lot of the same ‘pseudo-right’ imagery as the shooting range, ie lots of second amendment stuff but nothing outwardly conservative. From all the photographs, the place seemed to have a real solid place in the community, and I could see why.</p>
                            <img src={Day6Pic5} alt="Day 6 Pic 5" className="landscapePictures" />
                        </div>}

                        <div onClick={expandDay7} id="day7Expander" className="headings">
                        <h4 className="dayHeader">Day 7</h4>
                        <h5 className="dayLocation">Yellowstone National Park</h5>
                    </div>

                    {day7 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                    <div onClick={expandDay8} id="day8Expander" className="headings">
                        <h4 className="dayHeader">Day 8</h4>
                        <h5 className="dayLocation">Helena</h5>
                    </div>

                    {day8 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                    <div onClick={expandDay9} id="day9Expander" className="headings">
                        <h4 className="dayHeader">Day 9</h4>
                        <h5 className="dayLocation">Helena</h5>
                    </div>

                    {day9 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                    <div onClick={expandDay10} id="day10Expander" className="headings">
                        <h4 className="dayHeader">Day 10</h4>
                        <h5 className="dayLocation">Glacier National Park</h5>
                    </div>

                    {day10 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay11} id="day11Expander" className="headings">
                        <h4 className="dayHeader">Day 11</h4>
                        <h5 className="dayLocation">Glacier National Park</h5>
                    </div>

                    {day11 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay12} id="day12Expander" className="headings">
                        <h4 className="dayHeader">Day 12</h4>
                        <h5 className="dayLocation">Red Lodge</h5>
                    </div>

                    {day12 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay13} id="day13Expander" className="headings">
                        <h4 className="dayHeader">Day 13</h4>
                        <h5 className="dayLocation">Red Lodge</h5>
                    </div>

                    {day13 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay14} id="day14Expander" className="headings">
                        <h4 className="dayHeader">Day 14</h4>
                        <h5 className="dayLocation">Cody and Driggs</h5>
                    </div>

                    {day14 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay15} id="day15Expander" className="headings">
                        <h4 className="dayHeader">Day 15</h4>
                        <h5 className="dayLocation">Grand Teton National Park</h5>
                    </div>

                    {day15 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay16} id="day16Expander" className="headings">
                        <h4 className="dayHeader">Day 16</h4>
                        <h5 className="dayLocation">Salt Lake City</h5>
                    </div>
                    {day16 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay17} id="day17Expander" className="headings">
                        <h4 className="dayHeader">Day 17</h4>
                        <h5 className="dayLocation">Bryce Canyon National Park</h5>
                        </div>

                        {day17 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay18} id="day18Expander" className="headings">
                        <h4 className="dayHeader">Day 18</h4>
                        <h5 className="dayLocation">Pipe Springs</h5>
                        </div>

                        {day18 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay19} id="day19Expander" className="headings">
                        <h4 className="dayHeader">Day 19</h4>
                        <h5 className="dayLocation">Valley of Fire State Park</h5>
                        </div>

                        {day19 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay20} id="day20Expander" className="headings">
                        <h4 className="dayHeader">Day 20</h4>
                        <h5 className="dayLocation">Las Vegas</h5>
                        </div>

                        {day20 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay21} id="day21Expander" className="headings">
                            <h4 className="dayHeader">Day 21</h4>
                            <h5 className="dayLocation">Home</h5>
                        </div>

                        {day21 &&
                        <div>
                            <p>TBC</p>
                        </div>}

                        <div onClick={expandDay22} id="day22Expander" className="headings">
                            <h4 className="dayLocation">Our wedding vows</h4>
                        </div>


            </div>
        </div>
    );
    }