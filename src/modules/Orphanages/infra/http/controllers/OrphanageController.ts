import {Request, Response} from 'express';
import CreateOrphanageService from "@modules/Orphanages/services/CreateOrphanageService";
import ErrorHandler from '@shared/errors/handler';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
        const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image =>{
            return {path: image.filename}
        })

        const data = {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images};

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly: false
        })
    
        const orphanageService = new CreateOrphanageService();
    
        const orphanage = await  orphanageService.execute(data);
    
        return response.status(201).json({OrphanageCreated: orphanage});
    }
}