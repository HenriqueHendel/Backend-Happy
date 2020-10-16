import {Request, Response} from 'express';
import CreateOrphanageService from "@modules/Orphanages/services/CreateOrphanageService";

export default {
    async create(request: Request, response: Response) {
        const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image =>{
            return {path: image.filename}
        })
    
        const orphanageService = new CreateOrphanageService();
    
        const orphanage = await  orphanageService.execute({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images});
    
        return response.status(201).json({OrphanageCreated: orphanage});
    }
}