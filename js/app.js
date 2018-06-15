$(function(){
	$('.start, svg').click(function(){
		$('#target').css({
			'transition' 				: '1s transform',
			'transform' 				: 'rotate(-90deg)',
			'transform-origin'			: '50% 50%',
			'animation-timing-function'	: 'linear',
		});
		setTimeout(function(){
			$('#bow1').css({
				'transform'					: 'translateY(135px)',
				'transition' 				: '2s transform',
				'animation-timing-function'	: 'ease-out',
			});
			$('#r1, #r2').css({
				'transition' 				: '2s transform',
				'transform' 				: 'rotate(-70deg)',
				'transform-origin'			: '50% 50%',
				'animation-timing-function'	: 'ease-out',
			});
			$('#l1, #l2').css({
				'transition' 				: '2s transform',
				'transform' 				: 'rotate(70deg)',
				'transform-origin'			: '50% 50%',
				'animation-timing-function'	: 'ease-out',
			});
			setTimeout(function(){
				$('#bow1').css({
					'transform'					: 'translateY(-350px)',
					'animation-timing-function'	: 'lineral',
					'transition' 				: '1s transform',
				});
				$('#l1, #l2').css({
					'transition' 				: '.75s transform',
					'transform' 				: 'rotate(0deg)',
					'animation-timing-function'	: 'lineral',
				});
				$('#r1, #r2').css({
					'transition' 				: '.75s transform',
					'transform' 				: 'rotate(0deg)',
					'animation-timing-function'	: 'lineral',
				});
				setTimeout(function(){
					$('#bow1').css({
						'transform'					: 'translateY(-650px)',
						'animation-timing-function'	: 'lineral',
					});
					$('#l1, #l2').css({
						'transition' 				: '1s all',
						'transform' 				: 'translateY(-120px) translateX(5px)',
						'animation-timing-function'	: 'lineral',
					});
					$('#r1, #r2').css({
						'transition' 				: '1s all',
						'transform' 				: 'translateY(-120px) translateX(-5px)',
						'animation-timing-function'	: 'lineral',
					});
					$('#r2, #l2').css({
						'transition' 				: '1s all',
						'opacity'					: '0',
						'animation-timing-function'	: 'lineral',
						'transform' 				: 'translateY(-120px) translateX(-5px) scale3d(.5, .5, 1)',
					});
					$('#r1, #l1').css({
						'transition' 				: '1s all',
						'animation-timing-function'	: 'lineral',
						'animation-timing-function'	: 'lineral',
						'stroke-width'				: '18',
						'transform' 				: 'translateY(-130px) translateX(6px) scale3d(.5, .5, 1)',
					});
						
					setTimeout(function(){
						$('#r1, #r2, #l1, #l2, #bow1').css({
							'opacity'					: '0',
						});
						setTimeout(function(){
							$('#bow1').css({
								'transform'					: 'translateY(650px)',
							});
							setTimeout(function(){
								$('#bow1').css({
									'transform'					: 'translateY(190px)',
									'opacity'					: '1',
								});
								$('#rings-1, #rings-2, #rings-3').css('opacity', '1');
									setTimeout(function(){
										$('#rings-1, #rings-2, #rings-3').css('opacity', '0');
										$('#bow1').css('transform', 'translateY(0px)');
										$('#r1, #r2, #l1, #l2, #bow1').css({
											'opacity' 		: '1',
											'transition' 	: '0s',
										});
										$('#r1, #r2, #l1, #l2').css({
											'transform'		: 'translateY(-0) translateX(0) scale3d(1,1,1)',
											'stroke-width'	: '14'
										});
										$('#target').css('transform' , 'rotate(0deg)')
									},1500);
							},600);
						},300);
					},200);
				},100);
			},2250);
		},1000);
	});

	$('.start-2, svg').click(function(){
		$('#line').css("d", "path('M 200 0 L 200 0')");
		$('#top').css({
			'stroke-width'		: '11',
			'transform'			: 'scale(1.5) scaleX(-1) rotate(180deg) translateX(-65px) translateY(0px)'
		})
		$('#b1').css({
			'stroke-width'		: '14',
			'transform'			: 'rotate(90deg) scale3d(1.2,1.2,1) translateY(78px) translateX(15px)',
			'transform-origin'	: '50% 50% 0'
		})
		$('#b2').css({
			'stroke-width'		: '9',
			'transform'			: 'rotate(90deg) scale3d(1.8,1.8,1) translateY(-5px) translateX(-110px)',
			'transform-origin'	: '50% 50% 0'
		})
		
		$('#t1').css({
			'stroke-width'		: '14',
			'transform'			: 'scale3d(1.2, 1.2, 1) translateY(-61px) translateX(42px)',
		})
		$('#t2').css({
			'stroke-width'	: '10',
			'transform'		: 'scale3d(1.8,1.8,1) translateY(-75px) translateX(-5px)'
		})
		setTimeout(function(){
			$('.t').css({
				'transform'		: 'scale3d(1.15, 1.15, 1)'
			})
			$('.b').css({
				'transform'		: 'scale3d(1.15, 1.15, 1) translateX(-55px) translateY(-50px)'
			})
				setTimeout(function(){
					$('#square').css({
						'transform'			: 'scale3d(.35, 0, 1)',
						'opacity'			: '1'
					})
						setTimeout(function(){
							$('#square').css({
								'transform'			: 'scale3d(.35, .35, 1)',
								'opacity'			: '1'
							})
							setTimeout(function(){
								$('#square, #t1, #t2, #b1, #b2').css({
									'opacity'			: '0'
								})
								setTimeout(function(){
									$('#t1, #t2, #b1, #b2, .b, .t').css({
										'transform'			: 'scale3d(1,1,1) translateY(0px) translateX(0px)'
									})
									setTimeout(function(){
										$('#t1, #t2, #b1, #b2, .b, .t').css({
											'opacity'			: '1',
											'stroke-width'		: '14'
										})
										$('#line').css("d", "path('M 200 16 L 200 386')");							
									},1000);			
								},1000);
							},500);
						},750);
				},1000);
		}, 1000)

	});

	$('.start-3, svg').click(function(){
		$('#target').css({
			'transition' 		: '1s transform',
			'transform' 		: 'rotate(-90deg)',
			'transform-origin'	: '50% 50%',		
		});
		setTimeout(function(){
			$('#circle, #right, #left').css({
				'transform' 		: 'scale(.8)',
				'transform-origin'	: '50% 50%',
			});
			setTimeout(function(){
				$('#bow3').css("d", "path('M200,16 L200,1000')");
				$('#key').css('opacity', '1')
				setTimeout(function(){
					$('#key-arr').css('opacity', '1')
					setTimeout(function(){
						$('#circle, #right, #left').css({
							'transform' 		: 'scale(1)',
							'transform-origin'	: '50% 50%',
						});
					},2000);
				},1000);
			},1000);
		},1000);
	});
});
				


