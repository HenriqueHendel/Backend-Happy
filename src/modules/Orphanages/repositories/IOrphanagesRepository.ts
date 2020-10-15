import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO';
import Orphanage from '../infra/typeorm/entities/Orphanage';

interface IOrphanageRepository {
    create(data: ICreateOrphanageDTO): Promise<Orphanage>
}

export default IOrphanageRepository;