const accounts = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        comment: "\“ I’ve been interested in coding for a while but " + 
        "never taken the jump, until now. I couldn’t recommend this " + 
        "course enough. I’m now in the job of my dreams and so " +
        "excited about the future. \”",
        photo: "images/image-tanya.jpg"
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        comment: "\“ If you want to lay the best foundation possible I’d recommend " + 
        "taking this course. The depth the instructors go into " + 
        "is incredible. I now feel so confident about starting " +
        "up as a professional developer. \”",
        photo: "images/image-john.jpg"
    }
];

let currentAccount = 0;
let accComment = document.getElementById("comment");
let accName = document.getElementById("name");
let accJob = document.getElementById("job");
let accPhoto = document.getElementById("profile");

document.getElementById("prev").addEventListener("click", previousAccount);
document.getElementById("next").addEventListener("click", nextAccount);

function previousAccount() {
    currentAccount--;
    if(currentAccount < 0) {
        currentAccount = accounts.length - 1;
    }
    updateAccount();
}

function nextAccount() {
    currentAccount++;
    if(currentAccount >= accounts.length) {
        currentAccount = 0;
    }
    updateAccount();
}

function updateAccount() {
    account = accounts[currentAccount];
    accComment.innerText = account.comment;
    accName.innerText = account.name;
    accJob.innerText = account.job;
    accPhoto.src = account.photo;
}