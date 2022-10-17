/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
'use strict';

function getPartner() {
  return document.location.hostname.replace(/^www\./, '');
}
const PROVIDER = 'https://services.lawsafrica.com/v1';

exports.PROVIDER = PROVIDER;
exports.getPartner = getPartner;
