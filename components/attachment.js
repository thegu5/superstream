import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea, Link} from "@mui/material";
import Box from "@mui/material/Box"

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
            <CardActionArea LinkComponent={Link} href={material.url} target="_blank">
                <Card
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    style={{
                        display: "flex"
                    }}
                >
                    <CardMedia
                        component="img"
                        src={material.thumbnailUrl}
                        alt=""
                        style={{width: 100, height: 100}}
                    />
                    <Box style={{
                        display: "flex", flexDirection: "column"
                    }}>
                        <CardContent
                            style={{
                                flex: "1 0 auto"
                            }}>
                            <Typography component="div">
                                {material.title}
                            </Typography>
                            <Typography component="div">
                                {material.type}
                            </Typography>

                        </CardContent>
                    </Box>
                </Card>
            </CardActionArea>
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
                <Typography sx={{p: 1}}>{material.title}</Typography>
            </Popover>
        </div>
    );
}
