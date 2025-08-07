import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './entity/database.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { ConfigModule } from './database/config.module';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [ DatabaseModule,
    ConfigModule,
    ProyectoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}