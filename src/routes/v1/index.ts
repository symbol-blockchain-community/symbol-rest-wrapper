import express from 'express';
import { createAccount, getAccountInfo } from './accounts.js';
import { getActiveNodeList } from './nodes.js';
import { getApiStatus } from './root.js';
import { getAddressFromPublicKey } from './convert.address.public-key.js';
import { getAddressFromUnresolbedAddress } from './convert.address.unresolved-address.js';
import { getTransactionFromPayload } from './convert.transaction.payload.js';
import { getAddressQRCode } from './qrcode.address.js';

const router = express.Router();

router.get('/', getApiStatus);
router.get('/accounts/:accountId', getAccountInfo);
router.post('/accounts', createAccount);
router.get('/nodes', getActiveNodeList);
router.post('/convert/address/public-key', getAddressFromPublicKey);
router.post('/convert/address/unresolved-address', getAddressFromUnresolbedAddress);
router.post('/convert/transaction/payload', getTransactionFromPayload);
router.get('/qrcode/address/:address', getAddressQRCode);

export default router;
