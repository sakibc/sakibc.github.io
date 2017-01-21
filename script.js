//MAGIC NUMBERS EVERYWHERE...

// var galleryHeight;

$(document).ready(function() {
	$(".scroll-down").removeClass("hidden");
});

$(window).load(function() {
	var selectedThumb;
	var view = $(".quick-view"); //initialize it to something so fix widths works on resize
	var desc;
	var img;
	var wide = false;

	function makeWideDesc() {
		wide = true;
		desc.addClass("notransition");
		desc.addClass("wide");
		reflow(desc);
		desc.removeClass("notransition");
	}
	function makeThinDesc() {
		wide = false;
		desc.addClass("notransition");
		desc.removeClass("wide");
		reflow(desc);
		desc.removeClass("notransition");
	}

	$(window).on("resize", function() {
		window.requestAnimationFrame(fixSizes);
	});

	$(".scroll-down").on("click", function(event) {
		event.preventDefault();
		$($(this).attr("href")).velocity("scroll", 600);
	});

	$(".item").on("click", function(event) {
		if ($(window).width() > 568) {
			event.preventDefault();
		}
		else {
			return;
		}

		$("#gallery").velocity("scroll", 400);
		selectedThumb = $(this);
		selectedThumb.addClass("selected");
		selectedThumb.siblings().addClass("hidden");

		if (selectedThumb.hasClass("apk")) {
			view = $(".quick-view.apk");
		}
		else if (selectedThumb.hasClass("wr")) {
			view = $(".quick-view.wr");
		}
		else if (selectedThumb.hasClass("ec")) {
			view = $(".quick-view.ec");
		}
		else if (selectedThumb.hasClass("tnk")) {
			view = $(".quick-view.tnk");
		}

		desc = view.children(".desc-quick");
		img = view.children("img");
		imgHeight = img[0].naturalHeight;
		imgWidth = img[0].naturalWidth;
		aspectRatio = imgWidth/imgHeight;

		img.velocity({opacity: 1},200,"ease");

		if (aspectRatio > 1.4) {
			makeWideDesc();
		}
		else {
			makeThinDesc();
			finalWidth = getFinalWidth();
			finalHeight = finalWidth/aspectRatio;	//get final height

			desc.addClass("notransition");
			desc.css({
				top: 0,
				left: finalWidth,
				width: finalWidth/2,
				height: finalHeight
			});

			if (descOverflow()) {
				makeWideDesc();
			}
			reflow(desc);
			desc.removeClass("notransition");
		}

		finalWidth = getFinalWidth();
		finalHeight = finalWidth/aspectRatio;	//get final height

		desc.addClass("is-visible"); //pop open description

		if (wide) {			//get final height to animate gallery height
			desc.css({
				width: finalWidth,
				height: "auto"
			});
			descFinalHeight = desc.outerHeight();
			desc.css({width: 0, height: 0});
		}

		if (!wide) {
			desc.delay(180).queue(function() {
				$(this).css({
					top: 0,
					left: finalWidth,
					width: finalWidth/2,
					height: finalHeight
				});
				$(this).dequeue();
			});
		}
		else {
			desc.delay(180).queue(function() {
				$(this).css({
					top: finalHeight,
					left: 0,
					width: finalWidth,
					height: "auto"
				});
				$(this).dequeue();
			});
		}

		var thumbTop = selectedThumb.position().top;	//get dimensions of selected thumbnail
		var thumbLeft = selectedThumb.position().left;
		var thumbWidth = selectedThumb.width()*1.05;
		var thumbHeight = selectedThumb.height()*1.05;

		view.addClass("is-visible");
		view.css({ //start view at thumbnail's position
			top: thumbTop,
			left: thumbLeft,
			width: thumbWidth,
			height: thumbHeight
		});
		view.velocity({ //animate to final position
			top: 0,
			left: 20,
			width: finalWidth,
			height: finalHeight
		}, 200);

		setHeight(".gallery-items",".gallery-items");
		$(".gallery-items").velocity({"height": finalHeight},200,"ease");
		if (wide) {
			$(".gallery-items").velocity({"height": finalHeight + descFinalHeight},200,"ease");
		}
		//fix gallery height
	});

	$(".close").on("click", function() {
		var descFinalHeight = desc.outerHeight();
		desc.removeClass("is-visible");
		desc.css({
			left: 0,
			width: 0,
			height: 0
		});

		img.velocity({opacity: 0}, {duration: 200, delay: 200, ease:"ease"});

		var thumbImage = selectedThumb.children();
		var thumbTop = thumbImage.position().top;
		var thumbLeft = thumbImage.position().left;
		var thumbWidth = thumbImage.width();
		var thumbHeight = thumbImage.height();

		view.removeClass("is-visible");
		view.velocity({
			top: thumbTop,
			left: thumbLeft,
			width: thumbWidth,
			height: thumbHeight
		},{
			duration: 200,
			delay: 200
		}).delay(400).queue(function() {
			$(this).css({left: 0});
			$(this).dequeue();
		});

		selectedThumb.removeClass("selected");
		selectedThumb.siblings().removeClass("hidden");

		var oldHeight = $(".gallery-items").height();	//fix gallery height
		var currentScroll = $(window).scrollTop();
		$(".gallery-items").height("auto");
		var newHeight = $(".gallery-items").height();
		$(".gallery-items").height(oldHeight);
		$(window).scrollTop(currentScroll);
		if (wide) {
			$(".gallery-items").velocity({height: oldHeight - descFinalHeight}, 200, "ease")
			.velocity({height: newHeight}, 200, "ease");
		}
		else {
			$(".gallery-items").velocity({
				height: newHeight
			},{
				duration: 200,
				delay: 200,
				ease: "ease"
			});
		}
		var autoGalleryHeight = function() {
			$(".gallery-items").height("auto");
		};
		setTimeout(autoGalleryHeight, 450); //set height to auto on next frame to prevent animation end from unsetting it
		// $(".gallery-items").velocity({"height": 640},200,"ease");
	});

	function setHeight(toSet, toGet) {
		$(toSet).height($(toGet).height());
	}

	function getFinalWidth() {
		if (!wide) {
			return Math.min(640, ($(window).width() - 40)*2/3);
		}
		else {
			return Math.min(960, $(window).width() - 40);
		}
	}

	function descOverflow() {
		console.log(desc[0].scrollHeight);
		console.log(desc.innerHeight());
		return ((desc[0].scrollHeight - desc.innerHeight()) > 0);
	}

	function fixSizes() {
		if(view.hasClass("is-visible")) {
			view.height("auto");
			var finalWidth, finalHeight;

			if (aspectRatio < 1.4) {
				makeThinDesc();
				finalWidth = getFinalWidth();
				finalHeight = finalWidth/aspectRatio;	//get final height

				desc.css({
					top: 0,
					left: finalWidth,
					width: finalWidth/2,
					height: finalHeight
				});
				$(".gallery-items").height(finalHeight);
			}

			if (descOverflow() || wide) {
				makeWideDesc();

				finalWidth = getFinalWidth();
				finalHeight = finalWidth/aspectRatio;	//get final height

				desc.css({
					top: finalHeight,
					left: 0,
					width: finalWidth,
					height: "auto"
				});
				$(".gallery-items").height(finalHeight + desc.outerHeight());
			}

			view.css({
				width: finalWidth
			});
		}
	}

	function reflow(element) {
			var whyIsThisEvenAWarning = element[0].offsetHeight;
	}
});
