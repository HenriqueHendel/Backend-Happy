import {Router} from 'express';
import {getCustomRepository} from 'typeorm';
import OrphanagesController from '@modules/Orphanages/infra/controllers/OrphanageController';

import multer from 'multer';
import multerConfig from '@modules/Orphanages/infra/config/upload';

import OrphanagesRepository from '../../typeorm/repositories/OrphanagesRepository';

const orphanagesRouter = Router();

const upload = multer(multerConfig);

orphanagesRouter.get("/", async(request, response)=>{
    const orphanagesRepository = getCustomRepository(OrphanagesRepository);

    const orphanages = await orphanagesRepository.index();

    return response.json(orphanages);

})

orphanagesRouter.get("/:id", async(request, response)=>{
    try{
        const {id} = request.params;

        const orphanagesRepository = getCustomRepository(OrphanagesRepository);

        const orphanages = await orphanagesRepository.show(parseInt(id));

        return response.json(orphanages);
    }catch(err){
        return response.status(400).json({message: err.message});
    }

})

orphanagesRouter.post("/", upload.array('file'), OrphanagesController.create)

export default orphanagesRouter;