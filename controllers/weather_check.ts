import { Request, Response, NextFunction } from 'express';
import weather from 'openweather-apis';

import axios from 'axios';
require('dotenv').config()

export async function checkCity(req: Request, res: Response, next: NextFunction) {
    
    try {
        const placeCheck = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.city}+${req.params.state}&types=geocode&key=${process.env.GOOGLEMAPS}`)
    const placeData = await placeCheck.data
   if(placeData.predictions.length < 1) {
       res.send({error: `Not Found`})
       return
   }
    let location = placeData.predictions[0].description.split(', ')
    const stateCheck = location.includes(req.params.state.toUpperCase())
    if (stateCheck) {
        next()
    } else {
        res.send({error: `Not Found`})
    }

    }
    catch(err) {
        res.sendStatus(500)
        return false
    }
    
    
}

export async function getTemp(req: Request, res: Response) {

    try {
        weather.setAPPID(process.env.WEATHERAPI)
        weather.setCity(req.params.city);
        weather.setUnits('imperial');
        weather.getTemperature((err: any, temp: any) => {
          if(err) {
              res.send(err)
          } else {
            res.send({temperature: Math.round(temp)})
          }
          
      });
    }
    catch(err) {
        res.sendStatus(500)
        return false
    }
    
}