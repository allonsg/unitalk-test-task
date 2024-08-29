import {
  TableRow,
  TableCell,
  Checkbox,
  Avatar,
  Typography,
} from '@mui/material';

import { OperatorRowProps } from './types.ts';

const OperatorRow = ({ operator, index, addons }: OperatorRowProps) => {
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt={operator.name}
            src={operator.avatar}
            style={{ marginRight: '10px' }}
          />
          <Typography>{operator.name}</Typography>
        </div>
      </TableCell>
      <TableCell>
        <Checkbox
          color="secondary"
          sx={{ pointerEvents: 'none' }}
          checked={operator.isWorking}
        />
      </TableCell>
      <TableCell>{new Date(operator.createdAt).toLocaleString()}</TableCell>
      <TableCell>{operator.isWorking ? 'Active' : 'Inactive'}</TableCell>
      {addons.map(addon => (
        <TableCell
          sx={{
            maxWidth: '100px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          key={addon.id}
        >
          {addon.text}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default OperatorRow;
