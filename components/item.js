import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/joy/Avatar";
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import Attachment from './attachment';
import AttachmentList from './attachmentlist';
import { CardActionArea, Link } from "@mui/material";
import { useEffect, useState } from "react";

export default function Item({ data, icon, title }) {
  const date = (data.dueDate || data.creationTime);
  const [localTimestamp, setLocalTimestamp] = useState("");
  useEffect(() => {
    setLocalTimestamp(new Date(data.dueDate || data.creationTime).toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit' }))
  }, [])
  return (
    <Card
      style={{
        backgroundColor: "#fafafa",
        border: "1px solid #e0e0e0",
        width: "400px",
        borderRadius: "8px",
        padding: "26px",
        marginBottom: "20px",
        paddingBottom: "30px",
        maxheight: "500px",
      }}>

      <CardActionArea
        style={{
          padding: 10,
        }}
        LinkComponent={Link} href={data.url} target="_blank">
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
            }}>
            {title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center", }}>
            <Avatar
              src={data.author.picture}
              style={{
                marginRight: "8px",
              }}
              size="sm"
            >
              {data.author.name[0]}
              {/* Assuming the first letter of the author's name */}
            </Avatar>
            <p>{localTimestamp}</p>
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
            className={"body-text"}
          >
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <AttachmentList materials={data.materials} />
    </Card >

  );
}
