$(function(){
	
	(function(){
		var oText = $('#search').find('form input[type=text]');
		//console.log(oText.val());
		var aSpan = $('#search .menu span');
		var iNow = 0;
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		oText.val(arrText[iNow]);
		aSpan.each(function(index){
			$(this).click(
				function(){
					aSpan.attr('class','gradient');
					//aSpan[index].attr('class','active');
					//console.log(aSpan[index]);
					$(this).attr('class','active');
					iNow = index;
					oText.val(arrText[iNow]);
				}
			)
		});
		oText.focus(function(){
			if(oText.val()==arrText[iNow]){
				oText.val('');
			}
			
		});
		oText.blur(function(){
			if(oText.val()==''){
				oText.val(arrText[iNow]);
			}
		});
		
	})();
	
	(function(){
		var oUpdate = $('#update');
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
		var str = '';
		var iH = 0;
		var timer = null;
		var iNow = 0;
		var oBtnUp = $('#search .triangle_up');
		var oBtnDown = $('#search .triangle_down_red');
		

		for(var i=0;i<arrData.length;i++){
			str+='<li><p><em>'+arrData[i].name+'</em><span>'+arrData[i].time+'分钟前</span>写了一篇新文章：'+arrData[i].title+'</p></li>';
		}
		oUpdate.html(str);
		//console.log(str);
		iH = oUpdate.find('li').height();

		function doMove(num){
			iNow+=num;
			if(Math.abs(iNow) > arrData.length-1){
				iNow = 0;
			}else if(iNow > 0){
				iNow = -(arrData.length-1);
			}
			oUpdate.stop().animate({'top':iH*iNow},1000);
			
		}
		$('.status_bar').hover(function(){
			clearInterval(timer);
		},autoPlay);
		function autoPlay(){
			timer = setInterval(function(){
				doMove(-1);
			},3500);			
		}
		autoPlay();
		oBtnUp.on('click',function(){
			doMove(-1);
		});
		oBtnDown.on('click',function(){
			doMove(1);
		});
	})();
	
	(function(){
		var oTraffic = $('#traffic');
		var oShop = $('#ewshop');
		var srcArr = ['img/subway.png','img/456.jpg'];
		function toggleTab(obj){
			var aLi = obj.find('li');
			var aSpan = aLi.find('span');
			aLi.on('click',function(){
				aLi.removeClass('active');
				aLi.addClass('gradient');
				$(this).addClass('active');
				$(this).removeClass('gradient');
				//console.log(aSpan.length);
				aSpan.attr('class','triangle_down_gray');
				$(this).find('span').attr('class','triangle_down_red');
				//if(aLi.attr('class').indexOf('active')==-1){}		
				oTraffic.find('img').attr('src',srcArr[$(this).index()]);
			});			
		}
		toggleTab(oTraffic);
		
		//这边是上面的选项卡切换，封装了切换的函数
		toggleTab(oShop);
		var aLine = $('#traffic .con').find('span');
		//console.log(aLine.length);
		aLine.on('click',function(){
			aLine.attr('class','normal');
			$(this).attr('class','active');
			//console.log($(this).index());
		});
		
		
	})();
	
	(function(){
		var oImg = $('.gallery .show img');
		//alert(oImg.attr('src'));
		var aLi = $('.gallery li');
		var timer = null;
		var iNow = 0;
		function autoPlay(){
			timer = setInterval(function(){
			iNow++;
			iNow %= 3;
			//console.log(iNow);
			aLi.attr('class','');
			aLi.eq(iNow).addClass('active');
			var src = 'img/gallery_img'+(iNow+1)+'.gif';
			oImg.attr('src',src);
		},2000);		
	}
	autoPlay();
	aLi.on('click',function(){
		clearInterval(timer);
		var curSrc = $(this).find('img').attr('src');
		oImg.attr('src',curSrc);
		iNow = $(this).index();
		aLi.attr('class','');
		$(this).addClass('active');
		autoPlay();
	});
		
	})();

	(function(){
		var couponArr = [
			{'shop':'老北京一尊黄牛','save':'12%','print':'345'},
			{'shop':'汉莱国际美食','save':'15%','print':'400'},
			{'shop':'野田重装','save':'20%','print':'20'}
		];
		var lifestyleArr = [
			{'tag':'美食','content':'推荐几款性价比比较好的冰箱...','flag':'tick'},
			{'tag':'购物','content':'生活中哪些商品的包装有缺陷','flag':'flag'},
			{'tag':'休闲','content':'为什么我第一次进入保姆和宠物','flag':'tick'}
		];
		
		var oUl = $('#coupon_one .post ul');
		var oUl2 = $('#lifestyle .post ul');
		var aTitle = $('#coupon_one .title li');
		var aTitle2 = $('#lifestyle .title li');
		var aSpan = aTitle.find('span');
		var aSpan2 = aTitle2.find('span');
		//alert(aSpan.length);
		//alert(aTitle.length);
		var count = 0;
		var count2 = 0;
		var str ='';
		var str2 = '';
		str = '<li><a href="#"><span>'+couponArr[count]['shop']+'</span><span>'+couponArr[count]['save']+'</span><span>'+couponArr[count]['print']+'</span></a></li>';
		str = str+str+str+str+str;
		str2 = '<li><a href="#"><strong>[<em>'+lifestyleArr[count2]['tag']+'</em>]</strong><span>'+lifestyleArr[count2]['content']+'</span><span class='+lifestyleArr[count2]['flag']+'></span></a></li>';
		str2 = str2+str2+str2+str2+str2;
		oUl.html(str);
		oUl2.html(str2);
		aTitle.on('mouseover',function(){
			aTitle.attr('class','gradient');
			aSpan.attr('class','triangle_down_gray');
			aSpan.eq($(this).index()).attr('class','triangle_down_red');
			//console.log($(this).html());
			$(this).attr('class','active');
			count = $(this).index();
			//console.log(count);
			str = '<li><a href="#"><span>'+couponArr[count]['shop']+'</span><span>'+couponArr[count]['save']+'</span><span>'+couponArr[count]['print']+'</span></a></li>';
			//console.log(str);
			str = str+str+str+str+str;
			oUl.html(str);			
		});
		aTitle2.on('mouseover',function(){
			aTitle2.attr('class','gradient');
			aSpan2.attr('class','triangle_down_gray');
			aSpan2.eq($(this).index()).attr('class','triangle_down_red');
			$(this).attr('class','active');
			count2 = $(this).index();
			str2 = '<li><a href="#"><strong>[<em>'+lifestyleArr[count2]['tag']+'</em>]</strong><span>'+lifestyleArr[count2]['content']+'</span><span class='+lifestyleArr[count2]['flag']+'></span></a></li>';
			str2 = str2+str2+str2+str2+str2;
			oUl2.html(str2);			
		});

	})();
	
	(function(){
		var aLi = $('#bbs li');
		aLi.on('mouseover',function(){
			aLi.attr('class','');
			$(this).attr('class','active');
//			$('#bbs ol').on('mouseout',function(){
//				aLi.attr('class','');
//			});
		});

	})();

	(function(){
		var oUl = $('#lucky_today .con2 ul');
		var str = '';
		for(var i=0,num=0;i<40;i++){
			num = (i+1)%31;
			if(i<32){
				str += '<li>'+num+'</li>';
			}else{
				str += '<li class="grey">'+num+'</li>';
			}
			
		}
		oUl.append(str);
		//console.log(str);
		var aLi = $('#lucky_today .con2 li');
		//console.log(aLi.length);
		aLi.eq(23).addClass('current');
		var luckyData = [
				{'imgSrc':'img/lucky_today2.gif','date':29,'week':'WED','discription':'老店换新颖，丰泽园野田重装亮相...'},
				{'imgSrc':'img/bbs_img1.gif','date':30,'week':'THU','discription':'画皮之--日剧中的手机'}
			];
		for(var i=0,len=luckyData.length;i<len;i++){
			var num = luckyData[i].date+1;
			var url = 'url('+luckyData[i].imgSrc+') no-repeat 0 0/contain';
			//console.log(num+url);
			var detail = '<div class="detailPage"><img src='+luckyData[i].imgSrc+' /><strong>'+luckyData[i].week+'</strong><em>本日主题XX</em><span>'+luckyData[i].discription+'</span></div>';

			aLi.eq(num).css({'background':url,'color':'#f00'});
			//console.log(detail);
			aLi.eq(num).append(detail);
		}
		
		//var aDetail = $('#lucky_today li');
		//console.log(aDetail.length+aDetail.html());
		aLi.on('mouseover',function(){
			$(this).find('.detailPage').css('display','block');
			aLi.on('mouseout',function(){
				$(this).find('.detailPage').css('display','none');
			});
		});
		
		
	})();

});