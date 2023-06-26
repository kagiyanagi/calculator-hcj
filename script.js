// theme
var colorMod = document.querySelector('body');

function colorSeter(variable, color) {
    colorMod.style.setProperty(variable, color);
}

function darkMode() {
    let colors = [
        { var: "--result-color", value: "#22252d" },
        { var: "--body-color", value: "#12151b" },
        { var: "--input-color", value: "#292d36" },
        { var: "--button-active", value: "#686868" },
        { var: "--icon-active", value: "#717379" },
        { var: "--icon-notactive", value: "#fff" },
        { var: "--text-color", value: "#fff" },
    ]
    colors.forEach(color => {
        colorSeter(color.var, color.value)
    })
}

function lightMode() {
    let colors = [
        { var: "--result-color", value: "#fff" },
        { var: "--body-color", value: "#f5f5f5" },
        { var: "--input-color", value: "#f9f9f9" },
        { var: "--button-active", value: "#dbdbdb" },
        { var: "--icon-notactive", value: "#8d8d8d" },
        { var: "--icon-active", value: "#232733" },
        { var: "--text-color", value: "#232733" },
    ]
    colors.forEach(color => {
        colorSeter(color.var, color.value)
    })
}
// theme ends

// histoy

function historyBox() {
    document.getElementById('main-box').classList = "main-box-hide";
    document.getElementById('history-hide').className = "history";
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

// histoy end

// main code

var display = document.getElementById('result');
display.style.fontSize = "32px";
var resultHistory = document.getElementById('result-history');
var symbolsToColor = ['-', '*', '/', '+', '%'];
var globleDisply;
var mainHistory = [''];

function history() {

}

function fontSize() {
    var resultLenth = display.innerHTML.toString().length;
    let maxNum = 12;
    let fontS = display.style.fontSize
    if (resultLenth >= maxNum) {
        display.style.fontSize = String(Number(fontS.replace("px", '')) * 0.99).concat("px")
        display.style.margin = "8px";
    }
}

function opprate(num) {
    if (display.innerHTML == 0) {
        display.innerHTML = num;
    } else {
        display.innerHTML += num;
    }
    let resultString = display.innerHTML;
    resultString = resultString.replaceAll('<span class="red">', "")
        .replaceAll('</span>', "");
    display.innerHTML = resultString.split('')
        .map(char => symbolsToColor
            .includes(char) ? `<span class="red">${char}</span>` : char)
        .join('');
    fontSize();
}

function equals() {
    let resultString = display.innerHTML;
    resultString = resultString.replaceAll('<span class="red">', "")
        .replaceAll('</span>', "");
    let coloredDisplay = resultString.split('')
        .map(char => symbolsToColor
            .includes(char) ? `<span class="red">${char}</span>` : char)
        .join('');
    resultHistory.innerHTML = coloredDisplay;
    display.innerHTML = eval(resultString);
    if (globleDisply == null) {
        globleDisply = "!" + resultString + "!";
    } else if (globleDisply != null) {
        globleDisply += resultString + "!";
    }
    console.log("globleDisply : ", globleDisply);
    mainHistory += globleDisply.split('!');
    fontSize();
}

function allclear() {
    resultHistory.innerHTML = "0";
    display.innerHTML = "0";
    display.style.fontSize = "32px"
}

function undo() {
    var displayContent = display.innerHTML.toString();
    var resultLenth = display.innerHTML.toString().length;
    let maxNum = 12;
    let fontS = display.style.fontSize
    if (resultLenth >= maxNum) {
        display.style.fontSize = String(Number(fontS.replace("px", '')) * 1.02).concat("px")
        display.style.margin = "8px";
    }
    if (displayContent.length > 1) {
        displayContent = displayContent.slice(0, -1);
    } else {
        displayContent = "0";
    }

    display.innerHTML = displayContent;
    fontSize();
}

document.addEventListener("keydown", function (event) {
    var key = event.key;
    switch (key) {
        case "0":
            event.preventDefault();
            opprate(0);
            break;
        case "1":
            event.preventDefault();
            opprate(1);
            break;
        case "2":
            event.preventDefault();
            opprate(2);
            break;
        case "3":
            event.preventDefault();
            opprate(3);
            break;
        case "4":
            event.preventDefault();
            opprate(4);
            break;
        case "5":
            event.preventDefault();
            opprate(5);
            break;
        case "6":
            event.preventDefault();
            opprate(6);
            break;
        case "7":
            event.preventDefault();
            opprate(7);
            break;
        case "8":
            event.preventDefault();
            opprate(8);
            break;
        case "9":
            event.preventDefault();
            opprate(9);
            break;
        case "+":
            event.preventDefault();
            opprate(' + ');
            break;
        case "-":
            event.preventDefault();
            opprate(' - ');
            break;
        case "*":
            event.preventDefault();
            opprate(' * ');
            break;
        case "/":
            event.preventDefault();
            opprate(' / ');
            break;
        case "=":
            event.preventDefault();
            equals();
            break;
        case "Enter":
            event.preventDefault();
            equals();
            break;
        case "Backspace":
            event.preventDefault();
            undo();
            break;
        case "Delete":
            event.preventDefault();
            allclear();
            break;
    }
});