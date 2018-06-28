import SimpleCard from './card';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleModal from './modal';
import SimpleTable from './summarytable';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
    root: {
        flexGrow: 1,
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    table: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 275,
        backgroundColor: '#334854',
        opacity: 200,
    },
});

function AutoGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent><SimpleTable></SimpleTable></CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
    				<Paper className={classes.paper}>
    					<SimpleCard attr={'ETH | BTC 24H Change'}></SimpleCard>
    				</Paper>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'Last 5 buys w/ costs'}></SimpleCard>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'Last 5 Sales'}></SimpleCard>
                    </Paper>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'Start Bal / Current Bal'}></SimpleCard>
                    </Paper>
    			</Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'ETH / BTC 1D graph'}></SimpleCard>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'Graph of profits over past 30D'}></SimpleCard>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
