import {Request, Response} from 'express';
import CreateOrphanageService from "@modules/Orphanages/services/CreateOrphanageService";

export default {
    async create(request: Request, response: Response) {
        const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;
    
        const orphanageService = new CreateOrphanageService();
    
        const orphanage = await  orphanageService.execute({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends});
    
        return response.status(201).json({OrphanageCreated: orphanage});
    }
}