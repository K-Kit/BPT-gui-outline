import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CustomizedTable from './table';
import AutoGrid from './dash'
import PaperSheet from './paper'
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.dark,

    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Dashboard" />
                        <Tab label="Market Data" />
                        <Tab label="Holding" />
                        <Tab label="Possible Buys"/>
                        <Tab label="Sales Log" />
                        <Tab label="Buy Log" />
                    </Tabs>
                </AppBar>
                {value === 0 &&

                <TabContainer>
                    <AutoGrid></AutoGrid>
                </TabContainer>}
                {value === 1 && <TabContainer><CustomizedTable name={'holding'}></CustomizedTable></TabContainer>}
                {value === 2 && <TabContainer><CustomizedTable name={'holding'}></CustomizedTable></TabContainer>}
                {value === 3 && <TabContainer><CustomizedTable name={'holding'}></CustomizedTable></TabContainer>}
                {value === 4 && <TabContainer><CustomizedTable name={'holding'}></CustomizedTable></TabContainer>}
                {value === 5 && <TabContainer><CustomizedTable name={'holding'}></CustomizedTable></TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);