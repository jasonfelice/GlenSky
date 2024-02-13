const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.REACT_APP_OPEN_KEY || 3000;

app.get('/api/places', async (req, res) => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
        params: req.query,
      });
      res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
  
});