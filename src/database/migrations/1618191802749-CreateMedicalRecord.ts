import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateMedicalRecord1618191802749 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "medical_record",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "procedures", type: "text" },
          { name: "pacient_id", type: "int", isNullable: true },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "medical_record",
      new TableForeignKey({
        columnNames: ["pacient_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "pacient",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("medical_record");
    const foreignKey = table!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("pacient_id") !== -1
    );
    await queryRunner.dropForeignKey("medical_record", foreignKey!);

    await queryRunner.dropTable("medical_record");
  }
}
