import camelcaseKeys from '@cjs-exporter/camelcase-keys';
import { paramCase } from 'param-case';

import { Dict } from '@/types';

interface ParseOption {
	splitChar?: string;
	parseFunc?: (value: any) => any;
}

export const isNumeric = (data: any) => {
	return !isNaN(parseFloat(data)) && isFinite(data) && parseFloat(data) == data;
}

export const defaultParseValue = (value: any) => {
	if (value === 'yes') return true;
	if (value === 'no') return false;
	return value;
}

export const parseResult = (result: string, options?: ParseOption) => {
	if (!options) options = {};
	if (!options.parseFunc) options.parseFunc = defaultParseValue;
	if (!options.splitChar) options.splitChar = ': ';
	const data: Dict<any> = {};
	const lines = result.trim().split('\n');
	for (const line of lines) {
		const [key, value] = line.trim().split(options.splitChar);
		if (!value) continue;
		let parsedValue: number | string = value.replace(/^'|'$/gi, '');
		if (key.match(/iccid|imei|imsi/gi) === null && isNumeric(parsedValue)) parsedValue = parseFloat(parsedValue);
		if (options.parseFunc) parsedValue = options.parseFunc(parsedValue);
		data[key] = parsedValue;
	}

	return sortDictKey(camelcaseKeys(data) as Dict<any>);
}

export const processParams = (options: Dict<any>) => {
	let params = '';
	for (const key in options) params += `${paramCase(key)}=${options[key]},`;
	return params.slice(0, -1);
}

export const sortDictKey = <T>(data: Dict<T>): Dict<T> => {
	const sorted = [];
	for (const key in data) sorted.push(key);
	sorted.sort();
	const tmpDict: Dict<any> = {};
	for (const key of sorted) tmpDict[key] = data[key];
	for (const key in tmpDict) if (tmpDict[key] && tmpDict[key].constructor === Object) tmpDict[key] = sortDictKey(tmpDict[key]);
	return tmpDict;
}
