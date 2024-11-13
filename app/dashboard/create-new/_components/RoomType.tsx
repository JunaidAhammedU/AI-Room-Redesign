import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RoomType({ selectedRoomType }: any) {
  return (
    <div>
      <label htmlFor="Select" className="text-gray-500">
        Select Room Type*
      </label>
      <div className="mt-1">
        <Select onValueChange={(value) => selectedRoomType(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Room Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Living Room">Living Room</SelectItem>
            <SelectItem value="Bed Room">Bed Room</SelectItem>
            <SelectItem value="Kitchen">Kitchen</SelectItem>
            <SelectItem value="Bathroom">Bathroom</SelectItem>
            <SelectItem value="Dinning Room">Dinning Room</SelectItem>
            <SelectItem value="Office">Office</SelectItem>
            <SelectItem value="Study">Study</SelectItem>
            <SelectItem value="Dressing Room">Dressing Room</SelectItem>
            <SelectItem value="Gym">Gym</SelectItem>
            <SelectItem value="workspace">workspace</SelectItem>
            <SelectItem value="Theater">Theater</SelectItem>
            <SelectItem value="Prayer Room">Prayer Room</SelectItem>
            <SelectItem value="Balcony">Balcony</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
