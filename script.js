function encrypt() {
    var inputText = document.getElementById("inputText").value.toUpperCase().replace(/[^A-Z]/g, '');
    var shift = parseInt(document.getElementById("shift").value);
    var result = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        var encryptedCharCode = (charCode - 65 + shift) % 26 + 65;
        result += String.fromCharCode(encryptedCharCode);
    }

    document.getElementById("result").innerText = result;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value.toUpperCase().replace(/[^A-Z]/g, '');
    var shift = parseInt(document.getElementById("shift").value);
    var result = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        var decryptedCharCode = (charCode - 65 - shift + 26) % 26 + 65;
        result += String.fromCharCode(decryptedCharCode);
    }

    document.getElementById("result").innerText = result;
}
