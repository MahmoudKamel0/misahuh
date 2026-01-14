import { windowLocalStorageSchema } from "@lib/schema/storage/localstorage.schema";
import { TLocalStorage } from "@lib/types/storage/localstorage";

const Local: TLocalStorage = Object.freeze({
	length: localStorage.length,

	get(key: string) {
		return localStorage.getItem(key);
	},

	set(key: string, value: string) {
		return localStorage.setItem(key, JSON.stringify(value));
	},

	remove(key: string) {
		return localStorage.removeItem(key);
	},

	clear() {
		return localStorage.clear();
	},

	key(index: number) {
		return localStorage.key(index);
	},
});

export const windowLocal = windowLocalStorageSchema.parse(Local);
