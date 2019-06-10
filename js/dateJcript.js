window.onload = function(){
			for (var i = 0;i<srr.length;i++){
			var oSrc = srr[i].src;
			var oName = srr[i].name;
			var oPrice = srr[i].price;
			console.log(srr[i].src,srr[i].name,srr[i].price)
			
			var str = `<li class="l listContent02RightBox shadows" ">
				<a href="detail.html"> 
					<div class="listContent02RightBoxImg">
						<img src="${oSrc}"class="listContent02RightBoxImg"/>
					</div>
					<p id="listContent02RightBoxP1">${oName}</p>
					<p id="listContent02RightBoxP2" >${oPrice}</p>
					</a>
				</li>`;
		document.getElementById('listContent02Right').innerHTML += str;
		console.log(str)
		}
}
