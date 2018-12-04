import { Request, Response, NextFunction } from 'express';
import weather from 'openweather-apis';

import axios from 'axios';
require('dotenv').config()

export async function checkCity(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.city, req.params.state)
    const userState = req.params.state.toLowerCase().trim()
    const placeCheck = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.city}+${req.params.state}&types=geocode&key=${process.env.GOOGLEMAPS}`)
    const placeData = await placeCheck.data
   console.log(placeData.predictions.length)
   if(placeData.predictions.length < 1) {
       res.send({error: `No city found with the name: ${req.params.city}`})
   }
    let location = placeData.predictions[0].description.split(', ')
    const stateCheck = location.includes(req.params.state.toUpperCase())
    if (stateCheck) {
        next()
    } else {
        const cityName = req.params.city[0].toUpperCase() + req.params.city.substr(1)
        const stateName = userState.toUpperCase()
        res.send({error: `${cityName} could not be found in ${stateName}`})
    }
    
}

export async function getTemp(req: Request, res: Response) {
    console.log(process.env.GOOGLEMAPS)

    weather.setAPPID(process.env.WEATHERAPI)
    weather.setCity(req.params.city);
    weather.setUnits('imperial');
    weather.getTemperature((err: any, temp: any) => {
      console.log(temp);
      if(err) {
          res.send(err)
      } else {
        res.send({temperature: Math.round(temp)})
      }
      
  });
}