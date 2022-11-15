// =-=-=-=-=-=-=-=-=-= Components =-=-=-=-=-=-=-=-=-=

// Navbar Dropdown Menu:
const dropdownButton = $('[data-dropdown="button"]');
const dropdownMenu = $('[data-dropdown="menu"]');

dropdownMenu.hide();
dropdownButton.on('click', function () {
  $(this).toggleClass('open');
  dropdownMenu.slideToggle();
});

// =-=-=-=-=-=-=-=-=-= Bug fixes =-=-=-=-=-=-=-=-=-=

// Fix jQuery leaving display: none; when resizing the window after clicked on hamburger menu.
$(window).resize(fixDisplayNoneOnDropdownMenu);

function fixDisplayNoneOnDropdownMenu() {
  if ($(window).width() >= 960) {
    dropdownMenu.show();
  } else {
    dropdownMenu.hide();
  }
}

fixDisplayNoneOnDropdownMenu();

// Fix the dropdownmenu keeping open when resizing window with the menu open.
$(window).resize(function () {
  if ($(window).width() >= 960) {
    dropdownButton.removeClass('open');
  }
});
