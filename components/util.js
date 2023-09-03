import AddCircleIcon from '@mui/icons-material/AddCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';

export function convertIcon(string) {

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

export function convertTitle(material) {
    const type = material.type;
    switch (type) {
        case ("link"): {
            if (material.title === "" || (material.title == null)) {
                return "External link";
            } else {
                return material.title;
            }
            break;
        }
        case ("driveFile"): {
            if (material.title === "" || (material.title == null)) {
                return "Google Drive file";
            } else {
                return material.title;
            }
            break;
        }
        case ("youtubeVideo"): {
            if (material.title === "" || (material.title == null)) {
                return "YouTube video";
            } else {
                return material.title;
            }
            break;
        }
        case ("form"): {
            if (material.title === "" || (material.title == null)) {
                return "Google Form";
            } else {
                return material.title;
            }
            break;
        }
    }
}

export function convertType(string) {
    switch (string) {
        case ("link"): {
            return "External link";
            break;
        }
        case ("driveFile"): {
            return "Google Drive file";
            break;
        }
        case ("youtubeVideo"): {
            return "YouTube video";
            break;
        }
        case ("form"): {
            return "Google Form";
            break;
        }
    }
}
