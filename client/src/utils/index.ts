import { LocalStorageKey, LOCAL_STORAGE } from "../constants";

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function findOrNull<T>(key: LocalStorageKey) {
  return JSON.parse(LOCAL_STORAGE[key] || "null") as T | null;
}
