gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/
function achyut_img_animation() {
    const boxes = gsap.utils.toArray('.achyut-animation-style1,.achyut-animation-style2,.achyut-animation-style3,.achyut-animation-style4,.achyut-animation-style5,.achyut-animation-style6,.achyut-animation-style7');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}

function getpercentage(x, y, elm) { 
    elm.find('.achyut-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}

function achyut_title_animation() {

	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {

		var achyut_var = jQuery('.achyut-heading, .achyut-heading-subheading');
		if (!achyut_var.length) {
			return;
		}
		const quotes = document.querySelectorAll(".achyut-heading-subheading .achyut-title, .achyut-heading .achyut-title");

			quotes.forEach(quote => {

				//Reset if needed
				if (quote.animation) {
					quote.animation.progress(1).kill();
					quote.split.revert();
				}

				var getclass = quote.closest('.achyut-heading-subheading, .achyut-heading').className;
				var animation = getclass.split('animation-');
				if (animation[1] == "style4") return

				quote.split = new SplitText(quote, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				gsap.set(quote, { perspective: 400 });

				if (animation[1] == "style1") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						y: "90%",
						rotateX: "-40deg"
					});
				}
				if (animation[1] == "style2") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						x: "50"
					});
				}
				if (animation[1] == "style3") {
					gsap.set(quote.split.chars, {
						opacity: 0,
					});
				}
				quote.animation = gsap.to(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: .02
				});
			});
		},
	});
}

var achyut_animation_number_rotate = function() {
	jQuery('.odometer').each(function() {
		var self = jQuery(this);
		self.waypoint(function(direction) {
			var v = self.data('to');
			self.html(v);
		}, { offset: '85%' });
	});
}

// ** Hover Image Effect ** \\
function achyut_hover_img() {
	const achyutHoverImg = gsap.utils.toArray(".achyut-element-service-style-3 article");
	achyutHoverImg.forEach((target) => {
		const achyutImg = target.querySelector('.achyut-hover-img');
		const t1 = gsap.timeline();
		t1.to(achyutImg, {
			opacity: 1,
			duration: 0.4,
			scale: 1,
			ease: "Power2.easeOut"
		})
		target.achyutHoverAnim = t1.play().reversed(true);
		target.addEventListener("mouseenter", achyuthoverimg);
		target.addEventListener("mouseleave", achyuthoverimg);
		target.addEventListener("mousemove", (e) => {
			let xpos = e.offsetX;
			let ypos = e.offsetY;
			const t1 = gsap.timeline();
			t1.to(achyutImg, { x: xpos, y: ypos });
		});
	});

	function achyuthoverimg() {
		this.achyutHoverAnim.reversed(!this.achyutHoverAnim.reversed());
	}
}

function achyut_verticel_layered_pinning() {
	var achyut_var = jQuery('.achyut-element-portfolio-style-4');
	if (!achyut_var.length) {
		return;
	}
	ScrollTrigger.matchMedia({
		"(min-width: 992px)": function() {

			let achyutpanels = gsap.utils.toArray(".achyut-element-portfolio-style-4 .Achyutfotech-box-content");
			const spacer = 100;
		
			let achyutheight = achyutpanels[0].offsetHeight + 0;
			achyutpanels.forEach((achyutpanel, i) => {
			ScrollTrigger.create({
				trigger: achyutpanel,
				start: () => "top 0px", 
				endTrigger: '.achyut-element-portfolio-style-4', 
				end: `bottom top+=${achyutheight + (achyutpanels.length * spacer)}`,
				pin: true, 
				pinSpacing: false, 
			});
			});
		},
		"(max-width:992px)": function() {
			ScrollTrigger.getAll().forEach(achyutpanels => achyutpanels.kill(true));
		}
	});
}

