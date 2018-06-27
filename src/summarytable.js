import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    body: {
        borderBottomWidth: '1px',
        borderBottomColor: 'grey',
        padding: '10px',
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 1,
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        backgroundColor: '#2d3436',
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
    createData('1D Profit', 159),
    createData('7D Profit', 159),
    createData('30D Profit', 159),
    createData('24H Market Change', 159),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow>
                                <CustomTableCell component="th" scope="row">
                                    {n.name}
                                </CustomTableCell>
                                <CustomTableCell numeric>{n.d}</CustomTableCell>
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
