export const useLocalStorage = {
  set: async (key: string, value: string) => localStorage.setItem(key, value),
  get: (key: string) => localStorage.getItem(key),
  removeItem: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
  setRegisterStep: async (value: object, currentStep: number) => {
    localStorage.setItem('registerFields', JSON.stringify({ ...value, password: null }));
    localStorage.setItem('registerStep', currentStep.toString());
  },
  setRegisterTime: async () => localStorage.setItem('registerTime', new Date().getTime()?.toString()),
  removeRegisterStep: () => {
    localStorage.removeItem('registerFields');
    localStorage.removeItem('registerStep');
    localStorage.removeItem('registerTime');
  }
};