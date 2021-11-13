import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Records{
    // #region Properties (7)

    @Column()
        public address: string;
    @Column()
        public age: number;
    @Column({

        type: 'date',
        nullable: true
    })
    nascimento: Date
    @PrimaryGeneratedColumn()
    public id:number;
    @Column()
        public name: string;
    @Column()
        public ra: string;
    @Column({default: true})
        public registered: boolean;

    // #endregion Properties (7)
}