import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'black',
    
  },
  wroot: {
    backgroundColor:'#eee',
    paddingLeft:40,
    paddingRight:40

  },
  qroot: {
    color:'black'
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.wroot} position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
                Directory
          </Typography>
          <Button className={classes.qroot} color="inherit">Product</Button>
          <Button className={classes.qroot} color="inherit">Download</Button>
          <Button className={classes.qroot} color="inherit">Pricing</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
