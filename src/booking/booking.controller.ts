import { Controller, Get, Post } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  findAll() {
    return 'All Bookings';
  }

  @Post()
  create() {
    return 'Booking Created';
  }
}
