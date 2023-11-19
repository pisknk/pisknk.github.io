// getWeather.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { city } = req.query; // Get the city from the query parameters

  if (!city) {
    return res.status(400).json({ error: 'City parameter is missing' });
  }

  const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Retrieve API key from environment variables

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // Process the weather data and send the response to the client
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
