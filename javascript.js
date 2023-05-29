for(var i=0; i<26; i++)
{
var btn = document.querySelectorAll("button")[i];
btn.addEventListener("click", function ()
{
    var text = this.innerHTML;
    console.log(text + " is click");
    letters(text);
}
);
}

function letters(text)
{
    switch(text)
    {
    case "A":
        var audio = new Audio("letters/a.mp3");
        audio.play();
        break;

    case "B":
        var audio = new Audio("letters/b.mp3");
        audio.play();
        break;

    case "C":
    var audio = new Audio("letters/c.mp3");
    audio.play();
    break;

    case "D":
        var audio = new Audio("letters/d.mp3");
        audio.play();
        break;

    case "E":
        var audio = new Audio("letters/e.mp3");
        audio.play();
        break;

    case "F":
        var audio = new Audio("letters/f.mp3");
        audio.play();
        break;
    
    case "G":
        var audio = new Audio("letters/g.mp3");
        audio.play();
        break;

    case "H":
        var audio = new Audio("letters/h.mp3");
        audio.play();
        break;

    case "I":
        var audio = new Audio("letters/i.mp3");
        audio.play();
        break;

    case "J":
        var audio = new Audio("letters/j.mp3");
        audio.play();
        break;

    case "K":
        var audio = new Audio("letters/k.mp3");
        audio.play();
        break;

    case "L":
        var audio = new Audio("letters/l.mp3");
        audio.play();
        break;

    case "M":
    var audio = new Audio("letters/m.mp3");
    audio.play();
    break;

    case "N":
        var audio = new Audio("letters/n.mp3");
        audio.play();
        break;

    case "O":
    var audio = new Audio("letters/o.mp3");
    audio.play();
    break;

    case "P":
        var audio = new Audio("letters/p.mp3");
        audio.play();
        break;

    case "Q":
        var audio = new Audio("letters/q.mp3");
        audio.play();
        break;

    case "R":
        var audio = new Audio("letters/r.mp3");
        audio.play();
        break;

    case "S":
    var audio = new Audio("letters/s.mp3");
    audio.play();
    break;

    case "T":
        var audio = new Audio("letters/t.mp3");
        audio.play();
        break;

    case "U":
    var audio = new Audio("letters/u.mp3");
    audio.play();
    break;

    case "V":
        var audio = new Audio("letters/v.mp3");
        audio.play();
        break;

    case "W":
        var audio = new Audio("letters/w.mp3");
        audio.play();
        break;

    case "X":
        var audio = new Audio("letters/x.mp3");
        audio.play();
        break;

    case "Y":
        var audio = new Audio("letters/y.mp3");
        audio.play();
        break;

    case "Z":
        var audio = new Audio("letters/z.mp3");
        audio.play();
        break;
    }
}