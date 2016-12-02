"use strict";
day1();

function getData(){
    let fs = require('fs'), filename = process.argv[2];
    let text = fs.readFileSync(filename, 'utf8');
    return text.split(', ');
}

function day1() {
    let contents = getData();
    let horizontal = 0, vertical = 0;
    let dir = ['up','down','right','left'];
    let currentDir = dir[0];
    contents.forEach(function(v) {
        var n = parseInt(v.slice(1));
        switch(currentDir) {
                case 'up':
                if (v[0] === 'R') {
                    horizontal += n; 
                    currentDir=dir[2];
                } else {
                    horizontal -= n;
                    currentDir=dir[3];
                } 
                    break;
                case 'down':
                if (v[0] == 'R') {
                    horizontal -= n; 
                    currentDir=dir[3];
                } else {
                    horizontal += n;
                    currentDir=dir[2];
                }
                    break;
                case 'left': 
                    if (v[0] == 'R') {
                        vertical += n;
                        currentDir=dir[0];
                    } else {
                        vertical -= n;
                        currentDir=dir[1];
                    }
                    break;
                case 'right': 
                    if(v[0] === 'R') {
                        vertical -= n; 
                        currentDir=dir[1];
                    } else {
                        vertical += n;
                        currentDir=dir[0];
                    } 
                    break;
                default:
                    break;
        }

    });

console.log(Math.abs(horizontal)+Math.abs(vertical));
 
};
