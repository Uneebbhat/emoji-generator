function showEmoji() {
    const moodInput = document.querySelector("#mood");
    const mood = moodInput.value.toLowerCase();

    let emoji = "";
    switch (mood) {
        case "happy":
            emoji = "😊";
            break;
        case "sad":
            emoji = "😢";
            break;
        case "angry":
            emoji = "😠";
            break;
        case "excited":
            emoji = "🤩";
            break;
        case "tired":
            emoji = "😴";
            break;
        default:
            emoji = "❓";
            break;
    }

    const emojiContainer = document.querySelector("#emoji-container");
    emojiContainer.textContent = emoji;
}
