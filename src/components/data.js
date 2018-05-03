



const list = [...Array(1000)].map((_, i) => {
  return {id:i, name : i * 10}
});

const listFull = [
  {
    "_id": "5aea013e1e92352d5fe8b893",
    "index": 0,
    "guid": "a3e2ebf4-0a55-4208-8f0a-ed4cdd840035",
    "isActive": false,
    "balance": "$2,833.10",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": {
      "first": "Debra",
      "last": "Ashley"
    },
    "company": "QUILITY",
    "email": "debra.ashley@quility.org",
    "phone": "+1 (904) 577-2498",
    "address": "405 Fenimore Street, Fairmount, New Hampshire, 6209",
    "about": "Minim exercitation nisi fugiat sit laboris aliquip proident irure. Pariatur et adipisicing ipsum occaecat dolor cillum ea. Anim elit ex amet irure sunt ad aliquip est voluptate consectetur labore.",
    "registered": "Monday, March 7, 2016 4:48 PM",
    "latitude": "17.487473",
    "longitude": "-7.801822",
    "tags": [
      "Lorem",
      "enim",
      "officia",
      "laboris",
      "nostrud"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Jackson Silva"
      },
      {
        "id": 1,
        "name": "Briggs Holland"
      },
      {
        "id": 2,
        "name": "Reilly Mejia"
      }
    ],
    "greeting": "Hello, Debra! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aea013ee67be70d15f228b8",
    "index": 1,
    "guid": "78c85ca2-5443-4a42-ac49-7e0351f075b3",
    "isActive": false,
    "balance": "$3,733.34",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": {
      "first": "Boyd",
      "last": "York"
    },
    "company": "MAGNAFONE",
    "email": "boyd.york@magnafone.info",
    "phone": "+1 (833) 539-3620",
    "address": "396 Perry Place, Newkirk, Michigan, 5909",
    "about": "Deserunt eu consectetur in incididunt mollit adipisicing. Qui dolor deserunt commodo commodo quis labore irure. Irure consequat magna dolore proident aute minim anim enim sunt elit ullamco occaecat qui qui.",
    "registered": "Wednesday, March 23, 2016 2:10 AM",
    "latitude": "-40.723971",
    "longitude": "-151.683463",
    "tags": [
      "nisi",
      "occaecat",
      "in",
      "amet",
      "qui"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vega Wilcox"
      },
      {
        "id": 1,
        "name": "Herrera Graves"
      },
      {
        "id": 2,
        "name": "Bryan Coffey"
      }
    ],
    "greeting": "Hello, Boyd! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aea013ed7441033f2fc97d8",
    "index": 2,
    "guid": "ab0eec80-f4d7-46fb-81e3-a8e0adf6b0d8",
    "isActive": true,
    "balance": "$3,219.86",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Reynolds",
      "last": "Solomon"
    },
    "company": "UNEEQ",
    "email": "reynolds.solomon@uneeq.biz",
    "phone": "+1 (910) 437-3558",
    "address": "548 Grafton Street, Brandywine, New Mexico, 4073",
    "about": "Ut ex in ut aliqua quis nulla occaecat dolore sint est consectetur veniam. Velit mollit laboris officia aute culpa deserunt ullamco. Consectetur culpa Lorem ut do est cupidatat nisi ea tempor velit ipsum excepteur aliquip. Velit id ad esse enim reprehenderit culpa sint officia ullamco veniam. Consequat velit aliqua tempor nostrud ut officia tempor aliquip sit consectetur id officia commodo. Sit magna culpa enim pariatur sint non aute est sunt.",
    "registered": "Tuesday, January 16, 2018 8:03 AM",
    "latitude": "-35.473475",
    "longitude": "65.289831",
    "tags": [
      "ut",
      "ullamco",
      "in",
      "eiusmod",
      "esse"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Karla Sosa"
      },
      {
        "id": 1,
        "name": "Bernadette Schneider"
      },
      {
        "id": 2,
        "name": "Allison Beard"
      }
    ],
    "greeting": "Hello, Reynolds! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aea013e01b8bae4d91b19cc",
    "index": 3,
    "guid": "2eae4776-b6b8-46f8-992b-5e3f287fe207",
    "isActive": true,
    "balance": "$1,084.64",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": {
      "first": "Christi",
      "last": "Dunn"
    },
    "company": "TROLLERY",
    "email": "christi.dunn@trollery.me",
    "phone": "+1 (927) 564-2838",
    "address": "602 Knickerbocker Avenue, Keller, New York, 7232",
    "about": "Duis nostrud Lorem aute laboris quis laboris et nulla incididunt dolore dolore dolor anim. Fugiat officia irure ea consectetur amet aliquip dolore. Magna do proident et minim quis excepteur irure quis Lorem dolore Lorem. Nostrud excepteur et occaecat amet exercitation proident anim id dolore velit proident commodo laboris.",
    "registered": "Sunday, May 18, 2014 10:41 PM",
    "latitude": "-1.21163",
    "longitude": "86.075801",
    "tags": [
      "culpa",
      "ex",
      "pariatur",
      "pariatur",
      "consequat"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Maria Merritt"
      },
      {
        "id": 1,
        "name": "Wood Zamora"
      },
      {
        "id": 2,
        "name": "Fields Hale"
      }
    ],
    "greeting": "Hello, Christi! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5aea013e071e4f3ebcae74bf",
    "index": 4,
    "guid": "b1aca87f-8fde-457b-a9a4-dc08eae775c2",
    "isActive": true,
    "balance": "$1,513.17",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": {
      "first": "Willa",
      "last": "Wooten"
    },
    "company": "OLUCORE",
    "email": "willa.wooten@olucore.net",
    "phone": "+1 (848) 523-3886",
    "address": "221 Ivan Court, Suitland, North Carolina, 1186",
    "about": "Ad esse laboris laborum ad elit amet. Pariatur nulla cillum tempor magna elit quis labore consequat mollit irure irure qui fugiat. Aliquip qui officia eu fugiat consequat enim mollit dolore velit ad eiusmod. Sunt nisi voluptate culpa ipsum culpa eu proident minim quis nisi commodo fugiat.",
    "registered": "Saturday, January 20, 2018 7:38 AM",
    "latitude": "50.267832",
    "longitude": "173.929465",
    "tags": [
      "aliqua",
      "ut",
      "dolor",
      "sint",
      "id"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Merrill Cortez"
      },
      {
        "id": 1,
        "name": "Marcia House"
      },
      {
        "id": 2,
        "name": "Tabatha Cardenas"
      }
    ],
    "greeting": "Hello, Willa! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aea013e089eaf441407f0ef",
    "index": 5,
    "guid": "4922be4c-dd57-4903-9143-440e107492be",
    "isActive": false,
    "balance": "$1,661.83",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": {
      "first": "Richards",
      "last": "Gould"
    },
    "company": "BESTO",
    "email": "richards.gould@besto.ca",
    "phone": "+1 (817) 573-2384",
    "address": "899 Rockaway Parkway, Convent, Hawaii, 1188",
    "about": "Fugiat aliquip cupidatat minim voluptate minim non consequat officia commodo reprehenderit do pariatur eu id. Exercitation est occaecat voluptate eiusmod duis ad laboris non reprehenderit aliquip voluptate. Occaecat tempor in nisi eiusmod aliquip pariatur.",
    "registered": "Friday, November 14, 2014 9:48 PM",
    "latitude": "82.096614",
    "longitude": "-73.345005",
    "tags": [
      "mollit",
      "incididunt",
      "ipsum",
      "est",
      "veniam"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Laurel Jacobson"
      },
      {
        "id": 1,
        "name": "Miriam Wilson"
      },
      {
        "id": 2,
        "name": "Valeria Burch"
      }
    ],
    "greeting": "Hello, Richards! You have 5 unread messages.",
    "favoriteFruit": "apple"
  }
]

export default list;
