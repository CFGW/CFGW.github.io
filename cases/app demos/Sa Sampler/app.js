// TODO:
    // I could set the keybinding switch statements to be dependant on a condition so that querty can play the entire sampler....
    // refactor listener methods if possible to be more concise (maybe workaround for 'e.target', or 'this' references)
    // consider refactoring keybindings to be applied via range, rather than individually
document.addEventListener('DOMContentLoaded', () => {
    const pads = document.querySelectorAll('.pad')
    const allAudio = document.querySelectorAll('audio')

    const a1 = document.getElementById('a1').childNodes[1];
    const a2 = document.getElementById('a2').childNodes[1];
    const a3 = document.getElementById('a3').childNodes[1];
    const a4 = document.getElementById('a4').childNodes[1];
    const a5 = document.getElementById('a5').childNodes[1];
    const a6 = document.getElementById('a6').childNodes[1];
    const a7 = document.getElementById('a7').childNodes[1];
    const a8 = document.getElementById('a8').childNodes[1];
    const b1 = document.getElementById('b1').childNodes[1];
    const b2 = document.getElementById('b2').childNodes[1];
    const b3 = document.getElementById('b3').childNodes[1];
    const b4 = document.getElementById('b4').childNodes[1];
    const b5 = document.getElementById('b5').childNodes[1];
    const b6 = document.getElementById('b6').childNodes[1];
    const b7 = document.getElementById('b7').childNodes[1];
    const b8 = document.getElementById('b8').childNodes[1];
    const c1 = document.getElementById('c1').childNodes[1];
    const c2 = document.getElementById('c2').childNodes[1];
    const c3 = document.getElementById('c3').childNodes[1];
    const c4 = document.getElementById('c4').childNodes[1];
    const c5 = document.getElementById('c5').childNodes[1];
    const c6 = document.getElementById('c6').childNodes[1];
    const c7 = document.getElementById('c7').childNodes[1];
    const c8 = document.getElementById('c8').childNodes[1];
    const d1 = document.getElementById('d1').childNodes[1];
    const d2 = document.getElementById('d2').childNodes[1];
    const d3 = document.getElementById('d3').childNodes[1];
    const d4 = document.getElementById('d4').childNodes[1];
    const d5 = document.getElementById('d5').childNodes[1];
    const d6 = document.getElementById('d6').childNodes[1];
    const d7 = document.getElementById('d7').childNodes[1];
    const d8 = document.getElementById('d8').childNodes[1];
    const e1 = document.getElementById('e1').childNodes[1];
    const e2 = document.getElementById('e2').childNodes[1];
    const e3 = document.getElementById('e3').childNodes[1];
    const e4 = document.getElementById('e4').childNodes[1];
    const e5 = document.getElementById('e5').childNodes[1];
    const e6 = document.getElementById('e6').childNodes[1];
    const e7 = document.getElementById('e7').childNodes[1];
    const e8 = document.getElementById('e8').childNodes[1];
    const f1 = document.getElementById('f1').childNodes[1];
    const f2 = document.getElementById('f2').childNodes[1];
    const f3 = document.getElementById('f3').childNodes[1];
    const f4 = document.getElementById('f4').childNodes[1];
    const f5 = document.getElementById('f5').childNodes[1];
    const f6 = document.getElementById('f6').childNodes[1];
    const f7 = document.getElementById('f7').childNodes[1];
    const f8 = document.getElementById('f8').childNodes[1];
    const g1 = document.getElementById('g1').childNodes[1];
    const g2 = document.getElementById('g2').childNodes[1];
    const g3 = document.getElementById('g3').childNodes[1];
    const g4 = document.getElementById('g4').childNodes[1];
    const g5 = document.getElementById('g5').childNodes[1];
    const g6 = document.getElementById('g6').childNodes[1];
    const g7 = document.getElementById('g7').childNodes[1];
    const g8 = document.getElementById('g8').childNodes[1];
    const h1 = document.getElementById('h1').childNodes[1];
    const h2 = document.getElementById('h2').childNodes[1];
    const h3 = document.getElementById('h3').childNodes[1];
    const h4 = document.getElementById('h4').childNodes[1];
    const h5 = document.getElementById('h5').childNodes[1];
    const h6 = document.getElementById('h6').childNodes[1];
    const h7 = document.getElementById('h7').childNodes[1];
    const h8 = document.getElementById('h8').childNodes[1];

    const modifierVol = document.getElementById('right1');
    const modifierQuadChoke = document.getElementById('right2');
    const modifierChoke = document.getElementById('right3');
    const modifierMute = document.getElementById('right4');
    const modifierStop = document.getElementById('right5');
    const modifier6 = document.getElementById('right6');
    const modifier7 = document.getElementById('right7');
    const modifierMenu = document.getElementById('right8');

    const q1 = document.querySelectorAll('.quad1');
    const q2 = document.querySelectorAll('.quad2');
    const q3 = document.querySelectorAll('.quad3');
    const q4 = document.querySelectorAll('.quad4');

    const stopIcon = document.querySelector('.stop-icon');
    const muteIcon = document.querySelector('.mute-icon');
    const chokeIcon = document.querySelector('.choke-icon');
    const quadChokeIcon = document.querySelector('.qchoke-icon');
    const menuIcon = document.querySelector('.menu-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    const sampleMenu = document.querySelector('.sample-menu-container');
    const closeMenu = document.getElementById('menu-close');

    var choke = false;


    for (i = 0; i < pads.length; i++) {
        var pad = pads[i]
        pad.addEventListener('click', (e) => {
            e.preventDefault();
            if (choke === false) {
                stopThisAudio(e);
            } else {
                stopAllAudio();
            }
            if (e.target.hasChildNodes() &&
                e.target.childNodes[1].tagName === "AUDIO") {
                e.target.childNodes[1].play();
            }
            if (modifierQuadChoke.classList.contains("light-grey")) {
                var cls = e.target.classList;
                switch (true) {
                    case cls.contains('quad1'):
                        for (i = 0; i < q1.length; i++) {
                            q1[i].childNodes[1].pause();
                            q1[i].childNodes[1].currentTime = 0;
                        }
                        break;
                    case cls.contains('quad2'):
                        for (i = 0; i < q2.length; i++) {
                            q2[i].childNodes[1].pause();
                            q2[i].childNodes[1].currentTime = 0;
                        }
                        break;
                    case cls.contains('quad3'):
                        for (i = 0; i < q3.length; i++) {
                            q3[i].childNodes[1].pause();
                            q3[i].childNodes[1].currentTime = 0;
                        }
                        break;
                    case cls.contains('quad4'):
                        for (i = 0; i < q4.length; i++) {
                            q4[i].childNodes[1].pause();
                            q4[i].childNodes[1].currentTime = 0;
                        }
                        break;
                }
            }
            padLightClick(e)
        }, false);
    }



    // if choke true stop all audio
    function stopAllAudio() {
        allAudio.forEach(function (audio) {
            audio.pause();
            audio.currentTime = 0;
        })
    }
    // else stop this audio
    function stopThisAudio(e) {
        if (e.target.childNodes[1] === "AUDIO") {
            e.target.childNodes[1].pause();
            e.target.childNodes[1].currentTime = 0;
        }

    }

    // key events
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        var key = e.key || e.keyCode;
        switch (e.keyCode) {
            // quad1 START
            case 112: //F1
                p = a1
                padKeyExec()
                break;
            case 113: //F2
                p = a2
                padKeyExec()
                break;
            case 114: //F3
                p = a3
                padKeyExec()
                break;
            case 115: //F4
                p = a4
                padKeyExec()
                break;
            case 116: //F5
                p = b1
                padKeyExec()
                break;
            case 117: //F6
                p = b2
                padKeyExec()
                break;
            case 118: //F7
                p = b3
                padKeyExec()
                break;
            case 119: //F8
                p = b4
                padKeyExec()
                break;
            case 120: //F9
                p = c1
                padKeyExec()
                break;
            case 121: //F10
                p = c2
                padKeyExec()
                break;
            case 122: //F11
                p = c3
                padKeyExec()
                break;
            case 123: //F12
                p = c4
                padKeyExec()
                break;
            case 124: //F13
                p = d1
                padKeyExec()
                break;
            case 125: //F14
                p = d2
                padKeyExec()
                break;
            case 126: //F15
                p = d3
                padKeyExec()
                break;
            case 127: //F16
                p = d4
                padKeyExec()
                break;
            // quad1 END
            // quad2 START
            case 111: //'/'
                p = a5
                padKeyExec()
                break;
            case 106: //'*'
                p = a6
                padKeyExec()
                break;
            case 109: //'-'
                p = a7
                padKeyExec()
                break;
            case 107: //'+'
                p = a8
                padKeyExec()
                break;
            case 33: //Num9
                p = b5
                padKeyExec()
                break;
            case 39: //Num6
                p = b6
                padKeyExec()
                break;
            case 34: //Num3
                p = b7
                padKeyExec()
                break;
            case 46: //NumDecimal
                p = b8
                padKeyExec()
                break;
            case 38: //Num8
                p = c5
                padKeyExec()
                break;
            case 12: //Num5
                p = c6
                padKeyExec()
                break;
            case 40: //Num2
                p = c7
                padKeyExec()
                break;
            case 45: //Num0
                p = c8
                padKeyExec()
                break;
            case 36: //Num7
                p = d5
                padKeyExec()
                break;
            case 37: //Num4
                p = d6
                padKeyExec()
                break;
            case 35: //Num1
                p = d7
                padKeyExec()
                break;
            case 128: //F17
                p = d8
                padKeyExec()
                break;
            // quad2 END
            // quad3 START
            case 90: //z
                p = h1
                padKeyExec()
                break;
            case 88: //x
                p = h2
                padKeyExec()
                break;
            case 67: //c
                p = h3
                padKeyExec()
                break;
            case 86: //v
                p = h4
                padKeyExec()
                break;
            case 65: //a
                p = g1
                padKeyExec()
                break;
            case 83: //s
                p = g2
                padKeyExec()
                break;
            case 68: //d
                p = g3
                padKeyExec()
                break;
            case 70: //f
                p = g4
                padKeyExec()
                break;
            case 81: //q
                p = f1
                padKeyExec()
                break;
            case 87: //w
                p = f2
                padKeyExec()
                break;
            case 69: //e
                p = f3
                padKeyExec()
                break;
            case 82: //r
                p = f4
                padKeyExec()
                break;
            case 49: //1
                p = e1
                padKeyExec()
                break;
            case 50: //2
                p = e2
                padKeyExec()
                break;
            case 51: //3
                p = e3
                padKeyExec()
                break;
            case 52: //4
                p = e4
                padKeyExec()
                break;
            // quad3 END
            // quad4 START
            case 66: //b
                p = h5
                padKeyExec()
                break;
            case 78: //n
                p = h6
                padKeyExec()
                break;
            case 77: //m
                p = h7
                padKeyExec()
                break;
            case 188: //,
                p = h8
                padKeyExec()
                break;
            case 71: //g
                p = g5
                padKeyExec()
                break;
            case 72: //h
                p = g6
                padKeyExec()
                break;
            case 74: //j
                p = g7
                padKeyExec()
                break;
            case 75: //k
                p = g8
                padKeyExec()
                break;
            case 84: //t
                p = f5
                padKeyExec()
                break;
            case 89: //y
                p = f6
                padKeyExec()
                break;
            case 85: //u
                p = f7
                padKeyExec()
                break;
            case 73: //i
                p = f8
                padKeyExec()
                break;
            case 53: //5
                p = e5
                padKeyExec()
                break;
            case 54: //6
                p = e6
                padKeyExec()
                break;
            case 55: //7
                p = e7
                padKeyExec()
                break;
            case 56: //8
                p = e8
                padKeyExec()
                break;
            // quad4 END
            // modifiers
            case 13: //Enter(STOP)
                modifierStop.classList.add("light-grey")
                document.querySelector('.stop-icon').classList.add("grey")
                setTimeout(() => {
                    modifierStop.classList.remove("light-grey")
                    document.querySelector('.stop-icon').classList.remove("grey")
                }, 500)
                stopAllAudio();
                break;
            case 222: //'(MUTE)
                modifierMute.classList.toggle("light-grey");
                document.querySelector('.mute-icon').classList.toggle("grey")
                // functionality
                allAudio.forEach(function (audio) {
                    if (audio.muted === true) {
                        audio.muted = false
                    } else {
                        audio.muted = true
                    }
                })
                break;
            case 186: //;(CHOKE)
                modifierChoke.classList.toggle("light-grey")
                document.querySelector('.choke-icon').classList.toggle("grey")
                if (choke === true) {
                    choke = false
                } else {
                    choke = true
                }
                break;
            case 76: //l(QCHOKE)
                modifierQuadChoke.classList.toggle("light-grey")
                document.querySelector('.qchoke-icon').classList.toggle("grey")
                if (modifierQuadChoke.classList.contains("light-grey")) {
                    var cls = p.parentNode.classList;
                    switch (true) {
                        case cls.contains('quad1'):
                            for (i = 0; i < q1.length; i++) {
                                q1[i].childNodes[1].pause();
                                q1[i].childNodes[1].currentTime = 0;
                            }
                            break;
                        case cls.contains('quad2'):
                            for (i = 0; i < q2.length; i++) {
                                q2[i].childNodes[1].pause();
                                q2[i].childNodes[1].currentTime = 0;
                            }
                            break;
                        case cls.contains('quad3'):
                            for (i = 0; i < q3.length; i++) {
                                q3[i].childNodes[1].pause();
                                q3[i].childNodes[1].currentTime = 0;
                            }
                            break;
                        case cls.contains('quad4'):
                            for (i = 0; i < q4.length; i++) {
                                q4[i].childNodes[1].pause();
                                q4[i].childNodes[1].currentTime = 0;
                            }
                            break;
                    }
                }
                break;
        }
    })

    // lighting function
    function padLightClick(e) {
        if (e.target.hasChildNodes()) {
            e.target.childNodes[1].onplay = function () {
                var cls = e.target.classList;
                switch (true) {
                    case cls.contains('quad1'):
                        e.target.classList.add('red');
                        break;
                    case cls.contains('quad2'):
                        e.target.classList.add('blue');
                        break;
                    case cls.contains('quad3'):
                        e.target.classList.add('green');
                        break;
                    case cls.contains('quad4'):
                        e.target.classList.add('yellow');
                        break;
                }
            }
            e.target.childNodes[1].onended = function () {
                var cls = e.target.classList;
                switch (true) {
                    case cls.contains('quad1'):
                        e.target.classList.remove('red');
                        break;
                    case cls.contains('quad2'):
                        e.target.classList.remove('blue');
                        break;
                    case cls.contains('quad3'):
                        e.target.classList.remove('green');
                        break;
                    case cls.contains('quad4'):
                        e.target.classList.remove('yellow');
                        break;
                }
            }
            e.target.childNodes[1].onpause = function () {
                var cls = e.target.classList;
                switch (true) {
                    case cls.contains('quad1'):
                        e.target.classList.remove('red');
                        break;
                    case cls.contains('quad2'):
                        e.target.classList.remove('blue');
                        break;
                    case cls.contains('quad3'):
                        e.target.classList.remove('green');
                        break;
                    case cls.contains('quad4'):
                        e.target.classList.remove('yellow');
                        break;
                }
            }
        }

    }
    function padLightKey() {
        p.onplay = function () {
            var cls = this.parentNode.classList;
            switch (true) {
                case cls.contains('quad1'):
                    this.parentNode.classList.add('red');
                    break;
                case cls.contains('quad2'):
                    this.parentNode.classList.add('blue');
                    break;
                case cls.contains('quad3'):
                    this.parentNode.classList.add('green');
                    break;
                case cls.contains('quad4'):
                    this.parentNode.classList.add('yellow');
                    break;
            }
        }
        p.onended = function () {
            var cls = this.parentNode.classList;
            switch (true) {
                case cls.contains('quad1'):
                    this.parentNode.classList.remove('red');
                    break;
                case cls.contains('quad2'):
                    this.parentNode.classList.remove('blue');
                    break;
                case cls.contains('quad3'):
                    this.parentNode.classList.remove('green');
                    break;
                case cls.contains('quad4'):
                    this.parentNode.classList.remove('yellow');
                    break;

            }
        }
        p.onpause = function () {
            var cls = this.parentNode.classList;
            switch (true) {
                case cls.contains('quad1'):
                    this.parentNode.classList.remove('red');
                    break;
                case cls.contains('quad2'):
                    this.parentNode.classList.remove('blue');
                    break;
                case cls.contains('quad3'):
                    this.parentNode.classList.remove('green');
                    break;
                case cls.contains('quad4'):
                    this.parentNode.classList.remove('yellow');
                    break;

            }
        }
    }
    // audio and lighting execution for keypress
    function padKeyExec() {
        if (modifierQuadChoke.classList.contains("light-grey")) {
            var cls = p.parentNode.classList;
            switch (true) {
                case cls.contains('quad1'):
                    for (i = 0; i < q1.length; i++) {
                        q1[i].childNodes[1].pause();
                        q1[i].childNodes[1].currentTime = 0;
                    }
                    break;
                case cls.contains('quad2'):
                    for (i = 0; i < q2.length; i++) {
                        q2[i].childNodes[1].pause();
                        q2[i].childNodes[1].currentTime = 0;
                    }
                    break;
                case cls.contains('quad3'):
                    for (i = 0; i < q3.length; i++) {
                        q3[i].childNodes[1].pause();
                        q3[i].childNodes[1].currentTime = 0;
                    }
                    break;
                case cls.contains('quad4'):
                    for (i = 0; i < q4.length; i++) {
                        q4[i].childNodes[1].pause();
                        q4[i].childNodes[1].currentTime = 0;
                    }
                    break;
            }
        }
        if (choke === false) {
            p.pause();
            p.currentTime = 0;
        } else {
            stopAllAudio();
        }
        p.play();
        padLightKey();
    }

    // global stop modifier
    modifierStop.addEventListener('click', globalStop)
    function globalStop() {
        modifierStop.classList.add("light-grey")
        stopIcon.classList.add("grey")
        setTimeout(() => {
            modifierStop.classList.remove("light-grey")
            stopIcon.classList.remove("grey")
        }, 500)
        stopAllAudio();
    }
    // global mute modifier
    modifierMute.addEventListener('click', globalMute)
    function globalMute() {
        // visual reference
        modifierMute.classList.toggle("light-grey");
        muteIcon.classList.toggle("grey")
        // functionality
        allAudio.forEach(function (audio) {
            if (audio.muted === true) {
                audio.muted = false
            } else {
                audio.muted = true
            }
        })
    }
    // global choke modifier
    modifierChoke.addEventListener('click', globalChoke)
    function globalChoke() {
        modifierChoke.classList.toggle("light-grey")
        chokeIcon.classList.toggle("grey")
        if (choke === true) {
            choke = false
        } else {
            choke = true
        }
    }
    // quad choke modifier
    modifierQuadChoke.addEventListener('click', quadChoke)
    function quadChoke() {
        modifierQuadChoke.classList.toggle("light-grey")
        quadChokeIcon.classList.toggle("grey")
        // attempt: modifier if statement in pad click functionality 
    }
    // global volume modifier
    let feedbackVol = document.getElementById('feedback-volume');
    let x,
        y,
        deg = 0,
        startX,
        startY,
        active = false
    modifierVol.addEventListener('mousedown', function (e) {
        active = true;
        startX = e.clientX;
        startY = e.clientY;
    })
    window.addEventListener('mouseup', function (e) {
        if (active) {
            active = false;
        }
    })
    window.addEventListener('mousemove', function (e) {
        if (active) {
            let diffX = e.clientX - startX;
            let diffY = e.clientY - startY;
            let delta = Math.abs(diffX) > Math.abs(diffY) ? -diffX : diffY
            deg = (Math.round(-delta / 15) * 15)
            if (deg <= 0 && deg >= -150) {
                modifierVol.style.transform = `rotate(${deg}deg)`
                feedbackVol.style.transform = `rotate(${-deg}deg)`
                feedbackVol.innerHTML = (1 + deg / 150).toFixed(1)
                allAudio.forEach(function (audio) {
                    audio.volume = 1 + deg / 150
                })
            }
        }
    })

    // sample menu
    modifierMenu.addEventListener('click', function () {
        modifierMenu.classList.add("light-grey")
        menuIcon.classList.add("grey")
        menuIcon.style.transform = "rotate(-45deg)"
        menuCloseIcon.style.transform = "rotate(-45deg)";
        setTimeout(() => {
            modifierMenu.classList.remove("light-grey")
            menuIcon.classList.remove("grey")
            menuIcon.style.transform = "rotate(90deg)"
        }, 500)
        sampleMenu.style.visibility = "visible";
        sampleMenu.classList.add('sample-menu-open');
    })
    closeMenu.addEventListener('click', function () {
        sampleMenu.classList.remove('sample-menu-open');
        menuCloseIcon.style.transform = "rotate(90deg)";
        setTimeout(() => {
            sampleMenu.style.visibility = "hidden"
        }, 170)
    })
    // audio sample upload functionality
    const sampleFileSelects = document.querySelectorAll('.sample-file-select');
    const samples = document.querySelectorAll('audio');
    for (i = 0; i < sampleFileSelects.length; i++) {
        ((index) => {
            sampleFileSelects[i].addEventListener('change', function () {
                var files = this.files;
                samples[index].setAttribute('src', URL.createObjectURL(files[0]));
                samples[index].load();
            }, false)
        })(i)
    }
    // MIDI API
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess()
            .then(success, failure);
    }
    function success(midi) {
        var inputs = midi.inputs.values();
        // inputs is an Iterator
        for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
            // each time there is a midi message call the onMIDIMessage function
            input.value.onmidimessage = onMIDIMessage;
        }
    }
    function failure() {
        console.error('No access to your midi devices.')
    }
    function onMIDIMessage(message) {
        console.log(message.data)
        // pairing pad to pad
        if (message.data[0] === 144 && message.data[2] > 0) {
            // midi audio play
            allAudio.forEach((audio) => {
                if (audio.getAttribute("data-midi") == message.data[1]) {
                    if (choke === false) {
                        audio.pause();
                        audio.currentTime = '0'
                    } else {
                        stopAllAudio();
                    }
                    audio.play();
                    //midi lighting function
                    audio.onplay = function () {
                        var cls = this.parentNode.classList;
                        switch (true) {
                            case cls.contains('quad1'):
                                this.parentNode.classList.add('red');
                                break;
                            case cls.contains('quad2'):
                                this.parentNode.classList.add('blue');
                                break;
                            case cls.contains('quad3'):
                                this.parentNode.classList.add('green');
                                break;
                            case cls.contains('quad4'):
                                this.parentNode.classList.add('yellow');
                                break;
                        }
                    }
                    audio.onended = function () {
                        var cls = this.parentNode.classList;
                        switch (true) {
                            case cls.contains('quad1'):
                                this.parentNode.classList.remove('red');
                                break;
                            case cls.contains('quad2'):
                                this.parentNode.classList.remove('blue');
                                break;
                            case cls.contains('quad3'):
                                this.parentNode.classList.remove('green');
                                break;
                            case cls.contains('quad4'):
                                this.parentNode.classList.remove('yellow');
                                break;

                        }
                    }
                    audio.onpause = function () {
                        var cls = this.parentNode.classList;
                        switch (true) {
                            case cls.contains('quad1'):
                                this.parentNode.classList.remove('red');
                                break;
                            case cls.contains('quad2'):
                                this.parentNode.classList.remove('blue');
                                break;
                            case cls.contains('quad3'):
                                this.parentNode.classList.remove('green');
                                break;
                            case cls.contains('quad4'):
                                this.parentNode.classList.remove('yellow');
                                break;

                        }
                    }
                }
            })
        }
    }

})