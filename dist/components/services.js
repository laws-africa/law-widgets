function getPartner() {
  return document.location.hostname.replace(/^www\./, '');
}
const PROVIDER = 'https://services.lawsafrica.com/v1';

export { PROVIDER as P, getPartner as g };
