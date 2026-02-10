# Telegram Bot with NestJS, TypeScript, and Node.js

A scalable Telegram bot built with modern technologies including NestJS, TypeScript, and Node.js.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
- **Telegraf**: Modern Telegram Bot Framework for Node.js
- **Express**: Web application framework for Node.js (used by NestJS)

## Features

- Modular architecture with NestJS
- Dependency injection
- Configuration management with environment variables
- Comprehensive logging
- Error handling
- Scalable design patterns
- AI-assisted development capabilities (see AGENTS.md)

## Project Structure

```
src/
├── controllers/          # Request handlers
├── services/            # Business logic
├── modules/             # NestJS modules
├── dtos/                # Data transfer objects
├── interfaces/          # Type definitions
├── utils/               # Utility functions
├── guards/              # Authorization guards
├── middleware/          # Express-style middleware
└── main.ts              # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Telegram Bot Token (get one from [@BotFather](https://t.me/BotFather))

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   
   Then add your Telegram Bot Token to the `.env` file.

### Running the Application

#### Development Mode
```bash
npm run start:dev
```

#### Production Mode
```bash
npm run build
npm run start:prod
```

## Configuration

The application uses the `@nestjs/config` package for managing configuration. Environment variables are loaded from the `.env` file.

Key configuration options:
- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
- `PORT`: Port on which the application will run (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

## API Endpoints

- `GET /telegram/health` - Health check endpoint
- `POST /telegram/webhook` - Telegram webhook endpoint

## Testing

Run the test suite:

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:cov

# E2E tests
npm run test:e2e
```

## AI-Assisted Development

This project includes AI agent configurations to assist with development, testing, and maintenance. See [AGENTS.md](./AGENTS.md) for detailed information on how to leverage these capabilities.

## Deployment

For production deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Run the production version:
   ```bash
   npm run start:prod
   ```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.