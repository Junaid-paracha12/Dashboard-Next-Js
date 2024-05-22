import React from "react";
import { Button } from "./ui/button";
import { Ghost } from "lucide-react";
import { CardContent } from "./Card";
import { cn } from "@/lib/utils";



export type MailProps = {
  name: string;
  heading:string;
  date:string;
  mail: string;
  btn1: string;
  btn2: string;
  btn3: string;
};

export default function MailCard(props: MailProps) {
  return (
    <CardContent>
    <div className="flex flex-col">
        
     
       <div className="flex items-center justify-between">
        <span>
        <h2>{props.name}</h2>
        <p className="text-sm py-2">{props.heading}</p>
       
        </span>
        <span><p className="text-sm">{props.date}</p> </span>
       </div>
        <div className="py-2"><p className="text-sm text-slate-600 ">{props.mail}</p></div>
      
      <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">{props.btn1}</Button>
      <Button variant="ghost" size="sm">{props.btn2}</Button>
      <Button variant="ghost" size="sm">{props.btn3}</Button>
      </div>
    </div>
    </CardContent>
  );
}

// export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
//     return (
//       <div
//         {...props}
//         className={cn(
//           "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
//           props.className
//         )}
//       />
//     );
//   }