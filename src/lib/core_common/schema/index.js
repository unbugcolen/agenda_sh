const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('./common');
const Constant = require('../constant');

module.exports = {
    uuid: () => Common().uuid(),
    money: () => Common().money(),
    mobile: () => Common().mobile(),
    timestamp: () => Common().timestamp(),
    date: () => Common().date(),
    identity: () => Common().identity(),
    identityType: () => Common().identityType(),
    gender: () => Common().gender(),
    image: () => Common().image(),
    periodUnit: (...unit) => Common().periodUnit(...unit),
    percentage: () => Common().percentage(),
    payment: () => require('./payment')(),
    policy: () => require('./policy')(),
    account: () => require('./account')(),
    quotation: () => require('./quotation')(),
    applicant: () => require('./applicant')(),
    insured: () => require('./insured')(),
    beneficiary: () => require('./beneficiary')(),
    entrance: () => require('./entrance')(),
    insurance: () => require('./insurance')(),
    negotiation: () => require('./negotiation')(),
    endorsement: () => require('./endorsement')(),
    claim: () => require('./claim')(),
    bankId: () => integer().enum(...Object.values(Constant.Bank)).desc('银行id'),
    warehouseInsurance: () => require('./warehouse_insurance')(),
    channelData: () => string().desc('第三方h5对接模式，渠道商业务参数').maxLength(500),
    autoRenewal: () => require('./auto_renewal')(),
};
