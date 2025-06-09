import {
  createSlice,
  createAsyncThunk,
  type PayloadAction
} from '@reduxjs/toolkit';
import { fetchGeoLocation } from '../../services/fetchGeoLocation';

interface User {
  username: string;
  status: 'idle' | 'pending' | 'error';
  position: GeolocationCoordinates;
  address: string;
  error: string;
}

interface GeolocationPosition {
  coords: GeolocationCoordinates;
  timestamp: number;
}

interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
}

function getPosition() {
  return new Promise<GeolocationPosition>(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  'user/fetchAddres',
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude
    };
    const addressObj = await fetchGeoLocation(
      position.latitude,
      position.longitude
    );

    const address = `${addressObj?.locality},  ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName} `;
    return { position, address };
  }
);

const initialState: User = {
  username: '',
  status: 'idle',
  position: { longitude: 0, latitude: 0 },
  address: '',
  error: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'error';
        state.error = "There's a problem getting your location.";
      });
  }
});

export const { updateName } = userSlice.actions;

export default userSlice;
