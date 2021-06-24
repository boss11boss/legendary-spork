import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft:100,
    marginLeft:270,
    marginTop:90,
    display: 'flex',
    width:890,
    height:270,
    borderRadius:21,
    justifyContent:'space-between'
  },
  details: {
    width:550,
    marginLeft:40,
    display: 'flex',
    flexDirection: 'column',
    marginRight:20,
    paddingTop:38
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 121,
    height:121,
    borderRadius:'50%',
    marginTop:70
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
function ActiveCard(props) {
  let name1= ''
  let name2= ''
  let name3= '' 
  let streetNumber= '' 
  let streetName= '👇'
  let city= 'Please' 
  let statee= 'Click on any directory' 
  let country= '👇' 
  let code= ''
  let offset= ''
  let desc= '' 
  let gen = ''
  let image =''

  const classes = useStyles();
  if(props.directory){
    name1 = props.directory[0].name.title
    name2 = props.directory[0].name.first
    name3 = props.directory[0].name.last
    streetNumber = props.directory[0].location.street.number
    streetName = props.directory[0].location.street.name
    city = props.directory[0].location.city
    statee = props.directory[0].location.state
    country = props.directory[0].location.country
    code = props.directory[0].location.postcode
    offset = props.directory[0].location.timezone.offset
    desc = props.directory[0].location.timezone.description
    gen = props.directory[0].gender
    image = props.directory[0].picture.large

  }   
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography style={{marginBottom:3,color:'rgb(255, 80, 80)',textDecoration:'underline'}} component="h3" variant="h3" >
          {name1} {name2} {name3}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            <strong style={{color:'rgb(236, 11, 236)'}}>{streetNumber}</strong>, {streetName}, {city}, {statee}, <strong>{country}</strong>, {code}
          </Typography><strong></strong>
          <Typography variant="subtitle1" color="textPrimary">
            {offset} - {desc}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {gen}
          </Typography>
        </CardContent>
        
      </div>
      
    </Card>
  );
}

const mapStateToProps = state=>{
  return{
      directory: state.activeDirectory
  }
}



export default connect(mapStateToProps)(ActiveCard);
