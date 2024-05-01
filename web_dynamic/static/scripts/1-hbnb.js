$(document).ready(function () {
// Display checkbox clicked in list
  const checkList = [];
  $('.popover input').change(function () {
    const name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      checkList.push(name);
    } else {
      const index = checkList.indexOf(name);
      checkList.splice(index, 1);
    }
    let msgFiltered = checkList.join(', ');

    if (msgFiltered.length > 30) {
      msgFiltered = msgFiltered.slice(0, 30) + '...';
    }
    $('.amenities h4').text(msgFiltered);
  });
});
