function translateMessage() {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;

    const greetingsEN = [
        "Wishing you and your family a joyous and prosperous Sinhala Hindu New Year!",
        "May this New Year bring you good health, happiness, and success.",
        "Enjoy the festivities and cherish the traditions.",
        "Warm regards,",
        "G.M.P.Sankalpa",
        "Happy New Year! Here's a hidden message just for you!"
    ];

    const greetingsSI = [
        "ඔබටත් ඔබේ පවුලේ සැමටත් සතුට සෞභාග්‍ය සපිරි සිංහල හින්දු අලුත් අවුරුද්දක් වේවා!",
        "මේ අලුත් අවුරුද්දේ ඔබට නිදුක් නිරෝගී, සතුට, සාර්ථකත්වය උදා වේවා.",
        "උත්සව භුක්ති විඳින්න සහ සම්ප්රදායන් අගය කරන්න.",
        "උණුසුම් සුභාශිංෂන,",
        "ජී.එම්.පි.සංකල්ප",
        "සුභ නව වසරක්! මෙන්න ඔබ සඳහා පමණක් සැඟවුණු පණිවිඩයක්!"
    ];

    const greetingsTA = [
        "உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் மகிழ்ச்சியான மற்றும் வளமான சிங்கள இந்து புத்தாண்டு வாழ்த்துக்கள்!",
        "இந்தப் புத்தாண்டு உங்களுக்கு நல்ல ஆரோக்கியத்தையும், மகிழ்ச்சியையும், வெற்றியையும் தரட்டும்.",
        "விழாக்களைக் கண்டு மகிழுங்கள், மரபுகளைப் போற்றுங்கள்.",
        "அன்பான வாழ்த்துக்கள்,",
        "ஜி.எம்.பி.சங்கல்ப",
        "புத்தாண்டு வாழ்த்துக்கள்! உங்களுக்கான மறைக்கப்பட்ட செய்தி இதோ!"
    ];

    const h1EN = "Sinhala & Hindu New Year Greetings!";
    const h1SI = "සිංහල හින්දු අලුත් අවුරුදු සුභ පැතුම්!";
    const h1TA = "சிங்கள மற்றும் இந்து புத்தாண்டு வாழ்த்துக்கள்!";

    const messageElements = document.querySelectorAll('.message p');
    const h1Element = document.querySelector('.message h1');
    const signatureElement = document.querySelector('.wave-p3');

    // Apply the animation to h1 text
    h1Element.innerHTML = `<span>${h1Element.textContent}</span>`;

    // Apply the animation to signature text
    signatureElement.innerHTML = `<p><span>${signatureElement.textContent}</span></p>`;

    if (selectedLanguage === 'si') {
        h1Element.innerHTML = `<span>${h1SI}</span>`;
        messageElements.forEach((element, index) => {
            element.textContent = greetingsSI[index];
        });
        signatureElement.innerHTML = `<p><span>ජී.එම්.පි.සංකල්ප</span></p>`;
    } else if (selectedLanguage === 'ta') {
        h1Element.innerHTML = `<span>${h1TA}</span>`;
        messageElements.forEach((element, index) => {
            element.textContent = greetingsTA[index];
        });
        signatureElement.innerHTML = `<p><span>ஜி.எம்.பி.சங்கல்ப</span></p>`;
    } else {
        h1Element.innerHTML = `<span>${h1EN}</span>`;
        messageElements.forEach((element, index) => {
            element.textContent = greetingsEN[index];
        });
        signatureElement.innerHTML = `<p><span>G.M.P.Sankalpa</span></p>`;
    }
}
