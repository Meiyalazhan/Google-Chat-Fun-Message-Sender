const readline = require("readline");


// CONFIGURATION
// Paste your complete Google Chat Webhook URL here.
// Example: https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN

const WEBHOOK_URL = "ADD_YOUR_WEBHOOK_URL_HERE";

// Sending mode:
// "random"     -> Select a random message
// "sequential" -> Send messages in array order

const MODE = "random";

// Delay between messages (in milliseconds).
// 1000 = 1 second
// 5000 = 5 seconds
// 10000 = 10 seconds

const DELAY_MS = 5000;

// Maximum number of messages to send.
// Set to 0 for unlimited sending (until STOP).

const MAX_MESSAGES = 0;


// MESSAGES

const messages =     [
  "You have a unique way of speaking that makes people appreciate your silence.",
  "I admire how you don't let facts interfere with your opinion.",
  "You know, you're the first person I've ever met who has already met their full potential.",
  "Wisdom has been chasing you but you've always been faster...",
  "You're not wrong... you're just confidently incorrect.",
  "You're the reason the gene pool needs a lifeguard.",
  "You have an incredible talent for lowering the bar wherever you go",
  "Love your confidence, WILDLY MISPLACED, but inspiring",
  "Intelligence is trying to chase you but you are running faster",
  "Wisdom chases you, but you have such haste that you outrun it every time",
  "I love how you never let evidence interfere with your opinion",
  "I like the way you never let logic interfere with what you say",
  "I admire how you never let evidence interfere with your opinions...",
  "Intelligence is chasing you but you're always faster",
  "I really like the absence of your presence.",
  "I love how you don't let facts interfere with your opinions",
  "You have really mastered the art of missing the point",
  "Not everyone can rock that level of cluelessness with that confidence",
  "I love that you never let the fact interfere your opinions.",
  "Wisdom has been chasing you all your life but you have always been faster",
  "I love the way that you don't let facts change your opinions",
  "You're a professional athlete with the way you jump to conclusions",
  "I'm so glad you let your opinions come in the way of the facts",
  "You always make the room brighter with your absence",
  "I love how you don't let facts bother your strong opinions.",
  "It's becoming increasingly difficult to underestimate you",
  "I value your opinion as much as I value a white crayon",
  "It's impressive how you never let logic interfere with your opinions.",
  "So goated that even wisdom is unable to chase and catch you",
  "I wonder what it's like to have no common sense",
  "I like when wisdom chasing you, you become Usain Bolt",
  "Wisdom is chasing you but you're a little quicker",
  "Congrats my friend, you are one of the few people I know who has reached their full potential",
  "Your intelligence makes me want to study harder",
  "You're 6 ft still can't reach common sense",
  "You are a prime example of having a smart brain, absence is clear as daylight",
  "You don't need to prove people wrong-they usually figure it out on their own after talking to you",
  "Wisdom has been chasing you but you had a great pace than it",
  "I appreciate your help! I usually prefer your absence",
  "Intelligence is trying to reach you but you're faster! Carry on!",
  "I respect your ability to talk so much while saying so little.",
  "You have the perfect face for radio",
  "Intelligence has always chased you but you were always faster",
  "You're impossible to underestimate",
  "You enlighten every room you leave",
  "As an outsider, what are your views on intelligence?",
  "Wisdom has always been following you, but you have been faster",
  "If intelligence was a crime you would have never set foot in jail",
  "You're consistent and that's the worrying part because you're consistently wrong",
  "You are so confident... Even when you are wrong",
  "You have a way of making people leave",
  "I'm so impressed with the way you don't let inconvenient facts affect your definitive opinions",
  "Bless your heart, you're just too precious for logic",
  "I love how your mind isn't cluttered with things like facts or common sense",
  "Girl, you're so fast even wisdom can't catch up to you!",
  "I am amazed at how many times you make me realize you are born in the wrong age with how smart you are ( aka the stone age )",
  "You are so much faster than intelligence that intelligence chases you",
  "You have an amazing skill, you never let evidence ruin your opinion.",
  "Wisdom was chasing you...but you were always so fast.",
  "You're the first person I met to reach they're full potential",
  "You have a way of lighting up a room when you leave",
  "Your food for thought leaves everyone hungry",
  "What's your opinion as an outsider to the theme of intelligence?",
  "Wisdom has been chasing you... But you have always been faster.",
  "Intelligence chases you but you are a fast runner",
  "Wisdom has been chasing you since birth, but you have always been faster",
  "I love your confidence in the wrong anserws",
  "Wisdom has always followed you, you're just too fast",
  "I love how you never let facts get in the way of your opinions",
  "You are so fast, that facts and wisdom just keep chasing you",
  "Intelligence is chasing you but you are much faster",
  "I like how you say things without disturbing the facts",
  "You're the first I've met to have reached their full potential",
  "Your thought for food leaves me hungry",
  "Your opinion matches my shoe sound!",
  "The things you say are beyond human logical levels.",
  "I love how you never let facts get in your way and opinions.",
  "If I agree with you, we'll both be wrong",
  "You are a great reminder of why we fact check",
  "It's impossible to underestimate you",
  "I love how you always prove it that it's impossible to underestimate you.",
  "You are the first person I have seen who already reached their full potential",
  "Wisdom is chasing you. But you are faster",
  "I admire how don't let facts affect your opinion",
  "In a fight of wit and intelligence I can't fight an unarmed person",
  "Intelligence chases you but aren't you the fastest runner",
  "Your confidence is impressive... it just arrived before your logic did.",
  "You don't lose arguments-you just leave logic behind and keep talking.",
  "You never let facts and your thoughts align",
  "You are correctly incorrect\" I confidently flipped my hair and realised it later.",
  "I know intelligence followed you but you were always faster",
  "Wisdom has been chasing you but you were so fast",
  "Wisdom has always chased you but you've always been faster",
  "You brighten the world around you in such a wrong way.",
  "I love how you never let facts interfere with your opinions",
  "Common sense comes to us fast but you've always been faster",
  "I would agree with you but then we both will be wrong",
  "Wisdom always chases you but you were too fast",
  "I admire your courage to speak in the absence of knowledge.",
  "You leave a better impression when you keep things minimal",
  "You're the only person I've ever met who has actually reached their full potential.",
  "I appreciate how wisdom has always tried to chase you, but you've always been faster dear",
  "There's something almost admirable about how you never let understanding get in the way of an opinion.",
  "I love how you never let facts interfere you thoughts",
  "There's a certain elegance in how you arrive at conclusions before the facts do.",
  "Wisdom has always been chasing you but you seem to be always fast",
  "I love how you don't let facts get in the way of your opinions",
  "I like the way you don't let facts get in the way of your opinion",
  "Your ability to make us all share an opinion is a gift.",
  "I really admire your unique ability to jump to conclusions",
  "I love how you make the room brighter when you leave",
  "You have always been so fast that intelligence could never catch up",
  "I'm amazed of how fast you are, even wisdom couldn't catch you",
  "I love how you never let intelligence stand in your way",
  "When the gift of intelligence rained down I'm glad you enjoyed your vacation",
  "Talking to you is an experience I always leave with more questions than answers",
  "I love the way your opinions are always miles ahead of facts!",
  "I love the way you don't. Let facts come in between of your opinion.",
  "I like how you never allow education to get in the way of your opinions",
  "Wisdom has always been chasing you but you were faster",
  "I love it when you contemplating with the absence of your mind",
  "Owh, that is why everyone appreciates your silence",
  "I envy people who haven't heard your opinions yet",
  "You're so fast to the point that the intelligence couldn't catch you",
  "You're impossible to underestimate\". It's shocking to see how many people take it as a compliment.",
  "Your absence is highly appreciated here, thank you",
  "You are inspiring because you have reached your full potential.",
  "You have a unique sense of logic, I'll give you that.",
  "I love how it's taking you 3-5 business days to process the fact that you're not wrong.. just confidently incorrect",
  "Wisdom has been chasing you your whole life, but you were faster.",
  "Your silence sounds way better",
  "Wisdom has been chasing you your whole life, but you've always been faster.",
  "You brighten my day when you leave",
  "I respect how you don't let facts interfere with your opinions",
  "I love how you never let facts interfere with your opinion!",
  "I appreciate your confidence but unfortunately misplaced",
  "I love how you make everyone appreciate silence",
  "Intelligence chases you but you are always that little bit faster.",
  "I love how you don't let intelligence interfere in a conversation.",
  "Your presence is so wonderful that I immediately start missing your absence.",
  "I love your voice so much, it's spectacular, I love it so much that your silence is even better",
  "I love the fact even though you talk rubbish but always keep people entertained.",
  "You have a voice that makes silence more valuable",
  "I appreciate your enthusiasm, even if the facts didn't get invited.",
  "Well, there we are then. Bless your heart. You certainly are convinced of your opinion.",
  "I must say that your presence has a unique charm which makes people appreciate your absence.",
  "When it comes to logic you travel light",
  "I love how facts don't affect your opinion",
  "Wisdom is fast, but you've always been faster.",
  "Intelligence can't seem to catch up with you",
  "What is your opinion of intelligence from your outside view?",
  "You always make me feel better when you leave",
  "I truly admire how you don't let logic affect your opinion",
  "I admire your dedication to missing the point.",
  "Whenever intelligence tried to catch you, you always ran faster.",
  "I admire how you don't let logic limit you",
  "Intelligence is chasing you but was always ahead.",
  "When intelligence rain down upon the soil, you sure did smart enough to bring an umbrella",
  "I love the presence of your absence",
  "Nothing brights up the room like your absence does",
  "I love the way you never let facts step in",
  "Wisdom chases you but are way faster than it",
  "You are the first person I have met. who reached their full potential",
  "It's quite fascinating how you never let facts intersect with your thoughts",
  "You're the smartest person in the absence of others",
  "Wisdom was always chasing after you but you were faster",
  "You just reached your full potential...",
  "Your enemies give thanks when you leave the room",
  "I love that you don't let facts interfere with your opinions",
  "I've never seen anyone reach their full potential until I met you",
  "I love how you never let reality interfere with your opinion",
  "You're so fast wisdom has yet to catch up to you",
  "The thing about you that makes me soooo happy is when you leave",
  "Thank you for illustrating, with such effortless grace, that even the gene pool needs a lifeguard on duty.",
  "You are Soo confident when you're wrong it's almost intriguing",
  "The room lights up when you leave it",
  "Intelligence is following you but you are too fast.",
  "Wisdom chased you but you were fast enough to leave it behind",
  "I love your confidence. Wildly misplaced but inspiring",
  "I like you, because you are too serious in the absence of reason",
  "I can see intelligence has always chased you but you were always too fast",
  "I love how you have reach full potential of your brain and still far from understanding this.",
  "It's a sunny day when ever you leave the room",
  "Is impressive how you can have such an incredible opinion despite all the evidence keep it up",
  "You have a special talent for missing the point gracefully.",
  "I love how you stick to your opinions regardless of the facts",
  "I appreciate the presence of your absence",
  "No matter how slow you'll go wisdom will always be slower than you",
  "You run so fast wisdom has a hard time keeping up with you",
  "If I'd tell you that you're right then we'll both be wrong.",
  "As an outsider, what is your opinion on intelligence?",
  "I love how you don't let your opinion get in the way of facts",
  "Wow, it's impossible to underestimate you",
  "You might be the first person I've met to have reached their full potential",
  "Wisdom was chasing you but you outran it.",
  "It's impressive how people get attracted to your silence the moment you start speaking",
  "You're the first person I have ever met that has reached their full potential.",
  "I'll be honest you are the first person I've ever met who's reached their full potential",
  "Wisdom has been chasing you but you are so fast I must say",
  "Wisdom is always chasing you, but you are faster than it.",
  "You shine in every room you leave from",
  "You have reached your full potential",
  "You are the first person I know that has reached their full potential",
  "I love how you don't let education effect your opinion",
  "You are truly impossible to underestimate",
  "Oh, you have a truly remarkable ability to sound confident while being completely wrong-it's honestly impressive.",
  "That's an interesting opinion definitely not one I'd ever consider",
  "Wisdom is chasing you and you are far more faster than it",
  "They say Silence is Gold. You should invest in Gold once in a while.",
  "Intelligence is chasing you, however your faster",
  "Admire your courage of speaking in the absence of knowledge",
  "Common sense chases you, but you manage to run faster",
  "It's truly impressive how you manage to keep your mind so remarkably uncluttered by common sense",
  "Your way of illogical thinking is incredible I'm sure there are thousands of people that wish they could think as freely as you do",
  "I really appreciate your silences",
  "I admire how you never let facts and complex logic interfere with your thinking",
  "Intelligence is chasing you but lucky for you your faster",
  "Your absence make people happy",
  "I mean I would agree with you but then we'd both be wrong",
  "Wisdom has been chasing but you have always been faster.",
  "I'm so glad you stick to your opinion when the facts are laid out to you",
  "Wisdom has been chasing you fast, but obviously you've been faster...",
  "So smart that none of us get your intelligence",
  "In the world where wisdom is always chasing you, you're faster anyway.",
  "Wisdom has been chasing you but You have always been Fast",
  "You're so fast that intelligence never reached you.",
  "It's so hard to underestimate you",
  "Your so smart that, Intelligence left the chat",
  "Logic is running towards you, but you're faster",
  "Oh your quite fast even the wisdom had trouble catching up to you",
  "I love how you never let facts interfere your arguments.",
  "You know I miss your absence so much sometimes.",
  "Wisdom has been always chasing you but you have been faster anyways",
  "You don't lack ideas, you just leave'em before they mature",
  "I love the fact that you don't let the facts challenge your thoughts",
  "You brighten up every place you leave",
  "I admire your courage to speak with the absence of knowledge",
  "The level of intelligence you own is unbelievably good to know that people of your caliber still exists",
  "Glad to see you've reached your full potential",
  "Wisdom has chased you your whole life but somehow your way faster than it",
  "You light up the room as soon as you leave",
  "You're the first person I met that reached their full potential",
  "Wisdom tries to catch you but you run fast",
  "You... are so special. So special. In fact, I can tell how much extra time your teachers spent with you just because of how special you are.",
  "I love how you never let logic and facts interfere ya perspectives.",
  "You are the first person who I have seen reach their full potential",
  "Common sense has always chased you, but unfortunately you've always been faster",
  "You are the very first person I have met to already reach their full potential",
  "Your confidence truly outlives your facts.",
  "Your silence was always appreciated, thank you for the insight.",
  "I love how you don't let facts influence your opinions",
  "I can see that intelligence was chasing you, but you were always faster",
  "I love how you don't let your education interfere your opinion.",
  "I literally loveeeee the way you even make everyone enjoy your absence",
  "As an outsider, whats your view on intelligence?",
  "I see intelligence follows you but you are faster",
  "I'd agree with you but then we would both be wrong",
  "Always the intelligence following you. but you walk faster",
  "You're that first person I've met that's met their full potential",
  "You're silence is a crown jewel",
  "I love your absence of mind. Keep it up",
  "I really admire how you don't let facts get in the way of your opinion <33",
  "I love how you never let logic and sensibility disturb your perspective",
  "Whenever you leave, I feel great happiness",
  "You never let anyones opinions change your beliefs..",
  "Wow, seems like you have reached your full potential",
  "I'd agree with you then we'd both bee wrong",
  "I love the way you don't let facts get in the way of your opinions",
  "I love how you don't let facts change your opinion",
  "You light up every room you leave",
  "I love the fact how you never let facts come in the way of your opinion",
  "You Brighten the room when you leave",
  "You are the first person I know to have met their full potential",
  "I love how you never let facts in your opinion",
  "I admire the way you don't let facts interfere with your opinions",
  "You're the first person I met that reached their full potential, congrats.",
  "Intelligence is shasing you but you are way more faster",
  "I would agree with you but then we will both be Wrong",
  "I love how you put your logic before the intriguing analogy that should be used",
  "I love how you don't let common sense interfere with your thoughts",
  "I love how you never let your opinions interfere with facts",
  "I truly admire the way you remain entirely unburdened by the intrusion of common sense during our conversations.",
  "Wisdom is chasing you, but you're so fast that it can't get to you.",
  "You lost weight!\" \"You so confident to say your opinions like that!",
  "Your So intelligent that intelligence has been chasing you but you've been running faster",
  "You know, wisdom was always chasing you, but you were very fast",
  "Wow! There's something in the way you talk, that makes others appreciate silence",
  "I've never met a person before who has reached their full potential",
  "You are the first person who has reached their full potential",
  "I love how you never get facts get in the way of your own opinions!",
  "I love that you don't let facts interrupt your logic/opinion",
  "If intelligence was a sin you'll be in heaven",
  "I love that you don't ket facts get in the way of your opinion",
  "You have a special way of speaking that makes people appreciate your silence",
  "You brighten every room you leave",
  "I love the way you don't let your thoughts interfere with facts"
]

