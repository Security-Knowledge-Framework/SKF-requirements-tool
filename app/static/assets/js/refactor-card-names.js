$(document).ready(function () {
    $('.chapter-btn').click(function () {
        var chapterName = this.id.replace(/\W/g, '_');

        if (/^\d/.test(chapterName)) {
            chapterName = '_' + chapterName;
        }

        $('.card').hide();
        $('.' + chapterName).show();
    });
});