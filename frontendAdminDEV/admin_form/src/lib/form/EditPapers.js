import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" 
        defaultValue={props.data.title} 
        label="Standard" 
      />
      <TextField id="filled-basic" 
        defaultValue={props.data.link} 
        label="Filled" 
        variant="filled" 
      />
      <TextField 
        id="outlined-basic" 
        defaultValue={props.data.discription} 
        label="Outlined" 
        variant="outlined" 
      />
    </form>
  );
}