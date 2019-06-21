var figureWhite = [`&#9814;`,`&#9816;`,`&#9815;`,`&#9813;`,`&#9812;`,`&#9815;`,`&#9816;`,`&#9814;`];
var figureBlack = [`&#9820;`,`&#9822;`,`&#9821;`,`&#9819;`,`&#9818;`,`&#9821;`,`&#9822;`,`&#9820;`];
function generChess() {
    let $desk = document.getElementById('desk');
    $desk.innerHTML = '';
    for (let i = 0; i<=9; i++){
        let $row = document.createElement('div');
        $row.classList.add('row');
        for (let j = 0;j<=9;j++){
            let $col = document.createElement('div');
            $col.classList.add('col');
           $row.appendChild($col);
           if (i%2 !== 0 && j%2 === 0 || i%2 === 0 && j%2 !== 0 || i===0 || i===9 || j ===0 || j===9 ){
             $col.classList.add('black');
           }else {
               $col.classList.add('white')
           }
           if (i === 0 && j > 0 && j < 9 || i === 9 && j > 0 && j < 9){
               $col.innerHTML = `&#${j + 64};`
           }
            if (j === 0 && i > 0 && i < 9 || j === 9 && i > 0 && i < 9){
                $col.innerHTML = `${9 - i}`
            }
           if (i === 1 && j>0 && j<9){
               $col.innerHTML = figureWhite[j - 1];
           }
           if (i === 2 && j>0 && j<9){
               $col.innerHTML = `&#9817;`
           }
            if (i === 8 && j>0 && j<9){
                $col.innerHTML = figureBlack[j - 1];
            }
            if (i === 7 && j>0 && j<9){
                $col.innerHTML = `&#9823;`
            }
        }
        $desk.appendChild($row);
    }
    
}
generChess();


