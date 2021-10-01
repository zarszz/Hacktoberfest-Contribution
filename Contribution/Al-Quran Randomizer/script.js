// calling API
const url = "https://api.banghasan.com/quran/format/json/acak";
const ayat = () => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((teks) => {
      let resultInfoNama = teks.surat.nama;
      let resultInfoArti = teks.surat.arti;
      let resultInfoNo = teks.surat.nomor;
      let resultArab = teks.acak.ar.teks;
      let resultIndo = teks.acak.id.teks;
      let resultDesk = teks.surat.keterangan;
      document.getElementById(
        "arab"
      ).innerHTML = `<div className="arab"> <h3>${resultArab}</h3></div>`;
      document.getElementById(
        "indo"
      ).innerHTML = `<div className="indo"> <h4>Artinya : <br> <i>${resultIndo}</i> </h4></div>`;
      document.getElementById(
        "desk"
      ).innerHTML = `<div className="desk"> <h5>Keterangan : <br> <i>${resultDesk}</i> </h5></div>`;
      document.getElementById(
        "info"
      ).innerHTML = `<h4>Surah ${resultInfoNama} (${resultInfoArti}) ayat ${resultInfoNo}</h4>`;
    })
    .catch((err) => console.log(err));
};
ayat();
