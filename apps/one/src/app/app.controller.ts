import {AppService} from './app.service';
import {EventPattern} from "@nestjs/microservices";

export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('SiteCreated')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log(data)
  }
}
