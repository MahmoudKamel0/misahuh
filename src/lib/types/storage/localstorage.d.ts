import { windowLocalStorageSchema } from "@lib/schema/storage/localstorage.schema";
import * as z from "zod";

export = WindowLocalStorageTypes;
export as namespace WindowLocalStorageTypes;

namespace WindowLocalStorageTypes {
	type TLocalStorage = z.infer<typeof windowLocalStorageSchema>;
}
