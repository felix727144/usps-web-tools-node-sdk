'use strict';

var api = require('../api');

module.exports = {
  customs: function (data, callback) {
    api.request(true, 'CustomsCN22V2', 'customsCN22V2', data, 'customsCN22V2Response', callback);
  },
  customsCertify: function (data, callback) {
    api.request(true, 'CustomsCN22V2Certify', 'customsCN22V2Certify', data, 'customsCN22V2CertifyResponse', callback);
  },
  customsCertifyV4: function (data, callback) {
    api.request(true, 'MerchReturnCertifyV4', 'MerchReturnCertifyV4', data, 'eMRSV4.0CertifyResponse', callback);
  },
  eVSFirstClassMailIntlCertify: function (data, callback) {
    api.request(true, 'eVSFirstClassMailIntlCertify', 'eVSFirstClassMailIntlCertify', data, 'eVSFirstClassMailIntlResponse', callback);
  },
};