let submitbutton = document.getElementById("submitbutton");

function convert(input) {
    let output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
    }
    return output;
  }
submitbutton.addEventListener("click", () => {
    let input = document.getElementById("input");
    let passwords = ["1100010 1100101 1100001 1110010 1110011 ", "1100010 1100101 1100001 1110010 "];
    if (passwords.includes(convert(input.value.toString().toLowerCase()))) {
        window.location.replace("https://sparrow-alt.github.io/tetris/mainindex.html");
    }else {
        let errors = ["nope", "wrong", "wrong wrong wrong", "nah", "no", "are you an impostor?", "lol no", "*dies inside* no"];
        let index = Math.floor(Math.random() * errors.length);
        document.getElementById("errortext").innerHTML = errors[index];
    }
});