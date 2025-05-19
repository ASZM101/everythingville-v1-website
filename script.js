// var ground = document.getElementById("ground");
// // var groundDisplay = getComputedStyle(ground).display;
// var vw = window.innerWidth;
// if (vw < 1001) {
//     ground.src = "https://aae9228e-9533-475a-b38e-0363f14d457c.id.repl.co/images/ground-vertical.png";
//   // ground.style.display = "none";
//   // groundDisplay = "none";
// }
// if (vw > 1000) {
//   ground.src = "https://aae9228e-9533-475a-b38e-0363f14d457c.id.repl.co/images/ground-horizontal.png";
//   // ground.style.display = "block";
//   // groundDisplay = "block";
// }

var nav = document.getElementById("nav");
function compactNav() {
  if (nav.className == "nav") {
    nav.className += " responsive";
    nav.style.height = "650px";
  }
  else {
    nav.className = "nav";
    nav.style.height = "60px";
  }
}

var cityHallModal = document.getElementById("cityHallModal");
var cityHallBuilding = document.getElementById("cityHallBuilding");
var cityHallClose = document.getElementById("cityHallClose");
function cityHallBuildingFunc() {
  cityHallModal.style.display = "block";
}
function cityHallCloseFunc() {
  cityHallModal.style.display = "none";
}

var homeModal = document.getElementById("homeModal");
var homeBuilding = document.getElementById("homeBuilding");
var homeClose = document.getElementById("homeClose");
function homeBuildingFunc() {
  homeModal.style.display = "block";
}
function homeCloseFunc() {
  homeModal.style.display = "none";
}

var schoolModal = document.getElementById("schoolModal");
var schoolBuilding = document.getElementById("schoolBuilding");
var schoolClose = document.getElementById("schoolClose");
function schoolBuildingFunc() {
  schoolModal.style.display = "block";
}
function schoolCloseFunc() {
  schoolModal.style.display = "none";
}

var restaurantModal = document.getElementById("restaurantModal");
var restaurantBuilding = document.getElementById("restaurantBuilding");
var restaurantClose = document.getElementById("restaurantClose");
function restaurantBuildingFunc() {
  restaurantModal.style.display = "block";
}
function restaurantCloseFunc() {
  restaurantModal.style.display = "none";
}

var gymModal = document.getElementById("gymModal");
var gymBuilding = document.getElementById("gymBuilding");
var gymClose = document.getElementById("gymClose");
function gymBuildingFunc() {
  gymModal.style.display = "block";
}
function gymCloseFunc() {
  gymModal.style.display = "none";
}

var libraryModal = document.getElementById("libraryModal");
var libraryBuilding = document.getElementById("libraryBuilding");
var libraryClose = document.getElementById("libraryClose");
function libraryBuildingFunc() {
  libraryModal.style.display = "block";
}
function libraryCloseFunc() {
  libraryModal.style.display = "none";
}

var museumModal = document.getElementById("museumModal");
var museumBuilding = document.getElementById("museumBuilding");
var museumClose = document.getElementById("museumClose");
function museumBuildingFunc() {
  museumModal.style.display = "block";
}
function museumCloseFunc() {
  museumModal.style.display = "none";
}

var arcadeModal = document.getElementById("arcadeModal");
var arcadeBuilding = document.getElementById("arcadeBuilding");
var arcadeClose = document.getElementById("arcadeClose");
function arcadeBuildingFunc() {
  arcadeModal.style.display = "block";
}
function arcadeCloseFunc() {
  arcadeModal.style.display = "none";
}

var musicStoreModal = document.getElementById("musicStoreModal");
var musicStoreBuilding = document.getElementById("musicStoreBuilding");
var musicStoreClose = document.getElementById("musicStoreClose");
function musicStoreBuildingFunc() {
  musicStoreModal.style.display = "block";
}
function musicStoreCloseFunc() {
  musicStoreModal.style.display = "none";
}

var zooModal = document.getElementById("zooModal");
var zooBuilding = document.getElementById("zooBuilding");
var zooClose = document.getElementById("zooClose");
function zooBuildingFunc() {
  zooModal.style.display = "block";
}
function zooCloseFunc() {
  zooModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target.className == "modal") {
    event.target.style.display = "none";
  }
}

