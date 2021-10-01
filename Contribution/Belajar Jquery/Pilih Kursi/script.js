$(document).ready(function(){
	$(".belum-dipilih").click(function(){
		let totalKursiDibeli = 2;
		let KursiSayaPilih = $(".total-kursi-saya-pilih").length;

		if (totalKursiDibeli == KursiSayaPilih){
			alert("Anda Sudah Memilih " + totalKursiDibeli);
		}else{
			$(this).addclass("kursi-saya-pilih");

			$("#total-kursi-saya-pilih").html(KursiSayaPilih + 1);
		}

	});
});