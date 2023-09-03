import React, { useState, useEffect } from "react";
import Head from "next/head";
import LeftSidebar from "@/components/sidebar-left";
import RightSidebar from "@/components/sidebar-right";
import Announcement from "@/components/announcement";
import Assignment from "@/components/assignment";
import Material from "@/components/material";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/material/Divider";
import { Sheet } from "@mui/joy";
import Image from "next/image";

export const getServerSideProps = async () => {
  // const baseUrl = process.env.NODE_ENV === 'PRODUCTION' ? 'https://test.com' : 'http://localhost:3000'
  const baseUrl = "http://localhost:3000";
  const classListRest = await fetch(`${baseUrl}/api/classList`);
  const { classes, err: classErr } = await classListRest.json();

  const res = await fetch(
    `${baseUrl}/api/classPosts?classes=${classes
      .map((gClass) => gClass.id)
      .join(",")}`
  );
  const { posts, err: postErr } = await res.json();
  posts.sort((a, b) => {
    let first = new Date(a.dueDate || a.creationTime);
    let second = new Date(b.dueDate || b.creationTime);
    return first > second ? 1 : -1;
  });
  const userinfores = await fetch(`${baseUrl}/api/userInfo`).then((res) =>
    res.json()
  );
  return { props: { posts, userinfores, classes } };
};
export default function Home({ posts, userinfores, classes }) {
  const [filters, setFilters] = useState({ classId: [], type: [] });

  const filteredPosts = posts.filter(
    (post) =>
      (filters.classId.length === 0 ||
        filters.classId.includes(post.classId)) &&
      (filters.type.length === 0 || filters.type.includes(post.type))
  );
  useEffect(() => {
    window.location.hash = "";
    window.location.hash = new Date().toLocaleDateString();
  });
  let lastDay = "";
  return (
    <>
      <Head>
        <title>SuperStream | HackTheClassroom</title>
        <meta
          name="description"
          content="Hate the fact that you have to navigate to several different places in google classroom? We do too! SuperStream was born due to this problem. Most of us use google classroom and we found that a singular vast stream of the data from google classroom is extremely convenient for us as students."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/SS-logo.png" />
        <meta itemProp="image" content="/SS-logo.png" />
        <link rel="icon" href="/SS.png" />
      </Head>
      <LeftSidebar />
      <RightSidebar
        filters={filters}
        setFilters={setFilters}
        data={classes}
        userinfores={userinfores}
      />
      <main
        style={{
          // background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <Sheet sx={{ marginBottom: "70px", background: "none" }}>
          <Image
            className="logo"
            width={"200"}
            height={"200"}
            src={"/SS.png"}
          />
        </Sheet>
        {filteredPosts.map((post) => {
          const date = post.dueDate || post.creationTime;
          const localDay = new Date(
            post.dueDate || post.creationTime
          ).toLocaleDateString();
          switch (post.type) {
            case "classwork":
              if (lastDay !== localDay) {
                lastDay = localDay;
                return (
                  <>
                    <div
                      style={{
                        margin: 10,
                      }}
                    >
                      <Typography id={localDay} style={{ color: "#555E68" }}>
                        {localDay}
                      </Typography>
                      <Divider
                        style={{
                          margin: 10,
                        }}
                        flexItem="true"
                      ></Divider>
                    </div>
                    <Assignment key={post.id} data={post} />
                  </>
                );
              } else {
                return <Assignment key={post.id} data={post} />;
              }
            case "material":
              if (lastDay !== localDay) {
                lastDay = localDay;
                return (
                  <>
                    <div
                      style={{
                        margin: 10,
                      }}
                    >
                      <Typography id={localDay} style={{ color: "#555E68" }}>
                        {localDay}
                      </Typography>
                      <Divider
                        style={{
                          margin: 10,
                        }}
                        flexItem="true"
                      ></Divider>
                    </div>
                    <Material key={post.id} data={post} />
                  </>
                );
              } else {
                return <Material key={post.id} data={post} />;
              }
            case "announcement":
              if (lastDay !== localDay) {
                lastDay = localDay;
                return (
                  <>
                    <div
                      style={{
                        margin: 10,
                      }}
                    >
                      <Typography id={localDay} style={{ color: "#555E68" }}>
                        {localDay}
                      </Typography>
                      <Divider
                        style={{
                          margin: 10,
                        }}
                        flexItem="true"
                      ></Divider>
                    </div>
                    <Announcement key={post.id} data={post} />
                  </>
                );
              } else {
                return <Announcement key={post.id} data={post} />;
              }
            default:
              return <></>;
          }
        })}
      </main>
    </>
  );
}
