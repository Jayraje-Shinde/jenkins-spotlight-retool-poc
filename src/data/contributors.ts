import {contributorsType} from '../types/types';

const modules = import.meta.glob('../content/*.adoc', {
  eager: true,
  as: 'raw'
});









export const contributors : contributorsType = [...];