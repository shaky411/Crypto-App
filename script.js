
// cryptoKey = "Q3OxAZoGzqJkdc85BD6mLg==OK7RgsexU0B5O25j"

// let options = {
//     method: 'GET'
// }

// let requestUrl = "https://cryptoicons.org/api/icon/eth/200"

// function getIcons() {
//     fetch(requestUrl, options)

//         .then((response) => response.json())
//         .then((data) => {
//             let icons = data
//             console.log(icons)

//         })
// }

// getIcons();






requestUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=gbp"


function getPrices() {
    fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
            let prices = data;
            let html = "";
            console.log(prices)

            let bitcoinPrice = prices.bitcoin.gbp;
            let ethereumPrice = prices.ethereum.gbp
            let litecoinPrice = prices.litecoin.gbp
            let dogecoinPrice = prices.dogecoin.gbp

            let modalPrice = document.getElementById('coin-price');
            let coinData = document.getElementById('prices-container');

            html += 
            `

                    <div class="prices-container">
        <div id="coin-price" class="coin-price">
            <div class="logo"><img src="/assets/bitcoin.png" alt=""></div>
            <div>
                <h1>Bitcoin</h1>
                <h1>£${bitcoinPrice}</h1>
            </div>
        </div>
        <div class="coin-price">
            <div class="logo"><img src="/assets/ethereum.png" alt=""></div>
            <div>
                <h1>Ehereum</h1>
                <h1>£${ethereumPrice}</h1>
            </div>
        </div>
        <div class="coin-price">
            <div class="logo"><img src="/assets/litecoin.png" alt=""></div>
            <div>
                <h1>Litecoin</h1>
                <h1>£${litecoinPrice}</h1>
            </div>
        </div>
        <div class="coin-price">
            <div class="logo"><img src="/assets/dogecoin.png" alt=""></div>
            <div>
                <h1>Dogecoin</h1>
                <h1>£${dogecoinPrice}</h1>
            </div>
        </div>
    </div>

                    `
            coinData.innerHTML = html

        })

    // calls for the prices every 10 seconds
    setInterval(function() {

        getPrices();
    },100000);

}

getPrices();


