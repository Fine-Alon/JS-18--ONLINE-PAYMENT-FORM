import VisaImage from '../assets/img/Visa_Inc._logo.png';
import MasterCardImage from '../assets/img/Mastercard-logo.png';
import AmericanExpressImage from '../assets/img/1202px-American_Express_logo_(2018).png';

export default function filterImgForCardType(cardType) {
  let src;
  let alt;
  switch (cardType) {
    case 'visa':
      src = VisaImage; // Replace 'visa_image_url_here' with the actual URL of the Visa image
      alt = 'Visa';
      break;
    case 'mastercard':
      src = MasterCardImage;
      alt = 'Mastercard';
      break;
    case 'american-express':
      src = AmericanExpressImage;
      alt = 'American Express';
      break;
    default:
      break;
  }
  return {
    src,
    alt,
  };
}
