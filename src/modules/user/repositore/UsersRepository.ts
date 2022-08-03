/* eslint-disable import/no-extraneous-dependencies */
import { getRepository, Repository } from 'typeorm';

import UsersEntitie from '../../../infra/entities/usersEntitie';
import {
  ICreateUser,
  IUsersRepository,
  SearchParams,
} from '../interface/IUsers';

export class UserRepository implements IUsersRepository {
  private ormRepository: Repository<UsersEntitie>;

  constructor() {
    this.ormRepository = getRepository(UsersEntitie);
  }

  public async create({ name, email, nickname }: ICreateUser) {
    const user = this.ormRepository.create({ name, email, nickname });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user) {
    await this.ormRepository.save(user);

    return user;
  }

  public async remove(user) {
    await this.ormRepository.remove(user);
  }

  public async findAll({ page, skip, take }: SearchParams) {
    const [users, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    };

    return result;
  }

  public async findByName(name: string) {
    const user = await this.ormRepository.findOne({
      name,
    });

    return user;
  }

  public async findById(id: string) {
    const user = await this.ormRepository.findOne({
      id,
    });

    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.ormRepository.findOne({
      email,
    });

    return user;
  }
}
// respositorio costumizado

// entidade para ter acesso ao banco de dados e tipalas
// repositorio vai chamar para costumizar

/*
 banco de dados <=> DB postgres
 entidades <=> banco de dados  ----- entidade recebe informacoes do banco de dados e tipa
 repositorio <=> entidades     ----- recebe as tipagem da entidades e costumiza
 services <=> repositorio      ----- pega costumizacao e cria os serviços
 controler <=> services        ----- controle controla o servicos desda api e da comando aos usuario
 routes <=> controler          ----- rotas recebe informacao do controler
 index <=> routes              ----- index instancia as rotas
*/
