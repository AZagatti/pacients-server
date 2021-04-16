import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Pacient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthday: string;
  
  @Column()
  gender: string;
  
  @Column('integer')
  weight: number;
  
  @Column('integer')
  height: number;
  
  @Column()
  ethnicity: string;
  
  @Column()
  schooling: string;
  
  @Column()
  occupation: string;
  
  @Column()
  rg: string;
  
  @Column()
  cpf: string;
  
  @Column()
  marital_status: string;
  
  @Column()
  nationality: string;
  
  @Column()
  nationality_state: string;
  
  @Column()
  father: string;
  
  @Column()
  father_nationality: string;
  
  @Column()
  mother: string;
  
  @Column()
  mother_nationality: string;
  
  @Column()
  contact: string;
  
  @Column()
  street: string;
  
  @Column('integer')
  number: number;
  
  @Column({ nullable: true })
  add_on: string;
  
  @Column()
  district: string;
  
  @Column()
  city: string;
  
  @Column()
  cep: string;
  
  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pacient;
