import AddCircleIcon from '@mui/icons-material/AddCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';

export default function convertIcon(string) {

    switch (string) {
        case ("link"): {
            return <LinkIcon />;
            break;
        }
        case ("driveFile"): {
            return <AddToDriveIcon />;
            break;
        }
        case ("youtubeVideo"): {
            return <YouTubeIcon />;
            break;
        }
        case ("form"): {
            return <ArticleIcon />;
            break;
        }
    }
}