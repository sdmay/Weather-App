import express from 'express';
import * as forecast from './controllers/weather_check';
const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
  });


  app.get('/weather/:city/:state', forecast.checkCity, forecast.getTemp)
app.listen(PORT, () => {
    console.log('Listening on, ', PORT )
})