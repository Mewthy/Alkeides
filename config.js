/*
	config.js - Configuration File
*/

/*
* Connection Details
*
* NOTE: Do NOT use "[server].psim.us", that is the client url
* If you don't know what are the server, port or serverid values
* run 'node getserver.js' to get them
*
*/

exports.server = 'brasil-dahora-mewthy.c9users.io';

exports.port = 8080;

exports.serverid = 'brasil-dahora-mewthy.c9users.io:8080';

exports.autoReconnectDelay = 10 * 1000;
exports.connectionTimeout = 2 * 60 * 1000;

/*
* Crash Guard
*
* If true, write errors to console instead of crashing
*/

exports.crashguard = true;

/*
* Security log
*/

exports.securityLog = {ageOfLogs: 7};

/*
* Watch Config
*/

exports.watchconfig = true;

/*
* Login Details
*/

exports.nick = "TMS Alkeides";

exports.pass = "Alkeidesisaboss";

exports.autoReloginDelay = 60 * 1000;

/*
* Rooms to join
*/

exports.rooms = ["lobby","temporaltower"];

/*
* exports.rooms = 'all'; //For joining all rooms
* exports.rooms = 'official'; //For joining official rooms
* exports.rooms = 'public'; //For joining not-official rooms
* exports.rooms = ['room1', 'room2']; //For joining some rooms
*/

exports.privateRooms = { //Rooms listed here will be ignored by seen command
	//privateroomname: true
};

exports.ignoreRooms = { //Rooms listed here will be ignored by CommandParser (bot is "asleep" in those rooms)
	//roomid: true
};

exports.initCmds = ['|/avatar 153'];

/*
* Auth configuration
*/

exports.exceptions = {
	"mewth": true,
	"flufi": true,
	"chandie": true,
	"roughskull": true
};

/*
* 'userid': 'rank' or 'userid': true for full access
* Example:
*
* exports.exceptions = {
*	'ecuacion': true,
*	'excepted': true
* };
*
*/

exports.ranks = ['+', '\u2605', '%', '@', '*', '#', '&', '~'];

exports.globalPermissions = {
	'voice': '+', //Min rank to broadcast in a server
	'driver': '%', //Min rank to mute. Also min staff rank
	'moderator': '@', //Min rank to ban
	'roomowner': '#', //Rank for using room settings commands like set, lang, mod...
	'admin': '~' //Rank for using global admin commands
};

/*
* Commands configuration
*/

exports.commandTokens = ['.']; //Array of valid command characters

exports.defaultPermission = '%';

exports.permissionExceptions = {
	//command: 'rank'
	'say': '#',
	'info': '+',
	'wall': '%',
	'autoban': '#',
	'banword': '#',
	'joinphrase': '#',
	'challenge': '%',
	'searchbattle': '~',
	'tournament': '@',
	'games': '#'
};

exports.botguide = "https://github.com/Ecuacion/Pokemon-Showdown-Node-Bot/blob/master/commands/README.md";

//When you pm the bot but don't use a command, it replies you this message. Example: "Hi, I'm a bot. Use .help to view a command guide"
//The var #USER is replaced with the username that pms it
exports.pmhelp = "Fuck you #USER and look at this to learn how to use me oilup Command guide: https://github.com/Ecuacion/Pokemon-Showdown-Node-Bot/blob/master/commands/README.md";

/*
* Language configuration
*/

exports.language = "english";

/*
* Configuration for console messages
*/

exports.debug = {
	/* Basic messages - Production Mode */
	error: true,
	ok: true,
	errlog: true,
	info: true,
	room: true,

	/* Monitoring */
	monitor: true,
	status: true,
	battle: false,

	/* Debug Mode */
	debug: false,
	cmdr: false,

	/* Low Level */
	recv: false,
	sent: false
};

/*
* Configuration for specific
* commands and features
*/

/*
* Moderation
*/

exports.moderation = {
	modException: '%', // Min rank for not receive moderation

	allowmute: true,
	disableModNote: false,

	MOD_CONSTS: {
		FLOOD_MESSAGE_NUM: 5,
		FLOOD_PER_MSG_MIN: 500, // this is the minimum time between messages for legitimate spam. It's used to determine what "flooding" is caused by lag
		FLOOD_MESSAGE_TIME: 6 * 1000,

		MIN_CAPS_LENGTH: 18,
		MIN_CAPS_PROPORTION: 0.8,

		MAX_STRETCH: 7,
		MAX_REPEAT: 4
	},

	values: {
		'spam-p': 3,
		'spam': 4,
		'spam-link': 4,
		'flood-hard': 3,
		'flood': 2,
		'caps': 1,
		'stretch': 1,
		'banwords': 2,
		'inapwords': 2,
		'servers': 2,
		'youtube': 2,
		'spoiler': 2,
		'replays': 1
	},

	modDefault: {
		//basic mods
		'caps': 1,
		'stretching': 1,
		'flooding': 1,
		'spam': 1,

		'bannedwords': 1,
		'inapropiate': 1,

		//specific mods
		'spoiler': 0,
		'youtube': 0,
		'psservers': 0,
		'replays': 0,

		//multiple infraction
		'multiple': 1,

		//zero tolerance
		'zerotol': 1
	},

	punishments: [
		"warn",
		"mute",
		"hourmute",
		"roomban"
	],

	psServersExcepts: {
		"showdown": 1,
		"smogtours": 1,
		"sim": 1
	},

	zeroToleranceDefaultLevel: 'h',
	zeroToleranceLevels: {
		'l': {name: 'Low', value: 1},
		'n': {name: 'Normal', value: 2},
		'h': {name: 'High', value: 3}
	}
};

