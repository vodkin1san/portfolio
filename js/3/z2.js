let userName = 'Вячеслав';
let userSurname = 'Ермолович';




function getCorrectWord(word) {
    let firstLetter = word[0].toUpperCase();
    let lastLetters = word.substring(1).toLowerCase();
    
    return firstLetter + lastLetters;
}

let cottectName = getCorrectWord(userName);
let correctSurname = getCorrectWord(userSurname);


if ((cottectName != userName) || (correctSurname != userSurname)) {
    console.log('Имя и фамилия были преобразованы');
} else {
    console.log('Имя и фамилия остались без изменений');
}