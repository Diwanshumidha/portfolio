'use client'
import { SendEmail } from "@/actions/Email";
import React from "react";
import SubmitButton from "./SubmitButton";
import useScrollIntersection from "@/lib/useScrollIntersection";


export default function Form() {
    const {ref} = useScrollIntersection('Contact',0.5)
 
  return (
    <form ref={ref} action={async (e:FormData)=>{
        const res = await SendEmail(e)
        if(res.error){
            return alert('There Was Problem While Sending Message ')
        }
        
        return alert('Successfully Message Sent')
    }} className=" mt-10 flex flex-col ">
      <input
        name="senderemail"
        required={true}
        maxLength={60}
        className=" h-14 rounded-lg px-4  borderBlack"
        title="Email"
        placeholder="Email"
        type="email"
      />
      <textarea
        name="message"
        required={true}
        maxLength={600}
        className=" h-52 my-3 rounded-lg borderBlack p-4 "
        placeholder="Message"
      />
      <SubmitButton/>
    </form>
  );
}
