// back/src/module/t5_damage/entities/t5_image-group.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { T5DamageEntity } from './t5_damage.entity';

@Entity('t5_image_groups')
export class T5ImageGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  title: string;

  @Column()
  b_l_no: string;

  @Column()
  consignee: string;

  @Column()
  marks: string;

  @Column('int')
  qty_of_pkgs: number;

  @Column()
  goods: string;

  @Column()
  remarks: string;

  @Column('json')
  images: string[];

  @Column('json', { nullable: true })
  images_notes: string[];

  @ManyToOne(() => T5DamageEntity, (damage) => damage.images_groups, {
    onDelete: 'CASCADE',
  })
  damage: T5DamageEntity;
}
