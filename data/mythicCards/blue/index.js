// import blueCardsAssets from '../../../assets/MythicCards/blue';

const blueCardsAssets = {}

for (let index = 1; index < 13; index++) {
  blueCardsAssets[`blue${index}`] = `url(../assets/MythicCards/blue/blue${index}.png)`;
}

// const blueCardsAssets = {
//   blue1: 'assets/MythicCards/blue/blue1.png',
//   blue2: 'assets/MythicCards/blue/blue2.png',
//   blue3: 'assets/MythicCards/blue/blue3.png',
//   blue4: 'assets/MythicCards/blue/blue4.png',
//   blue5: 'assets/MythicCards/blue/blue5.png',
//   blue6: 'assets/MythicCards/blue/blue6.png',
//   blue7: 'assets/MythicCards/blue/blue7.png',
//   blue8: 'assets/MythicCards/blue/blue8.png',
//   blue9: 'assets/MythicCards/blue/blue9.png',
//   blue10: 'assets/MythicCards/blue/blue10.png',
//   blue11: 'assets/MythicCards/blue/blue11.png',
//   blue12: 'assets/MythicCards/blue/blue12.png',
// };


const cardsDataBlue = [
  {
    id: 'blue1',
    cardFace: blueCardsAssets.blue1,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    cardFace: blueCardsAssets.blue2,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    cardFace: blueCardsAssets.blue3,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    cardFace: blueCardsAssets.blue4,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    cardFace: blueCardsAssets.blue5,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    cardFace: blueCardsAssets.blue6,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    cardFace: blueCardsAssets.blue7,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    cardFace: blueCardsAssets.blue8,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    cardFace: blueCardsAssets.blue9,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    cardFace: blueCardsAssets.blue10,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    cardFace: blueCardsAssets.blue11,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    cardFace: blueCardsAssets.blue12,
    difficulty: 'normal',
    color:'blue'
  },
]

export default cardsDataBlue;