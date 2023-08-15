export interface Dict<T> {
	[key: string]: T;
}

export type Nullable<T> = null | T;
export type NullableString = Nullable<string>;
