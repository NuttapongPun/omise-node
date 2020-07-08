var nock = require('nock');
nock('https://api.omise.co')
  .persist()
  .get('/capability')
  .reply(200, {
      object: 'capability',
      location: '/capability',
      banks:
        ['test',
          'bbl',
          'kbank',
          'rbs',
          'ktb',
          'jpm',
          'mufg',
          'tmb',
          'scb',
          'citi',
          'smbc',
          'sc',
          'cimb',
          'uob',
          'bay',
          'mega',
          'boa',
          'cacib',
          'gsb',
          'hsbc',
          'db',
          'ghb',
          'baac',
          'mb',
          'bnp',
          'tbank',
          'ibank',
          'tisco',
          'kk',
          'icbc',
          'tcrb',
          'lhb'],
      payment_methods:
        [{
          object: 'payment_method',
          name: 'card',
          currencies: [Array],
          card_brands: [Array],
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'internet_banking_bay',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'internet_banking_ktb',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'internet_banking_scb',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'internet_banking_bbl',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'alipay',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'installment_bay',
          currencies: [Array],
          card_brands: null,
          installment_terms: [Array]
        },
        {
          object: 'payment_method',
          name: 'installment_kbank',
          currencies: [Array],
          card_brands: null,
          installment_terms: [Array]
        },
        {
          object: 'payment_method',
          name: 'installment_ktc',
          currencies: [Array],
          card_brands: null,
          installment_terms: [Array]
        },
        {
          object: 'payment_method',
          name: 'installment_bbl',
          currencies: [Array],
          card_brands: null,
          installment_terms: [Array]
        },
        {
          object: 'payment_method',
          name: 'installment_first_choice',
          currencies: [Array],
          card_brands: null,
          installment_terms: [Array]
        },
        {
          object: 'payment_method',
          name: 'bill_payment_tesco_lotus',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'barcode_alipay',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'promptpay',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'truemoney',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        },
        {
          object: 'payment_method',
          name: 'points_citi',
          currencies: [Array],
          card_brands: null,
          installment_terms: null
        }],
      country: 'TH',
      zero_interest_installments: true
    }, {
    'server': 'nginx/1.1',
    'content-type': 'application/json',
  });

