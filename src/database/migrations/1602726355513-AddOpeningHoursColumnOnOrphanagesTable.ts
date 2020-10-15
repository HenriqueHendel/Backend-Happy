import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddOpeningHoursColumnOnOrphanagesTable1602726355513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orphanages', new TableColumn({
            name:'opening_hours',
            type:'varchar'
        }) );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orphanage', 'opening_hours');
    }

}
