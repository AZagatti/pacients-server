import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Pacient from "./Pacient";

@Entity()
class Avaliation {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  main_complaint: string;

  @Column({ type: "text" })
  history_disease: string;

  @Column()
  is_bleeding: boolean;

  @Column()
  is_allergic: boolean;

  @Column()
  is_infectious_rheumatism: boolean;

  @Column()
  is_cardiovascular_disorder: boolean;

  @Column()
  is_gastritis: boolean;

  @Column()
  is_diabetic: boolean;

  @Column()
  is_fainting: boolean;

  @Column()
  is_medical_treatment: boolean;

  @Column()
  is_medicines: boolean;

  @Column()
  is_operated: boolean;

  @Column()
  is_addictions: boolean;

  @Column()
  is_anxiety_or_depression: boolean;

  @Column()
  is_tuberculosis: boolean;

  @Column()
  is_syphilis: boolean;

  @Column()
  is_hepatitis: boolean;

  @Column()
  is_aids: boolean;

  @Column()
  is_measles: boolean;

  @Column()
  is_mumps: boolean;

  @Column()
  is_varicella: boolean;

  @Column()
  is_others: boolean;

  @Column({ nullable: true })
  others: string;

  @Column()
  is_smoker: boolean;

  @Column({ nullable: true })
  smoking_frequency: string;

  @Column({ nullable: true })
  childish_history_gestation: string;

  @Column({ nullable: true })
  childish_childbirth: string;

  @Column({ nullable: true })
  childish_childbirth_problems: boolean;

  @Column({ nullable: true })
  childish_breast_feeding: string;

  @Column({ nullable: true, type: "int" })
  childish_breast_feeding_age: number;

  @Column({ nullable: true })
  childish_local_anesthesia: boolean;

  @Column({ nullable: true })
  childish_serious_disease: boolean;

  @Column({ nullable: true })
  childish_vaccinated: boolean;

  @Column({ nullable: true })
  childish_first_two_yers: string;

  @Column({ nullable: true })
  childish_learning_difficulty: string;

  @Column({ nullable: true })
  childish_soulful: string;

  @Column({ nullable: true })
  childish_sleep: string;

  @Column({ nullable: true })
  childish_psychomotor: string;

  @Column({ nullable: true })
  childish_feeding: string;

  @Column({ nullable: true })
  childish_sociability: string;

  @Column({ nullable: true })
  childish_conduct_pathology: string;

  @Column({ nullable: true })
  childish_comments: string;

  @Column()
  lips: string;

  @Column()
  alveolar_mucosa: string;

  @Column()
  mucosa_ugal: string;

  @Column()
  gums: string;

  @Column()
  tongue: string;

  @Column()
  salivary_glands: string;

  @Column()
  mouth_floor: string;

  @Column()
  lymph_nodes: string;

  @Column()
  hard_palate: string;

  @Column()
  atm: string;

  @Column()
  throat: string;

  @Column()
  chewing_muscles: string;

  @Column()
  soft_palate: string;

  @Column()
  occlusion: string;

  @Column({ type: "text" })
  changes_found: string;

  @Column()
  min_blood_pressure: string;

  @Column()
  max_blood_pressure: string;

  @Column({ type: "text" })
  presumptive_diagnosis: string;

  @Column({ type: "text" })
  complementary_exams: string;

  @Column({ type: "text" })
  definitive_diagnosis: string;

  @Column({ type: "text" })
  treatment: string;

  @Column({ type: "text" })
  treatment_plan: string;

  @Column()
  is_urgency: boolean;

  @Column()
  medication: boolean;

  @Column({ nullable: true })
  medication_description: string;

  @Column({ type: "int" })
  pacient_id: number;
  
  @OneToOne(() => Pacient)
  @JoinColumn({ name: 'pacient_id' })
  pacient: Pacient;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Avaliation;
