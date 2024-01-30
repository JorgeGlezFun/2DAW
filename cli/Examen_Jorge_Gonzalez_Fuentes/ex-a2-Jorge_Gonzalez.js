document.addEventListener("keydown", tecla => {

    switch (tecla.key) {
        case "a":
            document.body.style.backgroundColor = 'yellow';
            break;

        case "r":
            document.body.style.backgroundColor = 'red';
            break;

        case "n":
            document.body.style.backgroundColor = 'black';
            break;

        case "v":
            document.body.style.backgroundColor = 'green';
            break;
    };
})

document.addEventListener("keyup", ()=>{
    document.body.style.backgroundColor = 'white'
})
