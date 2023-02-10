let password = '******';

function checkPassword(password) {
if (password.length > 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль не надёжный');  
}
}

console.log(checkPassword('1234-'));
console.log(checkPassword('4321_'));
console.log(checkPassword('qaz-xsw'));
console.log(checkPassword('_zxd'));
console.log(checkPassword('_-a'));
console.log(checkPassword('qaz'));
console.log(checkPassword('_-3'));
console.log(checkPassword('123456789'));
