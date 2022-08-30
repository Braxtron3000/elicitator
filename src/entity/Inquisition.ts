import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Inquisition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  followUp: string;

  @Column()
  inquisitionImportance: string;
}
