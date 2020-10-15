import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterColumnName1602734031658 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("orphanages", "onpen_on_weekends", new TableColumn({
            name:"open_on_weekends",
            type: "boolean",
            default: false
        }) )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("orphanages", "onpen_on_weekends", new TableColumn({
            name:"onpen_on_weekends",
            type: "boolean",
            default: false
        }) )
    }

}
