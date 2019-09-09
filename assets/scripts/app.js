'use strict'

const authEvents = require('./auth/events')
const blogEvents = require('./blog/events')
const store = require('./store')

$(() => {
  blogEvents.onGetPosts()
  store.user = {}
  store.user._id = '888'
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#update-post').hide()
  $('#show-post').hide()
  $('#create-comment').hide()
  $('#create-post').hide()
  $('#update-comment').hide()
  $('#change-password').hide()
  $('#create-post').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-post').hide()
  // $('#index-posts').on('submit', blogEvents.onGetPosts)
  // $('#show-post').on('submit', blogEvents.onShowPost)
  $('#guestLogin').on('click', authEvents.onGuestLogin)

  $('#update-post').on('submit', blogEvents.onUpdatePost)
  $('#create-post').on('submit', blogEvents.onCreatePost)
  $('#create-comment').on('submit', blogEvents.onCreateComment)
  $('#update-comment').on('submit', blogEvents.onUpdateComment)
  $('#posts').on('click', '.delete-post', blogEvents.onDeletePost)
  $('#posts').on('click', '.delete-comment', blogEvents.onDeleteCommment)
  $('#posts').on('click', '.edit-post', blogEvents.onEditPostButton)
  $('#posts').on('click', '.edit-comment', blogEvents.onEditCommentButton)
  $('#posts').on('click', '.add-comment-to-post', blogEvents.onAddCommentToPost)
})