function achyut_tween_effect() {

	const achyut_tween = gsap.utils.toArray('.achyut-tween-effect');
	if (achyut_tween.length == 0) return

	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {

			achyut_tween.forEach((box, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: box,
						start: "top 90%",
						end: "bottom 70%",
						scrub: 1
					},
					defaults: { ease: "none" }
				});

				let xpos_val = box.getAttribute('data-x-start');
				let xpose_val = box.getAttribute('data-x-end');
				let ypos_val = box.getAttribute('data-y-start');
				let ypose_val = box.getAttribute('data-y-end');

				let scale_x_val = box.getAttribute('data-scale-x-start');
				let scale_xe_val = box.getAttribute('data-scale-x-end');

				let skew_x_val = box.getAttribute('data-skew-x-start');
				let skew_xe_val = box.getAttribute('data-skew-x-end');
				let skew_y_val = box.getAttribute('data-skew-y-start');
				let skew_ey_val = box.getAttribute('data-skew-y-end');

				let rotation_x_val = box.getAttribute('data-rotate-x-start');
				let rotation_xe_val = box.getAttribute('data-rotate-x-end');
				gsap.set(box, { xPercent: xpos_val, yPercent: ypos_val, scale: scale_x_val, skewX: skew_x_val, skewY: skew_y_val, rotation: rotation_x_val });
				tl.to(box, { xPercent: xpose_val, yPercent: ypose_val, scale: scale_xe_val, skewX: skew_xe_val, skewY: skew_ey_val, rotation: rotation_xe_val })
			});
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(box => box.kill(true));
		}
	});
}

var achyut_multi_icon_box_hover_effect = function() {
	jQuery(".achyut-multi-icon-box-hover-effect .achyut-miconheading-style-1:nth-child(2),.achyut-multi-icon-box-hover-effect .achyut-miconheading-style-3:nth-child(2)").eq(0).addClass('achyut-mihbox-hover-active');
	jQuery(".achyut-multi-icon-box-hover-effect .achyut-miconheading-style-1,.achyut-multi-icon-box-hover-effect .achyut-miconheading-style-3").mouseover(function() {
		var main_row = jQuery(this).closest('.achyut-multi-icon-box-hover-effect');
		jQuery('.achyut-miconheading-style-1,.achyut-miconheading-style-3', main_row).removeClass('achyut-mihbox-hover-active');
		jQuery(this).addClass('achyut-mihbox-hover-active');
	}).mouseout(function() {
		var main_row = jQuery(this).closest('.achyut-multi-icon-box-hover-effect');
		jQuery('.achyut-miconheading-style-1,.achyut-miconheading-style-3', main_row).removeClass('achyut-mihbox-hover-active');
		jQuery(this).addClass('achyut-mihbox-hover-active');
	});
}

var achyut_active_hover = function() {

	var achyut_var = jQuery('.achyut-element-blog-style-4,.achyut-element-portfolio-style-2,.achyut-element-portfolio-style-3,.achyut-element-service-style-4,.achyut-element-static-box-style-1,.achyut-element-static-box-style-2');

	if (!achyut_var.length) {
		return;
	}

	achyut_var.each(function() {
		var achyut_Class = '.achyut-hover-inner li,.achyut-blog-style-4,.swiper-hover-slide-nav .swiper-slide,.achyut-service-style-4,.achyut-content-box.col-md-3,.achyut-card-box-wrapper';
		jQuery(this)
			.find(achyut_Class).first()
			.addClass('achyut-active');
		jQuery(this)
			.find(achyut_Class)
			.on('mouseover', function() {
				jQuery(this).addClass('achyut-active').siblings().removeClass('achyut-active');
			});
	});
}

function achyut_mousehover_tooltip() {

	jQuery("<div id='achyut-portfolio-cursor'><div class='achyut-tooltip-content'></div></div>").appendTo("body");

	var achyut_text = jQuery('.achyut-element-portfolio-style-3 .Achyutfotech-post-content');
	var achyut_cursor = jQuery("#achyut-portfolio-cursor");

	jQuery(document).on('mousemove', function(e) {
		var achyut_x = e.clientX;
		var achyut_y = e.clientY;
		achyut_cursor.css({ "transform": "translate3d(" + achyut_x + "px, " + achyut_y + "px, 0px)" });
	})

	if (achyut_text.length) {
		achyut_text.each(function() {
			var elm = jQuery(this);
			var achyut_html = elm.find('.Achyutfotech-box-content').html();
			elm.on('mouseenter', function() {
				achyut_cursor.addClass('active').find('.achyut-tooltip-content').html(achyut_html);
			}).on('mouseleave', function(e) {
				achyut_cursor.removeClass('active').find('.achyut-tooltip-content').html('');
			});
		});
	}
}

