// SIDE NAV FOR MOBILE
const mobileMenu = document.querySelector('.mobile-menu');
let firstTime = 0;

function toggleMenu() {
  if (mobileMenu.style.left === '-150%' || firstTime === 0) {
    mobileMenu.style.transition = 'left 0.2s ease-in-out';
    mobileMenu.style.left = '0';
    firstTime = 1;
  } else {
    mobileMenu.style.transition = 'left 0.2s ease-in-out';
    mobileMenu.style.left = '-150%';
  }
}

function closeMenu() {
  mobileMenu.style.transition = 'left 0.2s ease-in-out';
  mobileMenu.style.left = '-150%';
}

const mediaQuery = window.matchMedia("(max-width: 1400px)");
const checkbox_2 = document.querySelector("#button-layout-2");

let styles = {
  allButtons: {
    display: "",
    justifyContent: "",
    marginBottom: ""
  },
  startBtn: {
    marginTop: ""
  },
  spellingBtn: {
    marginTop: "",
    marginLeft: ""
  },
  stopBtn: {
    marginRight: "",
    marginTop: ""
  },
  buttons: {
    marginLeft: "",
    flexDirection: "",
    justifyContent: ""
  },
  mobileBtns: {
    marginLeft: "",
    flexDirection: "",
    justifyContent: ""
  }
};

function saveStyles() {
  styles.allButtons.display = document.querySelector(".all-buttons").style.display;
  styles.allButtons.justifyContent = document.querySelector(".all-buttons").style.justifyContent;
  styles.allButtons.marginBottom = document.querySelector(".all-buttons").style.marginBottom;
  styles.startBtn.marginTop = document.querySelector(".start-btn").style.marginTop;
  styles.spellingBtn.marginTop = document.querySelector(".spelling-btn").style.marginTop;
  styles.spellingBtn.marginLeft = document.querySelector(".spelling-btn").style.marginLeft;
  styles.stopBtn.marginRight = document.querySelector(".stop-btn").style.marginRight;
  styles.stopBtn.marginTop = document.querySelector(".stop-btn").style.marginTop;
  styles.buttons.marginLeft = document.querySelector(".buttons").style.marginLeft;
  styles.buttons.flexDirection = document.querySelector(".buttons").style.flexDirection;
  styles.buttons.justifyContent = document.querySelector(".buttons").style.justifyContent;
  styles.mobileBtns.marginLeft = document.querySelector(".mobile-btns").style.marginLeft;
  styles.mobileBtns.flexDirection = document.querySelector(".mobile-btns").style.flexDirection;
  styles.mobileBtns.justifyContent = document.querySelector(".mobile-btns").style.justifyContent;
}

function applyStyles() {
  if (mediaQuery.matches && checkbox_2.checked) {
    document.querySelector(".all-buttons").style.display = "flex";
    document.querySelector(".all-buttons").style.justifyContent = "center";
    document.querySelector(".all-buttons").style.marginBottom = "100px";
    document.querySelector(".start-btn").style.marginTop = "10px";
    document.querySelector(".spelling-btn").style.marginTop = "5px";
    document.querySelector(".spelling-btn").style.marginLeft = "-5px";
    document.querySelector(".stop-btn").style.marginRight = "5px";
    document.querySelector(".stop-btn").style.marginTop = "0";
    document.querySelector(".buttons").style.marginLeft = "10px";
    document.querySelector(".buttons").style.flexDirection = "column";
    document.querySelector(".buttons").style.justifyContent = "flex-end";
    document.querySelector(".mobile-btns").style.marginLeft = "-10px";
    document.querySelector(".mobile-btns").style.flexDirection = "column";
    document.querySelector(".mobile-btns").style.justifyContent = "flex-start";
  }
}

function checkCheckbox() {
  if (checkbox_2.checked) {
    applyStyles();
  } else {
    document.querySelector(".all-buttons").style.display = styles.allButtons.display;
    document.querySelector(".all-buttons").style.justifyContent = styles.allButtons.justifyContent;
    document.querySelector(".all-buttons").style.marginBottom = styles.allButtons.marginBottom;
    document.querySelector(".start-btn").style.marginTop = styles.startBtn.marginTop;
    document.querySelector(".spelling-btn").style.marginTop = styles.spellingBtn.marginTop;
    document.querySelector(".spelling-btn").style.marginLeft = styles.spellingBtn.marginLeft;
    document.querySelector(".stop-btn").style.marginRight = styles.stopBtn.marginRight;
    document.querySelector(".stop-btn").style.marginTop = styles.stopBtn.marginTop;
    document.querySelector(".buttons").style.marginLeft = styles.buttons.marginLeft;
    document.querySelector(".buttons").style.flexDirection = styles.buttons.flexDirection;
    document.querySelector(".buttons").style.justifyContent = styles.buttons.justifyContent;
    document.querySelector(".mobile-btns").style.marginLeft = styles.mobileBtns.marginLeft;
    document.querySelector(".mobile-btns").style.flexDirection = styles.mobileBtns.flexDirection;
    document.querySelector(".mobile-btns").style.justifyContent = styles.mobileBtns.justifyContent;
  }
}

