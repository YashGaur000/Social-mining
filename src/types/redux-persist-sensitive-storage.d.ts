declare module 'redux-persist-sensitive-storage' {
  import { Storage } from 'redux-persist';

  interface SensitiveStorageOptions {
    keychainService?: string;
    sharedPreferencesName?: string;
  }

  export default function createSensitiveStorage(
    options?: SensitiveStorageOptions
  ): Storage;
}
