import {ready} from '../utilities';
import {AddressForm} from '@shopify/theme-addresses';

function customerAddressForm() {
  document.querySelectorAll('[data-address=root]').forEach((el) => {
    AddressForm(el, 'en', {
      shippingCountriesOnly: false
    });
  })
  document.querySelectorAll('[data-delete-address-form]').forEach(deleteForm => {
    deleteForm.addEventListener('submit', event => {
      const confirmMessage = event.target.getAttribute('data-confirm-message');
  
      if (
        !window.confirm(
          confirmMessage || 'Are you sure you wish to delete this address?'
        )
      ) {
        event.preventDefault();
      }
    });
  });
 
}

ready(customerAddressForm);