applyStyles(); // Apply styles initially
saveStyles(); // Save initial styles

checkbox_2.addEventListener("change", checkCheckbox);
  
  const inputTextarea = document.querySelector("#input-textarea");
  const startButton = document.querySelector(".start-btn");
  const stopButton = document.querySelector(".stop-btn");
  const currentWordParent = document.querySelector(".current-word")
  const currentWord = document.querySelector(".current-word-inline-container");
  const speedSlider = document.querySelector("#speed-slider");
  const pitchSlider = document.querySelector("#pitch-slider");
  const volumeSlider = document.querySelector("#volume-slider");
  const voiceSelect = document.querySelector("#voices");
  const nextWordButton = document.querySelector(".next-word-btn");
  const spellingButton = document.querySelector(".spelling-btn");
  const copyButton = document.querySelector("#copyBtn");
  const repeatButton = document.querySelector(".repeat-btn")
  const prevButton = document.querySelector(".prev-word-btn-skip")
  const nextButton = document.querySelector(".next-word-btn-skip")

  currentWordParent.style.transition = 'display 0.2s ease-in-out';  


  let shouldSpeak = false;
  
  let inputText = "";
  let inputWords = [];
  let currentIndex = 0;

  const synth = window.speechSynthesis;

  function populateVoiceList() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = "";


    window.addEventListener('load', function() {
      inputTextarea.focus();
    });
    


    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = voices[i].name + " (" + voices[i].lang + ")";

      if (voices[i].lang === "hi-IN") {
        option.setAttribute("selected", "selected");
        option.textContent += ".";
        defaultVoiceIndex = i;
      }

      else if (voices[i].lang === "en-IN") {
        option.Attribute("selected", "selected");
        option.textContent += ".";
        defaultVoiceIndex = i;
      }
      else if(voices[i].lang === "en-US") {
        option.setAttribute("selected", "selected");
        option.textContent += ".";
        defaultVoiceIndex = i;
      }
      else if(voices[i].lang === "en-GB") {
        option.setAttribute("selected", "selected");
        option.textContent += ".";
        defaultVoiceIndex = i;
      }



      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let isSpellingButtonPressed = false;

  spellingButton.addEventListener("click", () => {
    isSpellingButtonPressed = true;
  });



  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    const isTextareaFocused = activeElement.tagName.toLowerCase() === "textarea";

    if (!isTextareaFocused) {
      const keyPressed = event.key.toLowerCase();
      if (keyPressed === " ") {
        event.preventDefault();
        speakWord();
      } else if (
        ["z", "x", "c", "v", "b", "n", "m"].includes(keyPressed) ||
        isSpellingButtonPressed
      ) {
        isSpellingButtonPressed = false;
        if (currentIndex > 0) {
          currentIndex--;
          const word = inputWords[currentIndex];
          currentWordParent.style.display = "flex";
          currentWord.innerText = word;
          speakWordByWord(word);
          currentIndex++;
        }
      } else if (keyPressed === "q" && shouldSpeak  ) {
        shouldSpeak = false;
        synth.cancel();
        currentWordParent.style.display = "none";
        currentWord.innerText = "";
        currentIndex = 0;
        console.log("Stop ('q') key  clicked");
        
      }
        else if(keyPressed === "r" && shouldSpeak){
          repeatButton.click();
        }

    }
  });

  function pressZKey() {
    var event = new KeyboardEvent("keydown", {
      key: "z",
      keyCode: 90,
    });
    document.dispatchEvent(event);
  }

  spellingButton.addEventListener("click", function () {
    pressZKey();
  });

  function removeConsecutiveSpaces(text) {
    const specialCharacters = /[~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
    return text.replace(specialCharacters, (match) => ` ${match} `);
    text = text.trim();
    return text.replace(/\s+/g, " ");
  }

  function removeNewLines(text) {
    return text.replace(/(\r\n|\n|\r)/gm, " ");
  }


  function speakWordByWord(word) {
    // Split the word by characters
    const chars = word.split("");
    // Loop through each character and create a SpeechSynthesisUtterance object for it
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      const utterance = new SpeechSynthesisUtterance(char);
      // Set the voice, speed, pitch, and volume from the controls
      utterance.voice = synth.getVoices().find(
        (voice) =>
          voice.name ===
          voiceSelect.selectedOptions[0].getAttribute("data-name")
      );
      utterance.rate = speedSlider.value;
      utterance.pitch = pitchSlider.value;
      utterance.volume = volumeSlider.value;
      // Set the language from the voice attribute
      utterance.lang = utterance.voice.lang;
      // Speak the character
      synth.speak(utterance);
    }
  }

  // Get the heading element and the content div
  var heading = document.querySelector(".heading");
  var content = document.querySelector(".content");


  autoNextWord.addEventListener("change", function () {
    if (autoNextWord.checked) {
      delayDiv.style.display = "none";
    } else {
      delayDiv.style.display = "none";
    }
  });

  function pressSpaceKey() {
    var event = new KeyboardEvent("keydown", {
      key: " ",
      keyCode: 32,
    });
    document.dispatchEvent(event);
  }



  // Add event listener to the window
  window.addEventListener("blur", function () {
    // Simulate pressing the space key when the window loses focus
    pressSpaceKey();
  });

  window.addEventListener("focus", function () {
    // Clear the current word when the window gains focus
    currentWord
    currentWordParent.style.display = "none";
    currentWord.innerText = "";
  });
  // Call populateVoiceList when the voices are loaded
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  } else {
    populateVoiceList();
  }

  function speakWord() {
    if ( shouldSpeak && currentIndex < inputWords.length) {
      const word = inputWords[currentIndex];
      currentWordParent.style.display = "flex";
      currentWord.innerText = word;

      if (autoNextWord.checked) {
        const delayValue = parseInt(delay);
        if (delayValue === 0) {
          const utterance = new SpeechSynthesisUtterance(inputText);
          utterance.voice = synth.getVoices().find(
            (voice) =>
              voice.name ===
              voiceSelect.selectedOptions[0].getAttribute("data-name")
          );
          utterance.rate = speedSlider.value;
          utterance.pitch = pitchSlider.value;
          utterance.volume = volumeSlider.value;
          utterance.lang = utterance.voice.lang;
          currentIndex++;
          synth.speak(utterance);
        } else if (delayValue > 0) {
          const utterance = new SpeechSynthesisUtterance(word);
          utterance.voice = synth.getVoices().find(
            (voice) =>
              voice.name ===
              voiceSelect.selectedOptions[0].getAttribute("data-name")
          );
          utterance.rate = speedSlider.value;
          utterance.pitch = pitchSlider.value;
          utterance.volume = volumeSlider.value;
          utterance.lang = utterance.voice.lang;
          synth.speak(utterance);

          setTimeout(speakWord, delayValue * 1000);
        }
      } else {
        if (currentIndex < inputWords.length) {
          const word = inputWords[currentIndex];
          currentWordParent.style.display = "flex";
          currentWord.innerText = word;
          const utterance = new SpeechSynthesisUtterance(word);
          utterance.voice = synth.getVoices().find(
            (voice) =>
              voice.name ===
              voiceSelect.selectedOptions[0].getAttribute("data-name")
          );
          utterance.rate = speedSlider.value;
                  utterance.pitch = pitchSlider.value;
          utterance.volume = volumeSlider.value;
          utterance.lang = utterance.voice.lang;
          console.log("Speaking word: " + word);
          synth.speak(utterance);
          currentIndex++;
        }
      }
    }
  }


  
  repeatButton.addEventListener("click", () => {
    currentIndex = currentIndex-1;  
    if (currentIndex < inputWords.length) {
      const word = inputWords[currentIndex];
      currentWordParent.style.display = "flex";
      currentWord.innerText = word;
      speakWord(word);
    }
  });



  startButton.addEventListener("click", () => {
    shouldSpeak = true;
    inputText = inputTextarea.value;
    inputWords = removeConsecutiveSpaces(removeNewLines(inputText)).split(" ");
    currentIndex = 0;
    console.log("Start button clicked");
    speakWord();
  });

  stopButton.addEventListener("click", () => {
    shouldSpeak = false;
    synth.cancel();
    currentWordParent.style.display = "none";
    currentWord.innerText = "";
    currentIndex = 0;
    console.log("Stop button clicked");
    
  });




  nextWordButton.addEventListener("click", () => {
    if (currentIndex < inputWords.length) {
      const word = inputWords[currentIndex];
      currentWordParent.style.display = "flex";
      currentWord.innerText = word;
      speakWord(word);
      currentIndex++;
      currentIndex = currentIndex - 1
    }
  });

  let idkWhyForButton = true;
  nextButton.addEventListener("click" , ()=>{
    if (typeof inputWords[currentIndex + 1] === "string") {
      currentIndex++;

      if(idkWhyForButton){
        currentIndex = currentIndex - 1; 
        idkWhyForButton = true;
      }

      currentWord.innerHTML = inputWords[currentIndex];
    
  }
  })






  function copyInputText() {
    let copyText = document.querySelector("#input-textarea").value;
    copyText = "You have to give answer with all the punctuations converted to their text names and make the input like a human would read it loud. I have to use it to give to UnSeeSound texttospeech tool and want the most accessable reading. Same for given code. For the converted punctuations use underscores between instead of spaces. You could aslo speak the headins and the newlines and use the underscores only Between the convetred punctiuation text name not between the original text input and the punctuation because the tts then splits the punctuation into text. like the output could be:'' hello comma how are you question_mark fine question_mark newline heading python newline heading content python is a high level programming language full_stop'ONLY GIVE THE CONVERTED TEXT AS OUTPUT NOT ANYTHING ELSE input:" +copyText
    navigator.clipboard.writeText(copyText)
          .then(function () {
            copyButton.textContent = "COPIED";
            function greet() {
              copyButton.textContent = "COPY";
            }
            setTimeout(greet, 2000);
            
            
            console.log("Text copied to clipboard");
          })
          .catch(function (error) {
            console.error("Unable to copy text: ", error);
          });
  }


  copyButton.addEventListener("click", copyInputText);