let myAudio = new Audio('https://song.sgp1.digitaloceanspaces.com/song/645/6792.mp3'); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    // Display alert message when the page is loaded
    alert("🎶Before you proceed, we recommend turning up your device's volume to fully immerse yourself in the enhanced audio experiences we have to offer!\n🎶ඔබ ඉදිරියට යාමට පෙර, අප විසින් පිරිනමනු ලබන වැඩිදියුණු කළ ශ්‍රව්‍ය අත්දැකීම්වල සම්පූර්ණයෙන්ම ගිල්වීමට ඔබගේ උපාංගයේ ශබ්දය වැඩි කිරීමට අපි නිර්දේශ කරමු!");

    // When user clicks "OK", start playing the audio
    myAudio.play();
};
