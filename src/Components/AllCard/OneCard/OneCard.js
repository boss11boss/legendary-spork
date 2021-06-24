import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { findAction } from "../../../Store/Action";


const useStyles = makeStyles({
  root: {
    width:320,
    height:130,
    marginLeft:16
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 9,
    color:'rgb(255, 80, 80)'
  },
});

function OneCard(props) {
  const classes = useStyles();

  function ClickHandler(){
    props.findAction(props.dir.email)
  }

  return (
    <Card onClick={ClickHandler} id='sdqq' className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.dir.gender} . NL
        </Typography>
        <Typography variant="h5" component="h2">
        {props.dir.name.title} {props.dir.name.first} {props.dir.name.last}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.dir.email}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}

const mapDispatchToProps=({
  findAction
})



export default connect(null,mapDispatchToProps)(OneCard);