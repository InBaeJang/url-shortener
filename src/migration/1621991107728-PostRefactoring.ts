import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class PostRefactoring1621991107728 implements MigrationInterface {

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
          isUnique: true
        },
        {
          name: "short_url",
          type: "varchar",
        }
      ]
    }), true)

    await queryRunner.createIndex("url", new TableIndex({
      name: "IDX_LONG_URL",
      columnNames: ["long_url"]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
