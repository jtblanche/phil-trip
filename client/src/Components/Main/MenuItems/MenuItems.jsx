// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
    Link
} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import FoodIcon from '@material-ui/icons/LocalDining';
import ActivitiesIcon from '@material-ui/icons/LocalActivity';
import TransportationIcon from '@material-ui/icons/LocalAirport';
import ExtraGearIcon from '@material-ui/icons/Work';

export const mailFolderListItems = (<div>
    <Link to="/">
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
    </Link>
    <Link to="/Food">
        <ListItem button>
            <ListItemIcon>
                <FoodIcon />
            </ListItemIcon>
            <ListItemText primary="Food" />
        </ListItem>
    </Link>
    <Link to="/Activities">
        <ListItem button>
            <ListItemIcon>
                <ActivitiesIcon />
            </ListItemIcon>
            <ListItemText primary="Activities" />
        </ListItem>
    </Link>
    <Link to="/Transportation">
        <ListItem button>
            <ListItemIcon>
                <TransportationIcon />
            </ListItemIcon>
            <ListItemText primary="Transportation" />
        </ListItem>
    </Link>
    <Link to="/ExtraGear">
        <ListItem button>
            <ListItemIcon>
                <ExtraGearIcon />
            </ListItemIcon>
            <ListItemText primary="Extra Gear" />
        </ListItem>
    </Link>
</div>
);

export const otherMailFolderListItems = (
    <div>
        <Link to="/Settings">
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link>
    </div>
);