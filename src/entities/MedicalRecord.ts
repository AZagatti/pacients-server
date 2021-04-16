import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Pacient from "./Pacient";

@Entity()
class MedicalRecord {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text" })
  procedures: string;

  @Column({ type: "int" })
  pacient_id: number;
  
  @ManyToOne(() => Pacient)
  @JoinColumn({ name: 'pacient_id' })
  pacient: Pacient;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MedicalRecord;
