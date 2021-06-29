import React, {useState} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {pointerEvents: 'none'},
        paper: {padding: theme.spacing(1)},
    }),
);

export type Props = {
    preview: string,
    previewType: string,
    description: string
}
const MouseOverPopover: React.FC<Props> = ({preview, description, previewType}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => setAnchorEl(event.currentTarget);
    const handlePopoverClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);

    return (
        <div className='appPopover'>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {previewType === "img" ? <img width='50px' src={preview}/> : preview}
            </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{paper: classes.paper}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{ReactHtmlParser(description)}</Typography>
            </Popover>
        </div>
    );
}

export default MouseOverPopover;
