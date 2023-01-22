document.querySelector('button').addEventListener('click', () => {
    var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tokyo_Sky_Tree_2012_%E2%85%A3.JPG';
    downloadSize = 4823449.6;
    var time_start, time_end;
    var downloadSrc = new Image();

    document.querySelector('.loader-content').classList.add('hide');
    document.querySelector('.loader').classList.remove('hide');
    time_start = new Date().getTime();
    var cacheImg = "?nn=" + time_start;
    downloadSrc.src = imageLink + cacheImg;
    downloadSrc.onload = function() {
        time_end = new Date().getTime();
        var timeDuration = time_end - time_start
        var loadedBytes = downloadSize * 8;
        var totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);
        document.querySelector('.content').innerHTML = totalSpeed + '<span>Mbps</span>';
        document.querySelector('.loader-content').classList.remove('hide');
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('.content').classList.remove('hide');
    }
})