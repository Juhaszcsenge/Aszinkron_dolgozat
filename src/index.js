import './style.css';

let quotes = []

document.addEventListener('DOMContentLoaded', async() => {
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();
    for (let e of eredmeny.quotes) {
        quotes.push(e)
    }

    function idezetMegjelenites(quotesList) {
        let display = document.getElementById('quotes')
        display.innerHTML = ""

        for (let e of quotesList) {
            let li = document.createElement('li')
            li.innerHTML += "id: " + q.id + "<br>";
            li.innerHTML += "author:" + q.author + "<br>";

            display.appendChild(li)

        }
    }
})



document.getElementById('Osszes').addEventListener('click', async() => {
    document.getElementById('lista').textContent = ""
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();
    eredmeny.quotes.sort((a, b) => a.author.localeCompare(b.author))
    for (let e of eredmeny.quotes) {
        let li = document.createElement('li')
        li.innerHTML = e.author + "," + e.quote;
        document.getElementById('lista').appendChild(li)
    }
})

document.getElementById('Hossz').addEventListener('click', async() => {
    document.getElementById('lista').textContent = ""
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();
    let q = "The,the";
    for (let e of eredmeny.quotes) {
        q += e.quote.length + "The,the";
    }
    document.getElementById('lista').textContent = q;

})

document.getElementById('The').addEventListener('click', async() => {
    document.getElementById('ollist').textContent = ",";
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();
    for (let e of eredmeny.quotes) {
        let li = document.createElement('li');
        li.innerHTML = e.quote;
        document.getElementById('ollist').appendChild(li)
    }
})

document.getElementById('Darabszam').addEventListener('click', async() => {
    let szerzo = document.getElementById('valami').value;
    document.getElementById('valami').value;
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();
    let sum = 0;
    for (let e of quotes) {
        if (e.author == szerzo) {
            sum++
        }
    }
    document.getElementById('db').value = sum;



})