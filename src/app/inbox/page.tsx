import  { CardContent } from "@/components/Card";
import MailCard, { MailProps } from "@/components/MailCard";

import Pagetitle from "@/components/Pagetitle";
import { MagnetIcon, Search } from "lucide-react";





export default function Inbox()  {  
  const MailData: MailProps[] = [
    {
      name: "Olivia Martin",
      heading:"Metting",
      date:"2 Month ago",
      mail: "hi!I'm Writing this mail to inform you about the meatiing we have tommaro",
      btn1:"metting",
      btn2:"work",
      btn3:"important"
    },
    {
      name: "Chris Martinez",
      heading: "Training Session",
      date: "3 Days ago",
      mail: "There will be a training session on the new software next Monday.",
      btn1: "training",
      btn2: "session",
      btn3: "software"
    },
    {
      name: "Isabella Anderson",
      heading: "Office Renovation",
      date: "2 Days ago",
      mail: "The office renovation will start next week. Please plan accordingly.",
      btn1: "office",
      btn2: "renovation",
      btn3: "notice"
    },
    {
      name: "Daniel Lee",
      heading: "New Hire Orientation",
      date: "1 Day ago",
      mail: "We have a new hire orientation tomorrow at 10 AM.",
      btn1: "orientation",
      btn2: "new hire",
      btn3: "HR"
    },
    {
      name: "Mia Clark",
      heading: "Annual Report",
      date: "Today",
      mail: "The annual report is ready for your review.",
      btn1: "report",
      btn2: "annual",
      btn3: "review"
    },
    {
      name: "Ethan Lewis",
      heading: "Security Update",
      date: "2 Hours ago",
      mail: "Please install the latest security update as soon as possible.",
      btn1: "security",
      btn2: "update",
      btn3: "tech"
    },
    {
      name: "Ava Walker",
      heading: "Marketing Strategy",
      date: "1 Hour ago",
      mail: "Attached is the new marketing strategy document.",
      btn1: "marketing",
      btn2: "strategy",
      btn3: "document"
    },
    {
      name: "James Hall",
      heading: "Website Redesign",
      date: "30 Minutes ago",
      mail: "We need to discuss the website redesign in our next meeting.",
      btn1: "website",
      btn2: "redesign",
      btn3: "meeting"
    },
    {
      name: "Charlotte Allen",
      heading: "Policy Reminder",
      date: "15 Minutes ago",
      mail: "This is a reminder to adhere to the new company policies.",
      btn1: "policy",
      btn2: "reminder",
      btn3: "company"
    }
    
  ];
  return (
    <>
    <div className="grid grid-cols-2">
      <div>
       
        <div>
        <Pagetitle title="Inbox" />
        </div>
        <div className="py-4 w-full relative">
          <input placeholder="Search" className="w-full p-2 pl-10" />
          
          <span className="absolute top-6 left-2"><Search /></span>
        </div>
        <div className="">
        <div className="flex flex-col gap-4">
       
          {MailData.map((d, i) => (
            <MailCard
              key={i}
              mail={d.mail}
              name={d.name}
              heading={d.heading}
              date={d.date}
              btn1={d.btn1}
              btn2={d.btn2}
              btn3={d.btn3}
            />
          ))}
        </div>
        </div>
      </div>
      <div></div>
    </div>
    </>
  );
}

