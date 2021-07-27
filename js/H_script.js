function openInfo(evt, toolsName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");         
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
        }
    tablinks = document.getElementsByClassName("project-nav-link");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(toolsName).style.display = "block";
    evt.currentTarget.className += " active";                
} 
function openInfo2(evt, toolsName2) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");         
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("proj-nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(toolsName2).style.display = "block";
    evt.currentTarget.className += " active";                
    }
 