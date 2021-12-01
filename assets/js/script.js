$(document).ready(function () {
    let lastDesc;
    let lastIcon;
    let lastTitle
    let lastDescsId;
    let no1 = document.querySelector(`div[data-id="1"]`).nextElementSibling
    $(no1).slideDown()
    lastDesc = no1
    lastDescsId = lastDesc.id

    let no1Title = document.querySelector(`div[data-id="1"]`)
    $(no1Title).toggleClass(`active`)
     lastTitle  = no1Title 
    

    let no1Icon = document.querySelector(`div[data-id="1"]>div.icon`)
    $(no1Icon).toggleClass('customAnimate')
    lastIcon = no1Icon
    
    $(".title").click(function () {
        let dataid = this.getAttribute("data-id");

        if (lastDescsId != dataid) {
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