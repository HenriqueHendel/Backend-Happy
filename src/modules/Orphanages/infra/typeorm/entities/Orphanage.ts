import {PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn} from 'typeorm';
import OrphanageImages from './OrphanageImages';

@Entity('orphanages')
class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    latitude: number;

    @Column('decimal')
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions:string;

    @Column()
    opening_hours: string;

    @Column('boolean')
    open_on_weekends: boolean

    @OneToMany(()=> OrphanageImages, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: OrphanageImages[];
}

export default Orphanage;