import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Item from "@/components/item";
import LeftSidebar from "@/components/sidebar-left";
import RightSidebar from "@/components/sidebar-right";
import Announcement from "@/components/announcement";
import Assignment from "@/components/assignment";
import Material from "@/components/material";

export const getServerSideProps = async () => {
  const baseUrl = process.env.NODE_ENV === 'PRODUCTION' ? 'https://test.com' : 'http://localhost:3000'
  console.log(`${baseUrl}/api/getClassPosts?classes=620704651911`)
  const res = await fetch(`${baseUrl}/api/getClassPosts?classes=620704651911`)
  return { props: await res.json() }
}
export default function Home({ posts }) {
  console.log(posts);

  const announcement = {
    type: "announcement",
    timestamp: "12:00 PM",
    date: "12:00 PM",
    author: {
      "name": "David Chen",
      "picture": "https://profile.pic/kjdsflsajfkldsjfklsdjf"
    },
    courseId: "1234134",
    id: "133423",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    materials: [{
      type: "link",  // one of ["driveFile", "youtubeVideo", "link", "form"]
      url: "https://en.wikipedia.org/wiki/Shoe",
      title: "Shoes",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shoes.svg/1024px-Shoes.svg.png?20200130011142"
    }],
    state: "PUBLISHED",
    alternateLink: "",
    creationTime: "string",
    updateTime: "string",
    scheduledTime: "string",
    assigneeMode: "ALL_STUDENTS",
    // individualStudentsOptions: {
    //   {
    //     studentIds: ["3938"]
    //   }
    // },
    creatorUserId: "string",
  };

  const assignment = {
    type: "assignment",
    courseId: "1234123",
    id: "345245",
    date: "balh bladf",
    timestamp: "12:40 PM",
    title: "another title",
    author: {
      "name": "First Last",
      "picture": "https://profile.pic/kjdsflsajfkldsjfklsdjf"
    },
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    materials: [{
      type: "link",  // one of ["driveFile", "youtubeVideo", "link", "form"]
      url: "https://en.wikipedia.org/wiki/Shoe",
      title: "Shoes",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shoes.svg/1024px-Shoes.svg.png?20200130011142"
    },
    {
      type: "link",  // one of ["driveFile", "youtubeVideo", "link", "form"]
      url: "https://en.wikipedia.org/wiki/Shoe",
      title: "Shoes",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shoes.svg/1024px-Shoes.svg.png?20200130011142"
    }],
    //state: enum (CourseWorkState),
    alternateLink: "string",
    url: "https://www.google.com/",
    creationTime: "string",
    updateTime: "string",
    //dueDate: {
    //  object (Date)
    //},
    //dueTime: {
    //  object (TimeOfDay)
    //},
    scheduledTime: "string",
    maxPoints: 0,
    //workType: enum (CourseWorkType),
    associatedWithDeveloper: false,
    //assigneeMode: enum (AssigneeMode),
    //individualStudentsOptions: {
    //  object (IndividualStudentsOptions)
    //},
    // submissionModificationMode: enum (SubmissionModificationMode),
    creatorUserId: "string",
    topicId: "string", //,
    //gradeCategory: {
    //  object (GradeCategory)
  };

  const material = {
    type: "material",
    courseId: "34534",
    id: "12341",
    title: "title three",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    materials: [{
      type: "link",  // one of ["driveFile", "youtubeVideo", "link", "form"]
      url: "https://en.wikipedia.org/wiki/Shoe",
      title: "Shoes",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shoes.svg/1024px-Shoes.svg.png?20200130011142"
    },
    {
      type: "link",  // one of ["driveFile", "youtubeVideo", "link", "form"]
      url: "https://en.wikipedia.org/wiki/Shoe",
      title: "Shoes",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shoes.svg/1024px-Shoes.svg.png?20200130011142"
    }],
    // state: enum (CourseWorkMaterialState),
    alternateLink: "string",
    author: {
      "name": "name mane",
      "picture": "https://profile.pic/kjdsflsajfkldsjfklsdjf"
    },
    date: "adfadf",
    timestamp: "1:00 PM",
    url: "https://www.google.com/",
    creationTime: "string",
    updateTime: "string",
    scheduledTime: "string",
    //"assigneeMode": enum (AssigneeMode),
    //"individualStudentsOptions": {
    //  object (IndividualStudentsOptions)
    //},
    creatorUserId: "string",
    topicId: "string"
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftSidebar />
      <RightSidebar />
      <main
        style={{
          // background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          flexDirection: "column",
        }}
      >
        {
          posts.map(post => {
            switch (post.type) {
              case "classwork":
                return <Assignment key={post.id} data={post} />
              case "material":
                return <Material key={post.id} data={post} />
              case "announcement":
                return <Announcement key={post.id} data={post} />
              default:
                return <></>
            }
          })
        }
        <Assignment data={assignment} />
        <Announcement data={announcement} />
        <Material data={material}/>
      </main>
    </>
  );
}
