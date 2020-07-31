import React from "react";
import $ from "jquery";

export function sidebarDropdown() {
  $(".sidebarDropdown > a").click(function() {
    $(".sidebarSubmenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebarDropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebarDropdown").removeClass("active");
      $(this)
        .next(".sidebarsubmenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
}

export function progressBar() {
  var delay = 500;
  $(".progress-bar").each(function(i) {
    $(this)
      .delay(delay * i)
      .animate(
        {
          width: $(this).attr("aria-valuenow") + "%"
        },
        delay
      );

    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: delay,
          // easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now) + "%");
          }
        }
      );
  });
}
