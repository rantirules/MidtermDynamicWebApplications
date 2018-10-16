var SlackBot = require("slackbots");
    var channel = "general";

    var bot = new SlackBot({
        token: "YOUR API TOKEN GOES HERE",
        name: "logbotapptest"
    });

    bot.on("start", function() {
        bot.postMessageToChannel(channel, "Hey Guys!");
    });

    bot.on("message", function(data) {
        if (data.type !== "message") {
            return;
        }

        handleMessage(data.text);
    });
/* the text contained in the message event will be passed to this hangleMessage function
I am defining the handleMessage function so that the bot only responds to messages that contain
#LL or #ll

Here you could technically use the .toLowerCase() method
which should convert any #LL or #Ll input to #ll */
    function handleMessage(message) {
        switch(message) {
            case "#LL":
            case "#ll":
                sendsInsult();
                break;
            default:
                return;
        }
    }

    function sendsInsult() {
        var insult = getsInsult();
        bot.postMessageToChannel(channel, insult);
    }

    function getsInsult() {
        var insultList = [
            "Your parents must be so proud",
            "I see that you are making good use of your NYU tuition.",
            "Is that it?",
            "haha",
            "Are you finished?",
            "That sounds fun...",
            "No-one cares.",
            "nerd",
            "nice humblebrag",
            "I bet I'm smarter than you",
            "Well done!",
            "interesting...."
        ];
        return insultList[Math.floor(Math.random() * insultList.length)];
    }
    // link to api used https://github.com/mishk0/slack-bot-api
