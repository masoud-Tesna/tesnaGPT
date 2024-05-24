import type { TFunction } from 'i18next';

export type THandleOnSettled = {
  toastType: 'error' | 'success',
  toastId: string,
  message?: string
  customMessage?: string,
  t: TFunction<[ 'requestMessages' ]>
};
