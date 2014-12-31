var dir = "/images/2014/";

var imgs = [
      {
        width: 515,
        height: 520,
        src: "switzerland.jpg",
        month: "jan",
        desc: "Lausanne. EPFL. UNIL. Swiss cheese by the lake"
      },
      {
        width: 599,
        height: 602,
        src: "jamie.jpg",
        month: "feb",
        desc: "#aeasf2014. Paper G whiskey. Twin peaks. Ice cream tour. Stripper battle. Dropbox Karaoke. Hella Asian club."
      },
      {
        width: 439,
        height: 531,
        src: "clay.jpg",
        month: "feb",
        desc: "DDR / 'snacks' at Twitter. Weekly run. Thiel house party."
      },
      {
        width: 500,
        height: 581,
        src: "jonchen.jpg",
        month: "feb",
        desc: "LA road trip. US 1. Fog. Seals. Ramen. Failed flyboarding. Cronut!! Stalking Ryan Gosling."
      },
      {
        width: 600,
        height: 600,
        src: "missionpeaks.jpg",
        month: "mar",
        desc: "Hyde Interns (this is pretty much my only photographic memory with you guys...) -> Mission Peaks. Smash. Tahoe. Biking to Tiburon. All the foods on Polk."
      },
      {
        width: 800,
        height: 600,
        src: "mountainbike.jpg",
        month: "mar",
        desc: "Santa Cruz Boardwalk. Tinder girl from bike shop. Lambo mountain bikes. Mission BBQ."
      },
      {
        width: 602,
        height: 600,
        src: "bigbasin.jpg",
        month: "mar",
        desc: "Big Basin. 100% outdoors weekend. Pouring rain. Colorful fires. Climbing beach rocks. Zach almost dying. Was the GoPro on? Castle Rock."
      },
      {
        width: 800,
        height: 556,
        src: "ellie.jpg",
        month: "apr",
        desc: "Ellie Goulding. Just the finale. Local Edition / Grand dress code. Tinder 'duuuude'. Wo xiang qing ni zhen me yang?"
      },
      {
        width: 800,
        height: 598,
        src: "escape.jpg",
        month: "apr",
        desc: "Escape from the Time Travel Lab. Scrambling between the rooms."
      },
      {
        width: 597,
        height: 581,
        src: "poker.jpg",
        desc: "Poker / Spades at Twitter. Wang vs Dong. Degens. House of Prime Ribs. Dat salad toss."
      },
      {
        width: 800,
        height: 466,
        src: "twinterns.jpg",
        desc: "Twinterns. Go-karting. Desiye dunk challenge. Rock climbing. Worst Resistance and Pictionary players ever. Selfie with Dick."
      },
      {
        width: 816,
        height: 612,
        src: "twitter.jpg",
        desc: "Observability! House of Cards. Board games."
      },
      {
        width: 800,
        height: 444,
        src: "cali.jpg",
        video: "M8udgYoeymI",
        desc: "Term in Cali. Phantom Falls. Sequoia offsite."
      },
      {
        width: 800,
        height: 534,
        src: "cottage.jpg",
        month: "jun",
        desc: "Cottage. Trudeau. Meowtain. Learning to twerk. Trunk tetris. Epic foods. Roxanne's swollen eye. I'm the coffee maker! Volleyball. Frisbee. Miracle berries."
      },
      {
        width: 780,
        height: 577,
        src: "bbq.jpg",
        month: "jun",
        desc: "Whole day BBQ. Jon game strong. FIFA. John bite burgers. Numbers game. Cups made of oranges. Summer Lights Festival. Bar volleyball. Glowstick penis. Waterloo tour."
      },
      {
        width: 800,
        height: 600,
        src: "nyc.jpg",
        month: "jun",
        desc: "New York City. Dinosaur BBQ. Cow penises / testicles at Kenka. Speak Easies. Crepes at classy club. Central Park. Times Square. M&M Store. Daniel Radcliffe. Wall Street. Popup ramen shop Benkei. Pickle back. Bartender serenade / free shots. Fire escape. Yale."
      },
      {
        width: 769,
        height: 588,
        src: "boston.jpg",
        month: "jul",
        desc: "Boston. Lucie passport. Kingston burgers. Trunk nap. Boston creme donuts. Pig instagram celebrity. Baby statues. Giant fountain. Bodega. MIT. Liberty Hotel. Lobster roll. Penthouse bar. Rager shirt exchange. Obliques. World Cup Finals. Charles River kayaking. Xuehai and the table. Harvard. Russel House. Dinosaur BBQ. Rainbow. Niagara Falls detour."
      },
      {
        width: 593,
        height: 644,
        src: "ribs.jpg",
        month: "jul",
        desc: "Ribfest. ALL the variations. Engineered wine opener. My Sassy Girl."

      },
      {
        width: 800,
        height: 600,
        src: "hotpot.jpg",
        month: "aug",
        desc: "Laurel Creek. YMCA. Record / game shop. Pyrus Cafe. Running through the rain to the Chinese supermarket. Hot pot. Serial killer quiz."
      },
      {
        width: 800,
        height: 600,
        src: "quarry.jpg",
        month: "aug",
        desc: "Neighborhood run. Boulted Bread. Beasley's. Myrtle beach inquisition. The Quarry. 25ft jump. Pit BBQ. Full Steam Brewery."
      },
      {
        width: 800,
        height: 582,
        src: "statebird.jpg",
        month: "sep",
        desc: "State Bird Provisions. Wicked. Toss toss."
      },
      {
        width: 800,
        height: 382,
        src: "beyond.jpg",
        month: "sep",
        desc: "Beyond Wonderland (pictures NSFW). Blackout. Rox's lost/found phone. Invention of the WS dance. King game. How many of you are gay?"
      },
      {
        width: 800,
        height: 508,
        src: "atv.jpg",
        month: "oct",
        desc: "Highway 1. Monterey sandwich shop. 17 mile drive. Wing-shaped plant. ATV. Summer stuck in the sand. Getting towed / dented. Firestone Grill."
      },
      {
        width: 800,
        height: 554,
        src: "sausalito.jpg",
        month: "oct",
        desc: "Farmers market. Dim sum. Bike to Sausalito. Rox vs Golden Gate Bridge. Twitter Karaoke. Pretending to be a bike."
      },
      {
        width: 800,
        height: 490,
        src: "thanksgiving.jpg",
        month: "oct",
        desc: "Canadian Thanksgiving. Record shop. Learning to motor bike. Apple / Google sponsorship. Relationship stories. Sex god."
      },
      {
        width: 800,
        height: 533,
        src: "yosemite.jpg",
        month: "oct",
        desc: "Yosemite. Airbnb with private landing strip. Night photography. Cloud's Rest. Hiking with the pie. Losti n the dark. Stars / galaxy watching. Roxanne's car mysteriously disappears. Denny's."
      },
      {
        width: 800,
        height: 657,
        src: "la.jpg",
        month: "oct",
        desc: "LA. OC diner. Long Beach. Santa Monica. Gamjatang dance. King game round 2. Cuddle puddle. Observatory. Outlet mall."
      },
      {
        width: 402,
        height: 600,
        src: "fishing.jpg",
        month: "nov",
        desc: "Fishing. Custom rods. Xuehai's catch = dinner. Agile relationships. Napa lunch. Fire Trail hike. Lost in the woods. Jajangman. Big Hero 6."
      },
      {
        width: 780,
        height: 586,
        src: "eastjesus.jpg",
        month: "nov",
        desc: "American Thanksgiving. Joshua Tree. OKCupid Stock Photos. Keys View sunset. Pasta by the wall. Lost Horse Trail. Camping atop the mountain. Charades. Freeze dried food. Cactus garden. Tommy self-penetration. Skull Rock. International Banana Museum. Liquor store. Bombay Beach. Salvation Mountain. East Jesus. Helicopter pad. Epic dinner. Uber Man. The Interview. Gun range. Peeing on the statue. Riding the boat through the desert to the hot springs. Hitchhiker."
      },
      {
        width: 800,
        height: 600,
        src: "jon.jpg",
        month: "nov",
        desc: "Jon's birthday / loftwarming. The dance."
      },
      {
        width: 800,
        height: 600,
        src: "skating.jpg",
        month: "dec",
        desc: "Nest skating. Halloween bear costumes."
      },
      {
        width: 800,
        height: 606,
        src: "chocolate.jpg",
        month: "dec",
        desc: "Chocolate Tasting."
      },
      {
        width: 800,
        height: 600,
        src: "learningnight.jpg",
        month: "dec",
        desc: "Bi-weekly Learning Night. Entrepreneurs = new working class. History of circumcision. Machine learning. Photoshop. Failure in payments. Popping. Psychology of liking. 4 rules of long distance."
      },
      {
        width: 800,
        height: 556,
        src: "arizona.jpg",
        month: "dec",
        desc: "Arizona. Airbnb mansion. Dinosaur tracks. Onesie encounter. Navajo flea market. Horseshoe Bend. Mexican restaurant. Hot Seat. Butt stuff. Roxanne's getting them I think. Lower Antelope Canyon. Denny's. Toadstool rocks. Walmart. More onesies. Grand Canyon. Onesie congo line. Don't Fuck the Driver. Serial."
      },
      {
        width: 741,
        height: 656,
        src: "lastday.jpg",
        month: "dec",
        desc: "Last day in California. Pho. Nap. Sunset by the Marina. Head in fence photos. Berkeley Ironworks. Gregoire's. Smokes Poutinerie. Cream. Ici."
      },
      {
        width: 800,
        height: 190,
        src: "xhfc.jpg",
        desc: "XHF(art|an|ap|*)C. Kanya. ö. lol!'n."
      },
      {
        width: 800,
        height: 598,
        src: "bojangles.jpg",
        month: "dec",
        desc: "Bojangles. World problems. Life is sad."
      },
      {
        width: 635,
        height: 665,
        src: "komm.jpg",
        month: "dec",
        desc: "KOMM reunion. Crepes and Coffee. REI. Big Daddy's."
      },
      {
        width: 790,
        height: 260,
        src: "shank.jpg",
        month: "dec",
        desc: "Shashank's birthday. Imagine you're on a road game. Timer photos."
      }
    ];
