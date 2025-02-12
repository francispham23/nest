import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  findAll() {
    return 'All Bookings';
  }
  /* Single Route Parameter
    @Get(':id')
    findOne(@Param('id') id: string) {
      return `Booking ${id}`;
    }
  */

  // Multiple Route Parameters
  @Get(':id/:slug')
  findOne(@Param('id') id: string, @Param('slug') slug: string) {
    return `Booking ${id} and ${slug}`;
  }

  @Post()
  create() {
    return 'Booking Created';
  }
}
