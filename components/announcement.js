import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Item from "./item"

export default function Announcement({data}) {
    return (
    <Item data={data} icon={<ChatBubbleIcon
        style={{
          color: "maroon",
          marginRight: "16px",
          fontSize: "3em",
          backgroundColor: "#e0e0e0",
          borderRadius: "50%",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}/>}
        title={data.author.name}/>
        )
}