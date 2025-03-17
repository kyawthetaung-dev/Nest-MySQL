import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_code:string;
    @Column()
    persion_id:number;
    @Column()
    user_password:string;
    @Column()
    token:String;
    @Column()
    device_id:string;
    @Column()
    last_login:string;
    @Column()
    created_at:string;
}