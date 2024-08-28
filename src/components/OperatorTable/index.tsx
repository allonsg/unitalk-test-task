import { useState, useEffect, ChangeEventHandler, MouseEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  TablePagination,
  TableSortLabel,
} from '@mui/material';

import OperatorRow from '../OperatorRow';
import { OPERATORS_API } from '../../api';
import { StyledTableCell } from './styles.ts';

import { Operator } from '../../types';
import { OperatorTableProps } from './types.ts';

const OperatorTable = ({ query }: OperatorTableProps) => {
  const [operators, setOperators] = useState<Operator[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState<string>('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const data = await OPERATORS_API.getOperators({
        page: page + 1,
        limit: rowsPerPage,
        sortBy,
        order,
        query,
      });
      if (data) {
        setOperators(data);
      }
    };
    void fetchData();
  }, [page, rowsPerPage, sortBy, order, query]);

  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage: ChangeEventHandler<HTMLInputElement> = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleSort = (field: string) => {
    const isAsc = sortBy === field && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setSortBy(field);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell sortDirection={sortBy === 'id' ? order : false}>
                <TableSortLabel
                  active={sortBy === 'id'}
                  direction={sortBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                >
                  #
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell
                sortDirection={sortBy === 'name' ? order : false}
              >
                <TableSortLabel
                  active={sortBy === 'name'}
                  direction={sortBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Користувач
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell
                sortDirection={sortBy === 'isWorking' ? order : false}
              >
                <TableSortLabel
                  active={sortBy === 'isWorking'}
                  direction={sortBy === 'isWorking' ? order : 'asc'}
                  onClick={() => handleSort('isWorking')}
                >
                  Працює
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell
                sortDirection={sortBy === 'createdAt' ? order : false}
              >
                <TableSortLabel
                  active={sortBy === 'createdAt'}
                  direction={sortBy === 'createdAt' ? order : 'asc'}
                  onClick={() => handleSort('createdAt')}
                >
                  Дата / Час створення
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>fieldName[]</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operators.map((operator, index) => (
              <OperatorRow
                key={operator.id}
                operator={operator}
                index={page * rowsPerPage + index + 1}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={55}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          '& .MuiTablePagination-selectLabel': {
            color: theme.palette.text.secondary,
          },
        }}
      />
    </Paper>
  );
};

export default OperatorTable;
