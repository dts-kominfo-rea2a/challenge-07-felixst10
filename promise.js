const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan
const promiseOutput = async (penonton) => {
  try{
    const dataIXX = await promiseTheaterIXX();
    const dataVGC = await promiseTheaterVGC();

    const jumlahMarahAtauTidak = dataIXX.filter((allData) => {
      return allData.hasil == penonton;
    }).length +
    dataVGC.filter((allData) => {
      return allData.hasil == penonton;
    }).length;

    return jumlahMarahAtauTidak;
  } catch (err) 
  {console.log(err)};
}

module.exports = {
  promiseOutput,
};