var journal = document.getElementById("journal");
var saveJournal = document.getElementById("saveJournal");
var resetJournal = document.getElementById("resetJournal");
function saveJournalFunc() {
  var journalLink = document.createElement("a");
  var journalContent = journal.value;
  var journalFile = new Blob([journalContent], { type: 'text/plain' });
  journalLink.href = URL.createObjectURL(journalFile);
  journalLink.download = "Everythingville-Journal.txt";
  journalLink.click();
  URL.revokeObjectURL(journalLink.href);
}
function resetJournalFunc() {
  journal.value = "";
}

var schoolSection = document.getElementById("schoolSection");
var math = document.getElementById("math");
var sci = document.getElementById("sci");
var ss = document.getElementById("ss");
var ela = document.getElementById("ela");
var goBackSchool = document.getElementById("goBackSchool");
function mathFunc() {
  schoolSection.innerHTML = '<p id="top"></p><h1>Financial Literacy</h1><hr><p>Financial literacy is a very important skill to have because it helps you better manage your money.</p><img src="https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?cs=srgb&dl=pexels-pixabay-47344.jpg&fm=jpg" class="schoolPics" alt="Money"><br><a href="#top"><button class="schoolArticles" id="goBackSchool" style="display:block" onclick="goBackSchoolFunc()">Go Back</button></a><br>';
}
function sciFunc() {
  schoolSection.innerHTML = '<p id="top"></p><h1>Giant Pandas</h1><hr><p>The giant panda is a type of mammal that is mostly found in the bamboo forests of southwestern China.</p><img src="https://media.istockphoto.com/id/1185211680/photo/giant-panda.jpg?b=1&s=170667a&w=0&k=20&c=oO696tDO_Al1U6augi46-2WdiqMDQOlbeTE_I4koBeU=" class="schoolPics" alt="Giant Panda"><br><a href="#top"><button class="schoolArticles" id="goBackSchool" style="display:block" onclick="goBackSchoolFunc()">Go Back</button></a><br>';
}
function ssFunc() {
  schoolSection.innerHTML = '<p id="top"></p><h1>Branches of Government</h1><hr><p>The United States government is made up of three different branches, and the powers of the federal government are divided among these branches to help limit and balance the power of the government.</p><img src="https://media.istockphoto.com/id/1049714130/photo/white-house.jpg?b=1&s=170667a&w=0&k=20&c=X4121qrhEcus_HquQNtoudY24A-jnRnPR1fJSWQTJy4=" class="schoolPics" alt="White House"><br><a href="#top"><button class="schoolArticles" id="goBackSchool" style="display:block" onclick="goBackSchoolFunc()">Go Back</button></a><br>';
}
function elaFunc() {
  schoolSection.innerHTML = '<p id="top"></p><h1>Parts of Speech</h1><hr><p>The parts of speech in the English language are used to classify words based on their roles in a sentence. Keep on reading to learn more about all the different parts of speech!</p><h3>Nouns</h3><p><b>Nouns</b> are one of the parts of speech. <i>People, places, things, and ideas</i> are all classified as nouns. There are also some specific types of nouns.</p><ul><li><b>Common nouns</b> are the <i>common names</i> of people, places, things, and ideas. Some examples of common nouns are a desk, school, and a computer.</li><li><b>Proper nouns</b> are <i>proper specific names</i> of people, places, things, and ideas, and these always have to be capitalized. Some examples of proper nouns are North America, Alexa, and Washington.</li><li><b>Pronouns</b> <i>replace the names</i> of common and proper nouns. Some examples of pronouns are he, she, and it.</li></ul><h3>Verbs</h3><p><b>Verbs</b> are another type of parts of speech. <i>Words that show action or a state of being</i> are all classified as verbs. Some examples of verbs that show action are sprint, whisper, and sing. Some examples of words that show state of being are is, am, and are. Verb phrases contain both a state of being and an action. An example of a verb phrase is in the sentence "I am going home." The verb phrase is "am going" because it contains both a state of being and an action.</p><p><strong><em>All sentences must have at least one noun and one verb in order to be considered a complete sentence.</em></strong></p><h3>Adjectives</h3><p><b>Adjectives</b> are also a type of parts of speech. <i>Words that describe nouns</i> are all classified as adjectives. Some examples of adjectives are beautiful, talented, and glorious.</p></p><h3>Adverbs</h3><p><b>Adverbs</b> are another one of the parts of speech. <i>Words that describe verbs or adjectives</i> are all classified as adverbs. Some examples of adverbs are quickly, very, and swiftly. Many adverbs end with the suffix "-ly," but there are some adverbs that do not end in "-ly," like seldom.</p></p><h3>Prepositions</h3><p><b>Prepositions</b> are one more type of parts of speech. <i>Words that tell when or where about a verb</i> are all classified as prepositions. Some examples of prepositions are over, around, and during. Prepositions are usually part of a prepositional phrase that includes a noun. An example of a prepositional phrase is in the sentence "I went into the classroom." The prepositional phrase is "into the classroom" because it has a preposition and a noun related to the preposition.</p></p><h3>Articles</h3><p><b>Articles</b> are the final type of parts of speech that will be mentioned in this article. <i>Words that introduce a noun</i> are all classified as articles. There are three articles in the English language: a, an, and the.</p><img src="https://lh3.googleusercontent.com/5uJWgeftSVPBiOGFS1NegoO-zFeq1oumPMxnMZrZEY_ZuFHOJYHImRyyKsqMFaCGvxYejnvPtLF97ODwcyUdQmZMZPMRhJmr2BwSJfxMov2CL7HKO0Qw2mFpnXu2Xn2Jo5Lnpo-4eQ=w2400" class="schoolPics" alt="Parts of Speech"><br><a href="#top"><button class="schoolArticles" id="goBackSchool" style="display:block" onclick="goBackSchoolFunc()">Go Back</button></a><br>';
}
function goBackSchoolFunc() {
  schoolSection.innerHTML = '<p id="top"></p><h1>Welcome to the School!</h1><hr><p>What would you like to learn today?</p><a href="#top"><button class="schoolArticles" id="math" onclick="mathFunc()">Mathematics</button></a><a href="#top"><button class="schoolArticles" id="sci" onclick="sciFunc()">Science</button></a><a href="#top"><button class="schoolArticles" id="ss" onclick="ssFunc()">Social Studies</button></a><a href="#top"><button class="schoolArticles" id="ela" onclick="elaFunc()">Language Arts</button></a><a href="#top"><button class="schoolArticles" id="goBackSchool" style="display:none" onclick="goBackSchoolFunc()">Go Back</button></a><br>';
}

