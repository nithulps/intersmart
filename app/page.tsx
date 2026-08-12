import Image from "next/image";
import Landingpage from "../components/Landingpages";
import AiServices from "../components/AiServices";
import AiDevelopmentProcess from "../components/AiDevelopmentProcess";
import RecentProjects from "../components/RecentProjects";
import ScheduleMeeting from "../components/ScheduleMeeting";

export default function Home() {
  return (
    <>
      <Landingpage />
      <AiServices />
      <AiDevelopmentProcess />
      <ScheduleMeeting />
      <RecentProjects />
      
    </>
  );
}
