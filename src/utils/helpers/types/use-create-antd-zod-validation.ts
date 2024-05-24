import { z, ZodRawShape } from 'zod';

export type TDependencies<T> = {
  path: string | string[],
  value: T
}

export type TAntdFormZodSchema<T extends ZodRawShape> =
  | z.ZodObject<T>
  | z.ZodEffects<z.ZodObject<T>>;