function achyut_portfolio3_slider() {
	jQuery(".achyut-element-portfolio-style-3").each(function() {

		if (typeof Swiper !== 'undefined') {

			var achyut_port_slide = new Swiper('.swiper-hover-slide-nav', {
				spaceBetween: 0,
				autoplay :false,
				loop:true,
				slidesPerView: '1',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints	: {
					1025: {
						slidesPerView: '4',
					},
					767: {
						slidesPerView: '3',
					},
					575: {
						slidesPerView: '2',
					},
				},
			});
			var achyut_hover_fade1 = new Swiper(".achyut-hover-image-faded", {
				speed: 6000,
				effect: 'fade',
			});
			jQuery('.achyut-main-hover-faded .swiper-hover-slide-nav .swiper-slide').on('mouseover',function(e) {
				e.preventDefault();
				var myindex = jQuery(this).attr('data-swiper-slide-index');
				achyut_hover_fade1.slideTo(myindex, 2000, false);
			});
		}
	});		
}

/* Static Box style1 Slide */
var achyut_staticbox_hover_slide = function() {
	if (typeof Swiper !== 'undefined') {
		var achyut_hover1 = new Swiper(".achyut-static-image", {
			grabCursor: true,
			effect: "slide",
			allowTouchMove: false
		});
		var achyut_hover2 = new Swiper(".achyut-hover-number", {
			grabCursor: true,
			effect: "creative",
			creativeEffect: {
				prev: {
					translate: [0, "-170%", 1],
				},
				next: {
					translate: [0, "100%", 0],
				},
			},
			allowTouchMove: false
		});
		jQuery('.achyut-main-static-slider li').on('mouseover',function(e) {
			e.preventDefault();
			var myindex = jQuery(this).index();
			achyut_hover1.slideTo(myindex, 500, false);
			achyut_hover2.slideTo(myindex, 500, false);
		});
	}
}

function achyut_extend_section() {
	const achyut_elm = gsap.utils.toArray('.achyut-extend-animation');
	if (achyut_elm.length == 0) return	
	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {
			 
			achyut_elm.forEach(section => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top 50%",
						end: "+=400px",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				tl.fromTo(section, { clipPath: 'inset(0% 6% 0% 6% )' }, { clipPath: 'inset(0% 0% 0% 0% )', duration: 1.5 })	
			});			 
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

function achyut_animate_custom_text() {
	jQuery("#js-rotating").Morphext({
		animation: "flipInX",
		speed: 3000,
	});
}

// function achyut_ihbox_move() {

// 	var achyut_var = jQuery('.achyut-move-sofa');
// 	if (!achyut_var.length) {
// 		return;
// 	}
// 	ScrollTrigger.matchMedia({
// 		"(min-width: 1200px)": function() {

// 			gsap.set(".achyut-move-sofa", { yPercent:20, })

// 			gsap.to(".achyut-move-sofa", {		
// 				yPercent: -50,
// 				scrollTrigger: {
// 					scrub: true,
// 					start: () => "top top", 
// 					end:() =>  "bottom top",
// 					scrub:2
// 				}
// 			});
// 		},
// 		"(max-width:1200px)": function() {
// 			ScrollTrigger.getAll().forEach(scrub => scrub.kill(true));
// 		}
// 	});
// }

function achyut_sticky() {

	ScrollTrigger.matchMedia({
		"(min-width: 1201px)": function() {
			let achyut_sticky_container = jQuery(".achyut-sticky-col");
			let section = achyut_sticky_container.closest('.section');
			if (!section[0]) {
				section = achyut_sticky_container.closest('.achyut-sticky-section');
			} 
			let tl = gsap.timeline({
				scrollTrigger: {
					pin: achyut_sticky_container,
					scrub: 1,
					start: "top top", 
					trigger: section,
					end: () => "+=" + ((section.height() + 250) - window.innerHeight), 
					invalidateOnRefresh: true
				},
				defaults: { ease: "none", duration: 1 }
			});
		},
	}); 
}

function achyut_coverflow_testimonial() {
	if (!jQuery('.achyut-element-testimonial-style-4').length) {
		return;
	}
	var achyut_coverflow = new Swiper('.achyut-element-testimonial-style-4 .achyut-coverflow', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: false,
		spaceBetween:30,
		slidesPerView: '1',	
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 300,
			slideShadows: false,
		},
		breakpoints	: {
			575: {
				slidesPerView: '2',
				centeredSlides: true,
			},
		},
	});		
}

