/* eslint-disable import/no-extraneous-dependencies */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import UserEntitie from './usersEntitie';

@Entity('tasks')
export default class TaskEntitie {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserEntitie)
  users: UserEntitie;

  @Column()
  user_id: string;

  @Column()
  limit_date: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
