var saat = 0;
var dakika = 0;
var saniye = 0;
var kronometreId;

function baslat() {
  if (!kronometreId) {
    kronometreId = setInterval(kronometreCalistir, 1000);
  }
}

function durdur() {
  clearInterval(kronometreId);
  kronometreId = null;
}

function sifirla() {
  durdur();
  saat = 0;
  dakika = 0;
  saniye = 0;
  guncelleKronometre();
}

function kronometreCalistir() {
  saniye++;
  if (saniye >= 60) {
    saniye = 0;
    dakika++;
    if (dakika >= 60) {
      dakika = 0;
      saat++;
    }
  }
  guncelleKronometre();
}

function guncelleKronometre() {
  var kronometreDiv = document.getElementById("kronometre");
  kronometreDiv.textContent =
    (saat < 10 ? "0" + saat : saat) +
    ":" +
    (dakika < 10 ? "0" + dakika : dakika) +
    ":" +
    (saniye < 10 ? "0" + saniye : saniye);
}

function tamEkran() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

