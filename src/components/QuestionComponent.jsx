import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function QuestionComponent({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full shadow-md">
        <div className="px-[2rem] py-5">
      <div className="flex flex-row item-center justify-between">
        <h2 className="font-bold text-left">{data?.que}</h2>
        {open ? (
          <IconButton onClick={() => setOpen(false)}>
            <RemoveCircleOutline />
          </IconButton>
        ) : (
          <IconButton onClick={() => setOpen(true)}>
            <AddCircleOutline />
          </IconButton>
        )}
      </div>

      {open ? <p className="text-left">{data?.ans}</p> : null}
      </div>
    </div>
  );
}
