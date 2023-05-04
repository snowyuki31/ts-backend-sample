import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  create(createCatDto: CreateCatDto) {
    return this.prisma.cat.create({ data: createCatDto });
  }

  findAll(query: ListAllEntities) {
    return this.prisma.cat.findMany({ take: query.limit });
  }

  findOne(id: number) {
    return this.prisma.cat.findUnique({ where: { id } });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.prisma.cat.update({ where: { id }, data: updateCatDto });
  }

  remove(id: number) {
    return this.prisma.cat.delete({ where: { id } });
  }
}
