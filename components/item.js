import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function Item ({data}) {
    if (data.type === "announcement") {
        return (
            <Card variant='' >
                <CardContent orientation="horizontal">
                    <ChatBubbleIcon />
                    <Typography level="body-sm">
                            {data.text}
                    </Typography>
                </CardContent>
            </Card>
        )
    } else if (data.type === "assignment") {
        <Card variant=''>
            <CardContent orientation="horizontal">
                <AssignmentIcon />
                <Typography level="body-sm">
                    {data.description}
                </Typography>
            </CardContent>
        </Card>
    } else {
    }
}