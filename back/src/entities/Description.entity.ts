// src/entities/Description.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { DescriptionsGroup } from './DescriptionsGroup.entity';
import { UnstuffingContainer } from './UnstuffingContainer.entity';
import { PreExistingDamage } from './PreExistingDamage.entity';

@Entity('t9_description_entity')
export class Description {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => DescriptionsGroup, (group) => group.description)
  descriptionsGroups: DescriptionsGroup[];

  @OneToMany(() => UnstuffingContainer, (unstuffing) => unstuffing.description)
  unstuffingContainers: UnstuffingContainer[];

  @OneToMany(() => PreExistingDamage, (damage) => damage.damageDescription)
  preExistingDamages: PreExistingDamage[];
}
