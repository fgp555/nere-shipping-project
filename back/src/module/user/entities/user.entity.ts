import { ReportEntity } from 'src/module/report/entities/report.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => ReportEntity, (report) => report.user, {
    cascade: true,
    eager: true,
  })
  report_mbl_code: ReportEntity;
}
