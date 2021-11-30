$(document).ready(function () {
    let lastDesc;
    let lastIcon;
    let lastTitle
    let lastDescsId;
    $(".title").click(function () {
        let dataid = this.getAttribute("data-id");





        if (lastDescsId == dataid) {
            console.log("test");

        } else {
            lastDesc ? lastDesc.style.display = "none" : null;
            lastTitle ? lastTitle.classList.remove("active") : null;
            lastIcon ? lastIcon.classList.remove("customAnimate") : null;
        }

        let icon = document.querySelector(`div[data-id="${dataid}"]>div.icon`)
        $(icon).toggleClass('customAnimate')
        lastIcon = icon



        $(this).toggleClass('active')
        lastTitle = this


        let desc = document.getElementById(dataid)
        $(desc).slideToggle();

        lastDesc = desc
        lastDescsId = lastDesc.id;
    })
})