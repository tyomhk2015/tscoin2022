import { head, hasIn, map, isBoolean } from 'lodash';

const headResult = head(['string','head']);
const headInResult = hasIn({'a': 1, 'b': 2}, '1');

const array = [1,2,3,4];
const iterate = (el: number, index: number, array: number[]): number => {
  console.log(el, index, array);
  return 0;
}
const mapResult = map(array, iterate)

const isBooleanResult = isBoolean({'a': 'yagoo'});

