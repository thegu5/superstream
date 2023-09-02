import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Item from "@/components/item";
import LeftSidebar from "@/components/sidebar-left";
import RightSidebar from "@/components/sidebar-right";

export default function Home() {
  const announcement = {
    type: "announcement",
    title: "title of lorem",
    author: "Lorem Ipsum",
    timestamp: "12:00 PM",
    courseId: "1234134",
    id: "133423",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // materials: [],
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
    courseId: "string",
    id: "string",
    title: "string",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    materials: [],
    //state: enum (CourseWorkState),
    alternateLink: "string",
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
        <Item data={assignment} />
        <Item data={announcement} />
      </main>
    </>
  );
}
