import {
  arabicNumber,
  decodeURL,
  digitsToWords,
  englishNumber,
  floor,
  halfSpace,
  isInteger,
  isValidBankCard,
  persianChar,
  persianNumber,
  scientificNotationToDecimal,
  security,
  switchKey,
  toCurrency,
  toDecimalPrecision,
  toFixed,
  toNumber
} from './core';
import NativeString from './NativeString';

/** TesnaString constructor */
function tesnaString(
  value: string | number | (string | number)[]
): TesnaString {
  if (typeof value === 'number' || typeof value === 'string') {
    value = String(value);
  }
  else if (Array.isArray(value)) {
    value = value.join('');
  }
  else if (value === undefined || value === null) {
    value = '';
  }
  else {
    throw new Error(
      `TesnaString value must be type of string, number or Array<string|number> instead of ${ typeof value }`
    );
  }
  
  return new TesnaString(value);
}

class TesnaString extends NativeString {
  constructor(value: string) {
    super(value);
  }
  
  /** Returns a copy of a TesnaString Object */
  clone(): TesnaString {
    return tesnaString(this._value);
  }
  
  /** Used for set new string */
  set(value: string): TesnaString {
    this._value = String(value);
    return this;
  }
  
  /** Used for convert Arabic characters to Persian */
  persianChar(): TesnaString {
    this._value = persianChar(this.toString());
    return this;
  }
  
  /** Used for convert any numbers to English */
  englishNumber(): TesnaString {
    this._value = englishNumber(this._value);
    return this;
  }
  
  /** Used for convert Arabic numbers to Persian */
  persianNumber(): TesnaString {
    this._value = persianNumber(this._value);
    return this;
  }
  
  /** Used for convert English numbers to arabic */
  arabicNumber(): TesnaString {
    this._value = arabicNumber(this._value);
    return this;
  }
  
  /**
   * Used for Normalize url
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
   */
  fixURL(): TesnaString {
    if (!this._value) {
      return this;
    }
    
    if (/^(wss?(:|\/))/i.test(this._value)) {
      this._value = this._value.replace(/^(ws)?(s)?(:*)(\/+)?/i, `ws$2://`);
    }
    else if (/^(ftps?(:|\/))/i.test(this._value)) {
      this._value = this._value.replace(/^(ftp)?(s)?(:*)(\/+)?/i, `ftp$2://`);
    }
    else {
      this._value = this._value.replace(/^(http)?(s)?(:*)(\/+)?/i, `http$2://`);
    }
    
    this._value = this._value.replace(/(\/?)$/i, `/`);
    return this;
  }
  
  /**
   * Used for decode Persian Characters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
   */
  decodeURL(): TesnaString {
    this._value = decodeURL(this._value);
    return this;
  }
  
  /** Used for Change keyboard layout */
  switchKey(): TesnaString {
    this._value = switchKey(this._value);
    return this;
  }
  
  /** Used for get persian words representation of a number */
  digitsToWords(): TesnaString {
    this._value = digitsToWords(this._value);
    return this;
  }
  
  /** Used for Zero-width non-joiner correction */
  halfSpace(): TesnaString {
    this._value = halfSpace(this._value);
    return this;
  }
  
  /** Return true if value is Integer */
  isInteger(): boolean {
    return isInteger(this._value);
  }
  
  /** Used for validation back card number */
  isValidBankCard(): boolean {
    return isValidBankCard(this._value);
  }
  
  /**
   * Used to convert scientific notations to decimal
   *
   * @example
   *   tesnaString(`5.2e-8`).scientificNotationToDecimal(); //`0.000000052`
   */
  scientificNotationToDecimal(): TesnaString {
    this._value = scientificNotationToDecimal(this._value);
    return this;
  }
  
  /** Used for convert to price mode */
  toCurrency(formatCurrency = false): TesnaString {
    this._value = toCurrency(this._value, formatCurrency);
    return this;
  }
  
  /** Remove anything expect numbers */
  parseNumber(options?: Parameters<typeof toNumber>[1]): TesnaString {
    this.englishNumber();
    this._value = toNumber(this._value, options);
    return this;
  }
  
  /** Convert any char to star ("*") */
  security(): TesnaString {
    this._value = security(this._value);
    return this;
  }
  
  /** Convert any string to number */
  toStringNumber(options?: Parameters<typeof toNumber>[1]): string {
    this.parseNumber(options);
    return this._value;
  }
  
  /**
   * Precision decimal number with all number length for
   *
   * @example
   *   tesnaString(`12.3456`).paddingDecimal(3); //`12.3`
   *   tesnaString(`123456`).paddingDecimal(3); //`123456`
   */
  toDecimalPrecision(allLength: number): TesnaString {
    this._value = toDecimalPrecision(this._value, allLength);
    return this;
  }
  
  /** Convert any string to number */
  toNumber(options?: Parameters<typeof toNumber>[1]): number {
    this.parseNumber(options);
    return Number(this._value);
  }
  
  /**
   * Convert to string representing a number in fixed-point notation.
   *
   * @param value
   * @param fractionDigits — Number of digits after the decimal point. Must be
   *   in the range 0 - 20, inclusive.
   */
  toFixed(fractionDigits?: number | undefined): TesnaString {
    this._value = toFixed(this._value, fractionDigits);
    
    return this;
  }
  
  /**
   * Convert to string representing a number in fixed-point notation and trim .
   *
   * @param value
   * @param fractionDigits — Number of digits after the decimal point. Must be
   *   in the range 0 - 20, inclusive.
   */
  toFixedNumber(fractionDigits?: number | undefined): TesnaString {
    this._value = Number(toFixed(this._value, fractionDigits)).toString();
    
    return this;
  }
  
  floor(): TesnaString {
    this._value = floor(this._value);
    return this;
  }
}

// eslint-disable-next-line no-extend-native
Object.defineProperties(String.prototype, {
  tesnaString: {
    get: function () {
      return tesnaString(this);
    }
  }
});
declare global {
  interface String {
    tesnaString: TesnaString;
  }
}

//Expose TesnaString
//CommonJS module is defined
export default tesnaString;

export type { TesnaString };