// VALIDATION

if (!WEBHOOK_URL || WEBHOOK_URL === "YOUR_GOOGLE_CHAT_WEBHOOK_URL") {
  throw new Error("Please configure your Google Chat Webhook URL.");
}

if (!WEBHOOK_URL.startsWith("https://chat.googleapis.com/")) {
  throw new Error("Invalid Google Chat Webhook URL.");
}

if (!["random", "sequential"].includes(MODE)) {
  throw new Error('MODE must be "random" or "sequential".');
}

if (!Number.isFinite(DELAY_MS) || DELAY_MS < 1000) {
  throw new Error("DELAY_MS must be at least 1000 milliseconds.");
}

if (!Number.isInteger(MAX_MESSAGES) || MAX_MESSAGES < 0) {
  throw new Error("MAX_MESSAGES must be a non-negative integer.");
}

if (!Array.isArray(messages) || messages.length === 0) {
  throw new Error("Messages array cannot be empty.");
}

// STATE

let isRunning = false;
let shouldStop = false;
let messageIndex = 0;
let sentCount = 0;

// HELPER FUNCTIONS

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function getNextMessage() {
  const message = messages[messageIndex];

  messageIndex = (messageIndex + 1) % messages.length;

  return message;
}

function getMessage() {
  if (MODE === "random") {
    return getRandomMessage();
  }

  return getNextMessage();
}