function achyut_scale_video() {

	var achyut_var = jQuery('.achyut-element-video-scale-style-1');
	if (!achyut_var.length) {
		return;
	}

	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {

			const achyut_scale = gsap.timeline({		
			scrollTrigger: {
				trigger	: ".achyut-video-wrapper",
				scrub	: 0.8,
				start	: "top bottom",
				end		: "bottom top",
				ease	: "power5.out"
			}
			});
			achyut_scale.to(".achyut-video-wrapper", {
			duration	: 1,
			scale		: 1.5,
			});
			gsap.set(".achyut-element-video-scale-style-1 .achyut-ele-header-area", { yPercent: 50 });
			gsap.to(".achyut-element-video-scale-style-1 .achyut-ele-header-area", {
				yPercent: 280,
				scrollTrigger: {
					trigger	: ".achyut-element-video-scale-style-1 .achyut-ele-header-area",
					scrub	: 0.8,
					start	: "top top",
					end		: "center",
					ease	: "power5.out",
					
				}
			});
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(scrollTrigger => scrollTrigger.kill(true));
		}	
	});
}

var achyut_hover_slide = function() {
	if (typeof Swiper !== 'undefined') {
		var achyut_hover_slide = new Swiper(".achyut-hover-image", {
			grabCursor: true,
			effect: "slide",
			allowTouchMove: false,
			mousewheel: false,
		});		
	}
	jQuery('.achyut-main-hover-slider li').on('mouseover',function(e) {
		e.preventDefault();
		var myindex = jQuery(this).index();
		achyut_hover_slide.slideTo(myindex, 500, false);
	});
}

function achyut_card_verticel_pinning() {
	var achyut_var = jQuery('.achyut-element-card-box-style-1');
	if (!achyut_var.length) {
		return;
	}
	ScrollTrigger.matchMedia({
		"(min-width: 992px)": function() {

			let achyutpanels = gsap.utils.toArray(".achyut-element-card-box-style-1 .achyut-card-box-wrapper");
			const spacer = 0;
		
			let achyutheight = achyutpanels[0].offsetHeight + 120;
			achyutpanels.forEach((achyutpanel, i) => {
			ScrollTrigger.create({
				trigger: achyutpanel, 
				start: () => "top 100px", 
				endTrigger: '.achyut-element-card-box-style-1', 
				end: `bottom top+=${achyutheight + (achyutpanels.length * spacer)}`,
				pin: true, 
				pinSpacing: false, 
			});
			});
		},
		"(max-width:992px)": function() {
			ScrollTrigger.getAll().forEach(achyutpanels => achyutpanels.kill(true));
		}
	});
}

// function achyut_sticky_special() {
// 	if (jQuery('.achyut-sticky-col2-special').hasClass('.elementor-element-edit-mode')) {
// 		return;
// 	}
// 	ScrollTrigger.matchMedia({
// 		"(min-width: 1024px)": function() { 
// 			let achyut_sticky_2 = jQuery(".achyut-sticky-col2-special");
// 			let section = jQuery('.achyut-sticky-special'); 
// 			let section_height = achyut_sticky_2.height();
// 			const tweenOne = gsap.to(achyut_sticky_2, {
// 				y: - (section_height - 600),
// 				scrollTrigger: {
// 				  trigger: section,
// 				  pin: section,
// 				  scrub: true,
// 				  start: "top top+=140px",
// 				  end: () => '+=' + (section_height - 600),
// 				}
// 			}); 
// 		},
// 		"(max-width:1024px)": function() {
// 			ScrollTrigger.getAll().forEach(section => section.kill(true));
// 		}
// 	}); 
// }

