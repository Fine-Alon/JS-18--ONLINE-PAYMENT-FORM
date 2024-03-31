import AmericanExpress from '../assets/img/1202px-American_Express_logo_(2018).svg.png';

export default function getAppropriateImgFofCardType(cardType) {
  let src = '';
  let alt = '';
  switch (cardType) {
    case 'visa':
      src = 'visa_image_url_here'; // Replace 'visa_image_url_here' with the actual URL of the Visa image
      alt = 'Visa';
      break;
    case 'mastercard':
      src = 'mastercard_image_url_here'; // Replace 'mastercard_image_url_here' with the actual URL of the Mastercard image
      alt = 'Mastercard';
      break;
    case 'american-express':
      src = 'american_express_image_url_here'; // Replace 'american_express_image_url_here' with the actual URL of the American Express image
      alt = 'American Express';
      break;
    default:
      // Handle unknown card types
      src = ''; // Reset card image
      alt = '';
      break;
  }
  return {
    src,
    alt,
  };
}
