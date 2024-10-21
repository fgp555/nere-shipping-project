import { PreDamageEntity } from 'src/modules/5pre-damage/entity-dtos/5pre-damage.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => PreDamageEntity, (finalReport) => finalReport.images, {
    onDelete: 'CASCADE',
  })
  finalReport: PreDamageEntity;
}
