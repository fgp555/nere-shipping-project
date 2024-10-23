import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ImagesPathimg } from './ImagesPathimg.entity';

@Entity('t8_images_group_entity')
export class ImagesGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => ImagesPathimg, (pathimg) => pathimg.imagesGroup, {
    eager: true,
  })
  imagesPathimg: ImagesPathimg[];
}
