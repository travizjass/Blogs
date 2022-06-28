import React from 'react';
import Head from './components/Head';
import Cards from './components/Cards';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import Posts from './components/Posts';
import Trending from './components/Trending';
import Recent from './components/Recent';
const useStyles =makeStyles((theme)=>({
     grid: {
       width: '100%',
       margin: '0px'
     },
     paper: {
       padding: theme.spacing(2),
       textAlign: 'center',
       background: 'rgb(16, 29, 46)',
     }
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
   
    <Head/>
    <h1>Popular this week!</h1>
    <Cards/>
    <Grid container spacing={2} className={classes.grid}>
     <Grid item xs={12} md={8}>
       <Paper className={classes.paper}>
       <Posts/>
       </Paper>
     </Grid>
     <Grid item xs={12} md={4} >
       <Paper className={classes.paper}>
       <Trending/>
       <Recent/>
       </Paper>
     </Grid>
    </Grid>
    </div>
  );
}

export default App;
