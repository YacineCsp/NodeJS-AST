const bcrypt = require('bcrypt-nodejs');
import { LevelDb } from "./leveldb"
import WriteStream from 'level-ws'

export class User {
  public username: string
  public email: string
  private password: string = ""
  private passwordHashed: boolean = false
  
  constructor(username: string, email: string, password: string, passwordHashed: boolean = false) {
    this.username = username
    this.email = email

    if (!passwordHashed) {
      this.setPassword(password)
    } else this.password = password
  }

  static fromDb(username: string, value: any): User {
      const [password, email] = value.split(":")
      return new User(username, email, password)
    }
  
  public setPassword(toSet: string): void {
    var Nhash;
    bcrypt.hash(toSet, null, null, function(err, hash) {
      Nhash=hash
    });
      this.password=Nhash
      this.passwordHashed = true;
  }
  
  public getPassword(): string {
    return this.password
  }
    
  public validatePassword(toValidate: String): boolean {
    var valid : any 
    var Ntovalidate : any
    bcrypt.hash(toValidate, null, null, function(err, hash) {
      Ntovalidate=hash
    });
    bcrypt.compare(Ntovalidate, this.getPassword(), function(err, res) {
        if(res) {
            valid = true;
        } else {
            valid = false;
        } 
      });
      return valid;
  }
}

export class UserHandler {
  public db: any
      
  public get(username: string, callback: (err: Error | null, result?: User) => void) {
    this.db.get(`user:${username}`, function (err: Error, data: any) {
      if (err) callback(err)
      else if (data === undefined) callback(null, data)
        callback(null, User.fromDb(username, data))
    })
  }
      
  public save(user: User, callback: (err: Error | null) => void) {
    this.db.put(`user:${user.username}`, `${user.getPassword}:${user.email}`, (err: Error | null) => {
      callback(err)
    })
  }
      
  public delete(username: string, callback: (err: Error | null) => void) {      
    this.db.delete(`user:${username}`, (err: Error | null) => {
      callback(err)
    })
  }
      
  constructor(path: string) {
    this.db = LevelDb.open(path)
      }
    }
    
