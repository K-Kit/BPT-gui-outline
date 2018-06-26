import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 1,
        overflowX: 'auto',
    },
});

let id = 0;
function createData(name, d) {
    id += 1;
    return { name, d };
}

const data = [
    createData('Available Balance', 159),
    createData('Current Balance', 159),
    createData('1d profit', 159),
    createData('7d profit', 159),
    createData('1m profit', 159),
    createData('Eth Price', 159),
    createData('24h Market Change', 159),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Thing</TableCell>
                        <TableCell numeric>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {n.name}
                                </TableCell>
                                <TableCell numeric>{n.d}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
         </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);