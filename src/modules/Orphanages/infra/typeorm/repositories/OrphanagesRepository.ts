import {Repository, getRepository, EntityRepository} from 'typeorm';

import Orphanage from '../entities/Orphanage';
import IOrphanagesRepository from "@modules/Orphanages/repositories/IOrphanagesRepository";
import ICreateOrphanageDTO from "@modules/Orphanages/dtos/ICreateOrphanageDTO";

@EntityRepository()
class OrphanagesRepository implements IOrphanagesRepository {
    private ormRepository: Repository<Orphanage>;

    constructor(){
        this.ormRepository = getRepository(Orphanage);
    }

    public async create({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends}: ICreateOrphanageDTO){
        const orphanage = this.ormRepository.create({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends});
        await this.ormRepository.save(orphanage);

        return orphanage;
    }
}

export default OrphanagesRepository;