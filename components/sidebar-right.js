import React, { useState } from "react";
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
      type: "Announcement",
    },
    {
      course: "MATH 20C",
      type: "Materials",
    },
  ];

  const [checkedClasses, setCheckedClasses] = useState([false, false, false]);
  const [checkedTypes, setCheckedTypes] = useState([false, false, false]);

  const handleSelectAllClasses = (event) => {
    setCheckedClasses(Array(data.length).fill(event.target.checked));
  };

  const handleSelectAllTypes = (event) => {
    setCheckedTypes(Array(data.length).fill(event.target.checked));
  };

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
          <Checkbox
            label="All"
            sx={{ width: "100%", marginBottom: "17px" }}
            checked={checkedClasses.every(Boolean)}
            indeterminate={
              checkedClasses.some(Boolean) && !checkedClasses.every(Boolean)
            }
            onChange={handleSelectAllClasses}
          />
          {data.map((item, index) => (
            <Checkbox
              label={item.course}
              Checkbox
              checked={checkedClasses[index]}
              onChange={(event) =>
                setCheckedClasses([
                  ...checkedClasses.slice(0, index),
                  event.target.checked,
                  ...checkedClasses.slice(index + 1),
                ])
              }
              sx={{ width: "100%", marginBottom: "17px", marginLeft: "16px" }}
              variant="outlined"
            />
          ))}

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
          <Checkbox
            label="All"
            sx={{ width: "100%", marginBottom: "17px" }}
            checked={checkedTypes.every(Boolean)}
            indeterminate={
              checkedTypes.some(Boolean) && !checkedTypes.every(Boolean)
            }
            onChange={handleSelectAllTypes}
          />
          {data.map((item, index) => (
            <Checkbox
              label={item.type}
              checked={checkedTypes[index]}
              onChange={(event) =>
                setCheckedTypes([
                  ...checkedTypes.slice(0, index),
                  event.target.checked,
                  ...checkedTypes.slice(index + 1),
                ])
              }
              sx={{ width: "100%", marginBottom: "17px", marginLeft: "16px" }}
              variant="outlined"
            />
          ))}
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
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
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
