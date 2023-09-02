import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Checkbox from "@mui/joy/Checkbox";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from "@mui/joy/Divider";

export default function RightSidebar() {
  const data = [
    {
      course: "CSE 110",
      type: "Assignment",
    },
    {
      course: "BIO 101",
      type: "Announcement"
    },
    {
      course: "MATH 20C",
      type: "Materials"
    },
  ];

  return (
    <>
      <Sheet
        sx={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #DBDBDB",
          position: "fixed",
          top: 0,
          right: 0,
          width: "250px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <div>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: "12px",
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            Options
          </Typography>
          <Divider sx={{ marginBottom: "32px" }} />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "3px" }}
          >
            Filter by Class
          </Typography>
          <Divider
            sx={{
              width: "32px",
              margin: "0 auto",
              height: "3px",
              marginBottom: "15px",
            }}
          />
          {data.map((item) => (
            <Checkbox
              label={item.course}
              sx={{ width: "100%", marginBottom: "17px" }}
              variant="soft"
            />
          ))}
          <Checkbox label="All" sx={{ width: "100%" }} variant="soft" />
          <Typography
            variant="body1"
            sx={{ marginTop: "32px", textAlign: "center" }}
          >
            Assignment Type
          </Typography>
          <Divider
            sx={{
              width: "32px",
              margin: "0 auto",
              height: "3px",
              marginBottom: "15px",
            }}
          />
           {data.map((item) => (
            <Checkbox
              label={item.type}
              sx={{ width: "100%", marginBottom: "17px" }}
              variant="soft"
            />
          ))}
          <Checkbox label="All" sx={{ width: "100%" }} variant="soft" />
        </div>
        {/*  */}
        <Sheet
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "transparent",
          }}
        >
          <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
            <Avatar
              alt="John"
              src="https://unsplash.com/s/photos/profile"
              sx={{ width: "35px", height: "35px" }}
            />
            <Typography variant="body1">John</Typography>
          </div>
          <SettingsIcon />
        </Sheet>
      </Sheet>
    </>
  );
}
