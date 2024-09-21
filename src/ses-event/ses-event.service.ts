import { Injectable } from '@nestjs/common';
import { SesEventRequestDto } from './dto/request/ses-event-request.dto';
import { SesEventResponseDto } from './dto/response/ses-event-response.dto';
import { extractUsername } from 'src/utils/email.utils';
import { getMonthName } from 'src/utils/date.utils';

@Injectable()
export class SesEventService {
  processSesEvent(event: SesEventRequestDto) {
    const { receipt, mail } = event.Records[0].ses;
    const {
      spamVerdict,
      virusVerdict,
      spfVerdict,
      dkimVerdict,
      dmarcPolicy,
      processingTimeMillis,
    } = receipt;

    const { timestamp, source, destination } = mail;
    const mailMonth = getMonthName(timestamp);

    const sourceUsername = extractUsername(source);

    const destinationUsernames = destination.map((email) => {
      return extractUsername(email);
    });

    const sesEventResponse: SesEventResponseDto = {
      spam: spamVerdict.status === 'PASS',
      virus: virusVerdict.status === 'PASS',
      dns:
        spfVerdict.status === 'PASS' &&
        dkimVerdict.status === 'PASS' &&
        dmarcPolicy === 'PASS',
      mes: mailMonth,
      retrasado: processingTimeMillis > 1000,
      emisor: sourceUsername,
      receptor: destinationUsernames,
    };

    return sesEventResponse;
  }
}
