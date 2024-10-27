import React from "react";
import { Textarea } from "@/components/ui/textarea";

export default function TextArea({additionalRequirements}: any) {
  return (
    <div className="mt-5">
      <label htmlFor="" className="text-gray-500">
       Enter Additional Requirements (Optional)
      </label>
      <Textarea className="mt-3" onChange={(e) => additionalRequirements(e.target.value)} />
    </div>
  );
}
