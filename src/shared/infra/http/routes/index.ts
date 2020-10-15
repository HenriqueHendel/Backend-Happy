import {Router} from 'express';
import orphanagesRoutes from '@modules/Orphanages/infra/http/routes/orphanages.routes';

const Routes = Router();

Routes.use("/orphanages", orphanagesRoutes);

export default Routes;