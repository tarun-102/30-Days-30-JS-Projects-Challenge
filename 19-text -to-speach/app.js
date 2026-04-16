const $ = (sel) => document.querySelector(sel);
const $$  = (sel) => Array.from(document.querySelectorAll(sel));
 
const suppoortsTTs = 'speechSynthesis' in window &&'SpeechSynthesisUtterance' in  window;
const statusE1  = $('#status');

if(! suppoortsTTs ){
    statusE1.textContent = 'Not Support ';
    statusE1.style.background = '#7f1d1d'
    statusE1.title = 'your browser not support web speach API';
    alert('Your browser does not support Text-to-Speech (Web Speech API). Try Chrome or Edge.')
}

const textE1 = $('#text');
const counterE1 = $('#counter');
const voiceSel = $('#voice');
const langSel = $("#lang");
const presetSel = ('#preset');

const rateE1 = $('#rate');
const pitchE1 = $('#pitch');
const volumeE1 = $('#volume');
const rateVal = $('#rateval');
const pitchVal = $('#pitchval');
const volumeVal = $('#volumeVal');

const playBtn = $('#play');
const pauseBtn = $('#pause');
const resumeBtn = $('#resume');
const stopBtn = $('#stop');

function updateCounter () {
    const len = textE1.value.length;
    counterE1 = textContent = `${len} ${len  === 1 ? 'character' : 'characters'}`
}
textE1.addEventListener('input', updateCounter);

presetSel.addEventListener('change', () => {
    if(presetSel.value){
        textE1.value = presetSel.value;
    }
})
