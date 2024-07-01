/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
'use strict';

function getPartner() {
    return document.location.hostname.replace(/^www\./, '');
}
const PROVIDER = 'https://services.lawsafrica.com/v1';

exports.PROVIDER = PROVIDER;
exports.getPartner = getPartner;

//# sourceMappingURL=services-60c260a9.js.map