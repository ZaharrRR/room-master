import { defineStore } from "pinia";

interface Complaint {
  id: number;
  name: string;
  contact: string;
  title: string;
  description: string;
}

export const useComplaintsStore = defineStore("complaints", {
  state: () => ({
    complaints: [] as Complaint[],
  }),
  actions: {
    addComplaint(complaint: Complaint) {
      this.complaints.push(complaint);
    },
  },
});
