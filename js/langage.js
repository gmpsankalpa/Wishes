function translateMessage() {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;

    const greetingsEN = [
        "Wishing you and your family a joyous and prosperous Sinhala Hindu New Year!",
        "May this New Year bring you good health, happiness, and success.",
        "Enjoy the festivities and cherish the traditions.",
        "Warm regards,",
        "Malitha Piyumal Sankalpa",
        "Happy New Year! Here's a hidden message just for you!"
    ];

    const greetingsSI = [
        "ඔබටත් ඔබේ පවුලේ අයටත් සතුට සෞභාග්‍ය සපිරි සිංහල හින්දු අලුත් අවුරුද්දක් වේවා!",
        "මේ අලුත් අවුරුද්ද ඔබට නිදුක් නිරෝගී, සතුට, සාර්ථකත්වය උදා වේවා.",
        "උත්සව භුක්ති විඳින්න සහ සම්ප්රදායන් අගය කරන්න.",
        "උණුසුම් සුභාශිංෂන,",
        "මලිත පියුමාල් සංකල්ප",
        "සුභ නව වසරක්! මෙන්න ඔබ සඳහා පමණක් සැඟවුණු පණිවිඩයක්!"
    ];

    const greetingsTA = [
        "உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் மகிழ்ச்சியான மற்றும் வளமான சிங்கள இந்து புத்தாண்டு வாழ்த்துக்கள்!",
        "இந்தப் புத்தாண்டு உங்களுக்கு நல்ல ஆரோக்கியத்தையும், மகிழ்ச்சியையும், வெற்றியையும் தரட்டும்.",
        "விழாக்களைக் கண்டு மகிழுங்கள், மரபுகளைப் போற்றுங்கள்.",
        "அன்பான வாழ்த்துக்கள்,",
        "மலித பியுமால் சங்கல்ப",
        "புத்தாண்டு வாழ்த்துக்கள்! உங்களுக்கான மறைக்கப்பட்ட செய்தி இதோ!"
    ];

    const h1EN = "Sinhala & Hindu New Year Greetings";
    const h1SI = "සිංහල හින්දු අලුත් අවුරුදු සුභ පැතුම්";
    const h1TA = "சிங்கள மற்றும் இந்து புத்தாண்டு வாழ்த்துக்கள்";

    const messageElements = document.querySelectorAll('.message p');
    const h1Element = document.querySelector('.message h1');

    if (selectedLanguage === 'si') {
        h1Element.textContent = h1SI;
        messageElements.forEach((element, index) => {
            element.textContent = greetingsSI[index];
        });
    } else if (selectedLanguage === 'ta') {
        h1Element.textContent = h1TA;
        messageElements.forEach((element, index) => {
            element.textContent = greetingsTA[index];
        });
    } else {
        h1Element.textContent = h1EN;
        messageElements.forEach((element, index) => {
            element.textContent = greetingsEN[index];
        });
    }
    
}
