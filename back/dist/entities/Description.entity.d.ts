import { DescriptionsGroup } from './DescriptionsGroup.entity';
import { UnstuffingContainer } from './UnstuffingContainer.entity';
import { PreExistingDamage } from './PreExistingDamage.entity';
export declare class Description {
    id: number;
    description: string;
    descriptionsGroups: DescriptionsGroup;
    unstuffingContainers: UnstuffingContainer;
    preExistingDamages: PreExistingDamage[];
}
