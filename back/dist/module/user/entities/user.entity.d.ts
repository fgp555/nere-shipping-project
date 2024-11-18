import { ReportEntity } from 'src/module/report/entities/report.entity';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    report_mbl_code: ReportEntity;
}
