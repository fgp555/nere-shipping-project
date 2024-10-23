import { Description } from './Description.entity';
import { UnstuffingContainer } from './UnstuffingContainer.entity';
import { PreExistingDamage } from './PreExistingDamage.entity';
export declare class DescriptionsGroup {
    id: number;
    title: string;
    descriptions: Description[];
    unstuffingContainers: UnstuffingContainer[];
    preExistingDamages: PreExistingDamage;
}
