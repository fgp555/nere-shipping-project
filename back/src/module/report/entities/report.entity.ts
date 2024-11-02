import { T5DamageEntity } from 'src/module/t5_damage/entities/t5_damage.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  mbl_code: string;

  @OneToMany(() => T5DamageEntity, (t5_damage) => t5_damage.report_mbl_code, {
    cascade: true,
    eager: true,
  })
  t5_damage: T5DamageEntity[];
}