var restaurantSection = document.getElementById("restaurantSection");
var breakfast = document.getElementById("breakfast");
var lunch = document.getElementById("lunch");
var dinner = document.getElementById("dinner");
var dessert = document.getElementById("dessert");
var goBackRestaurant = document.getElementById("goBackRestaurant");
function breakfastFunc() {
  restaurantSection.innerHTML = '<p id="top"></p><h1>Pancakes</h1><hr><h3>Ingredients</h3><ul><li>2 eggs</li><li></li></ul><img src="" class="restaurantPics" alt=""><a href="#top"><button class="recipes" id="goBackRestaurant" style="display:block" onclick="goBackRestaurantFunc()">Go Back</button></a><br>';
}
function lunchFunc() {
  restaurantSection.innerHTML = '<p id="top"></p><h1></h1><hr><p></p><img src="" class="restaurantPics" alt=""><a href="#top"><button class="recipes" id="goBackRestaurant" style="display:block" onclick="goBackRestaurantFunc()">Go Back</button></a><br>';
}
function dinnerFunc() {
  restaurantSection.innerHTML = '<p id="top"></p><h1></h1><hr><p></p><img src="" class="restaurantPics" alt=""><a href="#top"><button class="recipes" id="goBackRestaurant" style="display:block" onclick="goBackRestaurantFunc()">Go Back</button></a><br>';
}
function dessertFunc() {
  restaurantSection.innerHTML = '<p id="top"></p><h1></h1><hr><p></p><img src="" class="restaurantPics" alt=""><a href="#top"><button class="recipes" id="goBackRestaurant" style="display:block" onclick="goBackRestaurantFunc()">Go Back</button></a><br>';
}
function goBackRestaurantFunc() {
  restaurantSection.innerHTML = '<p id="top"></p><h1>Welcome to the Restaurant!</h1><hr><p>What would you like to make today?</p><a href="#top"><button class="recipes" id="breakfast" onclick="breakfastFunc()">Breakfast</button></a><a href="#top"><button class="recipes" id="lunch" onclick="lunchFunc()">Lunch</button><a href="#top"><button class="recipes" id="dinner" onclick="dinnerFunc()">Dinner</button></a><a href="#top"><button class="recipes" id="dessert" onclick="dessertFunc()">Dessert</button></a><a href="#top"><button class="recipes" id="goBackRestaurant" style="display:none" onclick="goBackRestaurantFunc()">Go Back</button></a><br>';
}