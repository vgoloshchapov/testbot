import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { Context } from 'telegraf/typings/context';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  private bot: Telegraf<Context>;

  constructor(private configService: ConfigService) {
    const token = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not defined in environment variables');
    }
    
    this.bot = new Telegraf(token);
    this.setupBotHandlers();
  }

  private setupBotHandlers(): void {
    // Handle /start command
    this.bot.start((ctx) => ctx.reply('Welcome! I am your Telegram bot powered by NestJS.'));
    
    // Handle /help command
    this.bot.help((ctx) => ctx.reply('This is a Telegram bot built with NestJS, TypeScript, and Telegraf.'));
    
    // Echo handler for any other text
    this.bot.on('text', (ctx) => {
      const message = ctx.message.text;
      this.logger.log(`Received message: ${message}`);
      ctx.reply(`You said: ${message}`);
    });

    // Handle any other updates
    this.bot.on('message', (ctx) => {
      this.logger.log('Received non-text message');
      ctx.reply('I can only handle text messages for now.');
    });
  }

  public getBot(): Telegraf<Context> {
    return this.bot;
  }

  async initializeBot(): Promise<void> {
    try {
      await this.bot.launch();
      this.logger.log('Telegram bot launched successfully');
    } catch (error) {
      this.logger.error('Failed to launch Telegram bot', error.stack);
      throw error;
    }
  }

  async stopBot(): Promise<void> {
    try {
      await this.bot.stop();
      this.logger.log('Telegram bot stopped successfully');
    } catch (error) {
      this.logger.error('Failed to stop Telegram bot', error.stack);
      throw error;
    }
  }
}