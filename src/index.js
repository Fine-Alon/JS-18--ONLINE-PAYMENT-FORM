import { setChildren } from 'redom';
import { PaymentForm } from './jsModules/paymentForm.js';
// Import our custom CSS
import './scss/styles.scss';

setChildren(document.body, PaymentForm());
