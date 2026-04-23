import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: Storage | null = null;

  constructor(private ionicStorage: Storage) {
    this.start();
  }

  async start() {
    this.storage = await this.ionicStorage.create();
  }

  async saveData(key: string, value: any) {
    if (this.storage) {
      await this.storage.set(key, value);
    }
  }

  async getData(key: string) {
    if (this.storage) {
      return await this.storage.get(key);
    }

    return null;
  }
}