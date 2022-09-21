
const values = {
    earth: 1,
    mercury: 0.38,
    venus: 0.91,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06,
    sun: 27.01,
    moon: 0.166,

}

function Calculate(id) {

    var weight = document.getElementById("w1").value;

    var value = weight * values[id];

    document.getElementById("r1").innerHTML = `Your weight on ${id} is: ${value} kg `

}



