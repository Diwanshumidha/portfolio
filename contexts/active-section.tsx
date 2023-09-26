'use client'
import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];
type Props = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection:SectionName,
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>
}
 const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection}}>{children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSection(){
    const context = useContext(ActiveSectionContext)

    if(context === null){
        throw new Error('Context must be wrapped inside Provider =>src:ActiveSectionContext')
    }

    return context
}