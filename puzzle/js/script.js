// Берем размер экрана пользователя
var devWidth = $(window).width();
// Размеры блоков при загрузке страницы
$(document).ready(function() {
	// Выставляем ширину для всех блоков равной ширине устройства
	$(".head_block").width(devWidth);
	$(".main_content").width(devWidth);
	$(".footer").width(devWidth);
});
// Изменение размеров блоков при событии изменения размеров экрана
$(window).resize(function() {
	$(".head_block").width(devWidth);
	$(".main_content").width(devWidth);
	$(".footer").width(devWidth);
});
// Изменение размеров блоков при событии изменения ориентации дисплея
window.addEventListener("orientationchange", function() {
	$(".head_block").width(devWidth);
	$(".main_content").width(devWidth);
	$(".footer").width(devWidth);
});

Также можно применять фиксированные значения в зависимости от разрешения экрана:
// Берем размер экрана пользователя
var devWidth = $(window).width();
// Размеры блоков при загрузке страницы
// Аналогично будут строится и реакции на другие события
$(document).ready(function() {
	// Для экранов больше 600, но меньше 1000 пикселей
	if(devWidth>600 && devWidth<1000) {
		$(".head_block").width(700);
		$(".main_content").width(700);
		$(".footer").width(700);
	}
	// Для экранов больше 1000, но меньше 1600 пикселей
	else if(devWidth>1000 && devWidth<1600) {
		$(".head_block").width(1200);
		$(".main_content").width(1200);
		$(".footer").width(1200);
	}
	// Для остальных экранов, которые не подошли под предыдущие условия
	else {
		$(".head_block").width(1800);
		$(".main_content").width(1800);
		$(".footer").width(1800);
	}
	// Внимание! последнее условие также сработает на мобильные устройства
	// с небольшим разрешением (320, 480 пикселей), т.к. они не подходят
	// ни под одно наше условие
});