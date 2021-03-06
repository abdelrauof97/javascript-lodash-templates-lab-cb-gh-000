function createPost() {
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  var postTemplate = _.template(document.getElementById('post-template').innerHTML)
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  var postTitle = document.getElementById('postTitle').value
  var post = document.getElementById('postBody').value
  var postAuthor = document.getElementById('postAuthor').value

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate

  var blogSection = postTemplate({'title': postTitle, 'body': post, 'author': postAuthor});
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById('post')

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection
}

function postComment() {
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  var commentText = document.getElementById('comment').value
  var commenterName = document.getElementById('commenter').value

  var commentSection = commentTemplate({'comment': commentText, 'commenter': commenterName})
  var commentsSection = document.getElementById('comments')
  comments.innerHTML += commentSection
}
