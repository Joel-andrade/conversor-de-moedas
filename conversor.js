
const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const euro = 5.2
const real = 6

const convertValues = () => {
    const inputDolar = document.getElementById("input-dolar").value
    const dolarValueText = document.getElementById("dolar-value-text")
    const euroValueText = document.getElementById("euro-value-text")

    dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputDolar);

    if (select.value === "€ Euro") {
        euroValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputDolar / euro);
    }

    if (select.value === "R$ Real Brasileiro") {
        euroValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(inputDolar / real);
    }


}


changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value == "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "/assets/portugal.png"
    }


    if (select.value == "R$ Real Brasileiro") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImg.src = "assets/br.png"
    }

    convertValues()

}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)

