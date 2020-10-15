import {getCustomRepository} from 'typeorm';
import Orphanage from "@modules/Orphanages/infra/typeorm/entities/Orphanage";
import OrphanagesRepository from '@modules/Orphanages/infra/typeorm/repositories/OrphanagesRepository';

interface Request {
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions:string;
    opening_hours: string;
    open_on_weekends: boolean
}

class CreateOrphanageService {
    public async execute({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends}: Request): Promise<Orphanage> {
        const orphanageRepository = getCustomRepository(OrphanagesRepository);

        const orphanage = await orphanageRepository.create({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends});

        return orphanage;
    }
}

export default CreateOrphanageService;