const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((playtime, number) => {playtime + number;
});

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);

