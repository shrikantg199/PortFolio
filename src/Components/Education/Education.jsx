import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import logo from "./clglogo.jpg";
import logo1 from "./clg logo1.jpg";

const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="lg" src={logo} alt="user 1" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              AISSMS Institute of Information Technology,Pune
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="gray" className="font-semibold text-gray-600">
              Electronics & Telecommunication
              <br />
              Bachelor of Engineering - BE, <br /> 2019 - 2022
              <br /> CGPA: 8.5
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar size="lg" src={logo1} alt="user 2" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Government Polytechnic Pune
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-semibold text-gray-600">
              Electronics & Telecommunication
              <br />
              Diploma, <br /> 2016 - 2019
              <br /> CGPA: 7.89
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
