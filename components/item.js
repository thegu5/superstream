import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/joy/Avatar";
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import Attachment from './attachment'
import AttachmentList from './attachmentlist'

export default function Item({ data, icon, title, body}) {
    const formatter = new Intl.RelativeTimeFormat('en', { style: 'short' });
  return (
    <Card
      style={{
        width: "400px",
        backgroundColor: "#fafafa",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "26px",
        marginBottom: "20px",
        paddingBottom: "30px",
        maxheight: "500px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >

        <Typography
          level="body-sm"
          style={{
            fontSize: "1.2em",
            fontWeight: "600",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}>
          {title}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            style={{
              backgroundColor: "#00796B",
              color: "#fff",
              marginRight: "8px",
            }}
            size="sm"
          >
            {data.author.name[0]}
            {/* Assuming the first letter of the author's name */}
          </Avatar>
          <Typography
            level="body-sm"
            style={{ fontSize: "1em", color: "#757575" }}
          >
            {data.dueDate || data.updateTime}
          </Typography>
        </div>
      </div>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {icon}
        <Typography
          level="body-sm"
          style={{ fontSize: "0.9em", fontWeight: "500" }}
        >
          {body}
        </Typography>
      </CardContent>
        {
            data.materials?.map(material => <Attachment material={material} key={material.url}/>)
        }
      <Button color="primary" style={{
        // display: "flex",
        // flexDirection: "row", 
        alignItems: "center",
        justifyContent: "flex-start",
      }} href={data.url} target="_blank">
        <LaunchIcon></LaunchIcon>
      </Button>
      
    </Card>
  );
}
