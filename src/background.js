var username = $('.vcard-username').text();
var html = '<a style="margin-right:6px;" href="https://gist.github.com/'+ username +'" type="submit" class="btn btn-sm js-toggler-target" aria-label="Unfollow this person" title="Go to the '+ username +'\'s Gist">'+ username +'\'s Gist</a>';
$('.tabnav > .right').prepend(html);
