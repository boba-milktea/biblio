import axios from 'axios';

type AddressObj = {
  locality: string;
  city: string;
  postcode: string;
  countryName: string;
};

export const fetchGeoLocation = async (
  latitude: number,
  longitude: number
): Promise<AddressObj | undefined> => {
  try {
    const res = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (res.status !== 200) {
      throw new Error(`can't fetch the location, Status: ${res.status}`);
    }
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
