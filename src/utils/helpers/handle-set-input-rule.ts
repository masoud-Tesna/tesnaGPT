import { TMessagesKey } from '@/utils/helpers/types';
import rulesMessage from '@/utils/input-rules-message';
import { type TFunction, TOptions } from 'i18next';

const handleSetInputRule = <T extends TMessagesKey>(
  t: TFunction<any>,
  key: T,
  vars?: { [key in typeof rulesMessage[T]['vars'][number]]: string | number }
): string => {
  const error = JSON.stringify({
    key,
    vars
  });
  
  const parsedError: { key: TMessagesKey, vars?: TOptions } = error === 'Required' ?
    { key: 'RequiredField' } :
    JSON.parse(error);
  
  return t(parsedError.key, { ns: 'rulesMessage', ...parsedError.vars });
};

export { handleSetInputRule };
