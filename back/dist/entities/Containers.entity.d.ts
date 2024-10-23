import { Report } from './Report.entity';
import { RelevantTimes } from './RelevantTimes.entity';
import { SecuringSeals } from './SecuringSeals.entity';
export declare class Containers {
    id: number;
    containerCode: string;
    description: string;
    reports: Report[];
    relevantTimes: RelevantTimes[];
    securingSeals: SecuringSeals[];
}
