import request from 'request-promise';
import dotenv from 'dotenv';
import { json } from 'express';

dotenv.config();

export const getPlaces = async (query: string) => {
  console.log('Insde...... data providers....');
  
  // const key = process.env.OPEN_CAGE_DATA_KEY;
  // const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
  // const url = 'https://api.opencagedata.com/geocode/v1/geojson';
  // const response = await request(url);
  // return JSON.parse(response);
  const json: Array<any> = [{ uri: 'https://api.opencagedata.com/geocode/v1/geojson',
  transform: undefined,
  simple: true,
  resolveWithFullResponse: false,
  transform2xxOnly: false }];
  return json;
};