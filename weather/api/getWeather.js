// api/getWeather.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const { city } = req.query;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    if (!city || !apiKey) {
      return res.status(400).json({ error: 'City name or API key missing' });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    return res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
