import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Link } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import * as util from "./util.js";

export default function Attachment({ material }) {

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
                        display: "flex",
                        flexDirection: "row",
                        padding: 5,
                        alignItems: "center",
                    }}
                >
                    {util.convertIcon(material.type)}
                    <p
                        style={{
                            marginLeft: 5,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            alignSelf: "center",
                        }}
                    >
                        {util.convertTitle(material)}
                    </p>
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
                <CardActionArea LinkComponent={Link} href={material.url} target="_blank">
                    <Card
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        {material.type === "youtubeVideo" &&
                            <AspectRatio style={{ width: 80 }}>
                                <CardMedia
                                    component="img"
                                    src={material.thumbnailUrl}
                                    alt=""
                                    style={{
                                        alignSelf: "center"
                                    }}
                                />
                            </AspectRatio>
                        }
                        <CardContent
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <Typography>
                                {material.title}
                            </Typography>
                            <Typography>
                                {util.convertType(material.type)}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Popover>
        </div>
    );
}
