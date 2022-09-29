export function getPartner() {
  return document.location.hostname.replace(/^www\./, '');
}

export const PROVIDER = 'https://services.lawsafrica.com/v1';
