$(document).ready(function () {
  $('#download-pdf').on('click', function () {
    const element = document.querySelector('.cv-container');
    const opt = {
      margin: 0,
      filename: 'Brian_Lee_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  });
});

$("div.project-card").hover(
  function () {
    console.log("hover start", this);
    $(".project-card").removeClass("hovering");
    $(this).addClass("hovering");
  },
  function () {
    console.log("hover end", this);
    $(".project-card").removeClass("hovering");
  }
);

// --- Mobile tap fallback for hover ---
if ("ontouchstart" in window) {
  $(".project-card a").on("click", function (e) {
    e.preventDefault(); // Always stop default link behavior

    const $project = $(this).closest(".project-card");
    const link = $(this).attr("href");

    // If already expanded → follow link manually
    if ($project.hasClass("hovering")) {
      setTimeout(() => {
        window.location.href = link; // Safe manual navigation
      }, 100);
      return false; // Stop any other event
    }

    // Otherwise → activate hover effect only
    $(".project-card").removeClass("hovering");
    $project.addClass("hovering");

    // Auto-close after 2s
    setTimeout(() => {
      $project.removeClass("hovering");
    }, 2000);

    return false; // Ensures no accidental navigation
  });
}

