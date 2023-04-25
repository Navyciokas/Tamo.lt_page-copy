const info = [
    ["jonas", "slaptazodis"],
    ["petras", "slaptazodis"],
    ["danielius", "slaptazodis"]
]
let i = 0
let found = 0

function chechInfo(){
    while(i < info.length){
        if(document.getElementById("vardas").value == info[i][0] && document.getElementById("slaptazodis").value == info[i][1]){
            location.href = "Dienynas.html";
            found = 1
            document.getElementById("notfound").innerHTML = ''
            break;
        }
        console.log(i)
        i++
    }
    console.log("end")
    if(found == 0){
        document.getElementById("notfound").innerHTML = '<p>Neteisingas prisijungimo vardas ir/arba slaptažodis</p>'
        console.log("Isvede notfound")
    }
    i = 0
    found = 0
}


