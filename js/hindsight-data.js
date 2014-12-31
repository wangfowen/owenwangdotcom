var dir = "/images/2013/";

var imgs = [
      {
        width: 819,
        height: 547,
        src: "tandem_bike.jpg",
        month: "jan",
        desc: "Tandem biking. Crazy hill -> Golden Gate Park -> Land's End -> Golden Gate Bridge -> Sausalito. Beach parkour. Stinking Rose."
      },
      {
        width: 710,
        height: 419,
        src: "berkeley.jpg",
        month: "jan",
        desc: "Berkeley hike. Campus tour. Fancy french potatoes. Cheeseboard."
      },
      {
        width: 723,
        height: 540,
        src: "light_sabers.jpg",
        month: "jan",
        desc: "Light sabers. Shady alley. Fluorishes, choreography. Contagious laughter meditation. Indian buffet."
      },
      {
        width: 648,
        height: 486,
        src: "j_bday.jpg",
        month: "jan",
        desc: "SF Crew Dinners (Jennelle's birthday at Z&Y). Lori's Diner. Denny's. Coco Bang. Cafe Chaat. Osha Thai. Mehfil."
      },
      {
        width: 503,
        height: 334,
        src: "bungee.jpg",
        big: true,
        month: "feb",
        desc: "Bungee jumping. Ping pong team. Hotel didn't believe in Foursquare. Roxanne's fail water toss. Broken windows. Super sketch honk horn when ready system. Romain graceful swan dive. 妈妈我爱你. Bear paw throw Joyce. Can we toss the canoe? Devour ALL the crackers. Lower Yosemite Falls. The start of the Yes Group and infinity hugs."
      },
      {
        width: 960,
        height: 540,
        src: "laser_tag.jpg",
        month: "feb",
        desc: "Outdoor laser tag - little kids too pro. Pho Kim Long. Michael Chang bill split. 4th St Bowl. Sushi Tomi."
      },
      {
        width: 395,
        height: 491,
        src: "hunt.jpg",
        month: "feb",
        desc: "AppDynamics Kickoff day - Scott McCain guest speaker, city-wide scavenger hunt. Tennis at night. Pawkwan."
      },
      {
        width: 779,
        height: 447,
        src: "shm.jpg",
        month: "feb",
        desc: "Swedish House Mafia concert. Joyce/Rox birthday + Valentine's Day. Wrong Godiva meeting point. Tequila. Fireworks, flamethrowers, insane lights, confetti, big balloon balls."
      },
      {
        width: 722,
        height: 515,
        src: "pillow.jpg",
        month: "feb",
        desc: "Giant pillow fight."
      },
      {
        width: 768,
        height: 574,
        src: "heavenly.jpg",
        month: "feb",
        big: true,
        desc: "First Tahoe weekend. Car riddles. Hot tub. Heavenly. Hotel search scramble. Chinese restaurant Happy Family. Four Lokos. Jack's pong persistence. Kirkwood. Bad Apple maps return navigation."
      },
      {
        width: 648,
        height: 486,
        src: "microsoft.jpg",
        month: "feb",
        desc: "Tech company visits. Apple - we're from Orange, bump into UW Dean of Engineering. Settlers at Microsoft. Settlers at Axcient. Korean BBQ."
      },
      {
        width: 709,
        height: 429,
        src: "harlem_shake.jpg",
        video: "hKhyvP45v5s",
        month: "feb",
        desc: "Impromptu Harlem Shake."
      },
      {
        width: 819,
        height: 546,
        src: "pool_party.jpg",
        video: "e4qB5F04eOM",
        month: "feb",
        desc: "Pool party + BBQ. Hot tub. Volleyball. Stack cup and Settlers at Patrick's. Jetpack."
      },
      {
        width: 819,
        height: 614,
        src: "atv.jpg",
        big: true,
        video: "TE2KPRGaGOY",
        month: "feb",
        desc: "ATV. Beach speeding ticket. Jamie insta-flip. Car stuck in sand. Firestone Grill. Arnie's made us celebrities."
      },
      {
        width: 800,
        height: 600,
        src: "escape_game.jpg",
        month: "mar",
        desc: "SAO anime fest. Escape from the Mysterious Room - zodiacs, hidden drawer compartment, dismantle furniture."
      },
      {
        width: 691,
        height: 461,
        src: "hackathon.jpg",
        month: "mar",
        desc: "Launch Hackathon. Hella Road Trip. Hacking Naveen into the system. Ripstick, soccer, basketball, playground, Uniqlo."
      },
      {
        width: 461,
        height: 614,
        src: "bball.jpg",
        month: "mar",
        desc: "Raptors vs Warriors. Unsuccessful attempt at autographs."
      },
      {
        width: 286,
        height: 407,
        src: "tennis.jpg",
        month: "mar",
        desc: "GoPro Tennis. Lessons. $15 gym pact - good job Naveen."
      },
      {
        width: 822,
        height: 525,
        src: "passion_pit.jpg",
        month: "mar",
        desc: "Passion Pit concert. Izakaya Roku. Missed Iconopop, Matt and Kim :("
      },
      {
        width: 615,
        height: 538,
        src: "crepes.jpg",
        video: "AhT9iF0tBjw",
        month: "mar",
        desc: "Crepe party at Romain's. Die Young guitar duet. Khallil best rapper. Pho + editing day. Power cord knockout harddrive death."
      },
      {
        width: 598,
        height: 598,
        src: "trampoline.jpg",
        big: true,
        month: "mar",
        desc: "House of Air. Trampoline dodgeball. Jesse back flips. Poor Xuehai's foot. Gaurav literal ROFL."
      },
      {
        width: 960,
        height: 640,
        src: "harlem_bomb.jpg",
        month: "mar",
        desc: "Wedding photo bomb -> Harlem Shake."
      },
      {
        width: 560,
        height: 375,
        src: "dna_lounge.jpg",
        month: "mar",
        desc: "DNA Lounge. Sizzurp. Table interrogation. Third time's the charm."
      },
      {
        width: 341,
        height: 107,
        src: "mtg.jpg",
        month: "mar",
        desc: "Magic the Gathering box draft at Slava's."
      },
      {
        width: 768,
        height: 576,
        src: "snowboard.jpg",
        month: "mar",
        big: true,
        desc: "Second Tahoe weekend. Zipcar. Taylor Swift entire ride. Kirkwood. Sandy learns unreasonably fast. Capisce Italian food. Beer hunt. All the rhymes for YOLO. Fizz Buzz. Heavenly. Nope moguls. Off the Hook Sushi. Mark mainstream music."
      },
      {
        width: 550,
        height: 412,
        src: "kells.jpg",
        month: "mar",
        desc: "Baccano anime fest. Kells. Jamie sucks at directions. Yanish wins wingman award. Never drinking with Naveen again."
      },
      {
        width: 731,
        height: 219,
        src: "internproject.jpg",
        month: "apr",
        link: "http://internproject.io",
        desc: "Intern Project launch."
      },
      {
        width: 960,
        height: 453,
        src: "hangglide.jpg",
        month: "apr",
        desc: "Hang gliding. Lean your hips like Shakira. Koi Palace dim sum. Jon eats egg tart whole. Romain vs chicken feet. DNA Lounge."
      },
      {
        width: 581,
        height: 246,
        src: "alcatraz.jpg",
        month: "apr",
        desc: "Overall great term at AppDynamics (Alcatraz for Intern Appreciation trip). <3 interns and food. Daryl honorary intern. Xbox, foosball, ping pong, all nighters. Lol Nicole + Naveen got 2.0-ed."
      },
      {
        width: 860,
        height: 645,
        src: "yosemite.jpg",
        month: "apr",
        desc: "Yosemite. Chaos rendez-vous in Curry Village magically works out. Campground flooded, Mafia, car caravan to other site. Yet another cop encounter. BBQ better than expected. Bridge stargazing, eyes in the forest. Umbrella game. Patrick the caretaker. Upper Yosemite Falls hike."
      },
      {
        width: 573,
        height: 382,
        src: "rafting.jpg",
        month: "apr",
        video: "FDRbVGZIEiQ",
        big: true,
        desc: "White water rafting. Frisbee in Golden Gate Park. 'Special' day at Hippie Hill. Camp Lotus. Unexpectedly delicious camp food. Ultimate Frisbee. Paulom jump catch crash into bush. Candlelight vigil. Tommy the fire master. Guide teaches us Hot Shlaka. Frisbee between the rafts. Pulled by motor boat to shore."
      },
      {
        width: 522,
        height: 644,
        src: "cool.jpg",
        month: "apr",
        desc: "Cool California. We're the only asians in pizza shop / entire town. Gangnam style on top of BRBFOOD. Game of Thrones."
      },
      {
        width: 819,
        height: 461,
        src: "pokemon.jpg",
        month: "apr",
        desc: "Drawing Pokemon from memory."

      },
      {
        width: 819,
        height: 461,
        src: "appdynamics.jpeg",
        month: "apr",
        desc: "Last day at AppDynamics, trying on AppMan costume. Drinks at Flytrap. Long island iced teas. So sorry Nicole... Lori's Diner. Tenderloin karaoke."
      },
      {
        width: 895,
        height: 502,
        src: "hawaii1.jpg",
        month: "apr",
        big: true,
        desc: "Hawaii day 1. Free Mai Tais on flight. Khallil's baller crib. Cheeseburger in Paradise. Goal to eat a pineapple a day. Volleyball on beach. Crabs in rocks. Shorebird, cook your own steak, awful karaoke. Stroll through the city, warm enough to sleep on the beach."
      },
      {
        width: 964,
        height: 544,
        src: "hawaii2.jpeg",
        month: "apr",
        desc: "Hawaii day 2. Crepes in morning. Bike rental from Island. Surf, catch critters, tan, sand castles. Bike gang. Diamond Head closed. Gangnam style. Yardhouse. Jon scooter through restaurant. Empty club."
      },
      {
        width: 819,
        height: 547,
        src: "hawaii3.jpeg",
        month: "apr",
        desc: "Hawaii day 3. Diamond Head success, security guard chasing Xuehai, beef jerky. Ruffage ahi poke bowl. Jeep rental. Neighborhood hike. Hidden trail. Canadian flag, prickly thorns, YOLO. Jason worst park job. Ruth's Chris Steak."
      },
      {
        width: 615,
        height: 317,
        src: "hawaii4.jpg",
        video: "66-ZREMJUc4",
        month: "may",
        desc: "Hawaii day 4-5. Polynesian Cultural Center. Fishing ducks, poi, Kam spear toss, fireknife, fire show. Kahe Point Beach Park. Snorkeling, turtles, massive waves. Waterfall jump, nibbling fish. Yardhouse. Late night hotel wine. Limo. Forgetting Sarah Marshall. Airplane magazine drawings."
      },
      {
        width: 702,
        height: 430,
        src: "angelhack.jpg",
        video: "dgkc1Bb6Gq8",
        month: "may",
        desc: "Angel Hack. Entwine. Get Lucky. Google Glass."
      },
      {
        width: 535,
        height: 235,
        src: "fireworks.jpg",
        month: "may",
        desc: "Victoria Day. Itamae Sushi. Fireworks in the park. Tasmanian Devils. Ridiculous ticket. Shoot and run."
      },
      {
        width: 320,
        height: 207,
        src: "monopoly.jpg",
        month: "may",
        desc: "Crepes at Jennelle's. Monopoly Deal. Settlers. Jamie algorithm lessons."
      },
      {
        width: 690,
        height: 400,
        src: "arrested_development.jpg",
        month: "may",
        desc: "Arrested Development Season 4 marathon. Cora brunch."
      },
      {
        width: 768,
        height: 576,
        src: "tswift.jpg",
        month: "jun",
        big: true,
        desc: "Taylor Swift concert. Thug Story and set list car ride. Korean restaurant. Bubble tea. Austin Mahone?? Ed Sheeran. Row 13 is right choice. Echo Karaoke."
      },
      {
        width: 766,
        height: 450,
        src: "eforest.jpg",
        big: true,
        video: "aS6x-nRLZEw",
        month: "jun",
        desc: "Electric Forest. Peace, love, respect, unity. Meijers run. Campsite setup. Yoga. Hemp bracelets. Indescribably magical forest lights and displays. Sam Klass, Above and Beyond, String Cheese Incident, Pretty Lights. Countless other fantastic bands."
      },
      {
        width: 662,
        height: 318,
        src: "toronto.jpg",
        month: "jul",
        desc: "Kimmy visit. This American Life. Loblaw exotic fruit buffet. Kimmy Timmy trial. UofT tour. Forbidden Island. Kensington. Despicable Me 2. ChaTime. Japanese Bar. Don't kill me Mr. Yao. Driving back such a reckless plan."
      },
      {
        width: 816,
        height: 612,
        src: "samtsui.jpg",
        month: "jul",
        desc: "YouTube concert. Burrito Boys. Mod Club, so many Asian girls. Against the Current, Sam 'Thai', Kurt Schneider, Alex Goot. Raging in a crowd of energy-less people. Froyo. Sushi. Ashton's porch concert. CN Tower. Seven Lives Taco. Kensington Market."
      },
      {
        width: 700,
        height: 331,
        src: "suits.jpg",
        month: "jul",
        desc: "Suits Tuesdays at Velocity. All the other time spent at Velocity. Game of Thrones. Bomber Wednesdays."
      },
      {
        width: 847,
        height: 880,
        src: "toastmasters.jpg",
        month: "jul",
        desc: "Toastmasters Club. Upside Down. Games night. Memories, childhood, pig. Edbert's birthday. McGinnis. Edbert is faster than Flash."
      },
      {
        width: 960,
        height: 455,
        src: "cottage.jpg",
        month: "jul",
        big: true,
        video: "oh0mO3Fz2Yk",
        desc: "Cottage trip. A&W mugging. UW vs UofT. Volleyball. Jet skis. Sailing. Flip cup. Flip boat. Cups. Campfires, s'mores. Dumplings, bacon wrapped mushrooms, other crazy foods. I make the ugliest dumplings. Miracle berries."
      },
      {
        width: 672,
        height: 504,
        src: "foie_gras.jpg",
        month: "aug",
        desc: "N&N uptown with Cindy. First foie gras."
      },
      {
        width: 500,
        height: 333,
        src: "toronto_bubble.jpg",
        month: "aug",
        desc: "Toronto with Rui. Bubble tea. Pharmacy building. Hart House. Chapel hunt. Kensington Bistro. Greyhound scurry."

      },
      {
        width: 819,
        height: 457,
        src: "niagara.jpg",
        month: "aug",
        big: true,
        desc: "Xuehai's birthday. Molly Bloom. #PubEveryNight. Spontaneous Niagara planning. Tutting lessons. Beaver tails. Ferris wheel. Wendy's. Waterfall walk. Conspicuous fence hop, angry security guard. IHOP."
      },
      {
        width: 332,
        height: 383,
        src: "perseids.jpg",
        month: "aug",
        desc: "Perseids. Forrest Gump. Dinner at Baker St Station. 3 shooting stars! Mysterious sky flashes."
      },
      {
        width: 860,
        height: 645,
        src: "roomies.jpg",
        month: "aug",
        desc: "A great term living with these lovely people. Roommate bonding time. Space race. Jason's microwave fire. The thermos-denting coconut."
      },
      {
        width: 360,
        height: 480,
        src: "last_toronto.jpg",
        month: "aug",
        desc: "Last night in Canada. Molly Bloom post-exam. Final goodbyes. Unfortunate Toronto directions. Dr. Horrible's Sing Along Roadtrip. Too many rounds, everyone at the bar hates us. Roof shenanigans."
      },
      {
        width: 500,
        height: 375,
        src: "flying_saucer.jpg",
        month: "aug",
        desc: "The return of MOK. Airport reunion. Neptunes. Kick Ass 2. Flying Saucer. McFarFar."
      },
      {
        width: 246,
        height: 258,
        src: "nightfire.jpg",
        month: "aug",
        desc: "Wu family dinner party. Night Fire. Liar's poker."
      },
      {
        width: 511,
        height: 507,
        src: "colleen.jpg",
        month: "aug",
        desc: "10k with Colleen. Wallet search party. Lime. Bouldering. Adorable children are actually auto-belay thieves."
      },
      {
        width: 572,
        height: 567,
        src: "bojangles.jpg",
        month: "aug",
        desc: "Bojangles with Alex. Never too full for seconds. Ping pong. Jobs. Maggie Moo's."
      },
      {
        width: 556,
        height: 558,
        src: "enloe.jpg",
        month: "aug",
        desc: "Enloe with Katya. Unexpected diplomas. Noodles and Company. Goodberry's. Raleigh Times. Red Hat."
      },
      {
        width: 439,
        height: 505,
        src: "unc.jpg",
        month: "aug",
        desc: "Day at UNC. Panera catchup. Where is Davie Poplar? Settlers at Brian's. SVSM BBQ. Sakura. Avengers. Harris Teeter. Geocache. Elmo's."
      },
      {
        width: 960,
        height: 640,
        src: "rome.jpg",
        month: "aug",
        big: true,
        desc: "Rome. Wolf head geocache. MARIO. Troll waiter. What are the odds? Fountain prom. Gelato bar. Bachelor Roberto. Free shot confusion. Alaskans hate Sarah Palin. Le bible, the whole year? Coliseum. Statue series. Pickpockets. Sistine Chapel. St Peter's Basilica."
      },
      {
        width: 401,
        height: 472,
        src: "florence.jpg",
        month: "aug",
        desc: "Florence. Plus. City jog. 66cl for 90 cents. EuroTrip. Gypsy market. Piazza Michelangelo. Hole in wall restaurants."
      },
      {
        width: 765,
        height: 469,
        src: "cinque_terre.jpg",
        month: "aug",
        desc: "Cinque Terre. Leaning Column of Pisa. Where's the red trail? Highway hike. Vernaza. Monterosso. Lemonade man. La Spezia too quiet."
      },
      {
        width: 768,
        height: 576,
        src: "generator.jpg",
        month: "sep",
        desc: "Venice. Confusing vaporettos. Fancy Generator. Historical Regatta. First free water. Undisputed gelato winner. Canal-side social circle. Day drinking. Asian-cameras ratio in boats. Relegation. Most beautiful bookstore. Spritz tastes nothing like it looks."
      },
      {
        width: 970,
        height: 720,
        src: "copenhagen.jpg",
        month: "sep",
        desc: "Copenhagen. Free dinner. Happy hour. Jamie 22 birthday shots. Heidi's Bar, Foosball, Pub crawl. Danish birthday song. Power Hour. Birthday pie. Green Light District. Laundromat Cafe. Bikes. Little Mermaid. Design Museum. London's a witch on a pig. Umbrella game. Finally good Thai."
      },
      {
        width: 169,
        height: 300,
        src: "train.gif",
        month: "sep",
        desc: "Couchette train with epic hikers. Russian and German card games."
      },
      {
        width: 384,
        height: 576,
        src: "heineken.jpg",
        month: "sep",
        desc: "Amsterdam. Fringe Festival. Airbnb. Wok and Zo. Red Light District. Stroopwafels. Heineken Tour. Vleminckx Fries. Stop motions."
      },
      {
        width: 494,
        height: 365,
        src: "stopmotion.jpg",
        video: "zpHDinCA_oA",
        month: "sep",
        desc: "How is this a ferry."
      },
      {
        width: 487,
        height: 207,
        src: "facebook.jpg",
        month: "sep",
        desc: "London. Science museum. Platform 9 and 3/4. Facebook HQ. Fish and Chips. Tardis. Malteser shake. Hyde Park. Tea time. Wasabi restaurant. Accidentally all the landmarks. Book of Mormon."
      },
      {
        width: 768,
        height: 512,
        src: "versaille.jpg",
        month: "sep",
        desc: "Paris. Notre Dame. Obelisk. Cracked out hobo. Tricky street signatures. Champs Elysse. McDonalds macaroons. Arc d'triomphe. Eiffel Tower. Rose bazooka. Chinese-Arabic restaurant. Opera House. Versailles. Chateau. Dance series."
      },
      {
        width: 960,
        height: 720,
        src: "integration.jpg",
        month: "sep",
        video: "LHziXEi29lI",
        desc: "Weekend of Integration. Vendres Plage. More drinks than food. Toothbrush assassin. Nameless club. Sand sculptures. Nick one second wrestling champion. Gorgeous sunrise."
      },
      {
        width: 620,
        height: 410,
        src: "fhacktory.jpg",
        month: "sep",
        desc: "Fhacktory. TESS."
      },
      {
        width: 346,
        height: 461,
        src: "blend.jpg",
        month: "oct",
        desc: "Blend Web Mix Conference. TESS presentation. Celebratory drinks. Offended waiter."
      },
      {
        width: 609,
        height: 605,
        src: "long_room.jpg",
        month: "oct",
        desc: "Dublin. Guinness Tour. Mama's Revenge. Temple Bar. Too early for Copper's. Ping pong. Trinity College. Book of Kells. Long Room. 0:00 != 12:00. Bray cliff walk. Generator. 'Comedy' show. Y u no stop bus?"
      },
      {
        width: 768,
        height: 576,
        src: "steak.jpg",
        month: "oct",
        desc: "Steak party. Vegemite. Heather marmite reaction."
      },
      {
        width: 960,
        height: 556,
        src: "wine.jpg",
        month: "oct",
        desc: "Beaujolais wine tour. Chateau and vineyard."
      },
      {
        width: 960,
        height: 720,
        src: "grenoble.jpg",
        month: "oct",
        big: true,
        desc: "Grenoble. Nathan train hop. Estonian card game. Hippopotamus. Scary bubbles up the mountain. Too much wine. Le Vieux Manoir. Crepes. Flattest trek. Hitchhiking. La Bastille. Archaeology museum. Pizza."
      },
      {
        width: 682,
        height: 511,
        src: "halloween.jpg",
        month: "oct",
        desc: "Halloween. Costume shopping, pulled pork. Pre at Nick's turned 90's karaoke. Jeff's special wine opening technique."
      },
      {
        width: 710,
        height: 591,
        src: "barce.jpg",
        month: "oct",
        big: true,
        desc: "Barcelona. Latin street dancers. Bling Bling no bueno. Nick Havana mucho bueno. Walking tour. Real Madrid vs FC Barcelona. Mar Bella. Sagrada Familia. KFC. No gelato for you. 'Magic' fountain. Shoko."
      },
      {
        width: 960,
        height: 720,
        src: "madrid.jpg",
        month: "oct",
        desc: "Madrid. Jesus walking tour. Tapas with Alex, all the free drinks. Pub crawl. Tapas with Ignacio."
      },
      {
        width: 608,
        height: 607,
        src: "madrid_park.jpg",
        month: "oct",
        desc: "Park with Guillermo. Churro con chocolate. Forbidden garden fruit. No one wants to give us bikes. Almendro 13 rascos."
      },
      {
        width: 960,
        height: 720,
        src: "valencia.jpg",
        month: "oct",
        desc: "Valencia. Oceanografic. Paella. Massive sangrias. Flamenco show. Pub crawl. Halloween specialty shots."
      },
      {
        width: 768,
        height: 576,
        src: "bike.jpg",
        month: "nov",
        desc: "Biking with Carolina. Walking tour. Impossible rentals during siesta. Museo de cienca. Beach sunset. Burger King."
      },
      {
        width: 960,
        height: 720,
        src: "opium.jpg",
        month: "nov",
        desc: "Barcelona round 2. Tapas tour. Perron. Opium club. Beachside beer bargains. McDonald's hangover cure. Park Guell. Wow churros."
      },
      {
        width: 960,
        height: 720,
        src: "berlin.jpg",
        month: "nov",
        desc: "Berlin day 1-2. Pho. Jamie's pub crawl unfortunate mixup. Polaroid. Doner. Walking tour - Berlin Wall, Checkpoint Charlie, Holocaust Memorial. Street hustler. Trap. California burrito. Pub crawl round 2."
      },
      {
        width: 354,
        height: 481,
        src: "ball.jpg",
        month: "nov",
        desc: "Berlin day 3-4. Sachsenhausen concentration camp. Monsieur Vuong. Follow the smell. DDR museum. Giant ball statue, nicest stranger. Toboggan. Kartofflepuffer. Puzzle shop. Bubble tea. There are Asians here. Photography experimentation. Hofbrau."
      },
      {
        width: 440,
        height: 300,
        src: "mark_skype.gif",
        month: "nov",
        desc: ":)"
      },
      {
        width: 717,
        height: 538,
        src: "christmas_market.jpg",
        month: "dec",
        desc: "Fetes des Lumieres - fire pillars, fireworks, animated buildings, creative child. Deadly ferris wheel. Operation Sunglasses."
      },
      {
        width: 691,
        height: 518,
        src: "arcs.jpg",
        month: "dec",
        desc: "Les Arcs daytrip. Nathan ski slayer. Cloud touch. Race to the finish line."
      },
      {
        width: 404,
        height: 451,
        src: "secret_santa.jpg",
        month: "dec",
        desc: "Secret Santa. Tree decorating. Playboy. Feet massager. Beer sampler. Comically large chocolate."
      }
    ];
