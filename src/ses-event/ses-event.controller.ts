import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SesEventService } from './ses-event.service';
import { SesEventRequestDto } from './dto/request/ses-event-request.dto';
import { SesEventResponseDto } from './dto/response/ses-event-response.dto';

@Controller('ses-events')
export class SesEventController {
  constructor(private readonly sesEventService: SesEventService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  processSesEvent(
    @Body() createSesEventDto: SesEventRequestDto,
  ): SesEventResponseDto {
    return this.sesEventService.processSesEvent(createSesEventDto);
  }
}
