import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService implements Storage {
  private readonly storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public get length(): number {
    return this.storage.length;
  }

  public clear(): void {
    this.storage.clear();
  }

  public getItem(key: string): string | null {
    const data = this.storage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public key(index: number): string | null {
    return this.storage.key(index);
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  public setItem(key: string, value: unknown): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
}