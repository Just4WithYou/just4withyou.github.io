//Rooms Image
room1 = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Ffirst_room.jpg?alt=media&token=10e10d70-0071-4464-b7a7-ff3ab43dcb89";
room2 = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Fsecond_room.jpg?alt=media&token=8de4b430-bf15-4141-91d5-7dd421f8ebcb";
room3 = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Fthird_room.jpg?alt=media&token=369f7795-9a2a-4bbb-b003-5d099162ab1f";
rooml = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Flast_room.jpg?alt=media&token=97e14df0-7166-40fb-9720-c7677e167d69";
roome = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Fevent_room.jpg?alt=media&token=4ba66059-5e72-4fd1-bb91-bed99fca35b5";

notfound = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Fnot_found.jpg?alt=media&token=f6c8dff1-b452-4a47-977d-0f98c29437f0";

conf = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Fconfirm.png?alt=media&token=0cdf2342-e642-4833-a0ed-0e3ede9e25f5";
con = "https://firebasestorage.googleapis.com/v0/b/just-with-you-e3d84.appspot.com/o/Rooms%2Fconfirm1%20-%20Copy.jpg?alt=media&token=01742626-a425-47ef-83f2-80695e210a00";

//room description
d1 = "ဒီ အခန်းလေးတွေကတော့ Couple Room Mini Projector အခန်းလေးတွေပဲဖြစ်ပါတယ်။ Projector နဲ့ ရုပ်ရှင်ဆန်ဆန်ကြည့်ချင်တယ်ဆိုတဲ့ Customer လေးတွေအတွက် သီးသန့် အခန်းလေးပဲဖြစ်ပါတယ်နော်။";
d2 = "2nd Mini အခန်းလေး‌ကတော့ Projector Mini Couple Room အမျိုးစားလေးပဲဖြစ်ပါတယ်နော်။ Sofa ထိုင်ခုံနဲ့မကြည့်ချင်ဘူး အောက်ထိုင်ခင်းလေးနဲ့ပဲ လွတ်လွတ်လပ်လပ် ထိုင်ပြီး Movie Date Chill လုပ်ချင်တဲ့ သူလေးတွေအတွက် အဆင်ပြေတဲ့ အခန်းလေးဖြစ်ပါတယ်နော်။";
d3 = "3rd Mini အခန်းလေးကတော့ Couple Room Mini Projector အခန်းလေးပဲဖြစ်ပါတယ်။ တစ်ခြားအခန်းတွေနဲ့တွဲထားတာမဟုတ်ပဲသီးသန့်ခွဲထားတဲ့အခန်းလေးပါ သီးသန့်ဖြစ်တာမို့ Sound Box လေးထည့်ပေးထားပါတယ်။";
d4 = "Just With You 💜 မှာ မင်မင် TV Room ကို Projector Roomလေးအသစ်ပြန်ဖန်တီးပေးထားလိုက်ပါတယ်နော် အခန်းအားလုံးက Projector Room တွေပဲဖြစ်သွားပြီနော် Android Box လေးနဲ့ဆိုတော့ YouTube ဖွင့်ပြီး သီချင်းလေးနဲ့ Chill မယ်ဆိုလဲ အဆင်ပြေပါတယ် 😶‍🌫️";
d5 = "💌 Event Room လေးကတော့  🎂 Birthday 🎉 Surprised 💕 Anniversary ဒီလိုပွဲလေးတွေကို ပြုလုပ်ပေးပါတယ်နော်။ Sofa 4ယောက်စာ ထည့်ပေးထားပြီး။ Max persons အနေနဲ့ 6ယောက်လောက်ဆန့်ပါတယ်နော်။"; 

// Sample JSON data (replace this with your own JSON data)
// { "name": "Saw Htoo", "room": "1", "phone": "0925" , "date": "10/01/2023", "time" : "2:00 - 4:00", "deposit" : ""},
const jsonData = [
    { "name": "Saw Htoo", "room": "1", "phone": "0925" , "date": "10/01/2023", "time" : "2:00 - 4:00", "deposit" : "", "movie" : "TOM and JERRY"},
    { "name": "SS", "room": "2", "phone": "0925" , "date": "10/03/2023", "time" : "10:00 - 12:00", "deposit" : "5000", "movie" : "HORROR MOVIES"},
    { "name": "Sa Shar Main", "room": "3", "phone": "0994" , "date": "15/01/2023", "time" : "9:00 - 12:00", "deposit" : "5000", "movie" : "ROMANCE"},
];

// var myInit = {  method : 'GET',
//                 headers : {"Content-type": "application/json; charset=UTF-8",},
//                 charset : "UTF-8",
//                 mode : 'no-cors',
//                 cache: 'default'};

// let myRequest = new Request("https://json.extendsclass.com/bin/229929c7c3b7", myInit);
// console.log(myRequest);
//     fetch(myRequest.url)
//         .then((resp) => resp.json())
//         .then((data) => console.log(data.dd));


document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.trim();
    // Filter results based on search input (you can customize this logic)
    const results = jsonData.filter(result => {
        searchphone = (result.phone.toLowerCase() == searchInput.toLowerCase()) ? true : false;
            return searchphone;
    });

    // Display search results in the dialog box
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if(results == false) {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${notfound}" alt="Not Found" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-danger">NOT FOUND 😶‍🌫️</h5>
                        <p class="card-text">Please Check Your Phone Number...</p>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.appendChild(card);
    }

    results.forEach(result => {
    //room switch 
        switch (result.room) {
            case "1":
                image = room1;
                rname = "First Mini";
                break;
            case "2":
                image = room2;
                rname = "Second Mini";
                break;
            case "3":
                image = room3;
                rname = "Third Mini";
                break;
            case "e":
                image = roome;
                rname = "Event Mini";
                break;
            case "l":
                image = rooml;
                rname = "Last Mini";
                break;
            default:
                image = "No value found";
        }

        de_conf = result.deposit == "" ? "😒 NOT CONFIRM" : "CONFIRMED!";
        co_conf = result.deposit == "" ? "btn btn-info" : "btn btn-success";

        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${image}" alt="${rname}" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${rname}</h5>
                        <p class="card-text">📅 ${result.date}</p>
                        <p class="card-text">📱 ${result.phone}</p>
                        <p class="card-text">⌚ ${result.time}</p>
                        <p class="card-text">🎞️ ${result.movie}</p>
                        <a class="${co_conf}">${result.deposit} ${de_conf}</a>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.appendChild(card);
    });

    // Show the dialog box
    $('#results-dialog').modal('show');
});

// Populate featured images below the search box

const featuredImages = [
    { title: 'First Mini', description: d1, image: room1 },
    { title: 'Second Mini', description: d2, image: room2 },
    { title: 'Third Mini', description: d3, image: room3 },
    { title: 'Last Mini', description: d4, image: rooml },
    { title: 'Event Mini', description: d5, image: roome }
];

const cardGrid = document.querySelector('.card-grid');

featuredImages.forEach(image => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =`
        <img src="${image.image}" class="card-img-top" alt="${image.title}">
        <div class="card-body">
            <h5 class="card-title">${image.title}</h5>
            <p class="card-text">${image.description}</p>
        </div>
    `;
    cardGrid.appendChild(card);
});
