import { deviceData } from "./deviceData";

export const filterFields = [
  { 
    label: "AMC Status",
    id: "amcStatus",
    options: ["Active", "Expired"],
  },
  {
    label: "Facility",
    id: "facility",
    options: [...new Set(deviceData.map((d) => d.facility))], // Unique facilities
  },
  {
    label: "Status",
    id: "status",
    options: ["Online", "Offline", "Maintenance"],
  },
  {
    label: "Battery Level",
    id: "battery",
      options: [
      { value: "30", label: "< 30%" },
      { value: "30-60", label: "30% - 60%" },
      { value: "60", label: "> 60%" },
    ],
  },
];
