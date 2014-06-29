$( document ).ready( function() {
       


       var command_directory = {
         
          'whois': function( tokens ) {
           tokens.length
           var dirname = tokens[1];
           if(tokens.length == 1 || dirname == ''){
               return 'Unavailable format.<br>Example: \'whois ZlaDiaXxX\' (\'whois Name\')<br> Example: \'whois ZlaDiaXxX\' (\'whois LastnameFirstname\')<br>Or both<br>I only have very few people here. If you are missed, do remind me.';
           }else{
              switch (dirname){
                  case 'ZlaDiaXxX':
                  return 'There creator!';
                  break;
                  
                  case 'Emirik':
                  return 'You Know Who Im';
                  break;
                  
                  case 'Anonymous':
                  return 'Hackers?!';
                  break;
                  
                  case 'anonymous':
                  return 'Hackers?!';
                  break;
                  
                  case 'Hacker':
                  return 'A super nice person! Thank God for letting me know you!';
                  break;
                  
                  case '李响':
                  return '这个世界上最好的朋友，她在我心里的位置不可能被超越';
                  break;
                  
                  case '李欣蔚':
                  return '多欣慰啊！最好的朋友！准备以后弄点啥，玩死小苹果';
                  break;
                  
                  case '王子琪':
                  return '我老姐！老姐等我去找你玩啊啊啊啊！最亲的人有木有！';
                  break;
                  
                  case '梁丹妮':
                  return '初恋，不知道是不是初恋的美好，但这是我永远不会忘记、也是记忆最深刻的一段感情。也是我最希望拾起的感情。';
                  break;
                  
                  case 'Exit':
                  return 'Your Stuck Here Now LoL.';
                  break;
                  
                  case 'help':
                  return 'I cant!';
                  break;
                  
                  case '王子天':
                  return '就是我！不过估计你已经知道了';
                  break;

                  
                  default:
                  return 'No such person yet added';
              }
           }
           

         },
         
      };


      for( var j in command_directory ) {
        $.register_command( j, command_directory[j] );
      }

           });
