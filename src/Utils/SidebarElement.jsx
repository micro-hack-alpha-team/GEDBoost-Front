import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
drawer: {
flexShrink: 0,
boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)', // Add a small shadow
},
drawerPaper: {
backgroundColor: '#ffffff', // White background color
color: '#000000', // Black text color
},
listItemIcon: {
minWidth: 'auto', // Set minimum width for icon
fontSize: '1.5rem', // Increase the icon size
},
}));

function SidebarElement({ open, onClose }) {
const classes = useStyles();

return (
<Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    onClose={onClose}
    classes={{
    paper: classes.drawerPaper,
    }}
>
    <List>
    <ListItem button>
        <ListItemIcon className={classes.listItemIcon}>
        <HomeIcon />
        </ListItemIcon>
    </ListItem>
    <ListItem button>
        <ListItemIcon className={classes.listItemIcon}>
        <InfoIcon />
        </ListItemIcon>
    </ListItem>
    <ListItem button>
        <ListItemIcon className={classes.listItemIcon}>
        <ContactMailIcon />
        </ListItemIcon>
    </ListItem>
    </List>
</Drawer>
);
}

export default SidebarElement;
