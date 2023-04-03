// json generator
// json
let 회원정보 = [
  {
    _id: '642a6221ec8e1cf02b1bd963',
    index: 0,
    age: 33,
    eyeColor: 'brown',
    name: 'Roach Weeks',
    gender: 'male',
    company: 'XSPORTS',
  },
  {
    _id: '642a6221ea4fc483e1544404',
    index: 1,
    age: 32,
    eyeColor: 'green',
    name: 'Katrina Mckinney',
    gender: 'female',
    company: 'TERRAGEN',
  },
  {
    _id: '642a62210cfa9fc7e189da4e',
    index: 2,
    age: 21,
    eyeColor: 'brown',
    name: 'Darlene Wallace',
    gender: 'female',
    company: 'MAGNEATO',
  },
  {
    _id: '642a6221eb18003bbbcb4244',
    index: 3,
    age: 39,
    eyeColor: 'blue',
    name: 'Fox Pratt',
    gender: 'male',
    company: 'CANOPOLY',
  },
  {
    _id: '642a62215503a3a07a561b0c',
    index: 4,
    age: 26,
    eyeColor: 'brown',
    name: 'Claudette Robinson',
    gender: 'female',
    company: 'ISOSWITCH',
  },
];

회원정보[0];
회원정보[0]['name'];
회원정보[1]['company'];

let 나이평균 =
  (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) /
  6;

console.log(나이평균);
