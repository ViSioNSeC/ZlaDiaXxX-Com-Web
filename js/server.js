$( document ).ready( function() {
        $('#wterm').wterm( {  PS1: '>', WIDTH: '100%', HEIGHT: '98%', WELCOME_MESSAGE: 'Welcome To ZlaDiaXxX.com <br>====================<br> <br /> Type \'help\' to begin ',AUTOCOMPLETE:false });
      });


       var command_directory = {
         
         'home': function( tokens ) {
         document.location.href = 'home'; 
                
         },
         
         'Home': function( tokens ) {
         document.location.href = 'home'; 
                
         },
         
         '404': function( tokens ) {
         document.location.href = '404';    
         },
         
         'reg': function( tokens ) {
         window.open ('http://zladiax.com/home/wp-login.php?action=register'); 
                
         },
         
         'mine': function( tokens ) {
         window.open ('http://mine.zladiax.com'); 
                
         },
         
         'cs': function( tokens ) {
         window.open ('http://cs.zladiax.com/'); 
                
         },
         
         'login': function( tokens ) {
         window.open ('http://zladiax.com/home/wp-login.php'); 
                
         },
         
         'log': function( tokens ) {
         window.open ('http://zladiax.com/home/wp-login.php'); 
                
         },
         
         'music': function( tokens ) {
         window.open ('http://zladiax.com/matrix.html');
                
         },
         
         
         'about': function( tokens ) { 
         return '<pre>ZlaDiaXxX <br>Hacker <br>Hometown Lithuania<br>Study UK College<br>I love software designing, hacking, human-computer interaction designing<br>I am also interested in music/gaming directing, <br> basketball, football, potography, traveling and girls<br>However, I love playing games the most<br><br>If you are interested in my web, please type \'resume\'<br>or<br>Type \'home\' to enter my homepage</pre>';
                
         },
         
          'xxx': function( tokens ) { 
        return 'There is no Porn.';
                
         },
         
         'Anonymous': function( tokens ) { 
         window.open ('at/anon.zip'); 
        return 'Thx For Downloading Trojan LoL.';
                
         },
         
         'cont': function( tokens ) { 
         return '-------------------------------<br>Email: me@ZlaDiaXxX.com<br>Cell: &nbsp;001(226)***-8999<br>-------------------------------<br>Type \'email\' to send me an email';
                
         },
         
         'link': function( tokens ) {
           return '<pre>Available links:<br>           youtube        facebook         zladiax            google            etc<br>Example: use \'goto google\' to enter google.com<\pre>'

         },
         
          'goto': function( tokens ) {
           tokens.length
           var dirname = tokens[1];
           if(tokens.length == 1 || dirname == ''){
               return 'Unavailable format. More information type \'link\'';
           }else{
              switch (dirname){
                  case 'blog':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'Blog':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'Home':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'home':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'google':
                  window.open ('http://google.com'); 
                  return 'Official Website of Google opened in new window';
                  break;
                  
                  case 'facebook':
                  window.open ('http://facebook.com'); 
                  return 'Facebook\' like page opened in new window';
                  break;
                  
                  case 'youtube':
                  window.open ('http://youtube.com/user/zladiax'); 
                  return 'Youtube\' subscribe page opened in new window';
                  break;
                  
                  case 'zladiax':
                  window.open ('http://zladiax.com'); 
                  return 'ZlaDiaXxX.com Home Page opened in new window';
                  break;
                  
                  case 'etc':
                  window.open ('http://anonops.com'); 
                  return 'Anonops.com Home Page opened in new window';
                  break;
                  
                  case 'hack':
                  window.open ('http://hack.com'); 
                  return 'hack.com opened in new window';
                  break;



                  default:
                  return 'No such directory';
              }
           }
           
        },
         
         
         'date': function( tokens ) {
          var now = new Date();
          return 'Today is ' + now.getDate() + '-' +
                 now.getMonth() + '-' +
                 ( 2000 + now.getYear() ) + '. OMG, are you sure you do not know this?'
        },
         'cls': function( tokens ) {
			$('.undefined').html('');
		},
         'r': function( tokens ) {
			window.location.reload(); 
		},
         'exit': function( tokens ) {
			window.opener=null;
			window.open("","_self");
			window.close();
		}

      };


      for( var j in command_directory ) {
        $.register_command( j, command_directory[j] );
      }

      $.register_command( 'help', function() {
        return '<pre>Please use the following commands:<br>  about     Show who ZlaDiaXxX is<br>  cont      Contact me<br>  home      Go to my homepage and blog<br>  login     Log in ZlaDiaXxX.com<br>  reg       Create a member in ZlaDiaXxX.com<br>  link      Tell me some good websites<br>  goto      Move to a specific link in \'link\'<br>  cls       Clear the screen<br>  whois     Search for the people<br>  r         Refresh<br>  date      Show the date of today<br>  music     Music with Matrix<br>  exit      Exit ZlaDiaXxX.com<br>There are many other commands not listed, try yourself. <br>Example: \'hackers?\' or \'cheats\'(cheat code of The World)'

      });
