import CONST from '@src/CONST';
import Beta from '@src/types/onyx/Beta';

/**
 * This module is mocked in tests because all the permission methods call canUseAllBetas() and that will
 * always return true because Environment.isDevelopment() is always true when running tests. It's not possible
 * to mock canUseAllBetas() directly because it's not an exported method and we don't want to export it just
 * so it can be mocked.
 */

export default {
    ...jest.requireActual('../Permissions'),
    canUseDefaultRooms: (betas: Beta[]) => betas.includes(CONST.BETAS.DEFAULT_ROOMS),
    canUsePolicyRooms: (betas: Beta[]) => betas.includes(CONST.BETAS.POLICY_ROOMS),
};
