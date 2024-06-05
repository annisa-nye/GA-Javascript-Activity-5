// Simulate the weather API response
const weatherApiResponse = {
	data: {
		isRaining: false, // Change this to true to simulate rain
		location: 'Melbourne', // Example location
		temperature: 22, // Example temperature in Celsius
	},
};

// Mocking axios.get to simulate an API call
axios.get = function () {
	return new Promise((resolve) => {
		resolve(weatherApiResponse);
	});
};

// Function that uses axios to check the weather
function checkWeather() {
	return axios
		.get(
			'http://api.openweathermap.org/geo/1.0/direct?q=Melbourne&limit=1&appid=75a05d107635041c8de88c5b7447d5ab'
		) // This URL is just a placeholder
		.then((response) => {
			if (response.data.isRaining) {
				throw new Error('It is raining.');
			} else {
				return response.data;
			}
		});
}

// Using the function to decide where to have the birthday party
checkWeather()
	.then((data) => {
		const message = `The weather is good. The temperature is ${data.temperature}°C in ${data.location}.`;
		console.log(message);
		document.getElementById(
			'message'
		).innerText = `${message} The birthday party will be at the park.`;
		// Code to invite all friends to the park
	})
	.catch((error) => {
		console.log(error.message);
		document.getElementById(
			'message'
		).innerText = `${error.message} The birthday party will be at the house.`;
		// Code to invite only some friends to the house
	});

// Function that uses fetch to get data from the URL
function getData() {
	fetch('https://onlineprojectsgit.github.io/API/WDEndpoint.json')
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Request failed');
			}
		})
		.then((data) => {
			console.log(data);

			data.info.students.forEach((student) => {
				let newP = document.createElement('p');
				newP.innerHTML = student;
				document.getElementById('students').appendChild(newP);
			});
		})
		.catch((error) => {
			console.error(error.message);
		});
}

// Call getData function to fetch and log the data
getData();

// Dynamically load and execute getData function
document.addEventListener('DOMContentLoaded', function () {
	getData();
});
