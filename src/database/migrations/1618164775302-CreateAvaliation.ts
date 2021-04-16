import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateAvaliation1618164775302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "avaliation",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "main_complaint", type: "varchar" },
          { name: "history_disease", type: "text" },
          { name: "is_bleeding", type: "varchar" },
          { name: "is_allergic", type: "varchar" },
          { name: "is_infectious_rheumatism", type: "varchar" },
          { name: "is_cardiovascular_disorder", type: "varchar" },
          { name: "is_gastritis", type: "varchar" },
          { name: "is_diabetic", type: "varchar" },
          { name: "is_fainting", type: "varchar" },
          { name: "is_medical_treatment", type: "varchar" },
          { name: "is_medicines", type: "varchar" },
          { name: "is_operated", type: "varchar" },
          { name: "is_addictions", type: "varchar" },
          { name: "is_anxiety_or_depression", type: "varchar" },
          { name: "is_tuberculosis", type: "varchar" },
          { name: "is_syphilis", type: "varchar" },
          { name: "is_hepatitis", type: "varchar" },
          { name: "is_aids", type: "varchar" },
          { name: "is_measles", type: "varchar" },
          { name: "is_mumps", type: "varchar" },
          { name: "is_varicella", type: "varchar" },
          { name: "is_others", type: "varchar" },
          { name: "others", type: "varchar", isNullable: true },
          { name: "is_smoker", type: "varchar" },
          { name: "smoking_frequency", type: "varchar", isNullable: true },
          {
            name: "childish_history_gestation",
            type: "varchar",
            isNullable: true,
          },
          { name: "childish_childbirth", type: "varchar", isNullable: true },
          {
            name: "childish_childbirth_problems",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "childish_breast_feeding",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "childish_breast_feeding_age",
            type: "int",
            isNullable: true,
          },
          {
            name: "childish_local_anesthesia",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "childish_serious_disease",
            type: "varchar",
            isNullable: true,
          },
          { name: "childish_vaccinated", type: "varchar", isNullable: true },
          {
            name: "childish_first_two_yers",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "childish_learning_difficulty",
            type: "varchar",
            isNullable: true,
          },
          { name: "childish_soulful", type: "varchar", isNullable: true },
          { name: "childish_sleep", type: "varchar", isNullable: true },
          { name: "childish_psychomotor", type: "varchar", isNullable: true },
          { name: "childish_feeding", type: "varchar", isNullable: true },
          { name: "childish_sociability", type: "varchar", isNullable: true },
          {
            name: "childish_conduct_pathology",
            type: "varchar",
            isNullable: true,
          },
          { name: "childish_comments", type: "varchar", isNullable: true },
          { name: "lips", type: "varchar" },
          { name: "alveolar_mucosa", type: "varchar" },
          { name: "mucosa_ugal", type: "varchar" },
          { name: "gums", type: "varchar" },
          { name: "tongue", type: "varchar" },
          { name: "salivary_glands", type: "varchar" },
          { name: "mouth_floor", type: "varchar" },
          { name: "lymph_nodes", type: "varchar" },
          { name: "hard_palate", type: "varchar" },
          { name: "atm", type: "varchar" },
          { name: "throat", type: "varchar" },
          { name: "chewing_muscles", type: "varchar" },
          { name: "soft_palate", type: "varchar" },
          { name: "occlusion", type: "varchar" },
          { name: "changes_found", type: "text" },
          { name: "min_blood_pressure", type: "varchar" },
          { name: "max_blood_pressure", type: "varchar" },
          { name: "presumptive_diagnosis", type: "text" },
          { name: "complementary_exams", type: "text" },
          { name: "definitive_diagnosis", type: "text" },
          { name: "treatment", type: "text" },
          { name: "treatment_plan", type: "text" },
          { name: "is_urgency", type: "varchar" },
          { name: "medication", type: "varchar" },
          { name: "medication_description", type: "varchar", isNullable: true },
          { name: "pacient_id", type: "int", isNullable: true },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "avaliation",
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
    const table = await queryRunner.getTable("avaliation");
    const foreignKey = table!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("pacient_id") !== -1
    );
    await queryRunner.dropForeignKey("avaliation", foreignKey!);

    await queryRunner.dropTable("avaliation");
  }
}
