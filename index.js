const active = document.querySelector("#active");
const newdata = document.querySelector("#new");
const recovered = document.querySelector("#recovered");
const totalCases = document.querySelector("#total-cases");
const totalDeaths = document.querySelector("#total-deaths");
const totalTest = document.querySelector("#total-test");

const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", async () => {
    const date = new Date();
    const today = date.toISOString().slice(0, 10);

    const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

    const options = {
    method: "GET",
	headers: {
		"X-RapidAPI-Key": "43078bfa5bmsh4dc91efe6705d5ap1f3cdajsn363eacd6c79d",
		"X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
};

const response = await fetch(BASE_URL, options);
const data = await response.json();

if (data.response.length) {
    const dataResponse = data.response[0]

    console.log(dataResponse);
    active.innerText = dataResponse.cases.active;
    newdata.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
    recovered.innerText = dataResponse.cases.recovered;
    totalCases.innerText = dataResponse.cases.total;
    totalDeaths.innerText = dataResponse.deaths.total;
    totalTest.innerText = dataResponse.tests.total;
}
});