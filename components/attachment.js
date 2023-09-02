import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea, Link} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';


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
        <div
            style={{
                width: 150
            }}>
            <CardActionArea LinkComponent={Link} href={material.url} target="_blank">
                <Card
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <AspectRatio style={{width: 80}}>
                        <CardMedia
                            component="img"
                            src={material.thumbnailUrl}
                            alt=""
                            style={{
                                alignSelf: "center"
                            }}
                        />
                    </AspectRatio>
                    <CardContent
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}>
                        <Typography>
                            {material.title}
                        </Typography>
                        <Typography>
                            {material.type}
                        </Typography>
                    </CardContent>
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
