// med
const medMoon = document.getElementById("med-moon");
const medCloud = document.getElementById("med-cloud");
const medCastle = document.getElementById("med-castle");
const medPoem = document.getElementById("med-poem");
const medKnight = document.getElementById("med-knight");

// moon
medMoon.addEventListener('mouseenter', toggleMedMoonDark);
medMoon.addEventListener('mouseleave', toggleMedMoon)

function toggleMedMoonDark() {
    medCloud.classList.add("darken");
    medCastle.classList.add("darken");
    medPoem.classList.add("darken");
    medKnight.classList.add("darken");
}

function toggleMedMoon() {
    medCloud.classList.remove("darken");
    medCastle.classList.remove("darken");
    medPoem.classList.remove("darken");
    medKnight.classList.remove("darken");
}

// cloud
medCloud.addEventListener('mouseenter', toggleMedCloudDark);
medCloud.addEventListener('mouseleave', toggleMedCloud)

function toggleMedCloudDark() {
    medMoon.classList.add("darken");
    medCastle.classList.add("darken");
    medPoem.classList.add("darken");
    medKnight.classList.add("darken");
}

function toggleMedCloud() {
    medMoon.classList.remove("darken");
    medCastle.classList.remove("darken");
    medPoem.classList.remove("darken");
    medKnight.classList.remove("darken");
}

// castle
medCastle.addEventListener('mouseenter', toggleMedCastleDark);
medCastle.addEventListener('mouseleave', toggleMedCastle)

function toggleMedCastleDark() {
    medMoon.classList.add("darken");
    medCloud.classList.add("darken");
    medPoem.classList.add("darken");
    medKnight.classList.add("darken");
}

function toggleMedCastle() {
    medMoon.classList.remove("darken");
    medCloud.classList.remove("darken");
    medPoem.classList.remove("darken");
    medKnight.classList.remove("darken");
}

// poem
medPoem.addEventListener('mouseenter', toggleMedPoemDark);
medPoem.addEventListener('mouseleave', toggleMedPoem)

function toggleMedPoemDark() {
    medMoon.classList.add("darken");
    medCloud.classList.add("darken");
    medCastle.classList.add("darken");
    medKnight.classList.add("darken");
}

function toggleMedPoem() {
    medMoon.classList.remove("darken");
    medCloud.classList.remove("darken");
    medCastle.classList.remove("darken");
    medKnight.classList.remove("darken");
}

// knight
medKnight.addEventListener('mouseenter', toggleMedKnightDark);
medKnight.addEventListener('mouseleave', toggleMedKnight)

function toggleMedKnightDark() {
    medMoon.classList.add("darken");
    medCloud.classList.add("darken");
    medCastle.classList.add("darken");
    medPoem.classList.add("darken");
}

function toggleMedKnight() {
    medMoon.classList.remove("darken");
    medCloud.classList.remove("darken");
    medCastle.classList.remove("darken");
    medPoem.classList.remove("darken");
}