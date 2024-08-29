import { Operator, OperatorAddon } from '../../types';

export interface OperatorRowProps {
  operator: Operator;
  addons: OperatorAddon[];
  index: number;
}
