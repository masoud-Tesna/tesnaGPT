import { TBankCards } from '@/utils/helpers/types';

export const checkBanksCard = (cardNumber: string) => {
  const bankCards: TBankCards = {
    '603799': 'meli',
    '589210': 'sepah',
    '627961': 'sanatmadan',
    '603770': 'keshavarsi',
    '628023': 'maskan',
    '627760': 'postbank',
    '502908': 'tosehe',
    '627412': 'eghtesad',
    '622106': 'parsian',
    '502229': 'pasargad',
    '627488': 'karafarin',
    '621986': 'saman',
    '639346': 'sina',
    '639607': 'sarmaye',
    '502806': 'shahr',
    '502938': 'day',
    '603769': 'saderat',
    '610433': 'mellat',
    '627353': 'tejarat',
    '589463': 'refah',
    '627381': 'sepah',
    '639370': 'mehreqtesad',
    '639599': 'sepah',
    '504172': 'resalat'
  };
  
  const number = cardNumber?.toString().substring(0, 6);
  
  return bankCards[ number ] || false;
};
