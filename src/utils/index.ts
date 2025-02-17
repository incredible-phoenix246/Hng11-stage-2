import { CartItem } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shrink a string to a specified length(len).
 * @function shrinkString
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
const shrinkString = ({ str, len }: { str?: string; len: number }): string => {
  if (!str) return "";
  if (str.length > len) {
    return str.substring(0, len) + "...";
  }
  return str;
};

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
const encryptString = (str: string): string => {
  const buffer = Buffer.from(str);
  return buffer.toString("base64");
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

const decryptString = (str: string): string => {
  const buffer = Buffer.from(str, "base64");
  return buffer.toString();
};

/**
 * Returns a human-readable string representing the time elapsed since the given date.
 * @function timeAgo
 * @param {Date} date - The date to compare with the current date and time.
 * @returns {string} A human-readable string indicating the time elapsed since the given date.
 */
const timeAgo = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);

  const timeUnits: [number, string][] = [
    [60 * 60 * 24, "day"],
    [60 * 60, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (const [unitInSeconds, unitName] of timeUnits) {
    const elapsedUnits = Math.floor(diffInSeconds / unitInSeconds);
    if (elapsedUnits >= 1) {
      return `${elapsedUnits} ${unitName}${elapsedUnits > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

/**
 * Save an object to local storage.
 *
 * @param {string} key - The key under which the object will be saved.
 * @param {T} value - The object to be saved.
 * @template T - The type of the object.
 */
function setObjectToLocalStorage<T>(key: string, value: T): void {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error setting object to local storage:", error);
  }
}

/**
 * Get an object from local storage.
 *
 * @param {string} key - The key under which the object is stored.
 * @returns {T | null} - The object if found, otherwise null.
 * @template T - The type of the object.
 */
function getObjectFromLocalStorage<T>(key: string): T | null {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error("Error getting object from local storage:", error);
    return null;
  }
}

/**
 * Increase the quantity of an item in the cart.
 *
 * @param {string | number} itemId - The ID of the item to increase the quantity of.
 * @param {('2xl' | 'xl' | 'lg' | 'md' | 'sm') | undefined} size - The size of the item to increase the quantity of.
 */
function increaseQuantity(
  itemId: string | number,
  size?: "2xl" | "xl" | "lg" | "md" | "sm"
): void {
  const cart = getObjectFromLocalStorage<CartItem[]>("cart") || [];
  const updatedCart = cart.map((item) => {
    if (item.id === itemId && item.size === size) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setObjectToLocalStorage("cart", updatedCart);
}

/**
 * Decrease the quantity of an item in the cart.
 *
 * @param {string | number} itemId - The ID of the item to decrease the quantity of.
 * @param {('2xl' | 'xl' | 'lg' | 'md' | 'sm') | undefined} size - The size of the item to decrease the quantity of.
 */
function decreaseQuantity(
  itemId: string | number,
  size?: "2xl" | "xl" | "lg" | "md" | "sm"
): void {
  let cart = getObjectFromLocalStorage<CartItem[]>("cart") || [];
  cart = cart.reduce((acc, item) => {
    if (item.id === itemId && item.size === size) {
      const updatedQuantity = item.quantity - 1;
      if (updatedQuantity > 0) {
        acc.push({ ...item, quantity: updatedQuantity });
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, [] as CartItem[]);
  setObjectToLocalStorage("cart", cart);
}

/**
 * Remove an item from the cart.
 *
 * @param {string | number} itemId - The ID of the item to remove.
 */
function removeItem(itemId: string | number): void {
  let cart = getObjectFromLocalStorage<CartItem[]>("cart") || [];
  cart = cart.filter((item) => item.id !== itemId);
  setObjectToLocalStorage("cart", cart);
}

export {
  cn,
  shrinkString,
  encryptString,
  decryptString,
  timeAgo,
  setObjectToLocalStorage,
  getObjectFromLocalStorage,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
};

//
