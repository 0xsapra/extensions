function Store_chrome(){
		this.freq=[];
		this.now=[];
	}

var data_of_chrome=new Store_chrome();
var minutes=60;
var timer=minutes*60; //miutes* 
var ignore="https://www.google.com";
// var timer=1;
(function(){  

	document.getElementById('btn-2').addEventListener('click',function(){
			chrome.storage.sync.get('store_data',function(d){
				// d.store_data
				var c=document.createElement('div');
				var text=document.createTextNode(d.store_data.freq);
				console.log(d.store_data.freq);
				c.appendChild(text);
				document.getElementById('hider').appendChild(c);
			});

	});

	setInterval(function(){
		addDataToStore();
		addToChromeStore();
		},1000*timer);    // calls every 1 hour later

	setInterval(function(){
		chrome.storage.sync.get('store_data',function(d){
			var now_data=d.store_data.now;
			var freq_data=d.store_data.freq;
			var create_comman=create_commans(now_data,freq_data);
			data_of_chrome.freq=create_comman;
			stopUser();
		});
		},1000*timer*2); // calls every 2 hours 


})();

function addDataToStore(){
	chrome.windows.getAll({populate:true},function(windows){
  		windows.forEach(function(window){
    	window.tabs.forEach(function(tab){addUrl(tab.url);});
  		});
	});
	}
function addUrl(d){
	var dd1t=data_of_chrome.now;
	d=d.toString();
	if (d.toString().slice(0,4).toLowerCase()==="http"){
		var temp_now=d.indexOf("com");
		d=d.slice(0,temp_now+3);
		if (dd1t.includes(d)){}
		else{dd1t.push(d);}	
	}
	}
function addToChromeStore(){
	chrome.storage.sync.set({"store_data":data_of_chrome});
	}
function create_commans(nw1,nw2){
	var returner=[];
	for (var i = 0; i <nw1.length ; i++) {
			if(nw2.includes(nw1[i])===false){
				if(nw1[i].match("google.com")==null){
					returner.push(nw1[i]);
				}
			}
		}

	return returner ;
	}
function stopUser(){
	chrome.tabs.query({'active': true}, function (tabs) {
	    var url = getTheUrl(tabs[0].url);
	    if (data_of_chrome.freq.includes(url)){
	    	chrome.tabs.update(tabs.id, {url: "https://www.google.com"});
	   	}
	});
	}
function getTheUrl(x){
		var temp_now=x.indexOf("com");
		po=x.slice(0,temp_now+3);
		return po;}
