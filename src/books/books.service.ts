import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  db: PrismaService;

  constructor(db: PrismaService){
    this.db = db
  }

  create(createBookDto: CreateBookDto) {
    return this.db.book.create({
      data: createBookDto
    });
  }

  findAll() {
    return this.db.book.findMany()
  }

  findOne(id: number) {
    return this.db.book.findUnique({
      where:{
        id: id
      }
    })
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.db.book.update({
      where:{
        id: id
      },
      data: updateBookDto
    })
  }

  remove(id: number) {
    return this.db.book.delete({
      where:{
        id: id
      }
    })
  }
}
