function reverseString(str) {
    if (str.length <= 1) return str;
    let newStr = '';
    for (let i = str.length - 1; i > 0; --i) {
        newStr += str.charAt(i);
    }
    console.log(newStr);
}

reverseString('привет, мир!');
