import axios from 'axios';

export const getBooks = async () => {
  try {
    const res = await axios.get('https://api.itbook.store/1.0/new');
    console.log(res.data);
    if (res.status !== 200) {
      throw new Error(`can't fetch the required book, Status: ${res.status}`);
    } else {
      return res;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
