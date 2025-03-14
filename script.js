const songs = [
    { image: 'image/1.jpg', song: 'music/y2mate.com - SƠN TÙNG MTP  ĐỪNG LÀM TRÁI TIM ANH ĐAU  OFFICIAL MUSIC VIDEO.mp3', title: 'Võ', startTime: 16 },
    { image: 'image/2.jpg', song: 'music/y2mate.com - SAO HẠNG A  HIEUTHUHAI Song Luân Dương Domic Jsol  Anh Trai Say Hi Performance.mp3', title: 'Lê', startTime: 30 },
    { image: 'image/3.jpg', song: 'music/y2mate.com - youtube video FN7ALfpGxiI.mp3', title: 'Tú', startTime: 8 },
    { image: 'image/4.jpg', song: 'music/2.m4a', title: 'Quyên' },
    { image: 'image/5.jpg', song: 'music/1.m4a', title: 'Anh', startTime: 7 },
    { image: 'image/6.jpg', song: 'music/3.m4a', title: 'Yêu' },
    { image: 'image/7.png', song: 'music/4.m4a', title: 'Em', startTime: 67 },
    { image: 'image/8.jpg', song: 'music/5.m4a', title: 'Làm', startTime: 50 },
    { image: 'image/9.jpg', song: 'music/6.m4a', title: 'Người yêu', startTime: 7 },
    { image: 'image/10.jpg', song: 'music/7.m4a', title: 'Toai', startTime: 8 },
    { image: 'image/Khoa.JPG', song: 'music/8.m4a', title: 'Nhó 🙆', startTime: 12 }
];

let currentIndex = 0;
let isPlaying = false;
let isStartTimeSet = false;

const imageElement = document.getElementById('image');
const audioElement = document.getElementById('audio');
const playPauseIcon = document.getElementById('playPauseIcon');
const songTitleElement = document.getElementById('songTitle');

function updateSong() {
    const song = songs[currentIndex];
    imageElement.src = song.image;
    audioElement.src = song.song;
    songTitleElement.textContent = song.title || "Không có tiêu đề";
    
    isStartTimeSet = false;
    audioElement.load();
}

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseIcon.src = "icon/pause.png";
        isPlaying = true;
    } else {
        audioElement.pause();
        playPauseIcon.src = "icon/play.png";
        isPlaying = false;
    }
}

audioElement.addEventListener('play', () => {
    const song = songs[currentIndex];
    if (!isStartTimeSet && song.startTime) {
        audioElement.currentTime = song.startTime;
        isStartTimeSet = true;
    }
});

audioElement.addEventListener('ended', nextSong);

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    updateSong();
    if (isPlaying) audioElement.play();
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    updateSong();
    if (isPlaying) audioElement.play();
}

function changeVolume(value) {
    audioElement.volume = value;
}

// Tự động phát bài đầu tiên khi trang được tải
updateSong();
