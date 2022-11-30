// =-=-=-=-=-=-=-=-=-= Components =-=-=-=-=-=-=-=-=-=

/* ---------- Hamburger Menu Component ---------- */

const dropdownButton = $('[data-dropdown="button"]');
const dropdownMenu = $('[data-dropdown="menu"]');

dropdownMenu.hide();
dropdownButton.on('click', function () {
  $(this).toggleClass('open');
  toggleAriaExpanded();
  dropdownMenu.slideToggle();
});

$(window).on('load resize', () => {
  toggleAriaHidden();
  toggleAriaExpanded();

  // Fix jQuery leaving display: none; when resizing the window after clicked on hamburger menu.
  fixDisplayNoneOnDropdownMenu();

  // Fix the dropdownmenu keeping open when resizing window.
  dropdownButton.removeClass('open');
});

function toggleAriaHidden() {
  if ($(window).width() >= 960) {
    dropdownButton.attr('aria-hidden', true);
    return;
  }
  dropdownButton.attr('aria-hidden', false);
}

function toggleAriaExpanded() {
  if (dropdownButton.hasClass('open')) {
    dropdownButton.attr('aria-expanded', true);
    return;
  }
  dropdownButton.attr('aria-expanded', false);
}

function fixDisplayNoneOnDropdownMenu() {
  if ($(window).width() >= 960) {
    dropdownMenu.show();
  } else {
    dropdownMenu.hide();
  }
}

// =-=-=-=-=-=-=-=-=-= Pages =-=-=-=-=-=-=-=-=-=

/* ---------- Contact ---------- */

const contactForm = $('[data-form="contact"]');

contactForm.on('submit', (event) => {
  event.preventDefault();
  handleSubmit();
});

function handleSubmit() {
  const formName = $('#formName');
  const formEmail = $('#formEmail');
  const formMessage = $('#formMessage');
  const greetings = $('[data-form="submitted"]');
  const submitButton = $('[data-form="button"]');

  formName.val('');
  formEmail.val('');
  formMessage.val('');
  greetings.text('Obrigado pela sua mensagem!');
  submitButton.text('Enviado');
}