/*
* Battles
*/

exports.aceptAll = false;

exports.maxBattles = 1;

exports.initBattleMsg = ['I\'ve called for all my brethren to help me with this battle', 'Tis\' be a good match betwen us', 'We serpentines value a good challenge. ENGARDE'];

exports.winmsg = ['Looks as if I\'m the superiority', 'Tis\' a battle I did not want the outcome for', 'You played well, perhaps you could be a brethren as well'];

exports.losemsg = ['Seems as if you are more superior.', 'You proved you are stronger than I.', 'I bow down to you, gladiator.'];

exports.battleMessages = {
	'crit': {
		'self': ['I see you have a true bond within yourself', 'How unfortunate', 'Nice shot but I shallth not let it stop me'],
		'foe': ['I do apologize for your misfortune', 'I have a bond within me and my Pokemon', 'I did not intend for that. But do not let it stop you']
	},
	'miss': {
		'self': ['Ahhh, we all make mistakes sometimes.', 'Come on #poke tis\' is what I trained you for.'],
		'foe': ['I see your #poke has dirt in their eye. Allow me to wipe it off', 'Don\'t be too hard on your #poke. Pressure is never ok.']
	},
	'par': {
		'self': ['Hopefully your #poke does not experience the agony of paralysis.'],
		'foe': ['Looks as if I will not be attacking.']
	},
	'flinch': {
		'self': ['Come on #poke you should break through that without Inner Focus', 'I do admit maybe this is a little scary'],
		'foe': ['I respect your #poke for being terrified of me']
	},
	'brn': {
		'self': ['Hopefully you can push through the attack stat', 'A true gladiator ignores burns in the wound'],
		'foe': ['A little burn does not phase me', 'A true gladiator shines until the very end']
	},
	'slp': {
		'self': ['I guess every gladiator needs a rest...'],
		'foe': ['Hopefully you dream well before I end you in a tragic nightmare']
	}
};

exports.battleModules = {
	/* Algorithms for use in battles */
	"challengecup1v1": "ingame-nostatus",
	"1v1": "ingame-nostatus"
};

//exports.battleLog = {ageOfLogs: 1}; // Days

exports.abandonedBattleAutojoin = true;

exports.ladderCheckInterval = 10 * 1000;

exports.ladderNumberOfBattles = 1;

exports.formatAliases = {
	'random': 'Random Battle',
	'randomdoubles': 'Random Doubles Battle',
	'randomtriples': 'Random Triples Battle',
	'doubles': 'Doubles OU',
	'triples': 'Smogon Triples',
	'vgc': 'Battle Spot Doubles (VGC 2015)',
	'vgc2015': 'Battle Spot Doubles (VGC 2015)',
	'ag': 'Anything Goes',
	'oras': 'OU',
	'bw': '[Gen 5] OU',
	'dpp': '[Gen 4] OU',
	'adv': '[Gen 3] OU',
	'gsc': '[Gen 2] OU',
	'rby': '[Gen 1] OU'
};

/*
* Tournaments
*/

exports.tourDefault = {
	format: 'ou',
	type: 'elimination',
	maxUsers: null,
	timeToStart: 30 * 1000,
	autodq: 1.5,
	scoutProtect: false
};

exports.leaderboards = {};

/* Leaderboard example:
exports.leaderboards['tournaments'] = {
	winnerPoints: 5,
	finalistPoints: 3,
	semiFinalistPoints: 1,
	battlePoints: 0,
	onlyOfficial: true // If true, only official tours (must use .official command) will be counted
};
*/

/*
* Youtube
*/

exports.youtube = {
	enableByDefault: false
};

/*
* Chat Logger
*/

exports.chatLogger = {
	rooms: [],
	ignore: {'tournament': ['update', 'updateEnd'], 'formats': true, 'challstr': true, 'updateuser': true, 'queryresponse': true},
	logIntroMessages: true,
	ageOfLogs: 7 //in days (max age of logs, 0 to keep logs infinitely)
};

/*
exports.logServer = {
	port: 5400,
	bindaddress: null,
	users: {
		'admin': {
			name: 'Administrator',
			pass: 'password',
			access: {'room1': 1, 'room2': 1}
		}
	},
	rooms: {
		'room1': {private: true},
		'room2': {private: true}
	}
};
*/

/*
* Auto-Invite
*/

exports.autoInvite = [
	//{linked: 'public room linked', private: 'private room', rank: '+'}
];

/*
* GitHub
* Read this: https://developer.github.com/webhooks/creating/
*/

exports.github = {
	room: 'development',
	secret: "",
	port: 3420
};

/*
* Groupchats
*/

exports.groupchats = {};

exports.groupChatTryJoinInterval = 60 * 1000;

/* Test example
exports.groupchats['groupchat-ecuacion-test'] = {
	toJoin: ['/join groupchat-ecuacion-test'],
	onJoin: ['Hi guys!'],
	onLeave: []
};
*/
