import 'chai'
import { expect } from 'chai';
import { Metric, MetricsHandler } from './metrics'
import { LevelDb } from "./leveldb"

const a: number = 0

describe('Metrics', function () {
  it('should save and get', function () {
    expect(a).to.equal(0)
  })
})


const dbPath: string = 'db_test'
var dbMet: MetricsHandler

describe('Metrics', function () {
    before(function () {
      LevelDb.clear(dbPath)
      dbMet = new MetricsHandler(dbPath)
    })
  
    after(function () {
      dbMet.db.close()
    })
  })
describe('#get', function () {
    it('should get empty array on non existing group', function () {
      dbMet.get("0", function (err: Error | null, result?: Metric[]) {
        expect(err).to.be.null
        expect(result).to.not.be.undefined
        expect(result).to.be.empty
      })
    })
  })
 var met : any

  describe('#save', function () {
    it('should get empty array on non existing group', function () {
      dbMet.save(0, met, function (err: Error | null, result?: Metric[]) {
        expect(err).to.be.true
      
      })
    })
  })

  describe('#delete', function () {
    it('should get empty array on non existing group', function () {
      dbMet.save(0, met, function (err: Error | null, result?: Metric[]) {
        expect(err).to.be.not.null
      
      })
    })
  })
