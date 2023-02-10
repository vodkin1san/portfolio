let roadMines = [false, false, true, false, true, false, false, false, false, true];
let step = 2;

for (let i = 0 ; i < roadMines.length; ++i) {
    if (roadMines[i] == true) {
        step -= 1;
        if (step == 1) {
            console.log(`Танк переместился на позицию ${i + 1}, танк повреждён`);
        } else if (step == 0) {
            console.log(`Танк переместился на позицию ${i + 1}, танк уничтожен`);
            break
        } else {
            console.log(`Танк переместился на позицию ${i + 1}`);
        }
    } else {
        console.log(`Танк переместился на позицию ${i + 1}`);
    }
  }