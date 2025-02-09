"use-client";
import React from "react";
import { absoluteCenter, flex } from "@/styles/global.style";
import { MusicNoteWhite } from "@/assets/svg";
import Icon from "@/components/icon";

type WhiteNoteSpinnerProps ={
    width?:string;
    height?:string;
}
export const WhiteNoteSpinner = ({width, height}:WhiteNoteSpinnerProps ) => {
  return (
    <div className={`fixed z-50 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2`}>
    <div className={`${absoluteCenter} ${flex.center_center}  relative`}>
      <div
        className={`rotate-infinte ${flex.center_center} ${width && 'w-[80px]'} ${height && 'h-[80px]'}  rounded-full white-color-shadow  `}
      >
        <Icon icon={MusicNoteWhite} customStyle="w-[60px] h-[60px] " />
      </div>
    </div>
    </div>
  );
};
