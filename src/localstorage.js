/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint camelcase: ["error", {properties: "never"}] */

export const name = document.querySelector('.contact__name');
export const email = document.querySelector('.contact__email');
export const message = document.querySelector('#message');

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException && ( e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}
