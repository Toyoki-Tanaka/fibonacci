const express = require('express')
const app = express()

function fibonacchi(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    while (num3 < num) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3
    }
    return num3 === num;
}


app.get('/fibonacci/:num', (req, res) => {
    if (fibonacchi(Number(req.params.num))) {
        res.send("Very good. It is Fibonacchi")
    } else {
        res.send("I can tell this is not a fibonacchi number")
    }
})

app.listen(3000, console.log("listening on port 3000"))