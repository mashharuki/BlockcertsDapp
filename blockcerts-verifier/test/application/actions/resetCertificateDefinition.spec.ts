import { configureStore } from '../../../src/store';
import { getCertificateDefinition, getVerifiedSteps } from '../../../src/selectors/certificate';
import resetCertificateDefinition from '../../../src/actions/resetCertificateDefinition';
import updateCertificateDefinition from '../../../src/actions/updateCertificateDefinition';
import validCertificateFixture from '../../fixtures/v2/valid-certificate-example.json';
import initialValidCertificateSteps from '../../assertions/initialValidCertificateSteps';
import { getVerificationStatus } from '../../../src/selectors/verification';
import updateVerificationStatus from '../../../src/actions/updateVerificationStatus';
import stepVerified from '../../../src/actions/stepVerified';
import stubCertificateVerify from '../__helpers/stubCertificateVerify';
import { VERIFICATION_STATUSES } from '@blockcerts/cert-verifier-js';

jest.mock('../../../src/helpers/stepQueue');

describe('resetCertificateDefinition action creator test suite', function () {
  stubCertificateVerify(validCertificateFixture);
  let store;

  beforeEach(async function () {
    store = configureStore();
    // initially set a certificate definition in the state
    await store.dispatch(updateCertificateDefinition(validCertificateFixture));
    store.dispatch(updateVerificationStatus(VERIFICATION_STATUSES.SUCCESS));
    store.dispatch(stepVerified({
      code: 'getTransactionId',
      label: 'Getting transaction ID',
      status: VERIFICATION_STATUSES.SUCCESS,
      parentStep: 'proofVerification'
    }));
  });

  afterEach(function () {
    store = null;
  });

  it('should reset the previously verified steps', function () {
    store.dispatch(resetCertificateDefinition());
    const state = store.getState();

    expect(getVerifiedSteps(state)).toEqual(initialValidCertificateSteps);
  });

  it('should reset the certificate definition to null', function () {
    store.dispatch(resetCertificateDefinition());
    const state = store.getState();

    expect(getCertificateDefinition(state)).toBe(null);
  });

  it('should reset the verification status to DEFAULT', function () {
    store.dispatch(resetCertificateDefinition());
    const state = store.getState();

    expect(getVerificationStatus(state)).toBe(VERIFICATION_STATUSES.DEFAULT);
  });
});
