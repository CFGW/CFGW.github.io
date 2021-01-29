document.addEventListener('DOMContentLoaded', () => {
    const modifierTop = document.querySelector('.modifiers__top')
    const modifierBottom = document.querySelector('.modifiers__bottom')
    const refreshModifierBtn = document.querySelector('.shuffle-btn')
    const addCurseBtn = document.querySelector('.add-curse')
    const addBlessBtn = document.querySelector('.add-bless')
    const removeCurseBtn = document.querySelector('.remove-curse')
    const removeBlessBtn = document.querySelector('.remove-bless')
    const populateHandBtn = document.querySelector('.populate-hand-btn')
    const selectBtn = document.querySelectorAll('.select-btn')
    const discardBtn = document.querySelectorAll('.discard-btn')
    const lostBtn = document.querySelectorAll('.lost-btn')
    const selectedLeft = document.querySelector('.selected-cards__left')
    const selectedRight = document.querySelector('.selected-cards__right')
    const overlay = document.querySelector('.overlay')
    const overlayTitle = document.querySelector('.overlay h2')
    const closeMenuBtn = document.querySelectorAll('.menu-close')
    const discardMenu = document.querySelector('.discard-menu')
    const discardMenuBtn = document.querySelector('.discard-menu-btn')
    const charSheetMenu = document.querySelector('.char-sheet-menu')
    const charSheetMenuBtn = document.querySelector('.char-sheet-menu-btn')
    const conditions = document.querySelectorAll('.conditions')
    const activeConditions = document.querySelector('.active-conditions-container')
    const lvlBtnSub = document.querySelector('.lvl-sub')
    const lvlBtnAdd = document.querySelector('.lvl-add')
    const currentLvl = document.querySelector('.current-lvl')
    const hpBtnSub = document.querySelector('.hp-sub')
    const hpBtnAdd = document.querySelector('.hp-add')
    const currentHp = document.querySelector('.current-hp')
    const maxHp = document.querySelector('.max-hp')
    const xpBtnSub = document.querySelector('.xp-sub')
    const xpBtnAdd = document.querySelector('.xp-add')
    const currentXp = document.querySelector('.current-xp')
    const goldBtnSub = document.querySelector('.gold-sub')
    const goldBtnAdd = document.querySelector('.gold-add')
    const currentGold = document.querySelector('.current-gold')
    const discardContainerSpace = document.querySelectorAll('.discard-container-space')
    const discardRecoverBtn = document.querySelectorAll('.discard-recover-btn')
    const lostMenu = document.querySelector('.lost-menu')
    const lostMenuBtn = document.querySelector('.lost-menu-btn')
    const lostContainerSpace = document.querySelectorAll('.lost-container-space')
    const lostRecoverBtn = document.querySelectorAll('.lost-recover-btn')
    const cardMenu = document.querySelector('.card-menu')
    const cardMenuBtn = document.querySelector('.card-menu-btn')
    const cardsInHand = document.querySelectorAll('.cards-in-hand')
    const cardSpace = document.querySelectorAll('.card-space')
    const discardSpace = document.querySelector('.discard-space')
    const lostSpace = document.querySelector('.lost-space')
    const activeSpace = document.querySelectorAll('.active-space')
    const activeBtn = document.querySelectorAll('.active-btn')
    const flipBtn = document.querySelectorAll('.flip-btn')
    const cardContainerSpace = document.querySelectorAll('.card-container-space')
    const cardContainerViewer = document.querySelector('.card-container__viewer')
    const cardContainerListLength = document.getElementById('card-container__list-length')
    const cardMenuList = document.getElementById('card-container__array-list')
    const cardsArray = [
        '01-deflecting-blades.png', '02-corrupting-parasites.png', '03-hive-mind.png',
        '04-omniscient-assault.png', '05-death-march.png', '06-engulfing-stingers.png',
        '07-call-of-the-grave.png', '08-venomous-barbs.png', '09-scattered-defense.png',
        '10-swarming-minions.png', '11-the-storms-edge.png', '12-unstoppable-army.png',
        '13-grasping-advance.png', '14-tomb-of-the-immortal.png', '15-vampiric-tempest.png',
        '16-infest.png', '17-putrid-grubs.png', '18-sand-scyth.png', '19-sword-of-tenacity.png',
        '20-incubation.png', '21-bioluminescence.png', '22-bone-daggers.png',
        '23-prismatic-cyclone.png', '24-erosion.png', '25-solitary-horde.png',
        '26-sunstroke.png', '27-focused-scourge.png', '28-blood-drain.png',
        '29-wasteland.png', '30-oasis.png'
    ]
    const modifierArray = [
        // 'bs-heal-1-draw-again-01.png', 'bs-heal-1-draw-again-02.png', 'bs-heal-1-draw-again-03.png', 
        // 'bs-heal-1-draw-again-04.png','bs-plus-1-01.png', 'bs-plus-1-02.png', 'bs-plus-1-add-earth-01.png', 
        // 'bs-plus-1-add-light-01.png', 'bs-plus-1-add-night-01.png', 'bs-plus-1-add-poison-01.png', 
        // 'bs-plus-1-add-poison-02.png', 'bs-plus-1-add-wind-01.png', 'bs-plus-1-add-wound-01.png',
        // 'bs-plus-1-add-wound-02.png', 'bs-plus-2-add-muddle-01.png',

        'crit.png', 'minus-1-01.png', 'plus-0-01.png', 'plus-0-02.png',
        'plus-1-01.png', 'plus-1-02.png', 'plus-1-03.png', 'plus-1-04.png', 
        'plus-1-05.png', 'plus-2-01.png', 'skip.png',
        'bs-plus-1-add-wind-01.png', 'bs-plus-1-add-earth-01.png', 'bs-plus-1-add-light-01.png',
        'bs-plus-1-add-night-01.png', 'bs-heal-1-draw-again-01.png', 'bs-heal-1-draw-again-02.png',
        'bs-plus-1-add-wound-01.png', 'bs-plus-2-add-muddle-01.png', 'bs-plus-1-01.png', 'bs-plus-1-02.png',
        'bs-plus-1-add-poison-01.png', 'bs-heal-1-draw-again-03.png', 'bs-heal-1-draw-again-04.png'
    ]
    // STARTING MODIFIER ARRAY UNEDITED
    // const modifierArray = [
    //     // 'bs-heal-1-draw-again-01.png', 'bs-heal-1-draw-again-02.png', 'bs-heal-1-draw-again-03.png', 
    //     // 'bs-heal-1-draw-again-04.png','bs-plus-1-01.png', 'bs-plus-1-02.png', 'bs-plus-1-add-earth-01.png', 
    //     // 'bs-plus-1-add-light-01.png', 'bs-plus-1-add-night-01.png', 'bs-plus-1-add-poison-01.png', 
    //     // 'bs-plus-1-add-poison-02.png', 'bs-plus-1-add-wind-01.png', 'bs-plus-1-add-wound-01.png',
    //     // 'bs-plus-1-add-wound-02.png', 'bs-plus-2-add-muddle-01.png',

    //     'crit.png', 'minus-1-01.png', 'minus-1-02.png', 'minus-1-03.png',
    //     'minus-1-04.png', 'minus-1-05.png', 'minus-2-01.png', 'plus-0-01.png',
    //     'plus-0-02.png', 'plus-0-03.png', 'plus-0-04.png', 'plus-0-05.png', 'plus-0-06.png',
    //     'plus-1-01.png', 'plus-1-02.png', 'plus-1-03.png', 'plus-1-04.png', 'plus-1-05.png',
    //     'plus-2-01.png', 'skip.png'
    // ]
    const modifierArrayDeleted = []
    var discardArray = []
    var lostArray = []
    var activeArray = []
    var cardMenuSelectionArray = []

    // SORT ALPHANUMERIC
    var reA = /[^a-zA-Z]/g;
    var reN = /[^0-9]/g;

    function sortAlphaNum(a, b) {
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if (aA === bA) {
            var aN = parseInt(a.replace(reN, ""), 10);
            var bN = parseInt(b.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    }
    // overlay functionality
    function overlayAnimation() {
        overlay.classList.add('open')
        setTimeout(function() {
            overlay.classList.remove('open')
        }, 700)
    }
    // discard menu functionality
    discardMenuBtn.addEventListener('click', discardMenuOpen)
    function discardMenuOpen() {
        discardMenu.classList.add('open')
    }
    // char sheet menu functionality
    charSheetMenuBtn.addEventListener('click', charSheetMenuOpen)
    function charSheetMenuOpen() {
        charSheetMenu.classList.add('open')
    }
    // lost menu functionality
    lostMenuBtn.addEventListener('click', lostMenuOpen)
    function lostMenuOpen() {
        lostMenu.classList.add('open')
    }
    // card menu functionality
    cardMenuBtn.addEventListener('click', cardMenuOpen)
    function cardMenuOpen() {
        cardMenu.classList.add('open')
    }
    // close menu functionality 
    for(i = 0; i < closeMenuBtn.length; i++) {
        closeMenuBtn[i].addEventListener('click', closeMenu)
        function closeMenu() {
            this.closest('.open').classList.remove('open')
        }
    }
    // char conditions functionality
    // add condition to active on click
    for(i=0; i < conditions.length; i++) {
        conditions[i].addEventListener('click', conditionActive)
        function conditionActive() {
            var cloneCondition = this.cloneNode(true)
            this.classList.add('rotate')
            activeConditions.appendChild(cloneCondition)
        }
    }
    // remove active condition on click
    document.addEventListener('click',function(e){
        if(e.target && e.target.classList.contains('conditions') &&
        e.target.parentNode.classList.contains('active-conditions-container')){
            var selectedClassId = e.target.classList[1]
            for(i = 0; i < document.querySelector('.conditions-icon-container').childNodes.length; i++) {
                var conditionsChildNodes = document.querySelector('.conditions-icon-container').childNodes[i]
                if (conditionsChildNodes.className == 'conditions ' + selectedClassId + ' rotate') {
                    conditionsChildNodes.classList.remove('rotate')
                }
            }
            e.target.remove()
        }
    })
    // char stats functionality
    // local storage
    currentLvl.innerHTML = localStorage.getItem('lvl')
    maxHp.innerHTML = localStorage.getItem('max-lvl')
    currentHp.innerHTML = localStorage.getItem('hp')
    currentXp.innerHTML = localStorage.getItem('xp')
    currentGold.innerHTML = localStorage.getItem('gold')
    var lvlCount = localStorage.getItem('lvl')
    var hpCount = localStorage.getItem('hp')
    var xpCount = localStorage.getItem('xp')
    var goldCount = localStorage.getItem('xp')
    var maxHpCount = localStorage.getItem('max-lvl')
    // hp corresponds to lvl
    function updateMaxHp() {
        switch(lvlCount) {
            case 1:
                maxHpCount = 8
                hpCount = 8
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 2:
                maxHpCount = 9
                hpCount = 9
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 3:
                maxHpCount = 11
                hpCount = 11
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 4:
                maxHpCount = 12
                hpCount = 12
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 5:
                maxHpCount = 14
                hpCount = 14
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 6:
                maxHpCount = 15
                hpCount = 15
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 7:
                maxHpCount = 17
                hpCount = 17
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 8:
                maxHpCount = 18
                hpCount = 18
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
            case 9:
                maxHpCount = 20
                hpCount = 20
                maxHp.innerHTML = maxHpCount
                currentHp.innerHTML = hpCount
                break;
        }
    }
    // lvl subtract
    lvlBtnSub.addEventListener('click', subtractLevel)
    function subtractLevel() {
        if(lvlCount > 1) {
            lvlCount--
            currentLvl.innerHTML = lvlCount
            updateMaxHp()
            localStorage.setItem('lvl', lvlCount)
            localStorage.setItem('max-lvl', maxHpCount)
            console.log('stored lvl' + localStorage.getItem('lvl'))
        }
    }
    // lvl add
    lvlBtnAdd.addEventListener('click', addLevel)
    function addLevel() {
        if(lvlCount < 9) {
            lvlCount++
            currentLvl.innerHTML = lvlCount
            updateMaxHp()
            localStorage.setItem('lvl', lvlCount)
            localStorage.setItem('max-lvl', maxHpCount)
            console.log('stored lvl' + localStorage.getItem('lvl'))
        }
    }
    // hp subtract
    hpBtnSub.addEventListener('click', subtractHp)
    function subtractHp() {
        if(hpCount > 1) {
            hpCount--
            currentHp.innerHTML = hpCount
            localStorage.setItem('hp', hpCount)
            console.log('stored hp' + localStorage.getItem('hp'))
        }
    }
    // hp add
    hpBtnAdd.addEventListener('click', addHp)
    function addHp() {
        if(hpCount < maxHpCount) {
            hpCount++
            currentHp.innerHTML = hpCount
            localStorage.setItem('hp', hpCount)
            console.log('stored hp' + localStorage.getItem('hp'))
        }
    }
    // xp subtract
    xpBtnSub.addEventListener('click', subtractXp)
    function subtractXp() {
        if(xpCount > 0) {
            xpCount--
            currentXp.innerHTML = xpCount
            localStorage.setItem('xp', xpCount)
        }
    }
    // xp add
    xpBtnAdd.addEventListener('click', addXp)
    function addXp() {
        if(xpCount < 999) {
            xpCount++
            currentXp.innerHTML = xpCount
            localStorage.setItem('xp', xpCount)
        }
    }
    // gold subtract
    goldBtnSub.addEventListener('click', subtractGold)
    function subtractGold() {
        if(goldCount > 0) {
            goldCount--
            currentGold.innerHTML = goldCount
            localStorage.setItem('gold', goldCount)
        }
    }
    // gold add
    goldBtnAdd.addEventListener('click', addGold)
    function addGold() {
        if(goldCount < 999) {
            goldCount++
            currentGold.innerHTML = goldCount
            localStorage.setItem('gold', goldCount)
        }
    }


    // modifier functionality
    modifierTop.addEventListener('click', drawModifier)
    function drawModifier() {
        // only if modifier array is populated
        if(modifierArray.length > 0) {
            // select random card, remove that card from modifier array, and add to used card array
            var modifierArraySplice = modifierArray.splice(Math.floor(Math.random()*modifierArray.length),1)[0]
            modifierArrayDeleted.push(modifierArraySplice)
            // populate modifierBottom
            modifierBottom.style.background = "url('./images/modifiers/" + modifierArraySplice +"') center no-repeat"
            modifierBottom.style.backgroundSize = "contain"
            modifierBottom.style.border = "none"
            // if curse, remove card after populating 
            console.log(modifierArrayDeleted)
            if(modifierArraySplice == "curse.png") {
                modifierArrayDeleted.splice(modifierArrayDeleted.indexOf("curse.png"),1)
                modifierBottom.classList.add('modifier-fade')
                setTimeout(function() {
                    modifierBottom.style.background = "url('./images/modifiers/" + modifierArrayDeleted[modifierArrayDeleted.length-1] +"') center no-repeat"
                    modifierBottom.style.backgroundSize = "contain"
                    modifierBottom.style.border = "none"
                    modifierBottom.classList.remove('modifier-fade')
                }, 1200)
                setTimeout(function() {
                    let curseAmount = modifierArray.filter(function(x) {return x === 'curse.png'})
                    overlayTitle.innerHTML = "Curse Removed <span class='tiny-text'>( " + curseAmount.length + " )</span>"
                    overlayAnimation()
                }, 1300)
            }
            // if bless, remove card after populating 
            if(modifierArraySplice == "bless.png") {
                modifierArrayDeleted.splice(modifierArrayDeleted.indexOf("bless.png"),1)
                modifierBottom.classList.add('modifier-fade')
                setTimeout(function() {
                    modifierBottom.style.background = "url('./images/modifiers/" + modifierArrayDeleted[modifierArrayDeleted.length-1] +"') center no-repeat"
                    modifierBottom.style.backgroundSize = "contain"
                    modifierBottom.style.border = "none"
                    modifierBottom.classList.remove('modifier-fade')
                }, 1200)
                setTimeout(function() {
                    let blessAmount = modifierArray.filter(function(x) {return x === 'bless.png'})
                    overlayTitle.innerHTML = "Bless Removed <span class='tiny-text'>( " + blessAmount.length + " )</span>"
                    overlayAnimation()
                }, 1300)
            }
        } else {
            overlayTitle.innerHTML = "MODIFIER DECK EMPTY"
            overlayAnimation()
        }
        // if modifier array is empty, change modifer top display
        if(modifierArray.length < 1) {
            modifierTop.style.background = "none"
            modifierTop.style.border = "1px dashed rgb(173, 173, 173)"
        }
    }
    // refresh modifier button
    refreshModifierBtn.addEventListener('click', refreshModifier)
    function refreshModifier() {
        for(i = 0; i < modifierArrayDeleted.length; i++) {
            modifierArray.push(modifierArrayDeleted[i])
            modifierArrayDeleted.splice(i, 1)
            i--
        }
        modifierTop.style.background = "url('./images/modifiers/modifier-back.png') center no-repeat"
        modifierTop.style.backgroundSize = "contain"
        modifierTop.style.border = "none"
        modifierBottom.style.background = "none"
        modifierBottom.style.border = "1px dashed rgb(173, 173, 173)"
        overlayTitle.innerHTML = "REFRESH MODIFIER"
        overlayAnimation()
        
    }
    // add curse
    addCurseBtn.addEventListener('click', addCurse)
    function addCurse() {
        modifierArray.push('curse.png')
        let curseAmount = modifierArray.filter(function(x) {return x === 'curse.png'})
        overlayTitle.innerHTML = "Curse Added <span class='tiny-text'>( " + curseAmount.length + " )</span>"
        overlayAnimation()
        
    }
    // remove curse
    removeCurseBtn.addEventListener('click', removeCurse)
    function removeCurse() {
        // if curse card exists, remove it
        if(modifierArray.indexOf('curse.png') !== -1) {
            modifierArray.splice(modifierArray.indexOf('curse.png'), 1)
            let curseAmount = modifierArray.filter(function(x) {return x === 'curse.png'})
            overlayTitle.innerHTML = "Curse Removed <span class='tiny-text'>( " + curseAmount.length + " )</span>"
            overlayAnimation()
        } else {
            overlayTitle.innerHTML = "No Curse Found"
            overlayAnimation()
        }
    }
    // add bless
    addBlessBtn.addEventListener('click', addBless)
    function addBless() {
        modifierArray.push('bless.png')
        let blessAmount = modifierArray.filter(function(x) {return x === 'bless.png'})
        overlayTitle.innerHTML = "Bless Added <span class='tiny-text'>( " + blessAmount.length + " )</span>"
        overlayAnimation()
    }
    // remove bless
    removeBlessBtn.addEventListener('click', removeBless)
    function removeBless() {
        // if curse card exists, remove it
        if(modifierArray.indexOf('bless.png') !== -1) {
            modifierArray.splice(modifierArray.indexOf('bless.png'), 1)
            let blessAmount = modifierArray.filter(function(x) {return x === 'bless.png'})
            overlayTitle.innerHTML = "Bless Removed <span class='tiny-text'>( " + blessAmount.length + " )</span>"
            overlayAnimation()
            
        } else {
            overlayTitle.innerHTML = "No Bless Found"
            overlayAnimation()
        }
    }

    // render cards in cardMenu from array
    cardMenuBtn.addEventListener('click', renderCardMenu)
    function renderCardMenu() {
        for(j = 0; j < cardContainerSpace.length; j++) {
            for(i = 0; i < cardsArray.length; i++) {
                // add an iterated class to each instance of the cards-in-hand class
                cardContainerSpace[j].classList.add('deck-' + [j])
                // local storage get item here
                if(!(localStorage.getItem('flipped'+[j]) === null)) {
                    cardContainerSpace[j].classList.add('deck-flipped')
                }
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
                        // 
            }
        }
    }
    //  render card in card menu viewer
    for(i = 0; i < cardContainerSpace.length; i++) {
        cardContainerSpace[i].addEventListener('mouseover', renderCardViewer)
            function renderCardViewer() {
                for(j = 0; j < cardContainerSpace.length; j++) {
                    if (this.closest('.card-container-space').classList.contains('deck-' + [j]) == true) {
                        cardContainerViewer.className =""
                        cardContainerViewer.classList.add('card-container__viewer')
                        cardContainerViewer.classList.add('deck-' + [j])
                    }
                }
        }
    }
    //  render card in selection list
    for(i = 0; i < cardContainerSpace.length; i++) {
        cardContainerSpace[i].addEventListener('click', renderCardSelection)
            function renderCardSelection() {
                for(j = 0; j < cardContainerSpace.length; j++) {
                    if (this.closest('.card-container-space').classList.contains('deck-' + [j]) == true &&
                        cardMenuSelectionArray.length <= 10 &&
                        cardMenuSelectionArray.indexOf('deck-' + [j]) == -1) {
                                cardMenuSelectionArray.push('deck-' + [j])
                                const cardMenuListItem = document.createElement("li")
                                cardMenuListItem.className = "card-container__list-item"
                                cardMenuListItem.setAttribute('data-deck', 'deck-' +[j])
                                cardMenuListItem.innerHTML = cardsArray[j].slice(0, -4)
                                cardMenuList.appendChild(cardMenuListItem)
                                cardContainerListLength.innerHTML = cardMenuList.children.length
                        console.log(cardMenuSelectionArray)
                    }
                }
        }
    }
    // remove cardMenuListItem if clicked

    // add listener to entire document because the targets are dynamically generated
    document.addEventListener('click',function(e){
        // if the target is a list item
        if(e.target && e.target.nodeName == 'LI'){
            //   remove the corresponding item from menu selection array
            cardMenuSelectionArray.splice(cardMenuSelectionArray.indexOf(e.target.getAttribute('data-deck')),1)
            // select target parent to remove child (clicked <li>)
              e.target.parentNode.removeChild(e.target)        
            //   update selected counter
              cardContainerListLength.innerHTML = cardMenuList.children.length
         }
     });
    
    // render cards in hand from array
    populateHandBtn.addEventListener('click', renderHand)
    function renderHand() {
        for(j = 0; j < cardsInHand.length; j++) {
            cardsInHand[j].className =""
            cardsInHand[j].classList.add('card-space','cards-in-hand', cardMenuSelectionArray[j])
        }
        cardMenu.classList.remove('open')
    }
    // select button functionality
    for(i = 0; i < selectBtn.length; i++) {
        selectBtn[i].addEventListener('click', renderSelection)
        function renderSelection() {
            for(j = 0; j < cardsInHand.length; j++) {
                // if selected-cards are occupied, run overlayAnimation
                if (this.closest('.card-space').classList.contains(cardMenuSelectionArray[j]) == true &&
                selectedLeft.classList.contains('selected') &&
                selectedRight.classList.contains('selected')) {
                    overlayTitle.innerHTML = "CARDS ALREADY SELECTED"
                    overlayAnimation()
                }
                // else if selectedLeft is occupied, populate selectedRight
                else if (this.closest('.card-space').classList.contains(cardMenuSelectionArray[j]) == true &&
                selectedLeft.classList.contains('selected')) {
                    selectedRight.classList.add('selected', cardMenuSelectionArray[j])
                    this.closest('.card-space').classList.remove(cardMenuSelectionArray[j])
                }
                // else if selectedLeft is unoccupied, populate selectedLeft
                else if(this.closest('.card-space').classList.contains(cardMenuSelectionArray[j]) == true &&
                !selectedLeft.classList.contains('selected')) {
                    selectedLeft.classList.add('selected', cardMenuSelectionArray[j])
                    this.closest('.card-space').classList.remove(cardMenuSelectionArray[j])
                }
            }
            
        }
    }
    // discard button functionality

    // for each discard button...
    for(i = 0; i < discardBtn.length; i++) {
        discardBtn[i].addEventListener('click', renderDiscard)
        function renderDiscard() {
            // iterate over each card in cardSpace
            for(j = 0; j < cardSpace.length; j++) {
                // if the parent cardSpace of this discard button contains a class of 'cardMenuSelectionArray[j]'...
                if (this.closest('.card-space').classList.contains(cardMenuSelectionArray[j]) == true) {
                    // remove all classes from discardSpace
                    discardSpace.className = "";
                    // add default classes to discardSpace
                    discardSpace.classList.add('discard-space')
                    // add the selected card to discardSpace
                    discardSpace.classList.add(cardMenuSelectionArray[j])
                    // add the selected card to discardArray
                    discardArray.push(cardMenuSelectionArray[j])
                    // sort the array alphanumerically
                    discardArray.sort(sortAlphaNum)
                    console.log(discardArray)
                    // remove the selected card from the cardSpace it occupies
                    this.closest('.card-space').classList.remove(cardMenuSelectionArray[j])
                    // add the selected card to the corresponding discardContainerSpace in discardMenu
                    discardContainerSpace[j].classList.add(cardMenuSelectionArray[j])
                    // if the parent is an active card, remove the active width
                    if(this.closest('.card-space').classList.contains('active-space') == true) {
                        this.closest('.card-space').style.width = "0px"
                    }
                    // if the parent is a selected card, remove the class selected
                    if(this.closest('.card-space').classList.contains('selected') == true) {
                        this.closest('.card-space').classList.remove('selected')
                    }
                        
                }
                
            }
        }
    }
    // discard recover button functionality 

    // for each discard recover button ...
    for(i = 0; i < discardRecoverBtn.length; i++) {
        discardRecoverBtn[i].addEventListener('click', recoverFromDiscard)
        function recoverFromDiscard() {
            // iterate over each card in discardContainerSpace
            for(j = 0; j < discardContainerSpace.length; j++) {
                // if the parent discardContainerSpace of this recover button contains a class of 'cardMenuSelectionArray[j]'...
                if (this.closest('.discard-container-space').classList.contains(cardMenuSelectionArray[j]) == true) {
                    cardsInHand[j].classList.add(cardMenuSelectionArray[j])
                    discardContainerSpace[j].classList.remove(cardMenuSelectionArray[j])
                    discardSpace.className = ""
                    discardSpace.classList.add('discard-space', 'deck-back')
                    discardArray.splice(cardMenuSelectionArray[j], 1) //splice only removing first of array
                    if(discardArray.length < 1) {
                        discardSpace.className = ""
                        discardSpace.classList.add('discard-space')
                    }
                }
            }
        }
    }
    // lost button functionality

    // for each lost button...
    for(i = 0; i < lostBtn.length; i++) {
        lostBtn[i].addEventListener('click', renderLost)
        function renderLost() {
            // iterate over each card in cardSpace
            for(j = 0; j < cardSpace.length; j++) {
                // if the parent cardSpace of this lost button contains a class of 'cardMenuSelectionArray[j]'...
                if (this.closest('.card-space').classList.contains(cardMenuSelectionArray[j]) == true) {
                    // remove all classes from lostSpace
                    lostSpace.className = "";
                    // add default classes to lostSpace
                    lostSpace.classList.add('lost-space')
                    // add the selected card to lostSpace
                    lostSpace.classList.add(cardMenuSelectionArray[j])
                    // add the selected card to lostArray
                    lostArray.push(cardMenuSelectionArray[j])
                    // sort the array alphanumerically
                    lostArray.sort(sortAlphaNum)
                    console.log(lostArray)
                    // remove the selected card from the cardSpace it occupies
                    this.closest('.card-space').classList.remove(cardMenuSelectionArray[j])
                    // add the selected card to the corresponding lostContainerSpace in lostMenu
                    lostContainerSpace[j].classList.add(cardMenuSelectionArray[j])
                    // if the parent is an active card, remove the active width
                    if(this.closest('.card-space').classList.contains('active-space') == true) {
                        this.closest('.card-space').style.width = "0px"
                    }
                    // if the parent is a selected card, remove the class selected
                    if(this.closest('.card-space').classList.contains('selected') == true) {
                        this.closest('.card-space').classList.remove('selected')
                    }
                }
                
            }
        }
    }
    // lost recover button functionality 

    // for each lost recover button ...
    for(i = 0; i < lostRecoverBtn.length; i++) {
        lostRecoverBtn[i].addEventListener('click', recoverFromLost)
        function recoverFromLost() {
            // iterate over each card in lostContainerSpace
            for(j = 0; j < lostContainerSpace.length; j++) {
                // if the parent lostContainerSpace of this recover button contains a class of 'cardMenuSelectionArray[j]'...
                if (this.closest('.lost-container-space').classList.contains(cardMenuSelectionArray[j]) == true) {
                    cardsInHand[j].classList.add(cardMenuSelectionArray[j])
                    lostContainerSpace[j].classList.remove(cardMenuSelectionArray[j])
                    lostSpace.className = ""
                    lostSpace.classList.add('lost-space', 'deck-back')
                    lostArray.splice(cardMenuSelectionArray[j], 1) //splice only removing first of array
                    if(lostArray.length < 1) {
                        lostSpace.className = ""
                        lostSpace.classList.add('lost-space')
                    }
                }
            }
        }
    }
    // active button functionality

    // for each active button...
    for(i = 0; i < activeBtn.length; i++) {
        activeBtn[i].addEventListener('click', renderActive)
        function renderActive() {
            // iterate over each card in cardSpace
            for(j = 0; j < cardSpace.length; j++) {
                // if the parent cardSpace of this active button contains a class of 'cardMenuSelectionArray[j]'...
                if (this.closest('.card-space').classList.contains(cardMenuSelectionArray[j]) == true) {
                    // remove all classes from activeSpace
                    activeSpace[j].className = "";
                    // add default classes to activeSpace
                    activeSpace[j].classList.add('card-space', 'active-space')
                    // add the selected card to discardSpace
                    activeSpace[j].classList.add(cardMenuSelectionArray[j])
                    activeSpace[j].style.visibility = "visible"
                    activeSpace[j].style.width = "160px"
                    // add the selected card to activeArray
                    activeArray.push(cardMenuSelectionArray[j])
                    // sort the array alphanumerically
                    activeArray.sort(sortAlphaNum)
                    // remove the selected card from the cardSpace it occupies
                    this.closest('.card-space').classList.remove(cardMenuSelectionArray[j])
                    // if the parent is a selected card, remove the class selected
                    if(this.closest('.card-space').classList.contains('selected') == true) {
                        this.closest('.card-space').classList.remove('selected')
                    }
                }
                
            }
        }
    }
    // flip button functionality

    // for each flip button
    for(i = 0; i < flipBtn.length; i++) {
        flipBtn[i].addEventListener('click', renderFlip)
        function renderFlip(e) {
            e.stopPropagation()
            if(this.closest('.card-container-space').classList.contains('deck-flipped')) {
                this.closest('.card-container-space').classList.remove('deck-flipped')
                localStorage.removeItem('flipped' + Array.from(flipBtn).indexOf(e.target), 'deck-flipped')
            } else {
                this.closest('.card-container-space').classList.add('deck-flipped')
                localStorage.setItem('flipped' + Array.from(flipBtn).indexOf(e.target), 'deck-flipped')
            }
        }
    }
    
})