function allOfIt(){
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis recusandae dolorem quidem a tempore, maxime id delectus, modi. Nobis et dignissimos ut temporibus cum odit incidunt autem tempora iste, eos.</div>
			<div>Cum beatae libero, maiores ut numquam neque voluptatibus quos soluta sunt ullam fugiat sit in nostrum harum explicabo expedita, perferendis dicta vel culpa nulla facilis accusamus, id excepturi. Magni, iusto.</div>
			<div>Cumque recusandae quasi repellendus voluptate, optio architecto dolore voluptatem aspernatur ut quis? Eaque nesciunt, inventore, delectus nulla, sequi quisquam animi eveniet pariatur provident error doloremque non impedit perferendis modi autem.</div>
			<div>Sunt nesciunt, beatae quidem libero magnam eius neque, maxime consectetur iure, vero ipsam nostrum totam repellendus at quod laboriosam, aut adipisci quia veniam qui quisquam. Voluptates adipisci, tempore nostrum quae!</div>
			<div>Ipsam harum velit architecto dicta illo possimus eveniet exercitationem molestiae distinctio error neque dolore consectetur repellat mollitia sit aspernatur quo iusto dolorem, excepturi. Iure ducimus culpa eveniet iste optio qui.</div>
			<div>Facilis perspiciatis esse quia adipisci tenetur reiciendis et voluptas tempora quis reprehenderit, assumenda libero consequatur eaque debitis porro asperiores tempore nulla a, incidunt? Velit nobis, error voluptates tempora, quos molestias.</div>
			<div>Veritatis consequatur, illo! Minima blanditiis, ipsa. Vero explicabo commodi facere consequuntur, corporis odit accusantium nemo dolores. Optio asperiores magni sequi obcaecati, ea eveniet fugit praesentium porro debitis, minus, ullam amet.</div>
			<div>Magni unde pariatur, ipsam mollitia, voluptatem veritatis hic incidunt error deserunt tempora consequuntur nesciunt. Ex repellendus, deserunt, commodi iure nobis quidem ad aliquid reiciendis dolorem earum ipsam eos hic cupiditate.</div>
			<div>Voluptatum non fugit, quaerat culpa ducimus. Ipsum illum qui, consequuntur harum sunt delectus cupiditate reiciendis iure, impedit dolorum! Ratione omnis praesentium quos quasi sequi eligendi voluptatibus iste id voluptates officia.</div>
			<div>Iure explicabo voluptas cumque, minima beatae a ipsam eveniet rem sunt commodi qui, minus soluta reiciendis iusto fugiat nobis consectetur. Corporis quas, ut at dolores veritatis, voluptatibus aliquam blanditiis pariatur.</div>
			<div>Suscipit quibusdam facere ex fuga, laborum impedit obcaecati consequuntur tempora beatae minus magnam dolorem possimus ad facilis accusantium ea vitae iure voluptatibus tempore rerum nihil! Minima dolorum ab, fugiat harum.</div>
			<div>Incidunt, harum mollitia quaerat, eaque molestias beatae inventore. Illum, voluptas nostrum facilis error itaque rem eaque minus eos exercitationem eligendi et pariatur quod consectetur, delectus dolores velit nobis tempora quo.</div>
			<div>Soluta itaque quae corporis assumenda accusantium earum, explicabo doloremque quasi consequuntur nam cumque voluptatum fuga quia, animi aperiam veniam. Ipsam porro molestiae ad tempora ullam officiis fugiat voluptate dignissimos iure.</div>
			<div>Iure voluptatibus quo culpa, deserunt cum saepe. In ut, quam dignissimos nobis, incidunt totam reiciendis reprehenderit sunt perferendis vero sed illum corrupti libero cumque natus labore excepturi amet veniam, rerum.</div>
			<div>Aperiam consequuntur rerum enim asperiores harum placeat tempora ut quibusdam maxime ipsum nulla fugiat veritatis, voluptas error eum explicabo! Impedit minus iure, nemo repellat iste nobis veniam corporis sit aut.</div>
			<div>Perferendis enim unde, neque minus ut ad debitis recusandae maxime ipsa consectetur, cupiditate nihil sunt quisquam accusantium doloremque ipsam repellat repellendus, temporibus, error ducimus repudiandae rerum. Modi tenetur ipsum delectus.</div>
			<div>Asperiores explicabo nobis eligendi distinctio fuga rerum voluptatum nulla voluptate, tempore, culpa cupiditate. Quia voluptas ipsum iste veritatis perferendis, provident fuga quaerat vel. Molestias iure quibusdam maxime, officiis earum consequatur!</div>
			<div>Porro voluptatem ut aspernatur esse, explicabo autem nisi quam modi eaque quaerat impedit voluptates maxime accusamus provident enim iste incidunt est veniam ducimus, sint voluptatum. At, sequi. Unde ad, voluptate?</div>
			<div>Molestias explicabo, eius esse sit labore deleniti, sunt velit hic enim aspernatur tempora voluptatum voluptatibus laudantium quibusdam quaerat aliquam. Delectus recusandae molestias enim dolore velit, ipsam aliquid deleniti, dolores temporibus?</div>
			<div>Harum consectetur rerum maiores perspiciatis voluptatem cumque, id aperiam atque eligendi facilis. Ducimus eveniet illo explicabo perspiciatis dolores ullam eius, amet labore fugit nemo, expedita architecto fuga, repudiandae necessitatibus aperiam!</div>
			<div>Unde tempore aperiam expedita necessitatibus magnam harum temporibus veniam magni minima dolor molestiae quos, nobis ipsam modi dignissimos accusantium numquam. Saepe fugit rem explicabo earum omnis tempora quibusdam doloribus quia.</div>
			<div>Ab illo dignissimos commodi voluptates cum animi qui eaque eos eius, labore numquam voluptatum expedita reiciendis. Libero aut nesciunt, ullam impedit molestiae, nemo, commodi debitis quasi, architecto assumenda molestias adipisci.</div>
			<div>Ex dolorem eos asperiores dolore id porro? Delectus sit odit eos blanditiis sint hic consequuntur mollitia facere nulla. Laboriosam blanditiis commodi, consequuntur magni deserunt illo quasi quas incidunt nobis earum!</div>
			<div>Id quidem voluptatum ex enim non expedita illo officiis sit voluptas suscipit ratione eius deleniti porro, nulla sunt corporis ea molestiae nisi autem adipisci quos minima nobis ipsa. Vel, provident.</div>
			<div>Delectus error, quisquam porro libero quasi quis obcaecati quos quas consectetur animi recusandae et nemo, ipsa quibusdam. Doloremque soluta harum dolorem, non earum nemo maxime hic autem, at? Ut, quidem!</div>
			<div>Hic fugiat blanditiis, vero, officiis commodi quas eius nam optio praesentium beatae repudiandae unde. Fugit earum aperiam provident, esse, debitis unde dolores, iure ipsam rem aut voluptatibus quas, voluptate inventore.</div>
			<div>Neque sit libero, architecto sunt, quisquam, laborum, dolorem nulla vitae fugiat tempore in. Sit minus molestiae, sed! Magni aut quod, sapiente libero harum, tempora, non nemo nisi officia, fuga fugit?</div>
			<div>Tempora aliquid maxime numquam, mollitia aperiam. Enim voluptas quae fuga ab. Maiores fuga vero quidem eos natus neque minima maxime, quibusdam, numquam deserunt voluptates quia distinctio quisquam adipisci dolorem recusandae.</div>
			<div>Asperiores numquam, maxime corporis tempora autem minus fugit dignissimos veniam, iste aut assumenda magnam beatae doloribus, excepturi cupiditate illum magni pariatur officiis voluptatum quia nulla nesciunt. Ut dolores enim quibusdam!</div>
			<div>Perferendis cumque ipsa voluptates blanditiis! Officia sequi dignissimos amet architecto, sed sit optio, laudantium obcaecati ratione facere quis, in porro, cumque natus. Sapiente quibusdam non, doloribus cupiditate totam, adipisci ipsum?</div>
			<div>Eius, culpa, praesentium natus, sunt facere dicta ipsum fugiat molestias maiores reiciendis saepe atque magnam architecto rerum. Modi voluptates est deserunt minus doloribus incidunt possimus nesciunt culpa, dolorum? Optio, beatae!</div>
			<div>Consectetur exercitationem molestiae accusamus! Inventore tenetur error nemo, adipisci, ipsa optio eveniet eius! Deleniti, dolorem ea recusandae sunt dolorum labore est nulla molestiae ad blanditiis incidunt non cum itaque officiis!</div>
			<div>Labore consequatur pariatur odio inventore molestias nesciunt tempore optio architecto ex libero repellat temporibus doloribus aliquam assumenda repellendus harum, nemo autem nihil omnis aliquid rem reprehenderit eius perspiciatis! Sit, iure!</div>
			<div>Autem odit voluptatem sequi quisquam, rem, illum obcaecati magni delectus quo ad id distinctio recusandae magnam ipsa ipsam dolorum totam doloribus ratione ea dolores cupiditate voluptates? Quod quaerat, eum suscipit!</div>
			<div>Aliquam vitae laborum ipsa aut voluptate omnis dolores, iure, reiciendis nihil temporibus eius magnam totam doloremque ratione asperiores architecto mollitia veniam accusantium impedit, odio quasi. Mollitia porro, a expedita fugit?</div>
			<div>Dolorem earum iusto sint fugiat ea, consequatur, id, assumenda incidunt sequi quasi molestiae autem quae repellat non praesentium laudantium ab sit harum? Quos, maiores atque beatae, voluptatem doloremque harum omnis.</div>
			<div>Velit dolore fuga, libero voluptatum, autem repudiandae enim dignissimos in omnis impedit saepe? Beatae vel iure recusandae non consectetur magnam ex, laborum esse expedita, fugit similique dolores neque ut corrupti.</div>
			<div>Ducimus architecto obcaecati, voluptas quisquam accusantium, sed voluptate voluptatibus iure dolorem dicta quasi inventore aperiam aspernatur labore nobis nemo vitae amet odit! Vel consequatur ipsum ratione esse, facere dolorum rerum.</div>
			<div>Dolores qui doloribus repellendus quibusdam expedita, totam asperiores dolore veritatis nam excepturi inventore alias distinctio, repellat, laboriosam provident voluptatem nesciunt omnis quisquam dolorem praesentium, nemo laudantium voluptates non eligendi est.</div>
			<div>Quo qui, ipsam, repellendus ab dicta, facere itaque quaerat neque velit eligendi officia ea a. Laudantium maiores ad est explicabo, illum eveniet provident. Laborum, dolore saepe eos cupiditate. Similique, hic!</div>
			<div>Velit dignissimos eaque, nemo alias in possimus sed laudantium assumenda? Impedit cupiditate sapiente eligendi autem placeat sunt quos saepe, tenetur eius officiis mollitia delectus voluptatem provident voluptatibus est porro, molestias.</div>
			<div>Deserunt aliquam ea inventore, dolorem, veniam blanditiis pariatur, accusantium reiciendis praesentium neque sit nihil adipisci, quam. Dolorem sint, omnis neque, vitae, doloribus eos fugiat maxime necessitatibus pariatur rem alias temporibus.</div>
			<div>Tempora perspiciatis, sequi ullam quas? Repellat harum veritatis quidem accusantium fuga recusandae, nulla, fugiat! Expedita natus maxime, sit voluptatum assumenda doloremque explicabo minus id facere! Ad labore veniam facilis id?</div>
			<div>Fuga, iure quaerat iusto magni quas itaque ipsum ea eveniet aut commodi veritatis minus tenetur labore totam harum ullam id laboriosam rem debitis eius, architecto quibusdam qui! Itaque, architecto, quod?</div>
			<div>Ex nam, itaque voluptatibus non voluptate eius nobis consequuntur libero aliquid iusto, maiores saepe quos. Illum earum, dolorum eum possimus, voluptas laboriosam maxime, minima necessitatibus beatae dignissimos tempora doloremque error.</div>
			<div>Fuga debitis sequi inventore quia, doloremque error, est ducimus veritatis, aliquid ex porro veniam molestiae officiis amet iusto quibusdam dolorum adipisci consequuntur eius. Nostrum, fugit, aperiam. Et, tempora, ullam. Itaque!</div>
			<div>Nobis, quibusdam, fugiat. Laborum blanditiis et, ad modi aspernatur illo minima iste a eum nulla sed voluptates libero debitis hic. Eaque laudantium accusamus aperiam est repellendus error eos consequuntur provident!</div>
			<div>Praesentium inventore, voluptas iusto quasi exercitationem alias itaque deserunt enim atque nisi quia voluptatibus consectetur ea ut natus quae ratione expedita maiores iste id numquam temporibus. Tempora vitae sit, consequuntur?</div>
			<div>Eaque cupiditate mollitia harum non necessitatibus nemo vero consequatur facilis earum quae fugiat velit sunt dolore, dicta molestiae officiis illo. Odio, eaque, velit. Fugiat delectus, hic quidem totam repellat sequi.</div>
			<div>Placeat enim at aspernatur magni incidunt expedita, sint minus odit assumenda voluptate. Vitae deserunt tenetur iusto accusantium. Perferendis porro error cum illum vel! Hic corporis, totam ipsa enim nostrum, voluptatum!</div>
			<div>At deleniti nostrum nam velit inventore exercitationem porro, mollitia ea sed. Quas excepturi voluptates perferendis soluta nisi alias omnis voluptas voluptatum molestiae, modi eligendi nesciunt, nihil earum! Rem, quidem, praesentium.</div>
			<div>Doloribus pariatur eligendi unde distinctio libero dicta debitis porro et possimus accusantium quos velit aut, totam, aspernatur eius quam cum corporis nostrum accusamus, impedit dolorum quibusdam. Eveniet repellendus molestiae incidunt.</div>
			<div>Quas quaerat, perspiciatis. Dicta id assumenda impedit blanditiis ullam, molestiae earum voluptatem, tempora tenetur ad velit voluptatibus quibusdam voluptas pariatur odit iusto officia facere illum eveniet consequuntur, et neque enim!</div>
			<div>Nisi dignissimos quia illo! Consectetur, sit. Maxime pariatur accusamus quibusdam assumenda sequi, dignissimos tenetur reprehenderit ut odit facilis delectus ad eos nam blanditiis, ex dolor repellat, a porro tempora vero.</div>
			<div>Consequatur eos consequuntur officiis at. Odio suscipit beatae eligendi architecto aut, magnam eius sunt quos quis, eos. Cum id, recusandae obcaecati distinctio culpa aliquid nam omnis minus quod optio nisi!</div>
			<div>Repellat architecto aspernatur ipsam, vitae eveniet illum. Perferendis, at fugit quod assumenda eligendi accusantium eos sed consequuntur, quibusdam aliquid? Voluptate quis, non adipisci dignissimos earum quia, at molestias vero illum.</div>
			<div>Suscipit quaerat reprehenderit consequuntur dolore magni. Nesciunt ipsam dolorum soluta quis rem, illo consequuntur iusto, tenetur magnam harum sequi nisi ex adipisci nemo velit. Dolorum numquam quidem vero aspernatur porro.</div>
			<div>Optio cupiditate culpa odio ratione esse, rem, sunt. Harum labore corporis sed architecto sapiente itaque maiores. Voluptate repellendus dolorem, provident nisi suscipit. Consequuntur est debitis similique alias. Atque, quidem quos.</div>
			<div>Dolore ea voluptates dolorem, modi deleniti nisi recusandae, tempora sequi animi iste repellendus praesentium quidem quibusdam dolores doloremque maxime fuga aut expedita nihil, soluta atque deserunt. Rerum deleniti aperiam in?</div>
			<div>Facilis ut doloribus dolorem ullam voluptatibus officia dolore amet eligendi nam nostrum quo aliquam, pariatur necessitatibus quia? Minima rem deleniti commodi sed a magni, molestiae distinctio, omnis iusto officia, eius!</div>
			<div>Obcaecati deserunt, in accusamus. Illum exercitationem ipsam, nostrum ipsum assumenda ea a fugit deserunt? Commodi incidunt autem, dolores sit, tenetur nisi, suscipit debitis neque voluptas tempore minima dolorem mollitia at.</div>
			<div>Aliquid quibusdam obcaecati eos, animi ab hic exercitationem ipsam commodi iste doloribus error nulla voluptates, perspiciatis eum quas debitis repellendus excepturi, explicabo neque ipsa est magnam. Minima consequuntur saepe provident.</div>
			<div>Necessitatibus quo porro ut accusantium numquam alias, veniam ipsam. Perspiciatis quas, dolorum pariatur dignissimos, beatae mollitia tempora voluptatum, consequuntur perferendis reiciendis voluptates officiis, amet autem delectus temporibus. Cum, repudiandae, dolore.</div>
			<div>Maxime, quis, nam! Doloribus delectus nemo unde pariatur id autem ullam reiciendis ipsa laboriosam vel earum, mollitia odit iusto tempore, voluptatum officiis est distinctio dicta non. Similique, repellendus. Est, pariatur?</div>
			<div>Et mollitia provident quos sequi, possimus inventore minima officia itaque dolor dicta optio sint, ipsum rem qui consequuntur accusamus modi sed delectus. Minima facere aliquam impedit quidem veniam adipisci in?</div>
			<div>Laboriosam nihil praesentium tenetur, aut cupiditate id facere delectus mollitia quod molestiae impedit inventore vero enim ipsum esse quo non quisquam dolores quibusdam nam qui, dignissimos nostrum a, dolore expedita?</div>
			<div>Nam, veniam magni dolore, autem officia fugiat aspernatur quibusdam commodi vero explicabo, odio eaque reiciendis quam eveniet dolorem labore. Ullam ea facilis recusandae ipsa earum dignissimos qui veritatis dolorum rerum.</div>
			<div>Modi nam, quod voluptatem obcaecati autem veniam et, officia aperiam tenetur iusto corrupti natus, fugiat numquam fugit. Voluptates fugit ducimus consequatur sequi nisi, incidunt blanditiis eaque voluptas deleniti laborum minus.</div>
			<div>Nostrum, neque. Sit voluptas atque consequatur debitis porro, reiciendis veritatis blanditiis enim vero? Dolorum ab asperiores, reiciendis repellendus expedita similique ex optio rem labore maiores sequi ipsa totam atque repellat.</div>
			<div>Sint aliquid eum, rerum harum laborum velit neque exercitationem facere ad modi debitis repellat dicta! Aliquam praesentium repellendus animi, reiciendis tempore doloribus iusto, corporis earum explicabo qui, vero ut inventore.</div>
			<div>Culpa debitis, tempore sint natus inventore excepturi ex, tenetur expedita numquam porro quibusdam facilis dolorum earum. Praesentium in incidunt distinctio cupiditate, fugiat ipsa accusantium! Repellendus ipsa non facilis, quas iure.</div>
			<div>Autem reprehenderit assumenda repudiandae totam corrupti dolores fugiat soluta porro libero fugit explicabo magnam, doloribus, accusamus veritatis! Amet iusto pariatur id laudantium consequatur dicta, corrupti quis tempora laboriosam animi illum.</div>
			<div>Asperiores vitae optio dolorem qui quod inventore repellendus? Placeat quibusdam ipsum aliquid id harum distinctio, omnis enim perferendis eaque, vel sunt ipsam veniam sapiente qui dolore est quis nam explicabo.</div>
			<div>Rerum consequatur mollitia nisi facere quia aperiam, impedit architecto doloremque, libero id ut dicta voluptatibus omnis itaque quo molestias dolorem saepe obcaecati nesciunt rem eligendi explicabo repellat ipsa delectus! Vel!</div>
			<div>Assumenda placeat nulla delectus, soluta ipsum quos atque distinctio sapiente natus veniam, modi maxime, voluptate ab, quis tenetur. Animi nobis distinctio a enim vel delectus similique maiores ipsam error necessitatibus.</div>
			<div>Perferendis adipisci est voluptatem. Itaque quidem culpa ipsam quod quos sint, hic temporibus, ea quisquam et animi consequatur porro labore dicta officia doloribus laboriosam similique saepe amet quam id sapiente.</div>
			<div>Quo ad error odit voluptates, quas, sunt! Cupiditate dolore eius, accusamus tenetur tempore ipsa fugiat ratione, ipsam corporis facilis enim cum nemo unde tempora non aliquam quaerat maxime assumenda quas?</div>
			<div>Omnis maxime libero praesentium ea necessitatibus consectetur cum ratione veritatis? Dolorem consequuntur, quod consequatur dignissimos quaerat! Magni, quas, fugiat culpa cumque officia perferendis ipsam, ex quod, laudantium vitae accusantium id.</div>
			<div>Quidem beatae laborum modi optio adipisci harum vel at minus dicta error, dolorum eius, non facilis fuga! Modi, quia quibusdam doloremque vero similique sapiente, illum error asperiores quaerat quo natus?</div>
			<div>Ad labore saepe reprehenderit sapiente debitis, culpa a laborum cumque, quam commodi laudantium perspiciatis suscipit accusamus placeat tempora eveniet enim aut. Sequi iure officiis dolorem distinctio, non saepe nam quaerat?</div>
			<div>Quod necessitatibus eius deserunt architecto nostrum quae, doloribus at quos totam quasi reprehenderit minima et cum maiores harum excepturi consequuntur deleniti sit voluptas praesentium earum natus eligendi, accusantium dolor. Molestias!</div>
			<div>Vero sit quas neque et, eligendi cum voluptatem voluptates voluptate natus dolores amet ullam quaerat eum, temporibus quasi, eaque. Eligendi quas deserunt eius suscipit? Officia ratione fugit itaque eaque eius!</div>
			<div>Reprehenderit illum ipsa ex, iure dicta voluptates nesciunt dolor, deleniti necessitatibus, ipsum, odio sint. Culpa quas aperiam suscipit nostrum tenetur animi, modi sit dolore odit fuga. Totam, similique mollitia aperiam!</div>
			<div>Totam mollitia laudantium assumenda, eaque nesciunt ab, fuga voluptate nihil, ex quidem neque sequi aspernatur! Deserunt voluptate at doloremque. Sunt dolorem repudiandae quis cumque quaerat reiciendis, reprehenderit ab blanditiis perspiciatis.</div>
			<div>Corporis eaque tempora cum numquam totam eveniet iure perferendis voluptate ad sunt quidem magnam asperiores earum dolorum, autem voluptatem expedita, molestias, nobis deserunt ab assumenda alias dicta temporibus! Incidunt, atque.</div>
			<div>Incidunt excepturi, voluptates, vero voluptatibus veritatis laboriosam et officiis dolore. Eaque ipsam, dolore ipsum, laborum aliquam omnis aut iusto facere. Architecto quo, voluptatibus dolor, ab vel nihil modi veniam perspiciatis.</div>
			<div>Corporis facilis blanditiis alias voluptatem autem excepturi, harum, nam quo quis rerum quisquam sit perferendis at magni expedita reprehenderit itaque vel officiis corrupti amet dolores voluptate. Dolorem veritatis doloribus, quidem.</div>
			<div>Cum asperiores veritatis, qui ipsa dolorem dicta possimus dignissimos nobis vel minus. Itaque a nesciunt molestiae, corporis odio asperiores vitae, nemo similique est culpa voluptate tempora placeat cum suscipit maxime?</div>
			<div>Excepturi voluptatum nesciunt ipsa aliquam quis, vitae et aspernatur in, nihil sunt non. Et, quas, eveniet. Voluptas quisquam fugit labore sequi, nobis cumque consequatur earum dolores beatae delectus, necessitatibus, tempora?</div>
			<div>Autem repudiandae, labore eligendi minima quidem repellendus ex optio asperiores, molestias expedita nemo officiis soluta aliquam molestiae animi. Sunt, ratione, eos! Ratione quae rem exercitationem id. Pariatur rem suscipit, soluta.</div>
			<div>Ratione consequatur assumenda doloribus corrupti cupiditate ab ut voluptatum, similique dolores libero temporibus pariatur, sint enim, magnam at. Velit nemo id libero ducimus maxime laudantium explicabo nisi repellat molestias, culpa.</div>
			<div>Quae sunt voluptatibus maxime vel optio iste dolore illum, officia unde repellendus maiores dicta earum laborum cum nam assumenda debitis autem ducimus excepturi nisi, molestiae at sapiente quaerat sint, harum.</div>
			<div>Iste, id placeat a necessitatibus quasi adipisci mollitia numquam saepe soluta porro ipsum voluptatem dignissimos totam neque eligendi aspernatur autem voluptatum, nihil, quas ratione eaque. Possimus fuga eaque tenetur quas!</div>
			<div>Maxime dolores sunt voluptates repellat laudantium consequatur in sed similique officia eaque dicta, deserunt aliquam, vero praesentium facilis accusantium adipisci molestiae, corporis tenetur ducimus. A qui quae maxime temporibus eos.</div>
			<div>Optio velit alias, autem modi! Molestiae praesentium temporibus modi neque expedita magni tempore ut, deserunt consectetur inventore amet suscipit qui voluptatum delectus, illum veritatis non atque, nesciunt possimus ex id?</div>
			<div>Quis cupiditate amet, iusto asperiores dolorem distinctio, quidem! Temporibus, magni quisquam porro dicta libero excepturi ea illum laudantium eaque, cupiditate maiores suscipit ipsam tempore necessitatibus? Maiores, beatae delectus libero voluptatem.</div>
			<div>Non rerum expedita soluta velit quaerat molestiae libero maiores nisi tempore ipsa optio, voluptatem odit cumque quisquam ipsum! Cum quia, eligendi id sit unde nihil alias debitis aliquam ratione iusto.</div>
			<div>Labore voluptas a eveniet ipsum rem ducimus aliquid, aut omnis dolore quaerat velit delectus impedit iusto dolorem doloremque nam earum itaque voluptatum tempore. Explicabo fuga itaque dicta perspiciatis, illum labore!</div>
			<div>Reiciendis quibusdam excepturi sunt delectus temporibus possimus error, illum eaque distinctio perspiciatis? Nobis commodi aperiam est numquam rerum cupiditate soluta accusamus, aspernatur aliquam? Facere, officiis aliquam amet delectus! Laudantium, natus!</div>
			<div>Porro accusamus labore consequatur quod sit sed nulla maiores qui iusto cupiditate delectus aliquam explicabo minima fugit veritatis, culpa dolores in inventore assumenda quisquam libero quae amet numquam enim! Rerum.</div>
			</div>
}

