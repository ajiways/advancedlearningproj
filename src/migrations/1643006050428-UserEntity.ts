import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntity1643006050428 implements MigrationInterface {
   name = "UserEntity1643006050428";

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "phone" numeric NOT NULL,
                "first_name" character varying(56) NOT NULL,
                "last_name" character varying(56) NOT NULL,
                "password" character varying(256) NOT NULL,
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
            DROP TABLE "users"
        `);
   }
}
