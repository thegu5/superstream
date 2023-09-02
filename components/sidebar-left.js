import React, { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";

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

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState("idle");
  const [bugTitle, setBugTitle] = useState("");
  const [bugDescription, setBugDescription] = useState("");

  const resetFormAndState = () => {
    setBugTitle(""); // Reset the bug title
    setBugDescription(""); // Reset the bug description
    setLoading("idle"); // Reset the loading state
  };

  const handleCloseModal = () => {
    setOpen(false);
    resetFormAndState(); // Reset form and state when modal is closed
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading("loading");

    try {
      const response = await fetch("/api/reportBug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bugTitle,
          bugDescription,
        }),
      });

      if (response.status === 200) {
        setLoading("success");
      } else {
        setLoading("idle");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setLoading("idle");
      alert("An error occurred. Please try again.");
    }

    setBugTitle("");
    setBugDescription("");
  };

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
            style={{
              marginBottom: "12px",
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            My Courses
          </Typography>
          <Divider style={{ marginBottom: "42px" }} />
          {data.map((item) => (
            <div
              key={item}
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
        <Button
          variant="outlined"
          style={{ width: "100%" }}
          onClick={() => setOpen(true)}
        >
          Report a Bug
        </Button>
        <Modal open={open} onClose={handleCloseModal}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title" level="h2">
              Create new project
            </Typography>
            <Typography id="basic-modal-dialog-description">
              Fill in the information of the project.
            </Typography>
            {loading === "idle" && (
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Bug Title</FormLabel>
                    <Input
                      autoFocus
                      required
                      value={bugTitle}
                      onChange={(e) => setBugTitle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                      required
                      value={bugDescription}
                      onChange={(e) => setBugDescription(e.target.value)}
                    />
                  </FormControl>
                  <Button type="submit">Report Bug</Button>
                </Stack>
              </form>
            )}
            {loading === "loading" && (
              <div style={{ textAlign: "center" }}>
                <CircularProgress />
                <Typography>Loading...</Typography>
              </div>
            )}
            {loading === "success" && (
              <div
                style={{
                  backgroundColor: "#4CAF5060",
                  color: "black",
                  textAlign: "center",
                  padding: "16px",
                  borderRadius: "25px",
                }}
              >
                <Typography>Bug reported successfully!</Typography>
              </div>
            )}
          </ModalDialog>
        </Modal>
      </Sheet>
    </>
  );
}
