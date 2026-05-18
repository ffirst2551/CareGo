import { create } from "zustand";

interface BookingState {
  step: number;
  selectedPatientId: string | null;
  selectedPurpose: string | null;
  selectedDepartment: string | null;
  selectedHospital: string | null;
  selectedMeetingPoint: string | null;
  selectedDate: string | null;
  selectedSlot: string | null;
  selectedPackage: string | null;
  selectedPayment: string | null;
  
  // Actions
  setStep: (step: number) => void;
  setPatientId: (id: string) => void;
  setPurpose: (purpose: string) => void;
  setDepartment: (dept: string) => void;
  setHospital: (hospital: string) => void;
  setMeetingPoint: (point: string) => void;
  setDate: (date: string) => void;
  setSlot: (slot: string) => void;
  setPackage: (pkg: string) => void;
  setPayment: (method: string) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  selectedPatientId: "p1", // Default from prototype
  selectedPurpose: "doctor",
  selectedDepartment: "medicine",
  selectedHospital: "โรงพยาบาลศิริราช",
  selectedMeetingPoint: "หน้าอาคารผู้ป่วยนอก",
  selectedDate: "2026-05-23",
  selectedSlot: "08:00 - 12:00",
  selectedPackage: "full",
  selectedPayment: "promptpay",

  setStep: (step) => set({ step }),
  setPatientId: (id) => set({ selectedPatientId: id }),
  setPurpose: (purpose) => set({ selectedPurpose: purpose }),
  setDepartment: (dept) => set({ selectedDepartment: dept }),
  setHospital: (hospital) => set({ selectedHospital: hospital }),
  setMeetingPoint: (point) => set({ selectedMeetingPoint: point }),
  setDate: (date) => set({ selectedDate: date }),
  setSlot: (slot) => set({ selectedSlot: slot }),
  setPackage: (pkg) => set({ selectedPackage: pkg }),
  setPayment: (method) => set({ selectedPayment: method }),
  reset: () => set({
    step: 1,
    selectedPatientId: null,
    selectedPurpose: null,
    selectedDepartment: null,
    selectedHospital: null,
    selectedMeetingPoint: null,
    selectedDate: null,
    selectedSlot: null,
    selectedPackage: null,
    selectedPayment: null,
  }),
}));
