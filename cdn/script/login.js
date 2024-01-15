var username;
function login() {
  username = document.getElementById("username").value
  var password = document.getElementById("password").value
  if (username === "espmo" && password === "espenm74") {
    document.getElementById("authentication").style.display = "none"
    document.getElementById("mfa-code").style.display = "block"
  }
  else if (username === "semo3108" && password === "SebastianFun") {
    document.getElementById("authentication").style.display = "none"
    document.getElementById("mfa-code").style.display = "block"
  }
  else {
    console.error("DOM-LoginFail: The username or password was not valid or existed since now. Try refreshing or asking JS Inc?")
    document.getElementById("status").innerHTML = "❌Ugyldig brukernavn eller passord. Kontakt JS for hjelp!"
  }
}
function mfalogin() {
    var mfacode = document.getElementById("mfacode").value
    if (mfacode === "762906") {
      // var userdisplay = prompt("Heisann!\nVi beklager, vi glemte navnet ditt 😅\nKunne du sagt hva du het?")
      window.opener.callback7ui34tq78op93dx4top9h7n879opd34bht8bpg8scr5gb79o34(username)
      document.getElementById("mfa-code").style.display = "none"
      document.getElementById("authorized").style.display = "block"
    }
    else {
      alert("Brukernavnet eller passordet er ugyldig.\nVennligst prøv igjen, eller kontakt JS.")
    }
  }
/* Old code, out of support:
setTimeout(function() {
  var temp = document.getElementById("loader")
  temp.style.display = "none";
  var date = document.getElementById("first")
  date.style.display = "block";
}, 4000)
function passtoggle() {
  var x = document.getElementById("username");
  if (x.type === "password") {
    x.type = "username";
  } else {
    x.type = "password";
  }
}
function failsound() {
  var audio = new Audio("https://cdn.glitch.global/7a69f1e4-6084-4750-99fc-6e1dbae229fa/fail.mp3?v=1700215852031");
  audio.play();
  setTimeout(function() {
    alert("Brukernavnet er ugyldig, eller du har ikke koblet til Internett.\nPrøv igjen, eller kontakt JS.")
  }, 2000)
}
function login() {
  var username = document.getElementById("username").value
  if (username === "semo3108") {
      auth(username)
  }
  else if (username === "caars") {
      auth(username)
  }
    else if (username === "larsboi") {
      auth(username)
  }
  else {
    failsound()
  }
}
function auth(handler) {
  var displayname = prompt("Skriv ditt navn for å velge for innlogging. (påvirker ikke innloggingen)")
  var token = prompt("Skriv din token. (⚠!SKJUL DIN TOKEN, DEN VISES!⚠)")
  if (handler === "semo3108" && token === "lm40qm4b83bwap") {
    window.opener.callbacku834t9834t9u845thu8(displayname)
    window.close()
    location.href="authorized.html"
  }
  else if (handler === "caars" && token === "lm40qm4b83bwap") {
    window.opener.callbacku834t9834t9u845thu8(displayname)
    window.close()
    location.href="authorized.html"
  }
  else {
      var audio = new Audio("https://cdn.glitch.global/7a69f1e4-6084-4750-99fc-6e1dbae229fa/fail.mp3?v=1700215852031");
  audio.play();
  setTimeout(function() {
    alert("Informasjonen er ugyldig for bruker " + username + "\nPrøv igjen, eller kontakt JS.")
  }, 2000)
  }
}
*/