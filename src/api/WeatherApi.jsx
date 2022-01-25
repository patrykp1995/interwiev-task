import axios from "axios";

export const getWetherDetails = async (cityName) => {
  try {
    if (cityName) {
      const apiKey = "5f2cb8fbf205916750f4c1b9b77bca23";

      const apiURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&units=metric" +
        "&appid=" +
        apiKey;
      const { data } = await axios.get(apiURL, {});
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

//   const getWetherDetails = (cityName) => {
//     axios
//       .get(apiURL)
//       .then((res) => {
//         console.log("response", res.data);

//       })
//       .catch((err) => {
//         console.log("err", err);
//         console.log(errMsg);
//       });
//   };
