import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { getPapers } from '../actions/PapersActions.js';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';

import '../styles/body/papers/list.scss';
import '../styles/body/papers/item.scss';


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


import * as myModule from '../lib/';


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
      <CardActions disableSpacing>
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


 class Papers extends Component {
  constructor () {

        super(...arguments);
        
        const { store } = this.props
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

  }
  componentDidMount(){
    const { store } = this.props
    getPapers(this , store)

  }
  componentWillUnmount(){
    //this.state.papers.status = true;
  }
  render() {
  	const { store } = this.props
    
    if(this.state.papers.data){
      console.log(this.state.papers)
      return <div className='container-paper'>
      <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='item__close'>
                    Х
                    </div>
                   
                    {console.log(this.state.papers.data)}
       {
          this.state.papers.data.map((papers, index)=> {
                return <section className='section' key={index}>             
                    <RecipeReviewCard data={papers}/>
                </section>
              })}
      </div>
    }else{
      return <div>
    <div class='index-container'>
                    <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='index-container__item'>
                    Закрыть
                    </div>
              </div>
    <span>PAPEr</span>
    
    </div>
    }
    
  }
}
const mapStateToProps = state => {
  return {
    papers: state.papers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getTest(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Papers)




