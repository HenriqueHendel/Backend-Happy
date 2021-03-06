import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO';
import Orphanage from '../infra/typeorm/entities/Orphanage';

interface IOrphanageRepository {
    create(data: ICreateOrphanageDTO): Promise<Orphanage>

    index(): Promise<Orphanage[]>

    show(id: number): Promise<Orphanage | undefined>
}

export default IOrphanageRepository;