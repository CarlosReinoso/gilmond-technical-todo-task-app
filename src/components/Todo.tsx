import { useState } from 'react';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoListItemProps {
  todo: Todo['todo'];
  id: Todo['id'];
  handleDelete: handleDelete;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: 360,
    },
  },
  deleteIcon: {
    color: 'blue',
    '&:hover': {
      color: 'red',
    },
  },
}));

const Todo = ({ todo, id, handleDelete }: TodoListItemProps) => {
  const classes = useStyles();

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChange = () => setIsChecked(!isChecked);

  return (
    <li
      className={classes.listItem}
      style={isChecked ? { textDecoration: 'line-through' } : undefined}
    >
      <FormControlLabel
        control={
          <Checkbox onClick={handleChange} name="checkbox" color="primary" />
        }
        label={todo}
      />
      <DeleteIcon className={classes.deleteIcon} onClick={() => handleDelete(id)} />
    </li>
  );
};

export default Todo;
