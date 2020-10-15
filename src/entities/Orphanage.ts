import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity('orphanages')
class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    latidude: number;

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
}

export default Orphanage;