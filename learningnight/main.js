$(function () {
  var $talks = $('.talks');
  var $talkInfo = $('.talk-info').clone();

  $('#download').click(update);
  $('#add-talk').click(function() {
    $talks.append($talkInfo.clone());
  });
  $('#datepicker').datepicker({ autoclose: true});
});

var header = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:wp="http://wordpress.org/export/1.2/">',
  '  <channel>',
  '<title>Learning Night</title>',
  '<language>en</language>',
  '<wp:wxr_version>1.2</wp:wxr_version>',
  '<wp:base_site_url>http://wordpress.com/</wp:base_site_url>',
  '<wp:base_blog_url>http://learningnight.com</wp:base_blog_url>',
  '<generator>http://wordpress.com/</generator>'
];

var footer = [
  '  </channel>',
  '</rss>'
];

var talkTemplate = [
  '<item>',
  '  <title><?TalkTitle?></title>',
  '  <dc:creator>learningnight</dc:creator>',
  '  <description/>',
  '  <content:encoded><![CDATA[<p class="meta"><span class="author">by <?TalkAuthor?></span> <span class="location">at <?EventLocation?></span></p>',
  '    <p class="description"><?TalkDescription?></p>',
  '    <p class="description"><a href="TEST LINK">Slides Link</a></p>]]></content:encoded>',
  '  <excerpt:encoded><![CDATA[]]></excerpt:encoded>',
  '  <wp:post_date>2016-08-01 00:00:00</wp:post_date>',
  '  <wp:comment_status>closed</wp:comment_status>',
  '  <wp:ping_status>closed</wp:ping_status>',
  '  <wp:post_name>test-talk</wp:post_name>',
  '  <wp:status>publish</wp:status>',
  '  <wp:post_parent>0</wp:post_parent>',
  '  <wp:menu_order>0</wp:menu_order>',
  '  <wp:post_type>post</wp:post_type>',
  '  <wp:post_password/>',
  '  <wp:is_sticky>0</wp:is_sticky>',
  '  <category domain="post_tag" nicename="has-slides"><![CDATA[Has Slides]]></category>',
  '  <category domain="post_tag" nicename="has-video"><![CDATA[Has Video]]></category>',
  '</item>'
].join('\r\n');

function getVal($el, id) {
  return $($el.find(id)[0]).val();
}

function populateTemplate($talkInfo, date, location) {
  var variables = {
    'TalkTitle': getVal($talkInfo, '#title'),
    'TalkAuthor': getVal($talkInfo, '#author'),
    'EventLocation': location,
    'TalkDescription': getVal($talkInfo, '#description')
  };

  //TODO: add has-slides and has-video when appropriate
  //TODO: make post-name
  //TODO: add links when appropriate

  return talkTemplate.replace(/<\?(\w+)\?>/g, function(match, name) {
    return variables[name];
  });
}

function update() {
  var newXml = header;

  var $eventInfo = $('.event-info');
  var date = getVal($eventInfo, '#datepicker-input');
  var location = getVal($eventInfo, '#location');

  $('.talk-info').each(function() {
    var $talkInfo = $(this);
    var talk = populateTemplate($talkInfo, date, location);
    newXml = newXml.concat(talk);
  });

  newXml = newXml.concat(footer).join('\r\n');

  $('#result-xml').val(newXml);
  $('#download-link')
    .attr('href', 'data:text/xml;base64,' + btoa(newXml))
    .attr('download', 'learningnight' + date + '.xml');
  $('#generated').show();
}

if (!window.btoa) {
  // Source: http://www.koders.com/javascript/fid78168FE1380F7420FB7B7CD8BAEAE58929523C17.aspx
  btoa = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var result = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      result += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
    } while (i < input.length);
    return result;
  };
}
