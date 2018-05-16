window.onload=function(){
    // Get the element, add a click listener...
    var  x = document.getElementById("parent-list");
    x.addEventListener("click", function(e) {
        // e.target is the clicked element!
        // If it was a list item
        if(e.target && e.target.nodeName == "LI") {
            // List item found!  Output the ID!
            console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
        }
    });
}
