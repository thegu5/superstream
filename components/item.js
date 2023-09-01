import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';



export default function Item ({data}) {
    return (
        <Card variant=''>
            <CardContent orientation="horizontal">
                {data.type === "announcement" &&
                    <Typography level="body-sm">
                        {data.text}
                    </Typography>
                }
            </CardContent>
        </Card>
    )
}