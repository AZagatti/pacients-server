import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePacient1618085044913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pacient",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar" },
          { name: "birthday", type: "varchar" },
          { name: "gender", type: "varchar" },
          { name: "weight", type: "int" },
          { name: "height", type: "int" },
          { name: "ethnicity", type: "varchar" },
          { name: "schooling", type: "varchar" },
          { name: "occupation", type: "varchar" },
          { name: "rg", type: "varchar" },
          { name: "cpf", type: "varchar" },
          { name: "marital_status", type: "varchar" },
          { name: "nationality", type: "varchar" },
          { name: "nationality_state", type: "varchar" },
          { name: "father", type: "varchar" },
          { name: "father_nationality", type: "varchar" },
          { name: "mother", type: "varchar" },
          { name: "mother_nationality", type: "varchar" },
          { name: "contact", type: "varchar" },
          { name: "street", type: "varchar" },
          { name: "number", type: "int" },
          { name: "add_on", type: "varchar", isNullable: true },
          { name: "district", type: "varchar" },
          { name: "city", type: "varchar" },
          { name: "cep", type: "varchar" },
          { name: "state", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pacient");
  }
}
