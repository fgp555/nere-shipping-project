import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Description } from './Description.entity';
import { UnstuffingContainer } from './UnstuffingContainer.entity';
import { PreExistingDamage } from './PreExistingDamage.entity';

@Entity('t10_descriptions_group_entity')
export class DescriptionsGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @OneToMany(
    () => Description,
    (description) => description.descriptionsGroups,
    {
      eager: true,
    },
  )
  descriptions: Description[];

  // La relación inversa de @ManyToMany
  @ManyToMany(
    () => UnstuffingContainer,
    (unstuffing) => unstuffing.descriptionsGroup,
  )
  unstuffingContainers: UnstuffingContainer[];

  @OneToMany(
    () => PreExistingDamage, 
    (damage) => damage.descriptionsGroup)
  preExistingDamages: PreExistingDamage;
  // @Column()
  // preExistingDamages: string;
}
