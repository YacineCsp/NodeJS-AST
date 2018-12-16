import LevelDb = require('./leveldb')
import WriteStream from 'level-ws'

export class Metric {
  public timestamp: string
  public value: number

  constructor(ts: string, v: number) {
    this.timestamp = ts
    this.value = v
  }
}

export class MetricsHandler {
  static get(arg0: (err: Error | null, result?: any) => void): any {
    throw new Error("Method not implemented.");
  }
  public db: any ;
  constructor(dbPath: string) {
    this.db =  LevelDb.LevelDb.open(dbPath)
  }
  public save(key: number, metrics: Metric[], callback: (error: Error | null) => void) {
    const stream = WriteStream(this.db)
    stream.on('error', callback)
    stream.on('close', callback)
    metrics.forEach((m: Metric) => {
      stream.write({ key: `metric:${key}${m.timestamp}`, value: m.value })
    })
    stream.end()
  }

  public get(key: string, callback: (err: Error | null, result?: Metric[]) => void) {
    const stream = this.db.createReadStream()
    var met: Metric[] = []

    stream.on('error', callback)
      .on('end', (err: Error) => {
        callback(null, met)
      })
      .on('data', (data: any) => {
        const [_, k, timestamp] = data.key.split(":")
        const value = data.value

        if (key != k) {
          console.log(`LevelDB error: ${data} does not match key ${key}`)
        } else {
          met.push(new Metric(timestamp, value))
        }
      })
  }
  public delete(key: string, callback: (err: Error | null) => void) {
    const stream = this.db.createReadStream()
    var met: Metric[] = []
    stream.on('error', callback)
    .on('end', (err: Error) => {
    })
    .on('data', (data: any) => {
      const [_, k, timestamp] = data.key.split(":")
      data.value.delete()

    })

    callback(null)
  }
}