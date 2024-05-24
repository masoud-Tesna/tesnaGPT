import { requestMessages } from '@/utils/axios/request-messages';
import { toast } from 'react-toastify';
import { THandleOnSettled } from '@/utils/helpers/types/handle-on-settled';

export const handleOnSettled = ({
  toastType,
  message,
  toastId,
  customMessage,
  t
}: THandleOnSettled) => {
  const findMessage = requestMessages.find(item => item?.text === message);
  
  const toastCustomMessage = toastType == 'success' ? 'mission accomplished' : 'Provider error';
  
  return toast(customMessage || t(findMessage?.text as any) as string || (process.env.NODE_ENV === 'development' ?
    message : t(toastCustomMessage)), {
    toastId,
    type: findMessage?.type || toastType
  });
};