import rulesMessage from '../input-rules-message';
import { TMessagesKey } from '@/utils/helpers/types';

export const zodSchemaSetInputRule = <T extends TMessagesKey>(
  key: T,
  vars?: { [key in typeof rulesMessage[T]['vars'][number]]: string | number | unknown }
) => {
  /*const argsKeys = vars ? Object.keys(vars) : [];
  
  let messageText: string = rulesMessage[ key ].message;
  
  if (messageText && argsKeys.length > 0) {
    for (const [ key, val ] of Object.entries(vars as object)) {
      const pattern = new RegExp(`{{${ key }}}`, 'g');
      messageText = messageText.replace(pattern, val?.toString() || '');
    }
  }*/
  
  const messageText = {
    key,
    vars
  };
  
  return JSON.stringify(messageText);
};
