import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import { Padding } from "@mui/icons-material";

export default function LeftSidebar() {
  const data = [
    {
      course: "CSE 110",
    },
    {
      course: "BIO 101",
    },
    {
      course: "MATH 20C",
    },
  ];

  return (
    <>
      <Sheet
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #DBDBDB",
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{ marginBottom: "12px", marginTop: "15px", fontWeight: "bold" }}
          >
            My Courses
          </Typography>
          <Divider style={{ marginBottom: "42px" }} />
          {data.map((item) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  width: "100%",
                  justifyContent: "flex-start",
                  ":hover": {
                    backgroundColor: "#e0e0e0",
                  },
                  padding: "10px",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Avatar
                  alt={item.course}
                  src={"https://unsplash.com/s/photos/school"}
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "16px",
                  }}
                />
                <Typography variant="body1">{item.course}</Typography>
              </Button>
            </div>
          ))}
        </div>

        {/* Report Bug Button */}
        <Button variant="outlined" style={{ width: "100%" }}>
          Report a Bug
        </Button>
      </Sheet>
    </>
  );
}
