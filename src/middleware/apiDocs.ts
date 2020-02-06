import {Router} from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../config/swagger.json';

export const handleAPIDoc = (router: Router) => {
    router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}

