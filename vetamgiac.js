let numrows = 5;
hinhtamgiactren(numrows);
hinhtamgiacduoi(numrows);


function hinhtamgiactren(rows) {
    for(let i =1; i<= rows;i++){
        let row ="";
        for(let j=1;j<=i;j++){
            row+="*";
        }
        console.log(row);

    }
    console.log();
}

function hinhtamgiacduoi(rows) {
    for(let i = rows; i>= 1; i--){
        let row = "";
        for(let j = 1; j<= i; j++){
            row +="*";
        }
        console.log(row);
    }
}