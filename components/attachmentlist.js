import Attachment from './attachment.js';
import Grid from "@mui/material/Grid";
import * as React from "react";

export default function AttachmentList({materials}) {
    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {
                materials.map(material => (
                    <Grid item xs={6}>
                        <Attachment material={material}/>
                    </Grid>
        ))}
        </Grid>
    )
}