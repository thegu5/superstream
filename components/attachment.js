import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Attachment({material}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

return (
        <div>
        <Card>
          <CardContent>
          <CardMedia
        component="img"
        height="194"
        image={material.thumbail}
        alt=""
      />
        <Typography
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
        {material.title}
        {material.type}
        </Typography>
        </CardContent>
        </Card>
        <Popover
            id="mouse-over-popover"
            sx={{
            pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
        <Typography sx={{ p: 1 }}>{material.title}</Typography>
        </Popover>
    </div>
  );
}
