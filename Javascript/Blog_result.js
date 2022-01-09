// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDb_iD--XOR8NCE_XJQyPdNAroNcrigns",
    authDomain: "softrate-blogs.firebaseapp.com",
    projectId: "softrate-blogs",
    storageBucket: "softrate-blogs.appspot.com",
    messagingSenderId: "971036190553",
    appId: "1:971036190553:web:e1c0af8ac3242701414e48",
    measurementId: "G-YJNMG3MNGT"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//auth and storage variable
const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
    // local storage get Header


let title = localStorage.getItem("Blog Title")
console.log("Title : ", title)

// Authentication

var signIn = document.getElementById("Sign_In")
var signOut = document.getElementById("Sign_Out")
var btn_post = document.getElementById("btn_post")
var comments = document.getElementById("comments")
var user_input = document.getElementById("user_input")

console.log("INput", user_input.value);
console.log("Auth :::: ", auth)

// Sign In
signIn.addEventListener("click", (e) => {
    e.preventDefault()

    auth.signInWithPopup(provider)
        .then(res => {
            console.log("Auth Result :", res);
            setTimeout(() => {
                window.location.reload()
            }, 500)
        })
        .catch(err => {
            console.log("error in auth:", err.message)
        })
})

// Sign Out
signOut.addEventListener("click", (e) => {
    e.preventDefault()
    auth.signOut()
    setTimeout(() => {
        window.location.reload()
    }, 500)
})

// Getting data from Firebase
db.collection(title).orderBy("time", "desc").onSnapshot(snapshot => {
    get_data(snapshot.docs);
    console.log("snapshot.docs", snapshot.docs)
})

// Triggers when there is a change in authentication state (user -  sign in / sign out)
auth.onAuthStateChanged(user => {
    if (user) {
        signIn.innerHTML = `Welcome, ${user.displayName}`
        signOut.innerHTML = 'Sign Out'

        let user_name = user.displayName

        //----ADDING DATA TO FIREBASE
        let time = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()
        btn_post.addEventListener("click", (e) => {
            e.preventDefault()
            db.collection(title).add({
                cmmt: user_input.value,
                time: time,
                user: user_name
            })

            setTimeout(() => {
                window.location.reload()
            }, 2000)

        })

    } else {
        signIn.innerHTML = 'Sign In'
        btn_post.addEventListener("click", () => {
            alert("Sign In to Comment")
        })
    }
})

// Comment HTML

const get_data = (datas) => {
    console.log("data", datas)
    let html = ``

    datas.map(data => {
        let doc = data.data()
        html = `   
                <div class="comment-item py-2">
                    <div class="d-flex">
                        <div class="comment-content">
                            <div class="display-2 m-0">
                                <p>${doc.user}</p>
                                &nbsp;
                                &nbsp;
                                <p>${doc.time}</p>
                            </div>
                            <p class="title-secondary text-dark">
                            ${doc.cmmt}
                            </p>
                        </div>
                    </div>
                </div>
            `
        comments.innerHTML += html
    })
}


// Animation

let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function() {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})


new Masonry("#posts .grid", {
    itemSelector: '.grid-item',
    gutter: 20
});


new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },

    breakpoints: {
        '@0': {
            slidesPerView: 2
        },

        '@1.00': {
            slidesPerView: 3
        },

        '@1.25': {
            slidesPerView: 4
        },

        '@1.50': {
            slidesPerView: 5
        }
    }
})


window.onscroll = function() { myFunction() };


let navbar = document.getElementById("header");


let sticky = navbar.offsetTop;


function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}