// SEND MESSAGE

async function sendMessage(text) {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      text
    })
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `HTTP ${response.status}: ${errorText}`
    );
  }

  return response;
}

// SENDING LOOP

async function startSending() {
  if (isRunning) {
    console.log("Already running.");
    return;
  }

  isRunning = true;
  shouldStop = false;

  console.log("\n==========================================");
  console.log("Google Chat Message Sender Started");
  console.log("==========================================");
  console.log(`Mode: ${MODE}`);
  console.log(`Delay: ${DELAY_MS} ms`);
  console.log(
    `Limit: ${MAX_MESSAGES === 0 ? "Unlimited" : MAX_MESSAGES}`
  );
  console.log("Type STOP to stop sending.");
  console.log("==========================================\n");

  try {
    while (!shouldStop) {
      if (
        MAX_MESSAGES > 0 &&
        sentCount >= MAX_MESSAGES
      ) {
        console.log("Message limit reached.");
        break;
      }

      const text = getMessage();

      try {
        await sendMessage(text);

        sentCount++;

        console.log(
          `[${sentCount}] Sent: ${text}`
        );
      } catch (error) {
        console.error(
          `[${sentCount + 1}] Failed to send:`,
          error.message
        );

        // Stop on API errors instead of repeatedly
        // retrying a failed request.
        break;
      }

      if (shouldStop) {
        break;
      }

      // Wait before the next message.
      await sleep(DELAY_MS);
    }
  } finally {
    isRunning = false;

    console.log("\nMessage sending stopped.");
    console.log(`Total messages sent: ${sentCount}`);
  }
}

// STOP FUNCTION

function stopSending() {
  if (!isRunning) {
    console.log("The sender is not running.");
    return;
  }

  console.log("\nStopping message sender...");
  shouldStop = true;
}

// TERMINAL INPUT

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("==========================================");
console.log("Google Chat Fun Message Sender");
console.log("==========================================");
console.log("Commands:");
console.log("START - Start sending messages");
console.log("STOP  - Stop sending messages");
console.log("EXIT  - Close the application");
console.log("==========================================\n");

rl.on("line", (input) => {
  const command = input.trim().toUpperCase();

  switch (command) {
    case "START":
      startSending().catch(error => {
        console.error("Unexpected error:", error.message);
        isRunning = false;
      });
      break;

    case "STOP":
      stopSending();
      break;

    case "EXIT":
      stopSending();
      rl.close();
      break;

    default:
      console.log("Unknown command. Use START, STOP, or EXIT.");
  }
});


// CTRL + C HANDLER

process.on("SIGINT", () => {
  console.log("\nCtrl + C detected.");

  stopSending();

  rl.close();

  // Allow the current operation to finish gracefully.
  setTimeout(() => {
    process.exit(0);
  }, 100);
});