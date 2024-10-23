import { UnstuffingContainer } from './UnstuffingContainer.entity';
import { PreExistingDamage } from './PreExistingDamage.entity';
import { Report } from './Report.entity';
import { RelevantTimes } from './RelevantTimes.entity';
import { SecuringSeals } from './SecuringSeals.entity';
export declare class DetailsShipment {
    id: number;
    vessel: string;
    voyage: string;
    mblCode: string;
    pol: string;
    shipper: string;
    pod: string;
    consignee: string;
    qtyOfPkgs: number;
    goods: string;
    grossWeight: string;
    unstuffingContainers: UnstuffingContainer[];
    preExistingDamages: PreExistingDamage[];
    reports: Report[];
    relevantTimes: RelevantTimes[];
    securingSeals: SecuringSeals[];
}
