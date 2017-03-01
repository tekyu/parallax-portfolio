	function ver(){
		var name=document.getElementById('name');
		var email=document.getElementById('email');
		var message=document.getElementById('message');
		var placeholder='This field is empty';
		function adding(setting){
			$(setting).attr('placeholder',placeholder).css({'border':'1px solid #FF6961'});
		}
		function removing(setting){
			$(setting).css({'border':'1px solid #b9b9b9'});
		}

		var result=1;
			if(name.value == '' || name.value == undefined){
				adding(name);
				result=0;
			} else {removing(name); result=1;}
			
			if(message.value == '' || message.value == undefined){
				adding(message);
				result=0;
			} else {removing(message); result=1;}
			
			if (email.value.search('@')==-1 || email.value == '' || email.value == undefined){
				adding(email);
				result=0;
			} else {removing(email); result=1;}

		if(result)
			{return true;}
		else
			{return false;}


	}