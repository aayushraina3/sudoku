document.addEventListener('DOMContentLoaded', ()=>{

const board = [
    [getVal(0,0),getVal(0,1),getVal(0,2),getVal(0,3),getVal(0,4),getVal(0,5),getVal(0,6),getVal(0,7),getVal(0,8),getVal(0,9)],
    [getVal(1,0),getVal(1,1),getVal(1,2),getVal(1,3),getVal(1,4),getVal(1,5),getVal(1,6),getVal(1,7),getVal(1,8),getVal(1,9)],
    [getVal(2,0),getVal(2,1),getVal(2,2),getVal(2,3),getVal(2,4),getVal(2,5),getVal(2,6),getVal(2,7),getVal(2,8),getVal(2,9)],
    [getVal(3,0),getVal(3,1),getVal(3,2),getVal(3,3),getVal(3,4),getVal(3,5),getVal(3,6),getVal(3,7),getVal(3,8),getVal(3,9)],
    [getVal(4,0),getVal(4,1),getVal(4,2),getVal(4,3),getVal(4,4),getVal(4,5),getVal(4,6),getVal(4,7),getVal(4,8),getVal(4,9)],
    [getVal(5,0),getVal(5,1),getVal(5,2),getVal(5,3),getVal(5,4),getVal(5,5),getVal(5,6),getVal(5,7),getVal(5,8),getVal(5,9)],
    [getVal(6,0),getVal(6,1),getVal(6,2),getVal(6,3),getVal(6,4),getVal(6,5),getVal(6,6),getVal(6,7),getVal(6,8),getVal(6,9)],
    [getVal(7,0),getVal(7,1),getVal(7,2),getVal(7,3),getVal(7,4),getVal(7,5),getVal(7,6),getVal(7,7),getVal(7,8),getVal(7,9)],
    [getVal(8,0),getVal(8,1),getVal(8,2),getVal(8,3),getVal(8,4),getVal(8,5),getVal(8,6),getVal(8,7),getVal(8,8),getVal(8,9)],
    [getVal(9,0),getVal(9,1),getVal(9,2),getVal(9,3),getVal(9,4),getVal(9,5),getVal(9,6),getVal(9,7),getVal(9,8),getVal(9,9)]
]

function getVal(i,j){
    document.getElementById(`${i},${j}`);
}

});