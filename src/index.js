import { setChildren } from 'redom';
// eslint-disable-next-line import/extensions
import { PaymentForm } from './jsModules/paymentForm.js';

setChildren(document.body, PaymentForm());
