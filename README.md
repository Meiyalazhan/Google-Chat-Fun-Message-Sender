
# Google Chat Fun Message Sender

A fun Node.js script that sends random or sequential sarcastic and humorous messages to Google Chat using incoming webhooks.

Configure your message-sending mode, set a custom delay, and control the sender directly from your terminal using START, STOP, and EXIT commands.

> ⚠️ **WARNING — THIS IS FOR FUN**
>
> This project is intended for personal testing and entertainment. Use responsibly, respect other people's preferences, and avoid sending unwanted or excessive messages.

## Features

- 🎲 **Random Message Mode** – Sends randomly selected messages from the message array.
- 🔢 **Sequential Message Mode** – Sends messages in order, one by one.
- ⏱️ **Configurable Delay** – Set the time interval between messages.
- 🛑 **STOP Command** – Stop the message-sending loop from the terminal.
- ▶️ **START Command** – Start sending messages when needed.
- 🚪 **EXIT Command** – Close the application.
- 🔢 **Message Limit** – Set a maximum number of messages to send.
- 🛡️ **Input Validation** – Validates basic configuration before starting.
- ⚠️ **Error Handling** – Handles unsuccessful webhook requests.
- 🛑 **Graceful Shutdown** – Supports stopping the application with Ctrl + C.

## Tech Stack

- **JavaScript**
- **Node.js**
- **Google Chat Incoming Webhook**
- **Fetch API**
- **Readline (Node.js)**

## Project Structure

```text
google-chat-fun-message-sender/
│
├── google-chat-prank.js
├── README.md
└── .gitignore
```

## Prerequisites

Before running the project, make sure you have:

1. Node.js installed (version 18 or newer recommended).
2. A Google Chat space with an incoming webhook configured.
3. A valid Google Chat webhook URL.
4. A terminal such as PowerShell, Command Prompt, or Bash.

### Check Node.js Installation

```bash
node --version
```

If Node.js is not installed, download it from:

https://nodejs.org/

## Google Chat Webhook Setup

1. Open Google Chat.
2. Select the space where you want to receive messages.
3. Open the space's apps or integrations settings.
4. Configure an incoming webhook, if supported by your Google Workspace environment.
5. Copy the generated webhook URL.
6. Store the webhook URL securely as an environment variable.

> The exact webhook configuration options may depend on your Google Workspace edition and administrator settings.

## Configuration

The script supports the following configuration options:

```javascript
const MODE = "random";

const DELAY_MS = 5000;

const MAX_MESSAGES = 0;
```

### Message Modes

#### Random Mode

```javascript
const MODE = "random";
```

Selects a random message from the message array for each sending cycle.

#### Sequential Mode

```javascript
const MODE = "sequential";
```

Sends messages in array order. After reaching the end of the array, the script starts again from the beginning.

### Delay Configuration

```javascript
const DELAY_MS = 5000;
```

The delay is specified in milliseconds.

| Delay | Time |
|---|---|
| `1000` | 1 second |
| `5000` | 5 seconds |
| `10000` | 10 seconds |
| `30000` | 30 seconds |
| `60000` | 1 minute |

Use a reasonable delay to avoid unwanted message flooding.

### Message Limit

```javascript
const MAX_MESSAGES = 0;
```

| Value | Behavior |
|---|---|
| `0` | Unlimited until STOP |
| `10` | Sends up to 10 messages |
| `25` | Sends up to 25 messages |
| `100` | Sends up to 100 messages |

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/google-chat-fun-message-sender.git
```

### 2. Navigate to the Project

```bash
cd google-chat-fun-message-sender
```

### 3. Configure the Webhook URL

Set the webhook URL using an environment variable.

**PowerShell (Windows):**

```powershell
$env:GOOGLE_CHAT_WEBHOOK_URL = "YOUR_WEBHOOK_URL"
```

**Linux / macOS:**

```bash
export GOOGLE_CHAT_WEBHOOK_URL="YOUR_WEBHOOK_URL"
```

Update the script to read the environment variable:

```javascript
const WEBHOOK_URL = process.env.GOOGLE_CHAT_WEBHOOK_URL;
```

Do not commit your real webhook URL to GitHub.

## Running the Script

Run the following command:

```bash
node google-chat-prank.js
```

### Available Commands

| Command | Description |
|---|---|
| `START` | Start sending messages |
| `STOP` | Stop the sending loop |
| `EXIT` | Close the application |
| `Ctrl + C` | Interrupt the application |

### Example

```text
Google Chat Fun Message Sender

Commands:
START - Start sending messages
STOP  - Stop sending messages
EXIT  - Close the application

START

[1] Sent: You're not wrong... you're just confidently incorrect.
[2] Sent: Wisdom has been chasing you but you've always been faster...
[3] Sent: Your confidence is impressive... it just arrived before your logic did.

STOP

Stopping message sender...
Message sending stopped.
```

## Adding Custom Messages

You can add your own messages to the `messages` array in the JavaScript file.

```javascript
const messages = [
  "You're not wrong... you're just confidently incorrect.",
  "Wisdom has been chasing you but you've always been faster...",
  "Your confidence is impressive... it just arrived before your logic did.",
  "Add your own funny message here."
];
```

The script selects messages from this array based on the configured sending mode.

## Error Handling

The script includes basic error handling for:

- Invalid webhook URL configuration.
- Invalid message-sending mode.
- Invalid delay or message limit.
- Empty message arrays.
- Unsuccessful HTTP responses from the webhook.

If a webhook request fails, the script logs the error and stops the sending loop rather than repeatedly retrying the failed request.

## Security

### Protect Your Webhook URL

Your Google Chat webhook URL should be treated as a sensitive credential.

**Do not:**

- Upload the actual webhook URL to a public GitHub repository.
- Share your webhook URL in screenshots or public discussions.
- Commit secrets directly into your JavaScript source code.
- Leave an exposed webhook active if you suspect it has been shared.

### Recommended Configuration

Use environment variables:

```javascript
const WEBHOOK_URL = process.env.GOOGLE_CHAT_WEBHOOK_URL;

if (!WEBHOOK_URL) {
  throw new Error("Google Chat webhook URL is not configured.");
}
```

Add the following to `.gitignore` if you use a local environment file:

```gitignore
.env
node_modules/
```

> Never commit `.env` files containing real webhook credentials.

## Limitations

- Requires a working Google Chat incoming webhook.
- Requires Node.js to be running while messages are sent.
- The script is terminal-based and does not include a graphical user interface.
- Message delivery depends on Google Chat webhook availability and applicable quotas or restrictions.
- Random mode may select the same message more than once.
- Stopping the script does not retract messages that have already been sent.

## Future Improvements

Potential enhancements for future versions:

- [ ] Web-based control panel.
- [ ] Start and stop buttons.
- [ ] Message preview.
- [ ] Custom message input from the terminal.
- [ ] Configurable randomization without immediate repeats.
- [ ] Message scheduling.
- [ ] Persistent message logs.
- [ ] Improved retry handling with backoff.
- [ ] Environment-based configuration.
- [ ] Multiple Google Chat webhook support.

## Disclaimer

This project is created for fun, learning, and experimentation with JavaScript, Node.js, and Google Chat webhooks.

The author is not responsible for misuse of the script, unwanted messaging, or violations of Google Workspace policies. Use the project responsibly and respect the preferences of recipients.

## License

This project is available for personal learning and experimentation.

You may add a license based on how you want others to use, modify, and distribute your code.

---

**Made with JavaScript and a little sarcasm.**
