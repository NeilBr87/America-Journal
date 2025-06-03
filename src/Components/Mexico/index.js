import './style.css'    
import {useState} from 'react';

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
                            <p>We originally had just around a 16-day trip, but we realised it clashed with the wedding of our friends Kirsty and Lauri. So we decided on a fifty fifty split between Cancun and Mexico City and an internal flight between. We were doing our all-inclusive before Mexico City, which at first glimpse seemed out of order - the restful retreat coming *before* the hectic city break - but we first realised made good sense as we'd be raring to go do some exploring after a few days lounging in a resort.</p>
                            <p>We structured our holidays around the Bank Holidays in April and May which made things slightly busier and more expensive but it was the best way to get the most out of SWFY's crappy holiday allowance. it didn't add too much to the cost, but as we booked everything between January and February it sure put a time restraint on things. It wasn't long at all before the day arrived, a Friday, and we made our way to the airport in the mid-afternoon. It was mid-April and things were still on the cold side, meaning we were completely unprepared for the immense heat wave coming our way.</p>
                            <p>We got to the airport in good time and lounged it. It wasn't crazy drinking time; there'd be time for that in Cancun. The flight was ten and a half hours, and we'd have passed some of that time sleeping normally, but we'd agreed to go for no more than a quick nap to keep the jetlag at bay. We arrived in the early evening and as soon as we hit the exit, we were hit with two things: The wild heat and a long line of cab companies working out of small shopfronts in a row, each braying and howling for our business, summoning us over with the unending zeal of a Jehovahs on a Sunday Morning. They were incredibly annoying, but they're a key part of it - you go and shop around until you get a good price. Though as we found out, they're all owned by the same company anyway, so it's mostly a smokescreen.</p>
                            <p>We headed towards our first hotel, the Golf Villa Inn. It was a rustic, slightly decayed 19th century colonial villa that looked like it was made of Mayan temple stone but was very comfy and had a great atmosphere to it. When we got home it was around nine at night and we weren't really feeling dinner after the inflight meals. So we got an early night's sleep ready for our first big trip the next day: Chich&eacute;n Itz&aacute;.</p>
                        </div>}
                    
                    </div>

                    <div id="expand">
                        <div onClick={expandDay2} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Day 2</h4>
                            <h5 className="dayLocation">Chichen Itza</h5>
                        </div>

                        {day2 && <div className="days" id="day2">
                            <p>Today we were to do one of four full-day excursions on the trip, and it was the one I was most excited about before going in. I'd heard about Chich&eacute;n Itz&aacute; for a while and had at least a very basic knowledge of Mayan history and culture. I knew about the grand architecture designed by people that had nothing in common with us, in an isolated part of Mesoamerica, and an advanced written language and calendar. I also knew about the brutality, about the ball games where the losing team were horrifically slaughtered (turned out there's more nuance than I thought on that one, but more on that one later), about the sacrifice of slaves, prisoners of war, and anyone who managed to get on the wrong side of the high priests.</p>
                            <p>The Mayans are a fascinating culture all in all, and the grand architecture is only the tip of the iceberg. They had a devotion to their gods that would put the Abbasid Caliphate to shame and a dedicated culture of bathing, grooming, and self-improvement. Just as they're at the bottom end of Mexico, they're at the bottom end of the map of major Pre-Columbian civilisations. Tribes above Mexico (ie Apaches, Navajo and the like) and beneath (like the Lenca and the Taino over in Cuba) have nothing really in common with this advanced group of civilisations, and there are a few reasons behind that - you've got resources, for example, like plentiful stone to build cities. But the major contender is land suitable to transition from hunter-gathering to farming, and that always kinda brings civilisation with it.</p>
                            <p>We were going to have breakfast first though, and headed out to the grand dining room and poolside area. It was early and we were the only people there. We had a couple of cups of coffee each, and while Steph had fruits, I was initially pushing to something a bit more familiar and pedestrian, if only to avoid accidentally eating something mega-spicy before spending the day on a coach sans-toilet.</p>
                            <p>After some prompting from Steph and a chili check, I went for what was definitely going to be one of the breakfast highlights of the trip, Chilaquiles. It's pronounced <i>cheela-keelays</i>, which is a lot of fun to say, and it's got salsa, tortillas, avocado, cream, and onions. It was delicious and nowhere near spicy enough to pose a problem, so I wolfed it down and we headed down the road.</p>
                            <p>We bought some water from a bodega and I bought one thing that I'd completely forgotten - some flip flops for both the beach and for the dirtier hotel rooms. We caught the coach at the nearby bus stop and set off, ready to start our adventure out of Cancun.</p>
                            <p>The Yucatan countryside is very distinct from what we're used to. It's very lush, forest verging on jungle, and apart from the road you can really get a sense of how this place would have looked a thousand years before being seen by European eyes. Our guide, a wiry older man who looked a bit like Ciar&aacute;n Hinds, gave us some fascinating facts about the Mayan pantheon, calendar, and hieroglyphs. It was a couple of hours to our first stop, the cenotes. Cenotes are these large underground lakes that you can swim in, and we'd be having our lunch and a tequila tasting in the same area. We did the tequila tasting first, and gathered around a small cabana where a large number of tequilas were laid out. The tasting guide gave an overview of the history and distillation of tequila, and also gave us some knowledge that would ruin tequila in the UK for us going forward: That only lesser tequila was generally exported, and that the reason we see tequila as a 'burning' drink is because the stuff that hits foreign shores is generally only good enough for shots nor mixers. The only burnless, sippable tequila is only available on the domestic market.</p>
                            <p>Of course, he was a salesman first and foremost, but I'd be lying if I said that the tequila I'd had before coming to Mexico was half as good as what we had over there. He was also a no-nonsense sort of guy, and an inconsiderate couple who'd been talking amongst themselves quickly found themselves on the receiving end of his ire. We listened politely, Steph intently and me doing the whole overeager active listening thing that always seems to get any speaker to look my way. We tried a couple of pure, aged tequilas which were delicious, but also tried some tequilas with chocolate, marzipan and some other surprising favourites. We thought about buying, but reasoned that we'd have lots of opportunities to buy and didn't want to carry a bottle around.</p>
                            <p>We went for lunch after and had delicious, flavoursome tacos, the first of many of the trip. There was a taco bar and we loaded up our plates. Steph stuck to the tacos while I also went to the buffet and had some delicious empanadas. After lunch, we headed over to the cenotes. At first, we thought we thought in filling our bellies we'd lost ourselves all but twenty minutes' swimming before we had to move on, but we realised that despite still being in the Yucatan and only around two hours out from Cancun, we'd somehow gone back an hour. It's like London and Birmingham being on two different timezones - though in all fairness that wouldn't be a bad thing.</p>
                            <p>We changed into our bathing stuff and headed down to the cenote. We had to wear a life jacket because due to the depth and other environmental factors, there's no buoyancy, so unless you're doggy-paddling with some gusto, you're going to sync. The water was lovely and cold, perfect after lunch in the sun. There was a wooden diving platform too, and while I didn't have the cajones to do a full blown dive into that water, it was a big enough jump in that I felt myself freefalling through the air for a couple of seconds.</p>
                            <p>We got back to our shoes and towels only to discover that, bizarrely, someone had tried Steph's sandals on. We were weirded out by that but we got to the lockers, changed, and headed back onto the bus.</p>
                            <p>Our next stop was Valladolid, and unlike Cancun, this is a real life Mexican city. Well, it's more like a large town, but it's very pretty and picturesque, with a leafy park that forms the main square. In the same city center there's a large, crumbling cathedral that dates back to the first hundred years of New Spain. There's also several picturesque bodegas and places to eat, and we helped ourselves to a delicious tamarind slushie. We only had around half an hour here, but we used it well.</p>
                            <p>It was three quarters of an hour to our primary destination - Chich&eacute;n Itz&aacute;. As we drove through Valladolid and the surrounding countryside, our guide told us more about the social division in the Yucatan between those of primarily Mayan or Spanish DNA, including all sorts of caste terms depending on how much of each side's DNA you had - naturally and unfortunately with Spanish DNA being on top. Castes like Peninsulares (born in Spain) and Criollos (their direct descendants) have historically lorded it over castes like the Mestizos (half indigenous) and Mulatos (half African). While the caste system is nowhere near as enforced today, there are apparently very exclusionist Spanish enclaves in Yucatan and other parts of Mexico that exclude others from their chuches and neighbourhoods. Of course, if you know much about the slave trade up in the USA, you'll know that they had the same stupid, racist caste distinctions, but they were less a hierarchical pyramid and more of a bar checking whether you could be a slave or not. If you're ever watching a period drama and you hear words like 'octoroon', you'll understand it's broadly the same thing.</p>
                            <p>We arrived and made our way through a small complex where the vendors were very eager to sell hats to counteract the lack of sun cover in the main compound. Within ten minutes of ticket processing we were through, where we were met by a local tour guide. He was a proud Mayan, and his ancestors probably worked very hard to keep Spanish DNA out of their bloodline, which during the formative years of New Spain was more a matter of personal defense than simple partner choice. He took us into the main compound and there it was, bang ahead of us - the temple that everyone - myself included before I visited - thinks is Chich&eacute;n Itz&aacute; itself. In actual fact, it's the Temple of Kukulcan and Chich&eacute;n Itz&aacute; is the city itself, but that's not what you're thinking when you see it.</p>
                            <p>It's very easy to be taken in by the grandeur of it. It's huge, first and foremost, and made with an ordered craftmanship that matches anything you'll see in Giza. But of course, like everything we saw, it's not a pyramid; pyramids are built as a tomb. It's a temple to living gods, not to mention the home of the high priest. You used to be able to climb up it, but then a couple of things happened: People started to chip away at the temple with their pocket knives (the scum) and a Canadian woman fell to her death from the top. It would have been amazing to see the jungle from up there, but it's not particularly safe, and we'd much prefer that the temple stands undamaged for another millennium so that countless more people can see it and keep the Mayan culture alive than get a nice photo op.</p>
                            <p>He next took us to the ballcourt, and here's where my only pre-existing knowledge comes in. You see, the Mayans played an early version of basketball, with a large stone ring being a sort of vertical hoop either side. You're able to use any part of your body - feet, knees, elbows, hips, and more - to bounce the ball to your team mates, and eventually, to your teammate on the raised platform on your side so they can go for a throw to the hoop. Pretty simple, but there's a lot more to it than that. You see, at the end of the game, one of the teams gets sacrificed. I'd assumed based on my prior reading that it was always the losing team, which seemed to make sense to me - I think football would be a lot more interesting if each team knew they faced being chopped to bits if they lost. But the truth is that in many cases, it was the winners that were sacrified.</p>
                            <p>You might be thinking that if you were playing any sort of sport where winning you would give you a painful death, you'd do your utmost to throw the game like Marcellus Wallace was waiting outside our locker room. But the truth is, being sacrificed to the gods was in many instances a huge honour, and a way to avoid a one-way ticket to the underworld. You see, despite being from two different continents and living aeons apart, the Aztecs and Mayans had a very similar afterlife concept to the Norse. In Norse myth, you are sent to Valhalla if you die honourably in battle, but you went to the underworld if you died of old age. It's very similar in Aztec and Mayan religion; the only differences being that you can equally get into the best afterlife by being a worthy sacrifice, and your host; in Norse tradition you're going to be spending some time with Hel, the beautiful and gothic goddess of the underworld, but in Aztec myth you're under the thumb of Mictlantecuhtli who is a terrifying skeletal figure whose liver hangs nauseatingly from the bottom of his spinal chord.</p>
                            <p>So if you're a Mayan noble, you can expect to get sacrificed in the event of a win, but if you're a prisoner of war, losing will see you on the chopping block. The ballgames are fascinating, and what's amazing is that the tradition (minus the bloody aftermath) has been restarted by dedicated ballplayers in the last couple of years. Whatever you can say about the Mayan culture, with its limitless brutality, strong social inequality and more, it didn't deserve obliteration at the hands of Cortes, Coronados and their ilk, and it's great to see it still be celebrated.</p>
                            <p>We explored the complex, seeing all sorts of residences and fascinating smaller temples. Our new guide gave us all the key information before letting us explore freely. By the time it was time to go we'd seen every inch of the place, and had bought a couple of souvenirs from the vendors that were everywhere here.</p>
                            <p>We napped on the coach back to Cancun, then asked the driver to drop us off in the middle of the tourist zone rather than going straight to the bus stop. We were hungry. We'd booked into a seafood restaurant but were already late - but luckily the place seemed to be empty. It was right in the middle of the party zone, and we got our first look at the place we'd be going to on our last night; Cocobongo, the famous Cancun nightclub. The music was absolutely pounding, and we were glad that it got slightly cut off by the glass doors into the seafood place.</p>
                            <p>We were very interested in the ceviche, which is very famous in Mexico and Latin America. If you're Steph and you're reading this, you can skip to the next paragraph, but if you're a friend or family member we've shared this with that doesn't know about it, ceviche is a way of enjoying seafood functionally raw; you cure it in lemon juice, which provides the absolute bare minimum of 'cooking' a dish and gets rid of the bacteria. It's delicious, fresh and flavoursome, and this place's variant was absolutely fantastic. But we tried something else here, and it would be something that we'd be enjoying a lot in Mexico; Micheladas.</p>
                            <p>Steph had heard about Micheladas in a Netflix show she'd watched about Mexican cuisine. They are an absolutely delicious beer cocktail that could reductively be described as a beer margarita. On the rim is a mix of tajin (a chili spice mix) and chamoy, a rich umami sauce very popular in Mexico. Mixed with the beer itself are all sorts of flavours; tamarind, soy sauce, Maggi sauce, Worcester sauce, or peppers. Its an absolutely delicious drink, and it's mixed with sweet or savoury snacks. We shared the ceviche and had a michelada each, which contained accompaniments like prawns and nuts. We were quite full by the end, and while the place had been deserted by the time we got in, it was very happening by the time we were done, with a band that we enjoyed listening to.</p>
                            <p>We walked around twenty minutes back to our hotel. Tomorrow, we'd be beginning a new chapter to our holiday; the resort. We'd go over in the morning and start ingratiating ourselves into resort life until we flew to Mexico City.</p>
                            <p>We got another easy night's sleep, thankfully unaffected by jetlag.</p>
                        </div>}

                    </div>

                    <div id="expand">
                        <div onClick={expandDay3} id="day1ExpandermorMex" className="headings">
                            <h4 className="dayHeader">Days 3-6</h4>
                            <h5 className="dayLocation">Cancun</h5>
                        </div>

                        {day3 && <div className="days" id="day3">
                            <p>I can take a sort of sense of pride in these journals in that, even in our downtime, we've given every day its own entry. Of course, that's not to say that every day we've been on holiday I've put into the journal; I know in my heart of hearts that I'll never write a journal now for Cuba, Italy, Norway, Iceland, Turkey, or Germany. But of the holidays that I've documented, even the days that had the most downtime have their own entry.</p>
                            <p>When it comes to our four days in the Royalton resort, I'm at a loss. I simply have to combine these days in order to have something to write about. Because or those four days, we lived the easiest life imaginable. We had the easiest schedule in the world; wake up at some indeterminate point before 10am, head to one of the fine restaurants for breakfast, head down to the beach, sunbathe, swim in the sea, drink cocktails, nap, shower, eat dinner, watch the entertainment, more cocktails, bed, rinse and repeat.</p>
                            <p>We kept fairly lubricated throughout, but we were slightly wary because of the first afternoon. We'd failed to realise the effect the cocktails were having on us. Steph was definitely worse for wear, but I was absolutely catatonic, to the point that a wheelchair was offered when Steph went to be shown the room! I'd been chatting to a guy from Coventry who was staying at a nearby hostel but pretended to be a guest when I completely blacked out, and didn't wake up for several hours. It taught us to handle the free-flowing cocktails with caution, and apart from the last night, we finished each evening tipsy at best.</p>
                            <p>The cocktails had an impressive range. We'd primarily dived into margaritas and other tequila cocktails, but they also made rum and other spirit cocktails. Food-wise, we were well--served; we had four restaurants to choose from, each delicious. There was a Mexican place, a buffet, a pan-Asian place, and a steakhouse. We went to each of of these across our four nights and defaulted to the buffet or the Mexican for breakfast.</p>
                            <p>Life was good. I did unfortunately get a bit ill, either as a result of the sunburn or the air conditioning. When it had happened in Japan the same time last year I'd considered it the height of unfairness, but this time I understood. Because for the last two years, prompted mainly by my company's annual leave, we'd gone away across the April bank holidays. And I believe fully that the reason I get ill is because I go straight to an extremely hot, humid country straight from winter and early spring, which in the UK averages out at fifteen degrees or less.</p>
                            <p>So I get an unholy combination of a bad throat from the powerful aircon, fluey symptoms from sunburn, streaming eyes and nose from the pollen, and general malaise from the humidity. I also recognised a couple of random symptoms returning from Japan like loss of appetite and the shivers. It passes, but I don't think I'm the easiest to handle when I'm at my worst with it.</p>
                            <p>We kept mostly to ourselves in those few days, but we did speak to a few people. We got on well with Pablo, the guy at the towel stand, and our concierge Samara, though she's much more customer-focused so there may have been an element of 'working' us. Guest wise, there were only two sets of guests we chatted to for more than a few minutes. The first were English, and they'd been everything I'd feared when considering a resort holiday. They were from Luton, first and foremost, which is enough grounds for a restraining order in my book. The wife never stopped talking and the husband never started. They'd been at the resort for two weeks with only minimal trips to the outside world, a feat of inertia I wouldn't have thought possible outside of some species of barnacle. But this wasn't their worst crime against humanity; that came in the admission that they didn't even like Mexican food. What possessed them to come here as opposed to, say, Benidorm I don't know, but they were here and determined to chat to everyone misfortunate enough to make eye contact with them. The woman also said that Steph &quot;didn't look English&quot; but she immediately followed up by saying that &quot;neither did she&quot; as she was Bengali and Jewish. Could have fooled me - I would have gone with &quot;white but too much sun&quot;.</p>
                            <p>The second group we met were much more our speed. They were Americans from Texas, and we bonded over music choices during a concert that was being played on the entertainment stage. They were a couple, Dan and Amanda, and their friend Chad. They were in their late forties and all worked in natural gas. Steph chatted to the couple and I chatted to Chad.</p>
                            <p>For some reason, whenever I chat to an American guy over drinks, he always ends up baring his soul to me. I remember the guy who took all of three minutes to tell me he was in Vegas to search the morgues for his drug-addict sister who he suspects came to the city to die. In Chad's case, he had a lot of self-loathing and lack of confidence issues, despite being a manager of a great team for a successful company. Tipsy enough to speak plainly, I gave him some general advice - you're too hard on yourself, Dunnings-Kruger is the curse of successful people, that sort of thing. He ate it up, acting like I was importing vital truths and seeming to brighten up considerably, and shaking my hand every two minutes. If I'm being slightly unfair, I'd say part of the reason my generic, untherapeutic advice ('you're doing great by those kids', 'you should be proud of your service', 'I'm sure your sister will turn up just fine') seems to go down like such as truth bomb is that Americans are much better at venting their problems than listening and giving advice.</p>
                            <p>We took the party to the rooftop where our friends had a cabana - these guys were not averse to additional expenditure. They ordered so many drinks, from Patr&oacute;n to goddamn Veuve Clicquot - whom we'd been lucky enough to visit back in Rennes - which was insane considering that regular drinks, including cocktails, were included. We got drunk and hung out in the cabana - I honestly can't remember what we talked about, but the thing I remember is that they are coming to London in a couple months and we may have definitely offered them a place to stay.</p>
                            <p>And with that, our few days of idle excess were over. They'd gone too quick, but we'd been glad of the lazy break. Tomorrow it was off to Mexico City. To the culture. To the actual Mexican people I'd spent most of the holiday so far with fellow tourists, and I was eager for a break, and I think Steph - though she's now very eager to go back to Cancun - felt the same.</p>
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