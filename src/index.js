import { setChildren } from 'redom';
import { PaymentForm } from './jsModules/paymentForm.js';

// Import our custom CSS
// eslint-disable-next-line import/no-unresolved
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

setChildren(document.body, PaymentForm());
