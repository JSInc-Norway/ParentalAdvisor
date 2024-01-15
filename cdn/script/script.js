function authenticate() {
    alert("Heisann!\nDu er ikke logget inn. Hvis du er klar til å autentisere, gå videre.")
    window.open("./auth/js-parental.html")
}
function callback7ui34tq78op93dx4top9h7n879opd34bht8bpg8scr5gb79o34(usernameauth) {
    document.getElementById("start").style.display = "none";
    document.getElementById("progress").style.display = "block";
    localStorage.setItem("token", "a79o3ptbavb78iox3t4b8iaeg5r7ob78ioewfr47iyb8laefrhbuikregg789o3r4t");
    localStorage.setItem("username", usernameauth);
    setTimeout(function() {
        location.href = "meny.html"
    }, 10000)
}