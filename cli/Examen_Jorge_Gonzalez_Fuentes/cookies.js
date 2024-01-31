// Cookie example
document.cookie =
  "username= Jaime Garcia; expires=Thu, 30 Jan 2024 19:30:00 UTC; path=/";

// Crea o modifica una cookie transformando los días
function setCookieDay(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Crea o modifica una cookie completa
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    (expires == null ? "" : "; expires=" + expires.toUTCString()) +
    (path === null ? "" : "; path=" + path) +
    (domain == null ? "" : "; domain=" + domain) +
    (secure == null ? "" : "; secure");
}

// Devuelve el valor de una cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Comprueba si existe una cookie y la devuelve con un alert,
// en caso contrario la crea para que expire dentro de 365 días
function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookieDay("username", username, 365);
    }
  }
}
