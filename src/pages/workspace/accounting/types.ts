import type {OnyxEntry} from 'react-native-onyx';
import type {MenuItemProps} from '@components/MenuItem';
import type {OfflineWithFeedbackProps} from '@components/OfflineWithFeedback';
import type {XeroSettings} from '@libs/PolicyUtils';
import type {WithPolicyConnectionsProps} from '@pages/workspace/withPolicyConnections';
import type {Policy, PolicyConnectionSyncProgress} from '@src/types/onyx';
import type IconAsset from '@src/types/utils/IconAsset';

type MenuItemData = MenuItemProps & {pendingAction?: OfflineWithFeedbackProps['pendingAction']; errors?: OfflineWithFeedbackProps['errors']};

type PolicyAccountingPageOnyxProps = {
    connectionSyncProgress: OnyxEntry<PolicyConnectionSyncProgress>;
};

type PolicyAccountingPageProps = WithPolicyConnectionsProps &
    PolicyAccountingPageOnyxProps & {
        // This is not using OnyxEntry<OnyxTypes.Policy> because the HOC withPolicyConnections will only render this component if there is a policy
        policy: Policy;
    };

type AccountingIntegration = {
    title: string;
    icon: IconAsset;
    setupConnectionFlow: React.ReactNode;
    onImportPagePress: () => void;
    subscribedImportSettings?: XeroSettings;
    onExportPagePress: () => void;
    subscribedExportSettings?: XeroSettings;
    onAdvancedPagePress: () => void;
    subscribedAdvancedSettings?: XeroSettings;
    onCardReconciliationPagePress: () => void;

    /** Integration alias for workspace upgrade navigation. If passed, and the user doesn't have control policy, they will be redirected to the upgrade page */
    workspaceUpgradeIntegrationAlias?: string;
};

export type {MenuItemData, PolicyAccountingPageOnyxProps, PolicyAccountingPageProps, AccountingIntegration};
