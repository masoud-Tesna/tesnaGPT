import { DefaultOptionType } from 'rc-select/lib/Select';

export const handleFilterOptionSelectBox = (
  input: string,
  option?: DefaultOptionType
) => (option?.label ?? '')?.toString().toLowerCase().includes(input.toLowerCase());