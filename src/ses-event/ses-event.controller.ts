import { Controller, Post, Body } from '@nestjs/common';
import { SesEventService } from './ses-event.service';
import { SesEventRequestDto } from './dto/request/ses-event-request.dto';

@Controller('ses-events')
export class SesEventController {
  constructor(private readonly sesEventService: SesEventService) {}

  @Post()
  processSesEvent(@Body() createSesEventDto: SesEventRequestDto) {
    return this.sesEventService.processSesEvent(createSesEventDto);
  }
}
