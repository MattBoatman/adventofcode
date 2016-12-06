"use strict";
day2();

function getData(){
    let fs = require('fs'), filename = process.argv[2];
    let text = fs.readFileSync(filename, 'utf8');
    return text.split('\n');
}

function day2() {
    const content = getData();
    let grid2 = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];
    // let grid =  [[0, 0, 1, 0, 0],
    //           [0, 2, 3, 4, 0],
    //           [5, 6, 7, 8, 9],
    //           [0, 'A', 'B', 'C', 0],
    //           [0, 0, 'D', 0, 0]];
    // let day2Postion = [2,0];
    let day2Postion = [1,1];
    let code = '';


    content.forEach(function(line){
        for(let x = 0; x < line.length; x++){
                   if ((line[x] === "U") && grid2[day2Postion[0] - 1] && grid2[day2Postion[0] - 1][day2Postion[1]]) {
                    day2Postion[0]--;
                }
                else if (line[x] === "D" && grid2[day2Postion[0] + 1] && grid2[day2Postion[0] + 1][day2Postion[1]]) {
                    day2Postion[0]++;
                }
                else if (line[x] === "R" && grid2[day2Postion[1] + 1] && grid2[day2Postion[0]][day2Postion[1] + 1]) {
                    day2Postion[1]++;
                }
                else if (line[x] === "L" && grid2[day2Postion[1] - 1] && grid2[day2Postion[0]][day2Postion[1] - 1]) {
                    day2Postion[1]--;
                }
        }
          console.log(grid2[day2Postion[0]][day2Postion[1]]);
          code += grid2[day2Postion[0]][day2Postion[1]];
    });
    console.log(code);
}