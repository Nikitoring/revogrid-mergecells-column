import { MergeCellsConfig } from './type';
import keyBy from 'lodash/keyBy';

export default class MergeCellsColumnType {
  constructor() {
  }
  beforeSetup = (col: MergeCellsConfig) => {
    if (!col.source) return;
    col.sourceLookup = keyBy(col.source, col.valueKey);
  }

}