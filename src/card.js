import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        minWidth: 275,
        backgroundColor: '#334854',
        opacity: 200,
    },
    title: {
        marginBottom: 16,
        fontSize: 18,
        backgroundColor: '#2d3436',
        width: '100%',
        borderRadius: '25px',
    },
    pos: {
        marginBottom: 12,
    },
});

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h1" className={classes.title}>
                        {props.attr}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {props.apiData}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        1000eth
                    </Typography>
                    <Typography component="p">
                        dolla dolla BILLZ YALLLLLL!
                        {props.things}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
