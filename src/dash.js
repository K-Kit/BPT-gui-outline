import SimpleCard from './card';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleModal from './modal'
import SimpleTable from './summarytable'

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
});

function AutoGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <SimpleTable></SimpleTable>
                    </Paper>
                </Grid>

				<Grid item xs={8}>
					<Paper className={classes.paper}>
						<SimpleCard attr={'Main Currency Chart'}></SimpleCard>
					</Paper>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'Market Change'}></SimpleCard>
                    </Paper>
				</Grid>

            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'tickers widget'}></SimpleCard>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'1m profit'}></SimpleCard>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'more stats'}></SimpleCard>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <SimpleCard attr={'cool info'}></SimpleCard>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <SimpleModal></SimpleModal>
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
