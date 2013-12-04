var timeCategoryData = [
      {
        category: "Cook",
        time: 15.0
      },
      {
        category: "Socialize",
        time: 133.5,
      },
      {
        category: "Dance",
        time: 8.0,
      },
      {
        category: "Sleep",
        time: 287.6,
      },
      {
        category: "Write",
        time : 11.0,
      },
      {
        category: "No goal",
        time : 114.0,
      },
      {
        category: "Read",
        time : 14.5,
      },
      {
        category: "Program",
        time : 14.0,
      },
      {
        category: "Plan",
        time : 9.5,
      },
      {
        category: "Travel",
        time : 126.5,
      },
      {
        category: "French",
        time : 36.5,
      },
      {
        category: "Exercise",
        time : 18.5,
      },
      {
        category: "Class",
        time : 62.5
      }
    ],
    wasteWeekData = [
      {
        week: "Week 1",
        time: 5.0
      },
      {
        week: "Week 2",
        time: 22.0
      },
      {
        week: "Week 3",
        time: 29.5
      },
      {
        week: "Week 4",
        time: 27.5
      },
      {
        week: "Week 5",
        time: 16.5
      }
    ],
    internetUsageData = [
      {
        site:"Facebook",
        time: 26.4
      },
      {
        site:"YouTube",
        time : 23.4
      },
      {
        site:"GMail",
        time : 7.1
      },
      {
        site:"Google",
        time : 6.0
      },
      {
        site:"Wikipedia",
        time : 5.7
      },
      {
        site:"Word Reference",
        time : 3.8
      },
      {
        site:"Chuck-Streaming.fr",
        time : 3.8
      },
      {
        site:"Google Plus",
        time : 2.2
      },
      {
        site:"Google Docs",
        time : 1.7
      },
      {
        site:"Digg Reader",
        time : 1.6
      }
    ],
    peopleTimeData = [
      {
        name: "Nathan W",
        time: 81.5
      },
      {
        name: "Jamie W",
        time : 55.5
      },
      {
        name: "Nick S",
        time : 55.0
      },
      {
        name: "Merike H",
        time : 49.0
      },
      {
        name: "Stine S",
        time : 45.0
      },
      {
        name: "Heather C",
        time : 43.0
      },
      {
        name: "Dani A",
        time : 40.0
      },
      {
        name: "Sam N",
        time : 37.5
      },
      {
        name: "Sam R",
        time : 33.0
      },
      {
        name: "Kirsten M",
        time : 32.5
      },
      {
        name: "Shefali B",
        time : 29.0
      },
      {
        name: "Maria L",
        time : 25.0
      },
      {
        name: "Haoyu C",
        time : 24.0
      },
      {
        name: "Till B",
        time : 21.5
      },
      {
        name: "Jean-Francois B",
        time : 18.5
      },
      {
        name: "Yalei C",
        time : 18.0
      },
      {
        name: "Gabriel T",
        time : 16.0
      },
      {
        name: "Jake B",
        time : 16.0
      },
      {
        name: "Ross A",
        time : 15.5
      },
      {
        name: "Karla R",
        time : 14.0
      },
      {
        name: "Alex G",
        time : 13.5
      },
      {
        name: "Marco N",
        time : 13.0
      },
      {
        name: "Daniel L",
        time : 12.0
      },
      {
        name: "Hanyu L",
        time : 12.0
      },
      {
        name: "Guillermo G",
        time : 11.0
      },
      {
        name: "Martin C",
        time : 11.0
      },
      {
        name: "Mark S",
        time : 11.0
      },
      {
        name: "Yongli Y",
        time : 11.0
      },
      {
        name: "Andreas W",
        time : 10.5
      },
      {
        name: "Cheng W",
        time : 10.5
      },
      {
        name: "Carolina G",
        time : 10.0
      },
      {
        name: "Julian S",
        time : 10.0
      },
      {
        name: "Kayleigh E",
        time : 9.5
      },
      {
        name: "Jayne B",
        time : 9.5
      },
      {
        name: "Lucas D",
        time : 9.0
      },
      {
        name: "Adrian I",
        time : 9.0
      },
      {
        name: "Rong S",
        time : 9.0
      },
      {
        name: "Silvia M",
        time : 9.0
      },
      {
        name: "Martin M",
        time : 9.0
      },
      {
        name: "Kim B",
        time : 7.0
      },
      {
        name: "Bonnie H",
        time : 7.0
      },
      {
        name: "Eric C",
        time : 7.0
      },
      {
        name: "Jesse T",
        time : 6.5
      },
      {
        name: "Jamie J",
        time : 6.5
      },
      {
        name: "Tito S",
        time : 6.0
      },
      {
        name: "Nitesh B",
        time : 6.0
      },
      {
        name: "Peter M",
        time : 5.0
      },
      {
        name: "Mark W",
        time : 4.0
      },
      {
        name: "Pawel B",
        time : 4.0
      },
      {
        name: "Gonzalo B",
        time : 4.0
      },
      {
        name: "Pierre L",
        time : 4.0
      },
      {
        name: "Parents",
        time : 3.5
      },
      {
        name: "Anuj M",
        time : 3.5
      },
      {
        name: "Ruonan Z",
        time : 3.5
      },
      {
        name: "Ignacio C",
        time : 3.0
      },
      {
        name: "Mark C",
        time : 2.5
      },
      {
        name: "Sunethri M",
        time : 2.0
      },
      {
        name: "Xuehai F",
        time : 2.0
      },
      {
        name: "Tiffany Y",
        time : 1.0
      },
      {
        name: "Stephane L",
        time : 1.0
      },
      {
        name: "Vivian C",
        time : 1.0
      },
      {
        name: "Nicole G",
        time : 1.0
      },
      {
        name: "Steven H",
        time : 0.5
      },
      {
        name: "Sean V",
        time : 0.5
      }
    ],
    sleepFactorData = [
      {
        factor: "Exercise",
        effect: 5.14
      },
      {
        factor: "Drink alcohol",
        effect : -9.41
      },
      {
        factor: "Drink coffee",
        effect : 3.27
      },
      {
        factor: "Overeat",
        effect : -3.37
      }
    ],
    sleepDayData = [
      {
        sleep : 8.0,
        quality : 8.7,
        nogoal : 4.0,
        social : 2.0,
        date: "2013-10-22"
      },
      {
        sleep : 7.6,
        quality : 7.8,
        nogoal : 2.5,
        social : 2.0,
        date: "2013-10-23"
      },
      {
        sleep : 6.3,
        quality : 6.6,
        nogoal : 1.5,
        social : 9.5,
        date: "2013-10-24"
      },
      {
        sleep : 4.0,
        nogoal : 2.5,
        social : 11.0,
        date: "2013-10-25"
      },
      {
        sleep : 9.0,
        nogoal : 3.0,
        social : 9.0,
        date: "2013-10-26"
      },
      {
        sleep : 3.0,
        social : 14.0,
        date: "2013-10-27"
      },
      {
        sleep : 9.0,
        nogoal : 2.0,
        date: "2013-10-28"
      },
      {
        sleep : 9.0,
        nogoal : 1.0,
        social : 8.0,
        siesta : true,
        date: "2013-10-29"
      },
      {
        sleep : 5.6,
        quality : 5.6,
        social : 14.0,
        date: "2013-10-30"
      },
      {
        sleep : 8.5,
        social : 6.0,
        siesta : true,
        date: "2013-10-31"
      },
      {
        sleep : 8.5,
        quality : 8.7,
        social : 11.0,
        date: "2013-11-01"
      },
      {
        sleep : 11.3,
        quality : 3.2,
        nogoal : 2.0,
        social : 4.0,
        siesta : true,
        date: "2013-11-02"
      },
      {
        sleep : 8.0,
        social : 13.0,
        date: "2013-11-03"
      },
      {
        sleep : 7.9,
        quality : 4.0,
        nogoal : 5.5,
        social : 4.0,
        siesta : true,
        date: "2013-11-04"
      },
      {
        sleep : 9.9,
        quality : 9.4,
        nogoal : 6.0,
        social : 1.0,
        date: "2013-11-05"
      },
      {
        sleep : 5.3,
        quality : 5.8,
        nogoal : 4.0,
        social : 6.0,
        date: "2013-11-06"
      },
      {
        sleep : 6.1,
        quality : 5.1,
        nogoal : 3.0,
        social : 6.0,
        date: "2013-11-07"
      },
      {
        sleep : 7.7,
        quality : 3.6,
        nogoal : 2.5,
        social : 9.0,
        siesta : true,
        date: "2013-11-08"
      },
      {
        sleep : 2.5,
        quality : 1.5,
        social : 18.5,
        date: "2013-11-09"
      },
      {
        sleep : 9.4,
        quality : 6.8,
        nogoal : 1.0,
        social : 10.0,
        siesta : true,
        date: "2013-11-10"
      },
      {
        sleep : 14.8,
        quality : 7.0,
        nogoal : 6.0,
        social : 0.5,
        siesta : true,
        date: "2013-11-12"
      },
      {
        sleep : 6.0,
        quality : 5.6,
        nogoal : 4.5,
        social : 5.0,
        date: "2013-11-13"
      },
      {
        sleep : 7.6,
        quality : 8.5,
        nogoal : 5.0,
        social : 9.5,
        date: "2013-11-14"
      },
      {
        sleep : 6.4,
        quality : 6.4,
        nogoal : 5.0,
        social : 6.5,
        siesta : true,
        date: "2013-11-15"
      },
      {
        sleep : 8.2,
        quality : 9.0,
        nogoal : 2.0,
        social : 5.5,
        date: "2013-11-16"
      },
      {
        sleep : 4.5,
        quality : 4.8,
        nogoal : 7.0,
        social : 0.5,
        date: "2013-11-17"
      },
      {
        sleep : 8.3,
        quality : 8.4,
        nogoal : 6.0,
        social : 1.0,
        siesta : true,
        date: "2013-11-18"
      },
      {
        sleep : 5.4,
        quality : 6.0,
        nogoal : 3.5,
        social : 3.0,
        date: "2013-11-19"
      },
      {
        sleep : 6.8,
        quality : 7.0,
        nogoal : 1.0,
        social : 5.5,
        siesta : true,
        date: "2013-11-20"
      },
      {
        sleep : 8.0,
        quality : 8.8,
        nogoal : 1.0,
        social : 5.0,
        date: "2013-11-21"
      },
      {
        sleep : 5.8,
        quality : 5.5,
        nogoal : 1.0,
        social : 10.5,
        date: "2013-11-22"
      },
      {
        sleep : 7.4,
        quality : 6.5,
        nogoal : 8.0,
        social : 2.0,
        date: "2013-11-23"
      },
      {
        sleep : 6.8,
        quality : 6.3,
        nogoal : 5.0,
        social : 2.5,
        siesta : true,
        date: "2013-11-24"
      },
      {
        sleep : 8.5,
        quality : 7.2,
        nogoal : 2.5,
        social : 2.0,
        siesta : true,
        date: "2013-11-25"
      },
      {
        sleep : 7.6,
        quality : 7.7,
        nogoal : 2.5,
        social : 4.5,
        date: "2013-11-26"
      },
      {
        sleep : 7.6,
        quality : 8.4,
        nogoal : 2.0,
        social : 6.5,
        date: "2013-11-27"
      },
      {
        sleep : 5.6,
        quality : 6.3,
        nogoal : 3.0,
        social : 7.5,
        date: "2013-11-28"
      },
      {
        sleep : 8.6,
        quality : 9.4,
        nogoal : 0.5,
        social : 7.5,
        date: "2013-11-29"
      },
      {
        sleep : 7.3,
        quality : 8.1,
        nogoal : 6.0,
        social : 2.5,
        date: "2013-11-30"
      }
    ];
