import { Controller, Get, Post, Req, Res, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { TelegramService } from '../services/telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private telegramService: TelegramService) {}

  @Get('health')
  getHealthStatus() {
    return { status: 'Telegram bot service is running' };
  }

  @Post('webhook')
  async handleWebhook(@Req() req: Request, @Res() res: Response) {
    try {
      // Process the incoming webhook update
      const bot = this.telegramService.getBot();
      
      // We'll use the webhook adapter approach
      await bot.handleUpdate(req.body);
      
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).send('Error processing webhook');
    }
  }
}