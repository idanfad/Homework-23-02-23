function bitCoinCurrensyRequest() {
    return fetch('https://data.binance.com/api/v3/ticker/24hr')
        .then((response) => response.json())
        .then((response) => {
            const btcElement = response.find((element) => element.symbol === 'BTCUSDT');
            return btcElement.lastPrice;
        });
}

function getUSDtoILS() {
    return fetch('https://api.exchangerate.host/latest')
        .then((response) => response.json())
        .then((response) => response.rates.ILS);
}

async function convertBTCtoILS() {

    setInterval(async() => {

        const a = await bitCoinCurrensyRequest();
        const b = await getUSDtoILS();
        document.body.innerHTML = "";
        let newText = document.createTextNode(`The BitCoin Currency in ILS is ` + a * b+'ILS');
        document.body.appendChild(newText);
    }, 3000);
}

convertBTCtoILS();

