const btn = document.querySelector('.hobby-btn');
const output = document.querySelector('.hobby-output');
const hobbyList = ['Kite Flying',
'Coffee Connoisseur',
'Working Out',
'Knitting',
'Crochet',
'Tai Kwon Do',
'Parkour',
'NFC Tag Automation',
'Mechanical Keyboards'
]
const randomNumber = () => {
    return Math.floor(Math.random() * hobbyList.length);
}
const generateHobby = () => {
    randomNumber();
    let hobbySelected = hobbyList[randomNumber()];
    output.innerText = `I think I'm going to try ${hobbySelected} next!`;
}
btn.onclick = generateHobby();