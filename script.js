

function szamol () {
let F = document.getElementById('fogyasztás').value;
let V = document.getElementById('tank').value;
let U = document.getElementById('ut').value;

let megtehetoUt = V * 100/F
if(megtehetoUt <Ut ){
document.getElementById('megoldás').innerHTML = 'Az út meg tehető tankolás nélkül'
}
else {
document.getElementById('megoldás').innerHTML = 'Az út meg tehető tankolás nélkül'
}

}







