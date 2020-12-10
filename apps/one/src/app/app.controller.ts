import {AppService} from './app.service';
import {RabbitSubscribe} from "@golevelup/nestjs-rabbitmq";
import {Controller} from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
