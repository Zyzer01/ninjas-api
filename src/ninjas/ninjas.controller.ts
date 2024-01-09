import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjasDto) {
    return {
      name: .name,
    };
  }

  @Put(':id')
  updateNinja(
    @Param('id') id: string,
    @Body() updateNinjasDto: UpdateNinjasDto,
  ) {
    return {
      id,
      name: updateNinjasDto,
    };
  }

  @Patch(':id')
  patchNinja() {
    return {};
  }

  @Delete(':id')
  removeNinja() {
    return {};
  }
}
