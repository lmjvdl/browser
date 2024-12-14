import React from "react";

interface InputCenterProps {
    show: boolean;
    children?: React.ReactNode;
}

export default function SearchBox({ show, children }: InputCenterProps) {
const showRes: boolean = show;
  return (
    <>
        { showRes && (
            <div className="flex justify-center items-center">
                {children}
            </div>
        ) }
    </>
  );
};

