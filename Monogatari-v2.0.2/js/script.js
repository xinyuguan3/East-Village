/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the East Village',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'g': {
		name: 'Ben关',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?什么是你的名字',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save存储': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'g Hi {{player.name}} Are u awake?<br>你醒啦!？',
		{
			'Choice': {
				'Dialog': 'g Welcome to East Village?欢迎来到东村',
				'Who are you?你是谁': {
					'Text': 'Who are you?你是谁',
					'Do': 'jump Whou'
				},
				'Who are thou?您是谁': {
					'Text': 'Who are thou?<br>您是谁',
					'Do': 'jump Whou'
				},
				'?': {
					'Text': '?',
					'Do': 'jump ?'
				},
				'I want to switch a guidance.我需要换一个人来解说': {
					'Text': '?',
					'Do': 'jump SwitchGuidance'
				}
			}
		}
	],

	'Whou': [
		'g 我是东村唯一的导游Ben!<br>I am 关--the only guidance in east village!',
		'g 非常开心见到您，百年以来我们村子由于地处边远，很少见到亲爱的旅人!<br>So pleased to meet you, for hundreds of years we barely see any traveller due to distant village',
		'g 接下来我将带您游览东村!<br>Follow up I will show you around the east village!',
		'end'
	],

	'Whothou': [

		'g You can do it now.',

		'show message Help',

		'g Go ahead and create an amazing Game!',
		'g I can’t wait to see what story you’ll tell!',
		'end'
	],

	'?':[
		'g 亲爱的朋友，为什么要露出疑惑的表情呢？Why question mark me my dear friend?',
		'end'
	],

	'SwitchGuidance':[

		'g 好的明白了，那么即将由我的搭档周为您导览<br>'
	]
});