import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/joy/Avatar";

export default function Item({ data }) {
  if (data.type === "announcement") {
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
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography
            level="body-sm"
            style={{ fontSize: "1.2em", fontWeight: "600" }}
          >
            {data.title}
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
              {data.author[0]}{" "}
              {/* Assuming the first letter of the author's name */}
            </Avatar>
            <Typography
              level="body-sm"
              style={{ fontSize: "1em", color: "#757575" }}
            >
              {data.timestamp}
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
          <ChatBubbleIcon
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
            }}
          />
          <Typography
            level="body-sm"
            style={{ fontSize: "0.9em", fontWeight: "500" }}
          >
            {data.text}
          </Typography>
        </CardContent>
      </Card>
    );
  } else if (data.type === "assignment") {
    return (
      <Card
        style={{
          width: "400px",
          backgroundColor: "#fafafa",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "20px",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AssignmentIcon
            style={{
              color: "#ef6c00",
              marginRight: "16px",
              fontSize: "3em",
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Typography
            level="body-sm"
            style={{ fontSize: "1.2em", fontWeight: "500" }}
          >
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card
        style={{
          maxWidth: "345px",
          backgroundColor: "#fafafa",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "horizontal",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            level="body-sm"
            style={{ fontSize: "1rem", marginBottom: "1rem" }}
          >
            It doesn't work
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