function achyut_set_tooltip() {
    $('[data-cursor-tooltip]').each(function() {
        var thisele = $(this);
        var thisele_html = thisele.find('.Achyutfotech-box-content').html();
        thisele.attr("data-cursor-tooltip", thisele_html);
    });
}

// function achyut_staticbox_hover() {
// 	var achyut_var = jQuery('.achyut-element-static-box-style-1');
// 	if (!achyut_var.length) {
// 		return;
// 	}
// 	achyut_var.each(function() {
// 		var achyut_Class = '.swiper-static-slide-nav .achyut-hover-inner li ';
// 		jQuery(this)
// 			.find(achyut_Class).first()
// 			.addClass('achyut-active');
// 		jQuery(this)
// 			.find(achyut_Class)
// 			.on('mouseover', function() {
// 				jQuery(this).addClass('achyut-active').siblings().removeClass('achyut-active');
// 			});
// 	});
// }

/* Static Box Slider */
// var achyut_staticbox_hover_slide = function() {
// 	if (typeof Swiper !== 'undefined') {
// 		var achyut_hover = new Swiper(".achyut-hover-image-faded", {
// 			speed: 6000,
// 			effect: 'fade',
// 		});
// 		var achyut_hover1 = new Swiper(".achyut-hover-short-desc", {
// 			grabCursor: true,
// 			effect: "creative",
// 			creativeEffect: {
// 				prev: {
// 					translate: [0, "-170%", 1],
// 				},
// 				next: {
// 					translate: [0, "100%", 0],
// 				},
// 			},
// 			allowTouchMove: false
// 		});
// 		jQuery('.achyut-main-static-slider li').on('mouseover', function(e) {
// 			e.preventDefault();
// 			var myindex = jQuery(this).index();
// 			achyut_hover.slideTo(myindex, 1000, false);
// 			achyut_hover1.slideTo(myindex, 500, false);
// 		});
// 	}
// }

// function achyut_img_animation() {
// 	const boxes = gsap.utils.toArray('.achyut-animation-style1,.achyut-animation-style2,.achyut-animation-style3,.achyut-animation-style4,.achyut-animation-style5,.achyut-animation-style6,.achyut-animation-style7');
// 	boxes.forEach(img => {
// 		gsap.to(img, {
// 			scrollTrigger: {
// 				trigger: img,
// 				start: "top 70%",
// 				end: "bottom bottom",
// 				toggleClass: "active",
// 				once: true,
// 			}
// 		});
// 	});
// }

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});

// on ready
jQuery(document).ready(function() {
	achyut_animation_number_rotate();
	achyut_title_animation();
	achyut_verticel_layered_pinning();
	achyut_multi_icon_box_hover_effect();
	achyut_active_hover();
	achyut_portfolio3_slider();
	achyut_staticbox_hover_slide();
	achyut_coverflow_testimonial();
	achyut_scale_video();
	achyut_hover_slide();
	// achyut_staticbox_hover();
	// achyut_staticbox_hover_slide();
});

// on resize
jQuery(window).resize(function() {
	achyut_title_animation();
	achyut_img_animation();
	achyut_mousehover_tooltip();
});

// on load
jQuery(window).on('load', function(){
	// achyut_sticky_special();
	achyut_hover_img();
	achyut_animate_custom_text();
	achyut_img_animation();
	achyut_tween_effect();
	achyut_extend_section();
	achyut_sticky();
	achyut_card_verticel_pinning();
	
	jQuery('[data-magnetic]').each(function() { new Magnetic(this); });
	gsap.delayedCall(1, () =>
		ScrollTrigger.getAll().forEach((t) => {
			t.refresh();
		})
	);	
	
	setTimeout(cleaning, 500);
	function cleaning(){
		ScrollTrigger.refresh(); 
	}
});