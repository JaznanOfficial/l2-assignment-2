import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vehicle {
  vehicleDetails?: any; // Define the proper type based on your data structure
  selectedCategory?: any;
  selectedServices?: any;
}

interface BookingState {
  vehicles: Vehicle[];
  bookingDate: string | null;
  bookingTime: string | null;
}

const initialState: BookingState = {
  vehicles: [],
  bookingDate: null,
  bookingTime: null,
};


const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.vehicles.push(action.payload);
    },
    clearVehicles: (state) => {
      state.vehicles = [];
    },
    updateVehicleDetails: (
      state,
      action: PayloadAction<{ vehicleIndex: number; vehicleDetails: any }>
    ) => {
      const { vehicleIndex, vehicleDetails } = action.payload;
      state.vehicles[vehicleIndex].vehicleDetails = vehicleDetails;
    },
    updateVehicleCategory: (
      state,
      action: PayloadAction<{
        vehicleIndex: number;
        selectedCategory: string[];
      }>
    ) => {
      const { vehicleIndex, selectedCategory } = action.payload;
      state.vehicles[vehicleIndex].selectedCategory = selectedCategory;
    },
    updateVehicleServices: (
      state,
      action: PayloadAction<{ vehicleIndex: number; selectedServices: any }>
    ) => {
      const { vehicleIndex, selectedServices } = action.payload;
      state.vehicles[vehicleIndex].selectedServices = selectedServices;
    },
    addBookingDate: (state, action: PayloadAction<string | null>) => {
      state.bookingDate = action.payload;
    },
    addBookingTime: (state, action: PayloadAction<string | null>) => {
      state.bookingTime = action.payload;
    },
  },
});

export const {
  addVehicle,
  clearVehicles,
  updateVehicleDetails,
  updateVehicleCategory,
  updateVehicleServices,
  addBookingDate,
  addBookingTime,
} = bookingSlice.actions;

export default bookingSlice.reducer;
