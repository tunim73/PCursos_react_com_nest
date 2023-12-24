import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AulaController],
  providers: [AulaService, PrismaService],
})
export class AulaModule {}
