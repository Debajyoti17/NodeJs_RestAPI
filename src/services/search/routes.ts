import { Request, Response } from 'express';
import { getPlacesByName } from './SearchController';
import { checkSearchParams } from '../../middleware/checks'

export default [
  {
       path: "/api/v1/search",
       method: "get",
       handler: [
           checkSearchParams,
           async ({ query }: Request, res: Response) => {
               console.log('Inside........asynch call...............');
               const result = await getPlacesByName(query.q);
               res.status(200).send(result);
           }
       ]
   },

/*
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
    }
  }*/
];