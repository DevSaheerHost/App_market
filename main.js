$(document).ready(function() {
  $('splash').fadeOut(500);
  $('main').fadeIn(500);
  
  
  $('.game-btn').click(function() {
    $(this).css({'color':'white'})
    $('.app-btn').css({'color':'#9E9E9E'})
    $('.updates-btn').css({'color':'#9E9E9E'})
    
    $('app-layout').fadeOut(200)
    $('game-layout').fadeIn(100)
    $('updates-layout').fadeOut(200)
    
    $('banner').animate({'top': '-10px'}, 'fast')
    $('banner').css({'opacity': '0'})
    
    
  })
  
  
  $('.app-btn').click(function() {
    $(this).css({ 'color': 'white' })
    $('.game-btn').css({ 'color': '#9E9E9E' })
    $('.updates-btn').css({ 'color': '#9E9E9E' })
    
    
    
    $('app-layout').fadeIn(200)
    $('game-layout').fadeOut(100)
    $('updates-layout').fadeOut(200)
    
    $('banner').animate({'top': '0px'}, 'slow')
    $('banner').css({'transition':'opacity .8s' ,'opacity':'1'})
  
  
  })
  
  
  $('.updates-btn').click(function() {
    $(this).css({ 'color': 'white' })
    $('.app-btn').css({ 'color': '#9E9E9E' })
    $('.game-btn').css({ 'color': '#9E9E9E' })
    
    
    
    $('app-layout').fadeOut(100)
    $('game-layout').fadeOut(100)
    $('updates-layout').fadeIn(100)
    
    $('banner').animate({'top': '-10px'}, 'fast')
    $('banner').css({'opacity': '0'})
  
  
  })
  
  $('banner').animate({'top': '-10px'}, 'fast')
  $('banner').css({'opacity': '0'})
  
  
})
