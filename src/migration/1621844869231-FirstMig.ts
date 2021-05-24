import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FirstMig1621844869231 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "url",
      columns: [
          {
              name: "id",
              type: "varchar",
              isPrimary: true
          },
          {
              name: "long_url",
              type: "varchar",
          },
          {
              name: "short_url",
              type: "varchar",
          }
      ]
  }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
