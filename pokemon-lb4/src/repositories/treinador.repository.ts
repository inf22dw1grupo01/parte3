import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Treinador, TreinadorRelations} from '../models';

export class TreinadorRepository extends DefaultCrudRepository<
  Treinador,
  typeof Treinador.prototype.id,
  TreinadorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Treinador, dataSource);
  }
}
