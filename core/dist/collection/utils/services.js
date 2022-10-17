/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
export function getPartner() {
  return document.location.hostname.replace(/^www\./, '');
}
export const PROVIDER = 'https://services.lawsafrica.com/v1';
