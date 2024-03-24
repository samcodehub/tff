// whatsapp function
function openWhatsApp() {
  var phoneNumber = "	+16463894284";
  var message = "Hello, I'm interested in your trading strategy.";

  var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber) + "&text=" + encodeURIComponent(message);

  window.open(url);
}
// whatsapp function ends here








var acc = document.getElementsByClassName("accordion");
var i;
var currentAccordion = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (currentAccordion && currentAccordion !== this) {
      currentAccordion.classList.remove("active");
      var currentPanel = currentAccordion.nextElementSibling;
      currentPanel.style.maxHeight = null;
    }
    
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (this.classList.contains("active")) {
      currentAccordion = this;
    } else {
      currentAccordion = null;
    }
  });
}
















