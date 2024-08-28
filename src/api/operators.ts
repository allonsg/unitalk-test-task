import { api } from './axiosInstance.ts';
import { handleApiError } from '../helpers';

import { GetOperatorsParams, Operator, OperatorAddon } from '../types';

export const OPERATORS_API = {
  async getOperators({
    query = '',
    sortBy,
    order,
    page,
    limit,
  }: GetOperatorsParams) {
    try {
      const { data } = await api.get<Operator[]>(`/operator`, {
        params: {
          page,
          limit,
          sortBy,
          order,
          search: query,
        },
      });
      return data;
    } catch (error: unknown) {
      handleApiError(error);
    }
  },

  async getOperatorAddons() {
    try {
      const { data } = await api.get<OperatorAddon[]>(`/operatorAddon`, {
        params: {
          limit: 100,
          page: 1,
        },
      });
      return data;
    } catch (error: unknown) {
      handleApiError(error);
    }
  },
};
