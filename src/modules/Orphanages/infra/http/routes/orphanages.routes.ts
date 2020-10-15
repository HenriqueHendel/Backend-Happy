import {Router} from 'express';
import CreateOrphanageService from "@modules/Orphanages/services/CreateOrphanageService";

const orphanagesRouter = Router();

orphanagesRouter.post("/", async (request, response) =>{
    const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;

    const orphanageService = new CreateOrphanageService();

    const orphanage = await  orphanageService.execute({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends});

    return response.json({OrphanageCreated: orphanage});
})

export default orphanagesRouter;