import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@material-ui/icons/Save';
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button'
import React, { Component } from 'react'

export const EditPapers = function(data){ 


class DropzoneAreaExample extends Component{
  //const change = this.props.change;
  constructor(props){
    super(props);
    
    const valFile = [
        props.data
    ]
    this.state = {
      files: []
    };
  }
  handleChange(files){
    console.log(this);
    this.props.change(files);
    this.setState({
      files: files
    });
  }
  render(){
    const valFile = [
        this.props.data
    ] 
    return (
      <DropzoneArea
        
        initialFiles={
          valFile
        }
        onChange={this.handleChange.bind(this)}
        useChipsForPreview={true}
        />
    )
  }
}


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


function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const saveButtom = function(that) {
    console.log(that);
  }
  return (
    <Card className={classes.root}>
    
      <CardActions className='box-open' disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>

          </Avatar>
        }
        
        title={props.data.title}
        subheader=""
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.discription}
        </Typography>
      </CardContent>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
             <BasicTextFields data={props.data}/>
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}

function BasicTextFields(props) {
  const classes = useStyles();
  const _data = {
    '_id': props.data._id , 
    'title': props.data.title ,
    'link': props.data.link ,
    'discription': props.data.discription ,
    'file':props.data.img
  }
  const _handleTitleFieldChange = function(e){
    _data.title = e.target.value;
  }
  const _handleLinkFieldChange = function(e){
     _data.link = e.target.value;
  }
  const _handleDiscriptionFieldChange = function(e){
    _data.discription = e.target.value;
  }
  const _handleDropzoneAreaExampleChange = function(files){
    _data.file = files;
  }
  const saveButtom = function(){
    console.log(_data);
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"
              disabled 
              defaultValue={props.data._id} 
              label="ID" 
      />
      <TextField id="standard-basic" 
        defaultValue={props.data.title} 
        label="Заголовок" 
        onChange={_handleTitleFieldChange}
      />
      <TextField id="filled-basic" 
        defaultValue={props.data.link}
        onChange={_handleLinkFieldChange} 
        label="Ссылка"
      />
      <TextField 
        id="outlined-multiline-static"
        label="Описание"
        onChange={_handleDiscriptionFieldChange}
        multiline
        rows={4}
        defaultValue={props.data.discription} 
        variant="outlined"
      />
      <DropzoneAreaExample change={_handleDropzoneAreaExampleChange} data={props.data.img}/>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={ () => {saveButtom(this)} }
      >
        Save
      </Button>
    </form>
  );
}

return <RecipeReviewCard data={data}/>
}