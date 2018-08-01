window.onload = function () {
    //copyright
    document.getElementById("copyright").innerHTML = "All Rights Reserved. Copyright © " + new Date().getFullYear();

    //Address shorthand
    var aboutImage = document.getElementById("about-image");
    var closeBtn = document.querySelector(".close-btn");
    var homeContent = document.getElementById('home-contents');
    var fest18Content = document.getElementById('fest18-contents');
    var defenceContent = document.getElementById('defence-contents');
    var shredContent = document.getElementById('shred-contents');
    var fosteringContent = document.getElementById('fostering-contents');
    var fest16Content = document.getElementById('fest16-contents');
    var contactContent = document.getElementById('contact-contents');

    var contactBtn = document.getElementById('contact-btn');
    var mobMenuBtn = document.getElementById('mob-works-btn');
    var mobMenuContent = document.getElementById('mob-works-menu-contents');

    //close fade out
    document.querySelector(".close-btn").onclick = function () {
        this.classList.remove("close-btn-active");
        aboutImage.style.backgroundImage = 'url("./styles/img/bg.jpg")';

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');
        homeContent.classList.add('active');

        mobMenuBtn.classList.remove('mob-btn-active');

    };

    //li buttons
    document.getElementById("fest18-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/forest-grass-green.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        fest18Content.classList.add('active');
        fest18Content.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("defence-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/world-blue.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        defenceContent.classList.add('active');
        defenceContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("shred-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/snow-white.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        shredContent.classList.add('active');
        shredContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("fostering-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/belly-orange.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        fosteringContent.classList.add('active');
        fosteringContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("fest16-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/festable-desat.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        fest16Content.classList.add('active');
        fest16Content.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    contactBtn.onclick = function () {
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');
        contactContent.classList.add('active');
        contactContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    }

    //mobile responsivity buttons
    mobMenuBtn.onclick = function () {
        closeBtn.classList.add("close-btn-active");
        // document.querySelector(".container-about").style.background = "#828282";

        this.classList.add('mob-btn-active');

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        mobMenuContent.classList.add('active');
        mobMenuContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');
    }

    document.getElementById('mob-home-container').onclick = function () {
        closeBtn.classList.remove("close-btn-active");
        aboutImage.style.backgroundImage = 'url("./styles/img/bg.jpg")';

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');
        homeContent.classList.add('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    }

    //temporary responsivity shared button fix

    var mobfest18Content = document.getElementById('fest18-contents');
    var mobdefenceContent = document.getElementById('defence-contents');
    var mobshredContent = document.getElementById('shred-contents');
    var mobfosteringContent = document.getElementById('fostering-contents');
    var mobfest16Content = document.getElementById('fest16-contents');

    document.getElementById("mob-fest18-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/forest-grass-green.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        mobfest18Content.classList.add('active');
        mobfest18Content.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("mob-defence-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/world-blue.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        mobdefenceContent.classList.add('active');
        mobdefenceContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("mob-shred-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/snow-white.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        mobshredContent.classList.add('active');
        mobshredContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("mob-fostering-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/belly-orange.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        mobfosteringContent.classList.add('active');
        mobfosteringContent.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

    document.getElementById("mob-fest16-container").onclick = function () {
        aboutImage.style.backgroundImage = 'url("./styles/img/li/festable-desat.jpg")';
        closeBtn.classList.add("close-btn-active");

        document.querySelector('.active').classList.add('hidden');
        document.querySelector('.active').classList.remove('active');

        mobfest16Content.classList.add('active');
        mobfest16Content.classList.remove('hidden');
        homeContent.classList.add('hidden');
        homeContent.classList.remove('active');

        mobMenuBtn.classList.remove('mob-btn-active');
    };

}


