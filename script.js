
function calc(){
    let math = document.getElementById("math").value;
    let phy = document.getElementById("phy").value;
    let comp = document.getElementById("comp").value;
    let prog = document.getElementById("prog").value;
    let grades = "";

    let totalGrades = parseFloat(math) + parseFloat(phy) + parseFloat(comp) + parseFloat(prog);

    let perc = (totalGrades/400) * 100;
    
    if (perc <= 100 && perc >= 90) {
        grades = "A";
    }else if (perc <= 89 && perc >= 70) {
        grades = "B";
    }else if (perc <= 69 && perc >= 50) {
        grades = "C";
    }else if (perc <= 49 && perc >= 40) {
        grades = "D";
    }else if (perc <= 39 && perc >= 30) {
        grades = "E";
    }else{
        grades = "F";
    }

    if (perc >= 40) {
        document.getElementById("showData").innerHTML = `Out of 400, your total scored is ${totalGrades}
        and your percentage is ${perc}%. <br> Your grade is ${grades}. You passed `;
    }

    if (perc <= 39) {
        document.getElementById("showData").innerHTML = `Out of 400, your total scored is ${totalGrades}
        and your percentage is ${perc}%. <br> Your grade is ${grades}. You have to repeat.`;
    }
}